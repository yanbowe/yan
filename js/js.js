window.onload = function () {
    var shop = document.querySelector('.right1');
    var sho = document.querySelector('.right1 i')
    var sh = document.querySelector('.shop')
    var box = document.querySelector('.cart')
    var seach = document.querySelector('.seach3')
    var input = document.querySelector('.seach input')
    var sear = document.querySelector('.seach')
    var sea = document.querySelector('.seach2')
    var search1 = document.querySelector('.search1')
    var sLi = document.querySelectorAll('.MI1 li')
    var little = document.querySelector('.xiaomi')
    var red = document.querySelector('.red')
    var tv = document.querySelector('.tv')
    var note = document.querySelector('.note')
    var cold = document.querySelector('.cold')
    var new1 =document.querySelector('.new1')
    var router = document.querySelector('.router')
    var wit = document.querySelector('.wit')
    shop.onmouseover = function () {
        box.style.width = '316px'
        box.style.height = '99px'
        box.style.background = 'white'
        box.style.opacity = '1'
        box.style.transition = 'all .5s'
        box.style.zIndex = '50'
        shop.style.backgroundColor = 'white'
        sho.style.color = '#FF6700'
        sh.style.color = '#FF6700'
        box.onmouseover = function () {
            box.style.width = '316px'
            box.style.height = '99px'
            box.style.background = 'white'
            box.style.opacity = '1'
            box.style.transition = 'all .5s'
            box.style.zIndex = '50'
            shop.style.color = '#FF6700'
        }
    }
    shop.onmouseout = function () {
        box.style.height = '0px'
        box.style.background = 'white'
        box.style.opacity = '0'
        box.style.transition = 'all .5s'
        box.style.zIndex = '0'
        box.onmouseout = function () {
            box.style.height = '0px'
            box.style.background = 'white'
            box.style.opacity = '0'
            box.style.transition = 'all .5s'
            box.style.zIndex = '0'
            sho.style.color = '#B0B0B0'
            sh.style.color = '#B0B0B0'
            shop.style.backgroundColor = '#424242'

        }
    }
    input.onclick = function () {
        seach.style.display = 'block';
        search1.style.display = 'none'
        sear.style.borderColor = '#ff6700'
        sea.style.borderColor = '#ff6700'
        seach.style.zIndex = '20'
    }
    input.onblur = function () {
        seach.style.display = 'none'
        search1.style.display = 'block'
        sear.style.borderColor = '#cccccc'
        sea.style.borderColor = '#cccccc'
        seach.style.zIndex = '0'
    }
    sLi[0].onmouseover = function () {
        little.style.display = 'block'
        little.style.width = '100%'
        little.style.height = '230px'
        little.style.background = 'white'
        little.style.opacity = '1'
        little.style.transition = 'all .10s'
        little.style.zIndex = '50'
        red.style.display = 'none'
        little.onmouseover = function () {
            little.style.display = 'block'
            little.style.width = '100%'
            little.style.height = '230px'
            little.style.background = 'white'
            little.style.opacity = '1'
            little.style.transition = 'all .5s'
            little.style.zIndex = '50'
        }
    }
    sLi[0].onmouseout = function () {
        little.style.height = '0px'
        little.style.background = 'white'
        little.style.opacity = '0'
        little.style.transition = 'all .5s'
        little.style.zIndex = '0'
        little.onmouseout = function () {
            little.style.height = '0px'
            little.style.background = 'white'
            little.style.opacity = '0'
            little.style.transition = 'all .5s'
            little.style.zIndex = '0'
        }
    }
    sLi[1].onmouseover = function () {
        red.style.display = 'block'
        red.style.width = '100%'
        red.style.height = '230px'
        red.style.background = 'white'
        red.style.opacity = '1'
        red.style.transition = 'all .10s'
        red.style.zIndex = '50'
        red.onmouseover = function () {
            red.style.display = 'block'
            red.style.width = '100%'
            red.style.height = '230px'
            red.style.background = 'white'
            red.style.opacity = '1'
            red.style.transition = 'all .5s'
            red.style.zIndex = '50'
        }
    }
    sLi[1].onmouseout = function () {
        red.style.height = '0px'
        red.style.background = 'white'
        red.style.opacity = '0'
        red.style.transition = 'all .5s'
        red.style.zIndex = '0'
        red.onmouseout = function () {
            red.style.height = '0px'
            red.style.background = 'white'
            red.style.opacity = '0'
            red.style.transition = 'all .5s'
            red.style.zIndex = '0'
        }
    }
    sLi[2].onmouseover = function () {
        tv.style.display = 'block'
        tv.style.width = '100%'
        tv.style.height = '230px'
        tv.style.background = 'white'
        tv.style.opacity = '1'
        tv.style.transition = 'all .10s'
        tv.style.zIndex = '50'
        tv.onmouseover = function () {
            tv.style.display = 'block'
            tv.style.width = '100%'
            tv.style.height = '230px'
            tv.style.background = 'white'
            tv.style.opacity = '1'
            tv.style.transition = 'all .5s'
            tv.style.zIndex = '50'
        }
    }
    sLi[2].onmouseout = function () {
        tv.style.height = '0px'
        tv.style.background = 'white'
        tv.style.opacity = '0'
        tv.style.transition = 'all .5s'
        tv.style.zIndex = '0'
        tv.onmouseout = function () {
            tv.style.height = '0px'
            tv.style.background = 'white'
            tv.style.opacity = '0'
            tv.style.transition = 'all .5s'
            tv.style.zIndex = '0'
        }
    }
    sLi[3].onmouseover = function () {
        note.style.display = 'block'
        note.style.width = '100%'
        note.style.height = '230px'
        note.style.background = 'white'
        note.style.opacity = '1'
        note.style.transition = 'all .10s'
        note.style.zIndex = '50'
        note.onmouseover = function () {
            note.style.display = 'block'
            note.style.width = '100%'
            note.style.height = '230px'
            note.style.background = 'white'
            note.style.opacity = '1'
            note.style.transition = 'all .5s'
            note.style.zIndex = '50'
        }
    }
    sLi[3].onmouseout = function () {
        note.style.height = '0px'
        note.style.background = 'white'
        note.style.opacity = '0'
        note.style.transition = 'all .5s'
        note.style.zIndex = '0'
        note.onmouseout = function () {
            note.style.height = '0px'
            note.style.background = 'white'
            note.style.opacity = '0'
            note.style.transition = 'all .5s'
            note.style.zIndex = '0'
        }
    }
    sLi[4].onmouseover = function () {
        cold.style.display = 'block'
        cold.style.width = '100%'
        cold.style.height = '230px'
        cold.style.background = 'white'
        cold.style.opacity = '1'
        cold.style.transition = 'all .10s'
        cold.style.zIndex = '50'
        cold.onmouseover = function () {
            cold.style.display = 'block'
            cold.style.width = '100%'
            cold.style.height = '230px'
            cold.style.background = 'white'
            cold.style.opacity = '1'
            cold.style.transition = 'all .5s'
            cold.style.zIndex = '50'
        }
    }
    sLi[4].onmouseout = function () {
        cold.style.height = '0px'
        cold.style.background = 'white'
        cold.style.opacity = '0'
        cold.style.transition = 'all .5s'
        cold.style.zIndex = '0'
        cold.onmouseout = function () {
            cold.style.height = '0px'
            cold.style.background = 'white'
            cold.style.opacity = '0'
            cold.style.transition = 'all .5s'
            cold.style.zIndex = '0'
        }
    }
    sLi[5].onmouseover = function () {
        new1.style.display = 'block'
        new1.style.width = '100%'
        new1.style.height = '230px'
        new1.style.background = 'white'
        new1.style.opacity = '1'
        new1.style.transition = 'all .10s'
        new1.style.zIndex = '50'
        new1.onmouseover = function () {
            new1.style.display = 'block'
            new1.style.width = '100%'
            new1.style.height = '230px'
            new1.style.background = 'white'
            new1.style.opacity = '1'
            new1.style.transition = 'all .5s'
            new1.style.zIndex = '50'
        }
    }
    sLi[5].onmouseout = function () {
        new1.style.height = '0px'
        new1.style.background = 'white'
        new1.style.opacity = '0'
        new1.style.transition = 'all .5s'
        new1.style.zIndex = '0'
        new1.onmouseout = function () {
            new1.style.height = '0px'
            new1.style.background = 'white'
            new1.style.opacity = '0'
            new1.style.transition = 'all .5s'
            new1.style.zIndex = '0'
        }
    }
    sLi[6].onmouseover = function () {
        router.style.display = 'block'
        router.style.width = '100%'
        router.style.height = '230px'
        router.style.background = 'white'
        router.style.opacity = '1'
        router.style.transition = 'all .10s'
        router.style.zIndex = '50'
        router.onmouseover = function () {
            router.style.display = 'block'
            router.style.width = '100%'
            router.style.height = '230px'
            router.style.background = 'white'
            router.style.opacity = '1'
            router.style.transition = 'all .5s'
            router.style.zIndex = '50'
        }
    }
    sLi[6].onmouseout = function () {
        router.style.height = '0px'
        router.style.background = 'white'
        router.style.opacity = '0'
        router.style.transition = 'all .5s'
        router.style.zIndex = '0'
        router.onmouseout = function () {
            router.style.height = '0px'
            router.style.background = 'white'
            router.style.opacity = '0'
            router.style.transition = 'all .5s'
            router.style.zIndex = '0'
        }
    }
    sLi[7].onmouseover = function () {
        wit.style.display = 'block'
        wit.style.width = '100%'
        wit.style.height = '230px'
        wit.style.background = 'white'
        wit.style.opacity = '1'
        wit.style.transition = 'all .10s'
        wit.style.zIndex = '50'
        wit.onmouseover = function () {
            wit.style.display = 'block'
            wit.style.width = '100%'
            wit.style.height = '230px'
            wit.style.background = 'white'
            wit.style.opacity = '1'
            wit.style.transition = 'all .5s'
            wit.style.zIndex = '50'
        }
    }
    sLi[7].onmouseout = function () {
        wit.style.height = '0px'
        wit.style.background = 'white'
        wit.style.opacity = '0'
        wit.style.transition = 'all .5s'
        wit.style.zIndex = '0'
        wit.onmouseout = function () {
            wit.style.height = '0px'
            wit.style.background = 'white'
            wit.style.opacity = '0'
            wit.style.transition = 'all .5s'
            wit.style.zIndex = '0'
        }
    }
    function update(num){
        for(var j=0;j<length;j++){
            sLi[j].className = '';
            sUl[j].style.display = 'none';
        }
        sLi[num].className = 'active';
        sUl[num].style.display = 'block';
    }
    function autoplay(){
        ++num;
        if(num >= length){
            num = 0;
        }
        update(num);
    }
    var sLi = document.querySelectorAll('#tab li');
    var sUl = document.querySelectorAll('.tab-content ul li');
    var length = sLi.length;
    var timer = null;
    var num = null;
    timer = setInterval(autoplay, 2000);
    for(var i=0;i<length;i++){
        sLi[i].index = i;
        sLi[i].onmouseover = function(){
            clearInterval(timer);
            update(this.index);
        }
        sLi[i].onmouseout = function(){
            num = this.index;
            timer = setInterval(autoplay,2000);
        }
    }
    var leftBtn = document.querySelector('.le');
    var rightBtn = document.querySelector('.ri');
    var picUl = document.querySelector('.spicList');
    leftBtn.onclick = function(){
        var currentLeft = parseInt(getComputedStyle(picUl)['left']);
        if(currentLeft < 0){
            picUl.style.left = (currentLeft + 1226) + 'px';
        }
    }
    rightBtn.onclick = function(){
        var currentLeft = parseInt(getComputedStyle(picUl)['left']);
        if(currentLeft > -4904){
            picUl.style.left = (currentLeft - 1226) + 'px';
        }
    }
    var cut = document.querySelectorAll('.lrft-a li')
    var phone = document.querySelector('.cut')
    var phone1 = document.querySelector('.cut1')
    var phone2 = document.querySelector('.cut2')
    var phone3 = document.querySelector('.cut3')
    var phone4 = document.querySelector('.cut4')
    var phone5 = document.querySelector('.cut5')
    var phone6 =document.querySelector('.cut6')
    var phone7 =document.querySelector('.cut7')
    var phone8 =document.querySelector('.cut8')
    var phone9 =document.querySelector('.cut9')
    cut[0].onmouseover = function () {
        phone.style.display = 'block'
        phone.onmouseover =function () {
            phone.style.display = 'block'
        }
    }
    cut[0].onmouseout = function () {
        phone.style.display = 'none'
        phone.onmouseout =function () {
            phone.style.display = 'none'
        }
    }
    cut[1].onmouseover = function () {
        phone1.style.display = 'block'
        phone1.onmouseover =function () {
            phone1.style.display = 'block'
        }
    }
    cut[1].onmouseout = function () {
        phone1.style.display = 'none'
        phone1.onmouseout =function () {
            phone1.style.display = 'none'
        }
    }
    cut[2].onmouseover = function () {
        phone2.style.display = 'block'
        phone2.onmouseover =function () {
            phone2.style.display = 'block'
        }
    }
    cut[2].onmouseout = function () {
        phone2.style.display = 'none'
        phone2.onmouseout =function () {
            phone2.style.display = 'none'
        }
    }
    cut[3].onmouseover = function () {
        phone3.style.display = 'block'
        phone3.onmouseover =function () {
            phone3.style.display = 'block'
        }
    }
    cut[3].onmouseout = function () {
        phone3.style.display = 'none'
        phone3.onmouseout =function () {
            phone3.style.display = 'none'
        }
    }
    cut[4].onmouseover = function () {
        phone4.style.display = 'block'
        phone4.onmouseover =function () {
            phone4.style.display = 'block'
        }
    }
    cut[4].onmouseout = function () {
        phone4.style.display = 'none'
        phone4.onmouseout =function () {
            phone4.style.display = 'none'
        }
    }
    cut[5].onmouseover = function () {
        phone5.style.display = 'block'
        phone5.onmouseover =function () {
            phone5.style.display = 'block'
        }
    }
    cut[5].onmouseout = function () {
        phone5.style.display = 'none'
        phone5.onmouseout =function () {
            phone5.style.display = 'none'
        }
    }
    cut[6].onmouseover = function () {
        phone6.style.display = 'block'
        phone6.onmouseover =function () {
            phone6.style.display = 'block'
        }
    }
    cut[6].onmouseout = function () {
        phone6.style.display = 'none'
        phone6.onmouseout =function () {
            phone6.style.display = 'none'
        }
    }
    cut[7].onmouseover = function () {
        phone7.style.display = 'block'
        phone7.onmouseover =function () {
            phone7.style.display = 'block'
        }
    }
    cut[7].onmouseout = function () {
        phone7.style.display = 'none'
        phone7.onmouseout =function () {
            phone7.style.display = 'none'
        }
    }
    cut[8].onmouseover = function () {
        phone8.style.display = 'block'
        phone8.onmouseover =function () {
            phone8.style.display = 'block'
        }
    }
    cut[8].onmouseout = function () {
        phone8.style.display = 'none'
        phone8.onmouseout =function () {
            phone8.style.display = 'none'
        }
    }
    cut[9].onmouseover = function () {
        phone9.style.display = 'block'
        phone9.onmouseover =function () {
            phone9.style.display = 'block'
        }
    }
    cut[9].onmouseout = function () {
        phone9.style.display = 'none'
        phone9.onmouseout =function () {
            phone9.style.display = 'none'
        }
    }
    var box3 = document.querySelectorAll('.box3')
    var i = 0;
    var timer = null;
    var minute = box3[1].innerHTML.replace(/^0/,'');
    var second = box3[2].innerHTML.replace(/^0/,'');
    var lasttime = parseInt(minute) * 60 + parseInt(second);
    function format(num){
        return num < 10 ? '0' + num : num
    }
    setInterval(function updateTime(){
        box3[1].innerHTML = format(Math.floor(lasttime / 60));
        box3[2].innerHTML = format(Math.floor(lasttime % 60));
        lasttime--;
        if(lasttime < 0){
            clearInterval(timer);
            lasttime = 0;
        }
    },1000)
    var seCk = document.querySelector('.seckill1')
    var span = document.querySelectorAll('.more span')
    console.log(span)
    span[0].onclick = function(){
        var currentLeft = parseInt(getComputedStyle(seCk)['left']);
        if(currentLeft < 0){
            seCk.style.left = (currentLeft +968) + 'px';
        }
    }
    span[1].onclick = function(){
        var currentLeft = parseInt(getComputedStyle(seCk)['left']);
        if(currentLeft > -968){
            seCk.style.left = (currentLeft - 968) + 'px';
        }
    }
    var p = document.querySelectorAll('.house p')
    var Robot = document.querySelectorAll('.hot ul')
    p[3].onmouseover =function () {
        Robot[1].style.display = 'none'
        Robot[0].style.display = 'block'
        Robot[2].style.display = 'none'
        Robot[3].style.display = 'none'
    }
    p[2].onmouseover =function () {
        Robot[0].style.display = 'none'
        Robot[1].style.display = 'block'
        Robot[2].style.display = 'none'
        Robot[3].style.display = 'none'
    }
    p[1].onmouseover =function () {
        Robot[0].style.display = 'none'
        Robot[1].style.display = 'none'
        Robot[2].style.display = 'block'
        Robot[3].style.display = 'none'
    }
    p[0].onmouseover =function () {
        Robot[0].style.display = 'none'
        Robot[1].style.display = 'none'
        Robot[2].style.display = 'none'
        Robot[3].style.display = 'block'
    }
    var seCk = document.querySelector('.seckill1')
    var span = document.querySelectorAll('.more span')
    console.log(span)
    span[0].onclick = function(){
        var currentLeft = parseInt(getComputedStyle(seCk)['left']);
        if(currentLeft < 0){
            seCk.style.left = (currentLeft +968) + 'px';
        }
    }
    span[1].onclick = function(){
        var currentLeft = parseInt(getComputedStyle(seCk)['left']);
        if(currentLeft > -968){
            seCk.style.left = (currentLeft - 968) + 'px';
        }
    }
    var p1 = document.querySelectorAll('.capa p')
    var city = document.querySelectorAll('.cit ul')
    p1[4].onmouseover =function () {
        city[1].style.display = 'none'
        city[0].style.display = 'block'
        city[2].style.display = 'none'
        city[3].style.display = 'none'
        city[4].style.display = 'none'
    }
    p1[3].onmouseover =function () {
        city[1].style.display = 'block'
        city[0].style.display = 'none'
        city[2].style.display = 'none'
        city[3].style.display = 'none'
        city[4].style.display = 'none'
    }
    p1[2].onmouseover =function () {
        city[0].style.display = 'none'
        city[1].style.display = 'none'
        city[2].style.display = 'block'
        city[3].style.display = 'none'
        city[4].style.display = 'none'
    }
    p1[1].onmouseover =function () {
        city[0].style.display = 'none'
        city[1].style.display = 'none'
        city[2].style.display = 'none'
        city[3].style.display = 'block'
        city[4].style.display = 'none'
    }
    p1[0].onmouseover =function () {
        city[0].style.display = 'none'
        city[1].style.display = 'none'
        city[2].style.display = 'none'
        city[3].style.display = 'none'
        city[4].style.display = 'block'
    }
    var p2 = document.querySelectorAll('.matc p')
    var mat = document.querySelectorAll('.mat1 ul')
    p2[3].onmouseover =function () {
        mat[1].style.display = 'none'
        mat[0].style.display = 'block'
        mat[2].style.display = 'none'
        mat[3].style.display = 'none'
    }
    p2[2].onmouseover =function () {
        mat[0].style.display = 'none'
        mat[1].style.display = 'block'
        mat[2].style.display = 'none'
        mat[3].style.display = 'none'
    }
    p2[1].onmouseover =function () {
        mat[0].style.display = 'none'
        mat[1].style.display = 'none'
        mat[2].style.display = 'block'
        mat[3].style.display = 'none'
    }
    p2[0].onmouseover =function () {
        mat[0].style.display = 'none'
        mat[1].style.display = 'none'
        mat[2].style.display = 'none'
        mat[3].style.display = 'block'
    }
}
