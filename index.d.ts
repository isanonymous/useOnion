// export declare function KoaMiddleware<T>(ctx:T, next:()=>Promise<any>) : Promise<any>
// type MiddlewaresObj<T>={[K:string] : KoaMiddleware<T>}
export default useOnion
declare function useOnion<T, H>(
    ctx :T,
    confs :{
        baseHook  ?: {[K in keyof H]: (ctx:T,next:()=>Promise<any>)=> Promise<any>},
        customHook ?:{[K in keyof H]: (ctx:T,next:()=>Promise<any>)=> Promise<any>},
        hasArgFnNames ?: [keyof H][number][]
        syncFnNames ?: [keyof H][number][]
    }
)
declare namespace useOnion{
    const curr_base_hook :string
    const has_arg_fn_prefix :string
    const onerror :string
}
export function getSyncMidware<T>(fn :(ctx:T)=>any) :(ctx :T, next:Function)=>any;
export function getAsyncMidware<T>(fn :(ctx:T)=>any) :(ctx :T, next:Function)=>Promise<any>;
/*
import baseHook from './baseCrudHooks'
import uo from '../main'
uo({
    form:{ data:{title:'标题',num:233} },
    table:{ data:[{id:1,name:'名字'}] }
  },
 {baseHook, customHook:{
   arg_delById:ctx=>{ctx}
  }  , hasArgFnNames:[''] }
)*/
