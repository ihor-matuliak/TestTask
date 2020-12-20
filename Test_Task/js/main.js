$(document).ready(function () {
    $('.banner_slider').slick({
        infinite: true,
        arrows: true,
        dots: true,
        fade: true,
        prevArrow: `<div class="btn_slide btn_slide_prev"><svg width="24" height="44" viewBox="0 0 24 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Path" opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M0.708284 19.921L19.8978 0.70841C20.8422 -0.237139 22.373 -0.237139 23.2917 0.70841C24.2361 1.62776 24.2361 3.16088 23.2917 4.10635L5.78605 21.6331L23.2917 39.1597C24.2361 40.1052 24.2361 41.6122 23.2917 42.5577C22.373 43.5031 20.8422 43.5031 19.8978 42.5577L0.7082 23.3189C-0.23608 22.3996 -0.23608 20.8665 0.708284 19.921Z" fill="white"/></svg></div>`,
        nextArrow: `<div class="btn_slide btn_slide_next"><svg width="24" height="44" viewBox="0 0 24 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Path" opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M0.708284 19.921L19.8978 0.70841C20.8422 -0.237139 22.373 -0.237139 23.2917 0.70841C24.2361 1.62776 24.2361 3.16088 23.2917 4.10635L5.78605 21.6331L23.2917 39.1597C24.2361 40.1052 24.2361 41.6122 23.2917 42.5577C22.373 43.5031 20.8422 43.5031 19.8978 42.5577L0.7082 23.3189C-0.23608 22.3996 -0.23608 20.8665 0.708284 19.921Z" fill="white"/></svg></div>`,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    dots: true,
                },
            },
        ],
    });

    $('.slider_team').slick({
        infinite: true,
        arrows: true,
        dots: false,
        fade: true,
        prevArrow: `<div class="btn_slide btn_slide_prev"><svg width="28" height="8" viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 4.49123V3.50877H2.2643L5.5503 0.701754L4.72189 0L0 4L4.72189 8L5.57791 7.29825L2.2643 4.49123H28Z" fill="#00A031"/></svg><p>PREV</p></div>`,
        nextArrow: `<div class="btn_slide btn_slide_next"><p>NEXT</p><svg width="28" height="8" viewBox="0 0 28 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path  d="M0 4.49123V3.50877H25.7357L22.4497 0.701754L23.2781 0L28 4L23.2781 8L22.4221 7.29825L25.7357 4.49123H0Z" fill="#00A031"/></svg></div>`,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true,
                },
            },
        ],
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $($.attr(this, 'href')).offset().top - 100,
            },
            1500
        );
    });
});

const burgerIcon = document.querySelector('.container_burger');
const headerContent = document.querySelector('.header_nav');
const bgDark = document.querySelector('.bg_body_dark');

burgerIcon.addEventListener('click', function () {
    burgerIcon.classList.toggle('change');
    headerContent.classList.toggle('active');
    bgDark.classList.toggle('active');
});

// header scrolled
const header = document.querySelector('.header');

if (window.innerWidth > 1300) {
    window.addEventListener('scroll', function () {
        if (pageYOffset > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    if (pageYOffset > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

function openCity(evt, cityName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(cityName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

(function () {
    const youtube = document.querySelectorAll('.youtube');
    const video = document.querySelector('.popup_video .video');
    const popupVideo = document.querySelector('.popup_video ');
    const btnClose = document.querySelector('.btn_close');

    for (var i = 0; i < youtube.length; i++) {
        youtube[i].addEventListener('click', function () {
            const iframe = document.createElement('iframe');

            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('src', 'https://www.youtube.com/embed/' + this.dataset.embed);

            popupVideo.classList.add('active');
            video.appendChild(iframe);
        });

        btnClose.addEventListener('click', function () {
            const iframe = document.querySelector('.video iframe');
            iframe.remove();
            popupVideo.classList.remove('active');
        });
    }
})();
