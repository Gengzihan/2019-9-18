function loadBox() {
    let loadingBox = document.querySelector('.loadingBox')
    let progress = document.querySelector('.progress'); //获取进度条
    let ary = ['phone-bg.jpg',
        'phone-listen.png', 'phone-key.png', 'phone-logo.png', 'phone-name.png', 'message-head1.png', 'message-head2.png', 'message-keyboard.png', 'cube-bg.jpg', 'cube-img1.png', 'cube-img2.png', 'cube-img3.png', 'cube-img4.png', 'cube-img5.png', 'cube-img6.png', 'cube-tip.png', 'menu-icon.png', 'concat-address.png', 'concat-icon1.png', 'concat-icon2.png', 'course-icon1.png', 'course-icon2.png', 'course-icon3.png', 'course-icon4.png', 'course-icon5.png', 'course-icon6.png', 'course-icon7.png', 'course-pocket.png', 'school-bot1.png', 'school-bot2.png', 'school-img1.jpg', 'school-img2.jpg', 'school-img3.jpg', 'teacher-title.png', 'zf-detailsReturn.png', 'zf-jobTable.png', 'zf-teacher1.png', 'zf-teacher2.png', 'zf-teacher3.jpg', 'zf-teacher4.png', 'zf-teacher5.png', 'zf-teacher6.png'
    ];
    let n = 0;
    ary.forEach(item => {
        let img = new Image();
        img.src = `./images/${item}`;
        img.onload = function () {
            n++;
            let per = n / ary.length;
            progress.style.width = per * 100 + '%'
            if (n === ary.length) {
                // 所有图片都已加载完成
                loadingBox.style.opacity = 0;
                loadingBox.addEventListener('transitionend', function (e) {
                    // console.log(e)
                    if (e.propertyName === 'opacity') {
                        loadingBox.classList.add('hide');
                        phoneBoxFn(); // 第一屏完成之后 再来第二屏
                    }
                }, false)
                // progress.addEventListener('transitionend',function(e){
                //     e.stopPropagation();
                // },false)
            }
        }
    })
}
loadBox();

function phoneBoxFn() {
    let phoneBox = document.querySelector('.phoneBox');
    let circle = document.querySelector('.phoneBox .circle');
    let timeBox = document.querySelector('.phoneBox header h3');
    let footer = document.querySelector('.phoneBox footer');
    let overBox = document.querySelector('.phoneBox .overBox');
    let overBtn = overBox.querySelector('.overBtn');
    circle.addEventListener('touchend', function () {
        timeBox.classList.remove('hide'); // 显示时间 
        footer.classList.add('hide');
        overBox.classList.remove('bot');
    }, false); // passive  true  capture 
    overBtn.ontouchend = function () {
        // 点击挂机键
        phoneBox.style.transform = 'translateY(110%)';
    }
}