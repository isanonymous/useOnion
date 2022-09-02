import compose from './koa-compose/index.js'
import defCtxArgs, {ctx_arguments_prop_name} from "./defCtxArgs.js";
import defIterator from "./defIterator.js";

export const curr_base_hook = 'curr_base_hook'
export const has_arg_fn_prefix = 'arg_'
export const implicit_work_fn_name_prefix = '__arg__';
export const onerror = 'onerror'
export default function useOnion(ctx, {customHook, baseHook, hasArgFnNames=[], syncFnNames=[] }) {
  if( !Object.is(customHook, baseHook)) customHook = Object.assign({}, baseHook, customHook)
  const no_sync_fn = !syncFnNames || !syncFnNames.length
  function isSyncFn(fnName){
    if( no_sync_fn || !fnName ) return false
    return syncFnNames.includes(fnName)
  }
  let needAddArgFn = Boolean(hasArgFnNames.length)
  defCtxArgs(ctx)
  defIterator(ctx, ctx_arguments_prop_name)
  let hooks = {}
  let caches = {}
  function getRecvArgFn(workFnName) {
    return function () {
      ctx.args = arguments
      return hooks[workFnName]()
    }
  }
  function onCatch(e, isAsync) {
    if(typeof hooks[onerror]==='function'){
      hooks[onerror](e)
    }else{
      console.error(e);
    }
    return isAsync ? Promise.reject(e) : e
  }
  function handleRecvArg(recvArgFnName, workFnName, midware, isAsync) {
    if(recvArgFnName !==workFnName) hooks[recvArgFnName] = getRecvArgFn(workFnName)
    // hooks[workFnName] = midware
    Object.defineProperty(hooks, workFnName, {
      get(){
        let fn = caches[workFnName]
        if( !fn){
          let dispatch = ()=> compose(midware, isAsync)(ctx);
          fn = isAsync ? async ()=> {
            try {
              return ( await dispatch() )
            } catch (e) {
              onCatch(e, isAsync)
            }
          }
          : ()=> {
            try {
              return dispatch()
            } catch (e) {
              onCatch(e, isAsync)
            }
          }
          caches[workFnName] = fn
        }
        return fn
      },
      enumerable:false,
    })
  }
  for( let [k,_midware] of Object.entries(customHook)) {
    if(k===onerror){
      hooks[onerror] = _midware
      continue
    }
    let isAsync = !isSyncFn(k)
    if( !Array.isArray(_midware) ) _midware = [_midware]
    // 处理curr_base_hook常量
    let midware = []
    for (let i = 0; i < _midware.length; i++) {
      let item = _midware[i];
      if(item===curr_base_hook) item = baseHook[k]
      midware.push( item)
    }
    let workFnName = k
    // 处理名字以特殊字符串开头的中间件
    if(k.startsWith(has_arg_fn_prefix)) {
      workFnName = k.slice( has_arg_fn_prefix.length)
    }
    else if(needAddArgFn && hasArgFnNames.includes(k)) {
      workFnName = implicit_work_fn_name_prefix+ k;
      // hooks[k] = getRecvArgFn(workFnName)
    }
    handleRecvArg(k, workFnName, midware, isAsync)
  }
  Object.defineProperty(ctx, 'hooks', {value:hooks, enumerable:false})
  return hooks
}
