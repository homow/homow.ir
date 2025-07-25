const template = document.createElement('template');

template.innerHTML = `<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css">
<style>
a {
    text-decoration: none;
    color: inherit;
}
.CTA-X {
    border-radius: 12px;
    padding: 2rem 1rem 2rem 1rem;
    background-color: #27445D;
    position: relative;
    color: #ddd;
}
.CTA-X>h3, .CTA-X__title-wrapper {
    font-size: 17px;
    max-width: 900px;
    margin: 2rem auto 3rem auto;
    text-align: center;
}
.CTA-X__title-wrapper {
    margin-bottom: 4rem;
}
.CTA-X__content-wrapper {
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: center;
    row-gap: 1rem;
    column-gap: 4rem;
}
.CTA-X__content-wrapper {
    text-align: start;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
}
.CTA-X__content-wrapper a {
    font-size: 1.2rem;
    padding: .5rem;
    transition: all .15s;
}
.CTA-X__content-wrapper a {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;
}
.CTA-X__content-wrapper a:hover {
    color: #5e5f64;
    background-color: var(--box-hover);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
    border-radius: 12px;
}
.CTA-X__content-wrapper a i {
    font-size: 1.5rem;
}
@media only screen and (max-width: 800px) {
    .CTA-X__content-wrapper a {
        gap: .6rem;
    }
}
@media only screen and (max-width: 560px) {
    .CTA-X>h3 {
        max-width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
    .CTA-X a {
        font-size: 1rem;
    }
    .CTA-X__content-wrapper {
        column-gap: 1rem;
    }
}
@media only screen and (max-width: 450px) {
    .CTA-X a {
        font-size: .9rem;
    }
    .CTA-X a i {
        font-size: 1.1rem;
    }
    .CTA-X {
        padding: 2rem .35rem 2rem .35rem;
    }    
}
@media only screen and (max-width: 395px) {
    .CTA-X>h3 {
        max-width: 85%;
    }
    .CTA-X__title-wrapper {
        font-size: 1.3rem;
    }
    .CTA-X a {
        font-size: .8rem;
    }
}
@media only screen and (max-width: 370px) {
    .CTA-X__title-wrapper {
        font-size: 1.1rem;
        margin-bottom: 2rem;
    }
}
@media only screen and (max-width: 360px) {
    .CTA-X>h3 {
        width: 100%;
        margin: 0;
    }
    .CTA-X__content-wrapper a {
        display: unset;
        font-size: .9rem;
    }
    .CTA-X__content-wrapper {
        gap: .5rem;
        grid-template-columns: repeat(1, 1fr);
    }
    .CTA-X__content-wrapper a, .CTA-X__title-wrapper, .CTA-X>h3 {
        text-align: start;
    }
    .CTA-X__social-items-links {
        order: 99;
    }
    .instagram {
        order: 1;
    }
    .tel-chat {
        order: 2;        
    }
    .tel-port {
        order: 3;
    }
    .mail {
        order: 4;
    }
    .whats {
        order: 5;
    }
    .phone1 {
        order: 6;
    }
    .phone2 {
        order: 7;
    }
    .more {
        order: 8;
    }
}
</style>
<div class="CTA-X">
    <h3>جهت سفارش پروژه، همکاری یا مشاوره رایگان باهام در ارتباط باش</h3>
    <h2 class="CTA-X__title-wrapper">
        <span>راه های ارتباطی سریع با من</span>
    </h2>
    <div class="CTA-X__content-wrapper">
        <a href="https://www.instagram.com/homow_dev" class="CTA-X__social-items-links instagram">
            <span>
                <i style="color:#0088cc;" class="fa-brands fa-instagram"></i>
                اینستاگرام من
            </span>
            homow_dev@
        </a>
        <a href="https://wa.me/989210629512" class="CTA-X__social-items-links whats">
            <span>
                <i style="color:#00897B;" class="fa-brands fa-whatsapp"></i>
                صفحه واتساپ
            </span>
            9512 062 921 98+
        </a>
        <a href="https://t.me/homow_dev" class="CTA-X__social-items-links tel-chat">
            <span>
                <i style="color:#0088cc;" class="fa-brands fa-telegram"></i>
                صفحه تلگرام
            </span>
            homow_dev@
        </a>
        <a href="tel:+989036364078" class="CTA-X__social-items-links phone1">
            <span>
                <i style="color:#00897B;" class="fa-solid fa-phone-volume"></i>
                شماره تماس اول
            </span>
            4078 636 903 98+
        </a>
        <a href="https://t.me/homow_portfolio" class="CTA-X__social-items-links tel-port">
            <span>
                <i style="color:#0088cc;" class="fa-brands fa-telegram"></i>
                چنل نمونه کار
            </span>
            homow_portfolio@
        </a>
        
        <a href="tel:+989210629512" class="CTA-X__social-items-links phone2">
            <span>
                <i style="color:#00897B;" class="fa-solid fa-phone-volume"></i>
                شماره تماس دوم
            </span>
            9512 062 921 98+
        </a>
        <a href="mailto:homow_dev@proton.me" class="CTA-X__social-items-links mail">
            <span>
                <i style="color:#0088cc;" class="fas fa-envelope"></i>
                ایمیل
            </span>
            homow_dev@proton.me
        </a>
        <a href="/contact/" class="CTA-X__social-items-links more">
            <span>
                <i style="color: #00897B;" class="fa-solid fa-comment-dots"></i>
                شبکه های اجتماعی و
            </span>
            راه ارتباطی بیشتر
        </a>
    </div>
</div>`

class CTAx extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

export {CTAx};
