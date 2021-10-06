window.onload = function () {
    var text_ = document.querySelector('.m_i_time');
    function showTime() {
        //设置2021年圣诞节时间
        var sd_ = new Date('12 25 2021');
        //获取当前时间
        var data_ = new Date();
        //两个日期对象相减
        var ms = sd_ - data_;

        //获取天数
        var day = Math.floor(ms / 1000 / 3600 / 24);
        day < 10 ? '0' + day : day;
        //获取小时数
        var h = Math.floor(ms % (3600 * 24 * 1000) / 1000 / 3600);
        h <= 10 ? '0' + h : h;
        //获取分钟数
        var m = Math.floor(ms % (3600 * 24 * 1000) / 1000 % 3600 / 60);
        //获取秒数
        var s = Math.floor(ms % (3600 * 24 * 1000) / 1000 % 3600 % 60);
        s < 10? '0' + s : s;
        text_.innerHTML = '申请时间剩余:' + day + '天' + h + '小时' + m + '分钟' + s + '秒';
    }
    var timer = setInterval(function(){showTime();},1000) 
}

//ajax
var oajax = new XMLHttpRequest() || new ActiveXObject();
//建立连接
oajax.open('get', 'http:192.168.1.3:3000/useing/public' ,true);
//发送请求
oajax.send('http://192.168.1.3:3000/useing/public');
//接收后他数据
oajax.onreadystatechange = function () {
    console.log(oajax.readystate);
    if (oajax.readystate == 4){
        if (oajax.staus = 200) {
            console.log(oajax.responseText);
        } else {
            console.log('连接失败');
        }
    }
}