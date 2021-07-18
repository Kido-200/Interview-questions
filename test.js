function render(template, data) {
    const reg = /\{\{(\w+)\}\}/g; // 模板字符串正则
    return template.replace(reg,function($,$1){
        return data[$1];
    })
}

console.log(render('我是{{name}}，年龄{{age}}，性别{{sex}}',{
    name:'asd',
    age:'nan',
    sex:'nan'
}))
