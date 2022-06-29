import defCtxArgs from '../src/defCtxArgs.js'
import assert from 'assert'
describe('defCtxArgs函数', ()=>{
  it('默认为空数组', ()=>{
    let obj={}
    defCtxArgs(obj)
    assert.deepStrictEqual(obj.args, [])
  })
  it('有元素的数组', ()=>{
    let obj={}
    defCtxArgs(obj).args = [1,3,4]
    assert.deepStrictEqual(obj.args, [1,3,4])
  })
  it('赋值为非数组', ()=>{
    let obj={}
    defCtxArgs(obj).args = 233
    assert.deepStrictEqual(obj.args, [233])
  })
})
