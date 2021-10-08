window.onload = function () {
      //发现酷玩
      function ind_play() {
        //1创建对象
        var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
        //2.建立连接
        ajax_.open('get', 'http://169.254.186.98:3000/play/hot', 'true');
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
            play_hot_ul.innerHTML = li_str;
            play_hot_ul1.innerHTML = li_str;
            play_hot_ul2.innerHTML = li_str;
            play_hot_ul3.innerHTML = li_str;
          }
  }ind_play()
}