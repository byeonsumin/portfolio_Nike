// 메인 배너
const bannerSwiper  = new Swiper(".banner", {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
            // custom-fraction span으로 감싸서 CSS에서 flex 중앙 정렬
            return '<span class="custom-fraction"><span class="' + currentClass + '"></span>/<span class="' + totalClass + '"></span></span>';
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



// 뉴 아이템 리스트
const newItemSwiper = new Swiper(".new_item_list, .look_book", {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
    slidesPerView: 'auto',
    spaceBetween: 20,
});

const itemSwiper = new Swiper(".item", {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    scrollbar: {
        el: ".item .swiper-scrollbar",
        hide: false,
    },
    slidesPerView: 'auto',
    spaceBetween: 20,
});


// 푸퍼패딩
const pufferSwiper = new Swiper(".puffer_list", {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    slidesPerView: "auto",
    spaceBetween: 20,
    scrollbar: {
        el: ".puffer_list .swiper-scrollbar",
        draggable: true,   // 드래그 가능
        dragSize: 500,
    },
});

// 광고배너
const adSwiper  = new Swiper(".swiper.ad", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});




// 보메로
// Swiper 초기화
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 5,         
    centeredSlides: true,     
    loop: false,              
    grabCursor: true,         
    slideToClickedSlide: true,
    speed: 600,               
    initialSlide: 3,          
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 페이지 로드 후 가운데 슬라이드 텍스트 활성화
window.addEventListener('load', () => {
    const activeSlide = swiper.slides[swiper.activeIndex];
    const titleText = activeSlide.querySelector('.title_text');
    if (titleText) {
        titleText.classList.add('active');
    }
});

// 클릭 시 텍스트 보이기
swiper.slides.forEach(slide => {
    slide.addEventListener('click', () => {
        swiper.slides.forEach(s => s.querySelector('.title_text')?.classList.remove('active'));
        slide.querySelector('.title_text')?.classList.add('active');
    });
});

// 슬라이드 변경 시 텍스트 활성화
swiper.on('slideChange', function () {
    swiper.slides.forEach(s => s.querySelector('.title_text')?.classList.remove('active'));
    const activeSlide = swiper.slides[swiper.activeIndex]; 
    const titleText = activeSlide.querySelector('.title_text'); 
    if (titleText) {
        titleText.classList.add('active');
    }
});

// 초기화
swiper.init();
swiper.update();





// 룩북 리스트
// 룩북 스와이퍼
const lookSwiper  = new Swiper(".shopby", {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    slidesPerView: 4,  
    spaceBetween: 120, 
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});