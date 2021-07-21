/*
定义一个函数，用来获取指定元素的当前样式 
参数：
obj 要获取样式的元素
name 要获取的样式名
*/
function getStyle(obj, name) {
    if (window.getComputedStyle) {
        // 正常浏览器的方式，具有getComputedStyle()方法
        return window.getComputedStyle(obj, null)[name];
    } else {
        //IE8的方式,没有getComputedStyle()方法
        return obj.currentStyle[name];
    }
}
/*
    参数：
        obj:要执行动画的对象
        attr：要执行动画的样式，比如left top width height
        target:执行动画的目标
        speed:移动的速度(正数向右移动，负数向左移动) 
 */

//定义一个变量，用来保存定时器标识
function move(
    obj,
    attr,
    target,
    speed,
    callback
) {

    //关闭上一个元素
    clearInterval(obj.timer);
    //获取元素目标的位置
    var current = parseInt(getStyle(obj, attr));
    // 判断速度的正负值
    // 如果从0向800移动，则speed为正
    // 如果从800向0移动，则speed为负
    if (current > target) {
        speed = -speed;
    }

    obj.timer = setInterval(function () {

        // 获取新值
        var oldValue = getStyle(obj, attr);
        // 在旧值上加上新值
        var newValue = parseInt(oldValue) + speed;
        // console.log(newValue);
        // 将新值设置给box1
        obj.style[attr] = newValue + 'px';

        if (speed < 0 && newValue <= target || speed > 0 && newValue >= target) {
            newValue = target;
        }
        if (newValue === target) {
            clearInterval(obj.timer);
            callback && callback();
        }
    }, 30);
}
// 定义一个函数，用来向一个元素中添加指定class属性值
/*
    参数:
        obj 要添加class的元素
        cn 要添加的class值
 */
function addClass(obj, cn) {
    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    }
}

/*
    判断一个元素中是否含有指定的class属性值 
        如果有该calss，则放回true，没有则返回false
 */
function hasClass(obj, cn) {
    // 判断obj中有没有cn class
    var reg = new RegExp("\\b" + cn + "\\b");
    return reg.test(obj.className);
}

/*
    删除一个元素中指定的class属性 
 */
function removeClass(obj, cn) {
    //创建一个正则表达式
    var reg = new RegExp("\\b" + cn + "\\b");
    // 把正则匹配到的替换成空格
    obj.className = obj.className.replace(reg, "")
}

/*
    toggleCalss 可以用来切换一个类
        如果元素中具有该类，则删除
        如果元素中没有该类，则添加 
 */

//  判断obj中是否含有cn
function toggleClass(obj, cn) {
    if (hasClass(obj, cn)) {
        //有，则删除
        removeClass(obj, cn);
    } else {
        //没有，则添加
        addClass(obj, cn);
    }
}