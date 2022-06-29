export default function defIterator(obj, ...propNames) {
  obj[Symbol.iterator] = ()=>{
    let arr = [obj]
    for (let i = 0; i < propNames.length; i++) {
      Object.defineProperty( arr, String(i +1), {
        get(){return obj[propNames[i]] }
      })
    }
    let i = 0
    return {
      next:()=>({ value:arr[i++],done:i>arr.length })
    }
  }
  return obj
}
