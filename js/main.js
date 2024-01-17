const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
console.log(searchInputEl);
console.log(searchEl);

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});

const badgeEl = document.querySelector('.badges');
const topEl = document.querySelector('#to_top');

window.addEventListener('scroll', _.throttle(function(){
    // console.log('scroll');
    // console.log(window.scrollY);
    //console.log(window.screenY);
    if(window.scrollY > 500){
        //hide badges
        // badgeEl.style.display = 'none';
        //gasp.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl,0.5,{
            opacity:0,
            display:'none'
        });

        //look top
        gsap.to(topEl, 0.2 , {
            x:0
        });

    }else{
        // badgeEl.style.display = 'block';
        //look badges
        gsap.to(badgeEl,0.5,{
            opacity:1,
            display:'block'
        });
        // hide top
        gsap.to(topEl, 0.2 , {
            x:100
        });

    }
},300));

topEl.addEventListener('click',function(){
    gsap.to(window , 0.7 ,{
        scrollTo:0
    });
});

const fadeEls = document.querySelectorAll(".section1 .fade-in");
console.log(fadeEls);

fadeEls.forEach(function(fadeEl,index){
    gsap.to(fadeEl,1,{
        delay:(index+1)*0.7, 
        opacity:1
    })
});

new Swiper('.inner_left .swiper',{
    direction : 'vertical',
    autoplay : true,
    loop : true,
    speed : 100
});

new Swiper('.promotion .swiper',{
    slidesPerView : 3, //슬라이드 갯수
    spaceBetween : 10, //슬라이드 사이 여백
    centeredSlides : true, //1번 슬라이드가 가운데로 보이기
    autoplay : true,
    loop : true,
    pagination :{
            el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
            clickable: true //페이지 번호 선택 활성화
        },
        navigation:{
            prevEl:'.promotion .swiper-button-prev',
            nextEl:'.promotion .swiper-button-next'
        }
});

new Swiper('.section9 .swiper',{
    slidesPerView : 5,
    spaceBetween : 30,
    autoplay : true,
    //loop : true
    speed : 100,
    navigation:{
        prevEl: '.section9 .swiper-button-next',
        nextEl: '.section9 .swiper-button-prev'
    }
});

const promotionToggleEl = document.querySelector('.toggle-promotion');
const promotionEl = document.querySelector('.promotion');
let isHidePromotion = false;

promotionToggleEl.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion;
    console.log(isHidePromotion);
    if(isHidePromotion){
        promotionEl.classList.add('open');
        promotionToggleEl.classList.add('open');
    }else{
        promotionEl.classList.remove('open');
        promotionToggleEl.classList.remove('open');
    }
});

const spyEls = document.querySelectorAll('div.scroll-spy');

spyEls.forEach(function(spyEl){
    new ScrollMagic.Scene({
        triggerElements:spyEl, //감지할 요소 지정
        triggerHook: .8 
    })
    .setClassToggle(spyEl , 'show')
    .addTo(new ScrollMagic.Controller()); //new ScrollMagic.Controller: 애니매이션 실행 옵션
});


