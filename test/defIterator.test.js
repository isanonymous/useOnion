import defIterator from '../src/defIterator.js'
import assert from 'assert'
import defCtxArgs from "../src/defCtxArgs.js";

describe('defIterator函数', ()=>{
  it('一个属性', ()=>{
    let propName = 'args';
    let obj={[propName]: 233}
    defIterator(obj, propName)
    let [a,b,c] = obj
    assert.deepStrictEqual(a, obj)
    assert.strictEqual(b, obj[propName])
    assert.strictEqual(c, undefined)
  })
  it('两个属性', ()=>{
    let prop1 = 'a'
    let prop2 = 'b'
    let obj={[prop1]: 11, [prop2]: 22}
    defIterator(obj, prop1, prop2)
    let [a,b,c,d] = obj
    assert.deepStrictEqual(a, obj)
    assert.strictEqual(b, obj[prop1])
    assert.strictEqual(c, obj[prop2])
    assert.strictEqual(d, undefined)
  })
  it('与defCtxArgs联动', ()=>{
    let obj={}
    defCtxArgs(obj).args = 233
    defIterator(obj, 'args')
    let [a,b,c] = obj
    assert.deepStrictEqual(a, obj)
    assert.deepStrictEqual(b, [233])
    assert.strictEqual(c, undefined)
  })
})
