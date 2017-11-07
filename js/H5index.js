
FastClick.attach(document.body);

function refreshRem() {
    var desW = 750,
        winW = document.documentElement.clientWidth,
        ratio = winW / desW;
    document.documentElement.style.fontSize = ratio * 100 + 'px';
}
refreshRem();
window.addEventListener('resize', refreshRem);

//swiper  ('选择器',{参数配置})   onTransitionEnd 动画过渡结束
var mySwiper = new Swiper('.swiper-container', {
    //参数配置
    direction: 'horizontal',
    loop: true,
    onTransitionEnd: function (swiper) {
        //swiper.slides; 获取的是一个对象数组 滑块的长度
        var slides = swiper.slides,
            //swiper.activeIndex 滑块当前的索引值
            curIndex = swiper.activeIndex,
            //所有滑块的长度
            total = slides.length,
            targetId = 'page0';
        switch (curIndex) {
            case 0:
                targetId += (total - 2);
                break;
            case (total - 1):
                targetId += 1;
                break;
            default:
                targetId += curIndex;
        }
        [].forEach.call(slides, function (item, index) {
            if (curIndex == index) {
                item.id = targetId;
            } else {
                item.id = null;
            }
        });
    }
});
//音乐点击暂停开始
var oMusic = document.getElementById('music'),
    audioMusic = document.getElementById('audioMusic');
window.setTimeout(function () {
    audioMusic.play();
    audioMusic.addEventListener('canplay', function () {
        oMusic.className = 'music musicMove';
    }, false)
}, 1000);
oMusic.onclick = function () {
    if (audioMusic.paused) {
        audioMusic.play();
        oMusic.className = 'music musicMove';
    } else {
        audioMusic.pause();
        oMusic.className = 'music';
    }
};
//箭头执行两个事件
    var oArrow = document.getElementById('arrow');
    oArrow.addEventListener("webkitAnimationEnd", function () { //动画结束时事件
        this.className = this.className.replace('arrowone', 'arrowtwo');
    }, false);




