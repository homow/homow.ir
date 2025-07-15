const template = document.createElement('template');

template.innerHTML = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css">
<style>
a {
    text-decoration: none;
    color: inherit;
}
.CTA-X {
    border-radius: 12px;
    padding: 8rem 1rem 2rem 1rem;
    background-color: var(--background__pink);
    position: relative;
}
html.dark .CTA-X {
    color: #fff;
}
.CTA-X__title-wrapper {
    margin-bottom: 4rem;
}
.CTA-X__title-wrapper i {
    color: #6E8E59;
}
.CTA-X__content-wrapper, .CTA-X__title-wrapper {
    text-align: start;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
}
.CTA-X__content-wrapper a {
    display: block;
    font-size: 1.2rem;
    padding: 1.4rem 2rem;
    transition: all .15s;
}
.CTA-X__content-wrapper a:hover {
    color: #5e5f64;
    text-shadow: 0 0 5px #5e5f64;
    background-color: var(--box-hover);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
    border-radius: 12px;
}
.CTA-X__content-wrapper a:not(:first-child) {
    margin-top: .4rem;
}
.CTA-X__content-wrapper a i {
    font-size: 1.5rem;
}
@media only screen and (max-width: 480px) {
    .CTA-X a {
        font-size: 1rem;
        padding: 1rem 1.4rem;
    }
}
@media only screen and (max-width: 390px) {
    .CTA-X__title-wrapper {
        font-size: 1.3rem;
    }
    .CTA-X a {
        font-size: .9rem;
        padding: .8rem .3rem .8rem 1rem;
    }
    .CTA-X a i {
        font-size: 1.1rem;
    }
    .CTA-X {
        padding: 8rem .35rem 2rem .35rem;
    }
}
@media only screen and (max-width: 320px) {
    .CTA-X a {
        font-size: .75rem;
    }
    .CTA-X__title-wrapper {
        font-size: 1.1rem;
        margin-bottom: 2rem;
    }
}
</style>
<div class="CTA-X">
    <h2 class="CTA-X__title-wrapper">
        <i class="fa-solid fa-mobile-screen"></i>
        <span>راه های ارتباطی سریع با من:</span>
    </h2>
    <div class="CTA-X__content-wrapper">
        <a href="https://www.instagram.com/homow_dev">
            <i style="color:#B13BFF;" class="fa-brands fa-instagram"></i>
            اینستاگرام: homow_dev@
        </a>
        <a href="https://t.me/HomowDev">
            <i style="color:#0088cc;" class="fa-brands fa-telegram"></i>
            چنل تلگرام: HomowDev@
        </a>
        <a href="https://t.me/homow_dev">
            <i style="color:#0088cc;" class="fa-brands fa-telegram"></i>
            چت تلگرام: homow_dev@
        </a>
        <a href="https://wa.me/989210629512">
            <i style="color:#00B489;" class="fa-brands fa-whatsapp"></i>
            واتساپ: 9512 062 921 98+
        </a>
        <a href="mailto:homow_dev@proton.me">
            <i style="color:#E55050;" class="fa-solid fa-envelope-circle-check"></i>
            ایمیل: homow_dev@proton.me
        </a>
        <a href="tel:+989036364078">
            <i style="color:#FA812F;" class="fa-solid fa-phone-volume"></i>
            شماره تماس اول: 4078 636 903 98+
        </a>
        <a href="tel:+989210629512">
            <i style="color:#657C6A;" class="fa-solid fa-phone-volume"></i>
            شماره تماس دوم: 9512 062 921 98+
        </a>
        <a href="/contact/">
            <i style="color: #097773;" class="fa-solid fa-comment-dots"></i>
            شبکه های اجتماعی و راه ارتباطی بیشتر
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
