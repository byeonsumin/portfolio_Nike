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
    slidesPerView: 5,         // 화면에 보여질 슬라이드 수
    centeredSlides: true,     // 가운데 슬라이드 기준
    loop: false,              // 무한 루프
    grabCursor: true,         // 드래그 커서
    slideToClickedSlide: true,// 클릭한 슬라이드로 이동
    speed: 600,               // 이동 속도(ms)
    initialSlide: 3,          // 가운데 슬라이드부터 시작 (슬라이드 인덱스는 0부터 시작)
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 클릭 시 텍스트 보이기
swiper.slides.forEach(slide => {
    slide.addEventListener('click', () => {
        swiper.slides.forEach(s => s.querySelector('.title_text')?.classList.remove('active'));
        slide.querySelector('.title_text')?.classList.add('active');
    });
});

// 페이지 로드 후, 가운데 슬라이드의 텍스트를 자동으로 활성화
swiper.on('slideChange', function () {
    // 모든 슬라이드에서 active 클래스 제거
    swiper.slides.forEach(s => s.querySelector('.title_text')?.classList.remove('active'));
    // 현재 활성화된 슬라이드의 텍스트를 활성화
    const activeSlide = swiper.slides[swiper.activeIndex]; 
    const titleText = activeSlide.querySelector('.title_text'); 
    if (titleText) {
        titleText.classList.add('active'); // 텍스트 활성화
    }
});

// Swiper 초기화 호출
swiper.init();
swiper.update(); // 초기화 후 강제로 업데이트




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