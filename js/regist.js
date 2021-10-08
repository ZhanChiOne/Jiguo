window.onload = function () {
    var num = 0;
    var zhuc_ = document.querySelector('.reg_zhuc_div');
    reg_zuche_tit_s1.onclick = function () {
        zhuc_.style.display = 'block';
            
    }
    reg_zuche_tit_s2.onclick = function () {
        zhuc_.style.display = 'none';
    }
    inp_num_s1.onclick = function () {
        var timer = '';
        var num = 60;
        var isrun = true;
        if (timer) {
                clearInterval(timer);
            }
        timer = setInterval(function () {
            inp_num_s1.style.cursor = 'not-allowed'
            inp_num_s1.onclick = false;
            num--;
            inp_num_s1.innerHTML = num + 's';
            if (num < 0) {
                clearInterval(timer);
                isrun = true;
                num = 60;
                inp_num_s1.onclick = true;
                inp_num_s1.innerHTML = '获取验证码';
                inp_num_s1
                
            }
        },1000)

    }
    //验证
    
    pone.addEventListener('blur', function () {
        var res = /^\w{11}$/g;
        if (res.test(pone.value) == 'false') {
            pone_div.innerHTML = '格式错误';
        }
        if (pone.value == '') {
            pone_div.innerHTML = '手机号不能为空';
        } else if(res.test(pone.value !== true)) {
           
            
        }
    })
}
