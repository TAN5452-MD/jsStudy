//node中的this指向{}空对象
//js中的顶层this是window 且js是动态this指向

var obj = {
    foo:function(){
        console.log(this)
    }
}

obj.foo() //obj

var bar = obj.foo
bar() //window