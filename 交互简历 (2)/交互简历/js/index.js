
function loadBox(){
    let loadingBox = document.querySelector('.loadingBox');
    let progress = document.querySelector('.progress');
    let ary = ['phone-bg.jpg',
    'phone-listen.png', 'phone-key.png', 'phone-logo.png', 'phone-name.png', 'message-head1.png', 'message-head2.png', 'message-keyboard.png', 'cube-bg.jpg', 'cube-img1.png', 'cube-img2.png', 'cube-img3.png', 'cube-img4.png', 'cube-img5.png', 'cube-img6.png', 'cube-tip.png', 'menu-icon.png', 'concat-address.png', 'concat-icon1.png', 'concat-icon2.png', 'course-icon1.png', 'course-icon2.png', 'course-icon3.png', 'course-icon4.png', 'course-icon5.png', 'course-icon6.png', 'course-icon7.png', 'course-pocket.png', 'school-bot1.png', 'school-bot2.png', 'school-img1.jpg', 'school-img2.jpg', 'school-img3.jpg', 'teacher-title.png', 'zf-detailsReturn.png', 'zf-jobTable.png', 'zf-teacher1.png', 'zf-teacher2.png', 'zf-teacher3.jpg', 'zf-teacher4.png', 'zf-teacher5.png', 'zf-teacher6.png'];
    let n = 0;// 记录已经加载过来的图片张数
    ary.forEach(item=>{
        let img = new Image();
        img.src = `./images/${item}`;
        img.onload = function(){
            n++;
            let per= n / ary.length;
            progress.style.width = per*100+'%';
            if(n === ary.length){
                // 所有图片已经加载完成
                loadingBox.style.opacity = 0;
                loadingBox.addEventListener('transitionend',function(e){
                    console.log(e);
                    if(e.propertyName === 'opacity'){
                        loadingBox.classList.add('hide');
                        phoneBoxFn();//第一屏完成之后再来第二瓶
                    }
                },false)
                // progress.addEventListener('transitionend',function(e){
                //     e.stopPropagation();// 阻止progress动态完成之后的冒泡
                // },false)
            }
        }
    })
}
loadBox()

function phoneBoxFn(){
    let phoneBox = document.querySelector('.phoneBox');
    let circle = document.querySelector('.phoneBox .circle');
    let timeBox = document.querySelector('.phoneBox header h3');
    let footer = document.querySelector('.phoneBox footer');
    let overBox = document.querySelector('.phoneBox .overBox');
    let overBtn = overBox.querySelector('.overBtn');
    circle.addEventListener('touchend',function(){
        timeBox.classList.remove('hide');//显示时间
        footer.classList.add('hide');
        overBox.classList.remove('bot');
    },false)
    overBtn.ontouchend = function(){
        // 点击挂机键
    phoneBox.style.transform = 'translateY(110%)';

    }
}

function chatBoxFn(){
    let olis = document.querySelectorAll('.chatBox ul li');
    let keyboard = document.querySelector('.chatBox .keyboard');
    let p = keyboard.querySelector('p');
    let chatBtn = keyboard.querySelector('.chatBtn');
    let timer = null;
    let n = 0;// 记录显示的条数
    timer = setInterval(()=>{
        olis[n].classList.remove('opa');
        n++;
        if( n == 3){
            clearInterval(timer);//清除定时器
            setTimeout(()=>{
                keyboard.classList.remove('bot');
            },1000) 
        }
    },2000)
}
chatBoxFn()