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
    
    pone.onfocus = function(){
        pone_div.innerHTML = '';
    }
    pone.addEventListener('blur', function () {
        var res = /^\w{11}$/g;
        var yanz_ = res.test(pone.value);
        console.log(yanz_);
        if (pone.value == '') {
            pone_div.innerHTML = '手机号不能为空';
        } else if(yanz_== false) {
            pone_div.innerHTML = '格式错误';
        } else {
            pone_div.style.color = 'green';
            pone_div.innerHTML = '正确';
        }
    })
    inp_img.addEventListener('focus', function () {
        inp_img_div.innerHTML = '';
    })
    inp_img.addEventListener('blur', function () {
        if (inp_img.value == '') {
            inp_img_div.innerHTML = '验证码不能为空';
        } else if (inp_img.value == 'r2b7') {
            inp_img_div.innerHTML = '验证码不正确';
        } else {
            pone_div.style.color = 'green';
            pone_div.innerHTML = '正确';
        }
    })
    inp_name.onfocus = function () {
        inp_name_div.innerHTML = '';
    }
    inp_name.addEventListener('blur', function () {
        if (inp_name.value == '') {
            inp_name_div.innerHTML = '用户名不能为空';
        }else {
            inp_name_div.style.color = 'green';
            inp_name_div.innerHTML = '正确';
        }
    })
    inp_pwd.onfocus = function () {
        inp_pwd_div.innerHTML = '';
    }
    inp_pwd.onblur = function () {
        if (inp_pwd.value == '') {
            inp_pwd_div.innerHTML = '密码不能为空';
        } else {
            inp_pwd_div.style.color = 'green';
            inp_pwd_div.innerHTML = '正确';
        }
    }
    inp_pwd1.onfocus = function () {
        inp_pwd1_div.innerHTML = '';
    }
    inp_pwd1.onblur = function () {
        if (inp_pwd1.value == '') {
            inp_pwd1_div.innerHTML = '密码不能为空';
        } else if(inp_pwd.value !== inp_pwd1.value){
            inp_pwd_div.innerHTML = '两次密码不同';
            inp_pwd1_div.innerHTML = '两次密码不同';
        } else {
            inp_pwd_div.style.color = 'green';
            inp_pwd_div.innerHTML = '正确';
            inp_pwd1_div.style.color = 'green';
            inp_pwd1_div.innerHTML = '正确';
        }
    }
    //登录
    dl_pone.onfocus = function () {
        dl_pone_div.innerHTML = '';
    }
    dl_pone.onblur = function () {
        var res = /^\w{11}$/g;
        var yanz_ = res.test(pone.value);
        if (dl_pone.value == '') {
            dl_pone_div.innerHTML = '手机号不能为空';
        } else if (yanz_ == false) {
            dl_pone_div.innerHTML = '手机号格式错误'
        } else {
            dl_pone_div.style.color = 'green';
            dl_pone_div.innerHTML = '正确';
        }
    }
    dl_name.onfocus = function () {
        dl_naem_div.innerHTML = '';
    }
    dl_name.onblur = function () {
        if (dl_name.value == '') {
            dl_name_div.innerHTML = '用户名不能为空';
        } else {
            dl_name_div.style.color = 'green';
            dl_name_div.innerHTML = '正确';
        }
    }
    dl_pwd.onfocus = function () {
        dl_pwd_div.innerHTML = '';
    }
    dl_pwd.onblur = function () {
        if (dl_pwd.value == '') {
            dl_pwd_div.innerHTML = '密码不能为空';
        } else {
            dl_pwd_div.style.color = 'green';
            dl_pwd_div.innerHTML = '正确';
        }
    }
}

//提交
var form1_ = document.querySelector('.form1');
form1_.onsubmit = function(){
    console.log(1);
}