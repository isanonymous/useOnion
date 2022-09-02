import {curr_base_hook, has_arg_fn_prefix, onerror, implicit_work_fn_name_prefix} from './main.js'
import _useOnion from './main.js'
const useOnion = _useOnion
let consts = [curr_base_hook, has_arg_fn_prefix, onerror, implicit_work_fn_name_prefix]
for (let i = 0; i < consts.length; i++) {
  useOnion[consts[i]] = consts[i]
}
export default useOnion

const FN = 'function'
export function getSyncMidware(fn){
  return (ctx, next)=>{
    if(typeof fn===FN) fn(ctx)
    next()
  }
}

export function getAsyncMidware(fn){
  return async (ctx, next)=>{
    if(typeof fn===FN) fn(ctx)
    await next()
  }
}
