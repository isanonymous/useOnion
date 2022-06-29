import {curr_base_hook, has_arg_fn_prefix, onerror, implicit_work_fn_name_prefix} from './main.js'
import _useOnion from './main.js'
const useOnion = _useOnion
let consts = {curr_base_hook, has_arg_fn_prefix, onerror, implicit_work_fn_name_prefix}
let keys = Object.keys(consts);
for (let i = 0; i < keys.length; i++) {
  useOnion[keys[i]] = consts[keys[i]]
}
export default useOnion