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
    var timer = setInterval(function () { showTime(); }, 1000)
    

    function lunb() {
        var jia_ = document.querySelector('.in_m_g_left');
        var lunb_ = document.querySelector('.in_m_g_cent');
        var jian_ = document.querySelector('.in_m_g_right');
        var num = 0;
        var timer = null;
        timer = setInterval(function () {
            
            lunb_.scrollLeft += 1010;
            if (lunb_.scrollLeft >= 2500) {
                lunb_.scrollLeft = 0;
            }
        //console.log(lunb_.scrollLeft);
    },2000)
    } lunb();


    //ajax1
    function lunbuo1() {
        //1创建对象
        var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
        //2.建立连接
        ajax_.open('get', 'http://192.168.1.6:3000/useing/public', 'true');
        //3.传递数据
        ajax_.send();
        //4.接收数据
        ajax_.onreadystatechange = function () {
            //如果接到的是（json）字符串，那么为了方便后续的操作，需要把字符串转（json）对象
            if (ajax_.readyState == 4) {
                if (ajax_.status == 200) {
                    //console.log(ajax_.responseText);
                    console.log(JSON.parse(ajax_.responseText));
                    showdate(JSON.parse(ajax_.responseText))
                }
            }
        }
        function showdate(v) {
            var res = v;
            //字符串拼接 ：不方便维护   //替代方案 模板引擎
            var li_str = '';
            for (var i = 0; i < res.length; i++) {
                li_str += '<li>';
                li_str += '<img src=' + res[i].img + '>';
                li_str += '<h2>' + res[i].text + '</h2>';
                li_str += '<div class = "in_lunb">' + '<span class="in_lunb_s1">' + res[i].totalnum + '</span>' + '<span class="in_lunb_s2">' + res[i].num + '台' + '</span>' + '</div>'
                li_str += '<div class="lunb_shenq">' + res[i].apply + '<strong>' + '申请' + '</strong>' + '</div>'
                li_str += '<div class="lunb_foot">' + '剩余时间2天' + '</div>'
                li_str += '</li >';
            }
            list.innerHTML = li_str;
        }
    } lunbuo1();
    



    function report() {
        //1创建对象
        var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
        //2.建立连接
        ajax_.open('get', 'http://192.168.1.6:3000/report/new', 'true');
        //3.传递数据
        ajax_.send();
        //4.接收数据
        ajax_.onreadystatechange = function () {
            //如果接到的是（json）字符串，那么为了方便后续的操作，需要把字符串转（json）对象
            if (ajax_.readyState == 4) {
                if (ajax_.status == 200) {
                    //console.log(ajax_.responseText);
                    //console.log(JSON.parse(ajax_.responseText));
                    showdate(JSON.parse(ajax_.responseText))
                }
            }
        }
        function showdate(v) {
            var res = v;
            //字符串拼接 ：不方便维护   //替代方案 模板引擎
            var li_str = '';
            for (var i = 0; i < 12; i++) {
                li_str += '<li>';
                li_str += '<img src=' + res[i].img + '>';
                li_str += '<h3>' + res[i].text + '</h3>';
                li_str += '<div class="ind_baog_foot">' + '<span>' + res[i].uName + '</span>' + '<span>' + '<i>' + '</i>' + '3' + '<i>' + '</i>' + '3'+'</span >' + '</div>';
                li_str += '</li >';
            }
            ind_bao_ul.innerHTML = li_str;
            ind_daogou_ul.innerHTML = li_str;
        }
    } report();
    
    //点击事件
    
    function dianji1() {
        var baogao_ = document.querySelector('.ind_baogao');
        var num = 0;
        ind_b_s2.onclick = function () {
            if (num == 0) {
                baogao_.style.height = '840px';
                num = 1;
            } else if (num == 1) {
                baogao_.style = 'none';
                num = 0;
            }
        }
    } dianji1();

    //导购精选的点击事件
    function d_g_jingxuan() {
        var daogou_ = document.querySelector('.ind_daogou');
        var num = 0;
        ind_daogou_s2.onclick = function () {
            if (num == 0) {
                daogou_.style.height = '550px';
                num = 1;
            } else if (num == 1) {
                daogou_.style = 'none';
                num = 0;
            }
        }
    } d_g_jingxuan();

    //发现酷玩
    function ind_play() {
          //1创建对象
          var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
          //2.建立连接
          ajax_.open('get', 'http://192.168.1.6:3000/play/hot', 'true');
          //3.传递数据
          ajax_.send();
          //4.接收数据
          ajax_.onreadystatechange = function () {
              //如果接到的是（json）字符串，那么为了方便后续的操作，需要把字符串转（json）对象
              if (ajax_.readyState == 4) {
                  if (ajax_.status == 200) {
                      //console.log(ajax_.responseText);
                      console.log(JSON.parse(ajax_.responseText));
                      play_(JSON.parse(ajax_.responseText))
                  }
              }
          }
          function play_(v) {
              var res = v;
              //字符串拼接 ：不方便维护   //替代方案 模板引擎
              var li_str = '';
              for (var i = 0; i < res.length; i++) {
                  console.log(res[i]);
                  li_str+= '<li>';
                  li_str += '<img src=' + res[i][1].img + '>';
                  li_str+= '<h3>' + res[i][1].text + '</h3>';
                  li_str+= '<p>' + res[i][1].description + '</p>'
                  li_str+='<div>' + '<span>' + res[i][1].price + '</span>' + '<span>' + '<i>' + '</i>' + '3' + '<i>' + '</i>' + '3'+'</span >' + '</div>';
                  li_str+= '</li>';
              }
              ind_play_ul.innerHTML = li_str;
              ind_play_ul1.innerHTML = li_str;
              ind_play_ul2.innerHTML = li_str;
              ind_play_ul3.innerHTML = li_str;
            }
    }ind_play()
}
/* 
    
*/