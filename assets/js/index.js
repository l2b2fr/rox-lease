$(document).ready(function () {
    $('.hover-col').hover(
        function () {
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
                position: 'relative',
                right: '-100%'
            }).animate({
                right: '0%',
                opacity: 1
            }, 100);
        },
        function () {
            $(this).find('.bg-overlay').css({
                background: '',
                transition: 'background 0.5s ease-in-out'
            });
            $(this).css({
                flex: '',
                'max-width': '',
                transition: 'flex 0.5s ease-in-out, max-width 0.5s ease-in-out'
            });
            $(this).find('.custom-container-shopping-mall').fadeOut(250, function () {
                $(this).siblings('.custom-header-shopping-mall').fadeIn(0);
            });
        }
    );
});


// MODAL
// const moModalBtn = document.querySelector(".btn-mo-modal");
// const moModalBtnMb = document.querySelector(".btn-mo-modal-mb");
// const dongModalBtn = document.querySelector(".btn-dong-modal");
// const nenMo = document.querySelector(".overlay");

// moModalBtn.addEventListener("click", () => {
//     nenMo.classList.add("show");
// });

// moModalBtnMb.addEventListener("click", () => {
//     nenMo.classList.add("show");
// });

// dongModalBtn.addEventListener("click", () => {
//     nenMo.classList.remove("show");
// });

// nenMo.addEventListener("click", (e) => {
//     if (e.target === nenMo) {
//         nenMo.classList.remove("show");
//     }
// });

$(document).ready(function () {
    // Hiển thị overlay
    $('.btn-mo-modal').click(function () {
        $('.overlay').css({
            'opacity': '1',
            'visibility': 'visible'
        });
        $('.modal-content').css({
            'transform': 'translateX(0)'
        });
    });

    // Ẩn overlay
    $('#closeModal').click(function () {
        $('.overlay').css({
            'opacity': '0',
            'visibility': 'hidden'
        });
        $('.modal-content').css({
            'transform': 'translateX(100%)'
        });
    });
});

$(document).ready(function () {
    $('.ms-auto').hover(
        function () {
            $(this).attr('src', './assets/images/arrow-red.svg'); // Ảnh thay thế khi hover
        },
        function () {
            $(this).attr('src', './assets/images/arrow-black.svg'); // Ảnh gốc khi rời chuột
        }
    );
});

$(document).ready(function () {
    $('.hover-arrow-top').hover(
        function () {
            $(this).attr('src', './assets/images/arrow-red.svg'); // Ảnh thay thế khi hover
        },
        function () {
            $(this).attr('src', './assets/images/arrow-light.svg'); // Ảnh gốc khi rời chuột
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
            onEnter: () => gsap.to(`#${target}`, { opacity: 1, duration: 0.5 }) // Hiển thị khi vào
        }
    });
}

animateCounter("loading-98", 98);
animateCounter("loading-80", 80);
animateCounter("loading-98-mb", 98);
animateCounter("loading-80-mb", 80);