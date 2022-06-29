# use-onion
应用洋葱模型到任意函数

## 安装
```
npm i use-onion --save
```

### 使用
```javascript
// 以提交表单前的数据处理为例, 对title进行trim
  import useOnion from 'use-onion'
  let {curr_base_hook} = useOnion
  const ctx = {
    form:{
      data:{ title:'  标题 ' }
    },
    table:{ data:[] }
  }
  const customHook = {
    onSubmit: [
      async (ctx, next)=>{
        let formData = ctx.form.data;
        formData.title = formData.title.trim()
        await next()
      }, // 调用baseHook中的同名方法
      curr_base_hook
    ]
  }
  const baseHook = {
    onSubmit: async (ctx, next)=>{
      console.log('提交成功', ctx.form.data);
      await next()
    }
  }
  const hooks = useOnion(ctx, {customHook, baseHook})
  // "提交成功"后面对象的title已经被trim了
  hooks.onSubmit()
```

### 更多用法见test/main.test.js
