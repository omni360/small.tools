# TYPESCRIPT 笔记
## 利用注解（描述符))动态注入对象事件。
```typescript
export function addHooks(){
    return function(clazz){
        clazz.prototype.EVENT_TYPES.forEach(function (method) {
            clazz.prototype[method] = function(){
                clazz.prototype.listen.call(this,method,arguments);
            };
            clazz.prototype["un" + method] = function(){
                clazz.prototype.unlisten.call(this,method,arguments);

            };
        })
    }
}

@addHooks();
export class Hook{

}
```

