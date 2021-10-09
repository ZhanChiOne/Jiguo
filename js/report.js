function lunbuo1() {
    //1创建对象
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    //2.建立连接
    ajax_.open('get', 'http://192.168.1.6:3000/useing/master', 'true');
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
            li_str += '<div class="report_fud">'+res[i].info_ty+'</div>';
            li_str += '<img src=' + res[i].img + '>';
            li_str += '<h2>' + res[i].text + '</h2>';
            li_str += '<div class="report_li_d1">' + '<span class="in_lunb_s1">' + res[i].totalnum + '</span>' + '<span class="in_lunb_s2">' + res[i].num + '台' + '</span>' + '</div>'
            li_str += '<div class="report_li_shen">' + '<strong>' +res[i].apply +  '</strong>' + '申请'+'</div>'
            li_str += '<div class="report_foot">' + '剩余时间2天' + '</div>'
            li_str += '</li >';
        }
        report_ul.innerHTML = li_str;
    }
} lunbuo1();