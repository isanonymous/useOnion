// export declare function KoaMiddleware<T>(ctx:T, next:()=>Promise<any>) : Promise<any>
// type MiddlewaresObj<T>={[K:string] : KoaMiddleware<T>}
export default function useOnion<T, H>(
    ctx :T,
    confs :{
        baseHook  ?: {[K in keyof H]: (ctx:T,next:()=>Promise<any>)=> Promise<any>},
        customHook ?:{[K in keyof H]: (ctx:T,next:()=>Promise<any>)=> Promise<any>},
        hasArgFnNames ?: [keyof H][number][]
    }
)
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
