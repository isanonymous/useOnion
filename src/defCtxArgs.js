export const ctx_arguments_prop_name = 'args'
const toString = Object.prototype.toString;
export default function defCtxArgs(ctx) {
  let _args = []
  Object.defineProperty(ctx, ctx_arguments_prop_name, {
    get(){ return _args},
    set(val){
      let isArrOrArguments = Array.isArray(val) || toString.call(val)==='[object Arguments]';
      val = isArrOrArguments ? val : [val]
      _args.length = 0
      _args.push(...val)
    },
    enumerable:false
  })
  return ctx
}
