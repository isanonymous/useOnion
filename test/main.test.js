import useOnion, {curr_base_hook} from '../src/main.js'
import {getSyncMidware} from '../src/index.js'
import assert from 'assert'

let getMocks = ()=>{
  let data = [{title:'标题', cnt:'内容'}];
  let response = {errCode:0, data:{rows:data, total:data.length,} }
  let ctx = {
    table:{
      data: [], total:null,
    }
  }
  return {data, ctx, response}
}
let getBaseHook = (getResponse)=> ({
  async getList(ctx, next){
    let resp = JSON.parse(JSON.stringify(getResponse() ))
    if( !resp.errCode){
      await ctx.hooks.afterFetched(resp)
    }else{
      await ctx.hooks.onFetchError(resp)
    }
  },
  async afterFetched([ctx, [resp]], next){
    ctx.table.data = resp.data.rows
    ctx.table.total = resp.data.total
  },
  async onFetchError([ctx, [resp]], next){
    console.log("onFetchError", resp)
    if( !resp) ctx.table.total = -1
  },
})
  describe('useOnion函数', ()=>{
    it('合并custom和base', async ()=>{
      let {data, ctx, response} = getMocks()
      let customHook = {
        pushDataIfEmpty:[
          async (ctx,next)=>{
            console.log("---before---", ctx.table.data.length);
            await next()
            let len = ctx.table.data.length;
            console.log("---after---", len);
            ctx.table.total = len
          },
          curr_base_hook,
        ]
      }
      let baseHook = {
        pushDataIfEmpty: async (ctx,next)=>{
          let len = ctx.table.data.length;
          if( !len) ctx.table.data.push(...data)
          await next()
        },
      }
      let hooks = useOnion(ctx, {customHook, baseHook})
      // 当ctx.table.data为空数组时, 会往其中添加数据
      await hooks.pushDataIfEmpty()
      assert.deepStrictEqual(ctx.table.data, data)
      assert.strictEqual(ctx.table.total, data.length)
    })
    it('用has_arg_fn_prefix的命名约定 来指定有参函数', async ()=>{
      let customHook = {
        arg_pageList:[async ([ctx, [reqBody]],next)=>{
          if( !reqBody.pageSize) reqBody.pageSize = 20
          await next()
        }, curr_base_hook]
      }
      let baseHook = {
        arg_pageList:async([ctx, [reqBody]],next)=>{
          ctx.table.data = Array(reqBody.pageSize ||0).fill(1)
          await next()
        }
      }
      let {ctx} = getMocks()
      let hooks = useOnion(ctx, {customHook, baseHook/*, hasArgFnNames:['afterFetched']*/})
      await hooks.arg_pageList({})
      assert.deepStrictEqual(ctx.table.data.length, 20)
    })
    it('用hasArgFnNames来指定有参函数', async ()=>{
      let {data, ctx, response} = getMocks()
      // let customHook = {}
      let baseHook = getBaseHook( ()=> response);
      let hooks = useOnion(ctx, {/*customHook,*/ baseHook, hasArgFnNames:['afterFetched']})
      await hooks.getList()
      assert.deepStrictEqual(ctx.table.data, response.data.rows)
      assert.strictEqual(ctx.table.total, 1)
    })
    it('用hasArgFnNames来指定有参函数, 并设置errCode为1', async ()=>{
      let {data, ctx, response} = getMocks()
      response.errCode = 1
      response.data.rows = null
      response.data.total = 0
      // let customHook = {}
      let baseHook = getBaseHook( ()=> response);
      let hooks = useOnion(ctx, {/*customHook,*/ baseHook, hasArgFnNames:['onFetchError']})
      await hooks.getList()
      assert.deepStrictEqual(ctx.table.data, [])
      assert.notStrictEqual(ctx.table.total, -1)
    })
    it('使用onerror', async ()=>{
      let ctx = {
        table:{data:[], total:null}
      }
      let customHook = {
        getName(ctx, next){
          let find = ctx.table.data.find(obj=>obj.id===1);
          console.log("---find.name---", find.name);
          next()
        },
        onerror(err){
          // console.log("---err---", err);
          ctx.err = err
        }
      }
      let hooks = useOnion(ctx, {customHook})
      await hooks.getName()
      assert.strictEqual( Boolean(ctx.err), true)
      assert.strictEqual( ctx.err instanceof Error, true)
    })

    let array_ch_self_fns = ['push','pop','shift','unshift','splice','sort','reverse'];
    it('用syncFnNames来指定同步的中间件', ()=>{
      let arr = []
      let origin_proto = Object.getPrototypeOf(arr)
      // let proto = {}
      let customHook = {}
      let logArgs = (ctx, next)=>{console.log(ctx.args);next()};
      for( let fnName of array_ch_self_fns){
        customHook[fnName] = [logArgs
          , getSyncMidware(ctx=>{origin_proto[fnName].apply(arr, ctx.args)})
        ]
      }
      let proto = useOnion({}, {baseHook:origin_proto,
        customHook,
        syncFnNames:array_ch_self_fns,
        hasArgFnNames:array_ch_self_fns
      })
      /*for( let fnName of array_ch_self_fns){
        proto[fnName] = hooks[fnName]
      }*/
      Object.setPrototypeOf(proto, origin_proto)
      Object.setPrototypeOf(arr, proto)
      arr.push(1,3)
      assert.deepStrictEqual([...arr], [1,3])
      arr.push(2,3,3)
      assert.deepStrictEqual([...arr], [1,3, 2,3,3])
      arr.splice(0,2)
      assert.deepStrictEqual([...arr], [2,3,3])
    })
  })