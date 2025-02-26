$(document).ready(function () {
    // Mở mặc định phần tử đầu tiên
    $('.hover-col').first().addClass('active');
    $('.hover-col.active').find('.bg-overlay').css({
        background: 'linear-gradient(156.44deg, rgba(253, 185, 19, 0) 35.4%, rgba(242, 96, 33, 0.9) 95.01%)',
        transition: 'background 0.5s ease-in-out'
    });
    $('.hover-col.active').css({
        flex: '0 0 50%',
        'max-width': '50%',
        transition: 'flex 0.5s ease-in-out, max-width 0.5s ease-in-out'
    });
    $('.hover-col.active').find('.custom-header-shopping-mall').hide();
    $('.hover-col.active').find('.custom-container-shopping-mall').css({
        display: 'flex',
        opacity: 1,
        right: '0%',
        transition: 'opacity 0.5s ease-in-out, right 0.5s ease-in-out'
    });

    $('.hover-col').hover(
        function () {
            // Ẩn tất cả các mục khác trước khi mở mục mới
            $('.hover-col.active').removeClass('active').css({
                flex: '',
                'max-width': '',
                transition: 'flex 0.5s ease-in-out, max-width 0.5s ease-in-out'
            }).find('.bg-overlay').css({ background: '', transition: 'background 0.5s ease-in-out' });
            $('.hover-col').find('.custom-container-shopping-mall').fadeOut(0);
            $('.hover-col').find('.custom-header-shopping-mall').fadeIn(0);

            // Mở mục được hover
            $(this).addClass('active');
            $(this).find('.bg-overlay').css({
                background: 'linear-gradient(156.44deg, rgba(253, 185, 19, 0) 35.4%, rgba(242, 96, 33, 0.9) 95.01%)',
                transition: 'background 0.5s ease-in-out'
            });
            $(this).css({
                flex: '0 0 50%',
                'max-width': '50%',
                transition: 'flex 0.5s ease-in-out, max-width 0.5s ease-in-out'
            });
            $(this).find('.custom-header-shopping-mall').fadeOut(0);
            $(this).find('.custom-container-shopping-mall').css({
                display: 'flex',
                opacity: 0,
                right: '-100%',
                transition: 'opacity 0.5s ease-in-out, right 0.5s ease-in-out'
            }).animate({
                right: '0%',
                opacity: 1
            }, 100);
        },
        function () {
            // Không làm gì khi rời chuột
        }
    );
});


// Vô hiệu hóa scroll
const disableScroll = () => {
    document.body.style.overflow = 'hidden';
};

// Bật lại scroll
const enableScroll = () => {
    document.body.style.overflow = 'auto';
};

$(document).ready(function () {
    // Hiển thị overlay và vô hiệu hóa scroll
    $('.btn-mo-modal').click(function () {
        $('.overlay').css({
            'opacity': '1',
            'visibility': 'visible'
        });
        $('.modal-content').css({
            'transform': 'translateX(0)'
        });

        disableScroll(); // Chặn scroll khi mở modal
    });

    // Ẩn overlay và bật lại scroll
    $('.btn-dong-modal').click(function () {
        $('.overlay').css({
            'opacity': '0',
            'visibility': 'hidden'
        });
        $('.modal-content').css({
            'transform': 'translateX(100%)'
        });

        enableScroll(); // Cho phép scroll khi đóng modal
    });
});


$(document).ready(function () {
    $('.ms-auto-arrow').hover(
        function () {
            $(this).attr('src', './assets/images/arrow-red.svg');
        },
        function () {
            $(this).attr('src', './assets/images/arrow-black.svg')
        }
    );
});

$(document).ready(function () {
    $('.hover-arrow-top').hover(
        function () {
            $(this).attr('src', './assets/images/arrow-red.svg');
        },
        function () {
            $(this).attr('src', './assets/images/arrow-light.svg')
        }
    );
});


// LOAD COUNTER
gsap.registerPlugin(ScrollTrigger);

function animateCounter(target, endValue) {
    let counter = { value: 0 };
    gsap.to(counter, {
        value: endValue,
        duration: 2,
        snap: { value: 1 },
        ease: "power2.out",
        onUpdate: function () {
            document.getElementById(target).textContent = Math.floor(counter.value);
        },
        scrollTrigger: {
            trigger: `#${target}`,
            start: "top 80%",
            toggleActions: "play none none none",
            onEnter: () => gsap.to(`#${target}`, { opacity: 1, duration: 0.5 })
        }
    });
}

animateCounter("loading-98", 98);
animateCounter("loading-80", 80);
animateCounter("loading-98-mb", 98);
animateCounter("loading-80-mb", 80);