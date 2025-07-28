const template = document.createElement('template');

template.innerHTML = `<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css">
<style>
html {
    box-sizing: border-box;
}
*,
*::after,
*::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}

.footer__info-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
}

.footer__info {
    flex-basis: 50%;
}

.footer__info p:last-child {
    margin-top: 1rem;
}

.footer__title {
    font-family: var(--bold-font), serif;
    margin-bottom: 1rem;
}

.footer__logo-wrapper {
    max-width: 300px;
}

.footer__logo-wrapper a {
    width: 100%;
}

.footer__logo {
    width: 100%;
    border-radius: 6px;
}

.footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;
    border-top: var(--border__footer);
    padding-top: 2rem;
}

.my-footer-wrapper h3 {
    font-family: var(--bold-font), serif;
    font-size: 1.4rem;
    margin-bottom: 10px;
}

.footer__about p {
    max-width: 470px;
}

.footer__links a {
    display: flex;
    gap: .4rem;
    align-items: baseline;
}

.footer__links h3 {
    text-align: right;
}

.my-footer-wrapper p,
.my-footer-wrapper a {
    font-size: 0.95rem;
    text-decoration: none;
    line-height: 1.8;
}

.my-footer-wrapper a {
    color: var(--footer__link);
}

.my-footer-wrapper ul {
    padding: 0;
    list-style: none;
}

.my-footer-wrapper ul li {
    margin-bottom: 8px;
}

.footer__icon-wrapper {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: .4rem;
}
.footer__contact i {
    font-size: 2rem;
    margin: 0 0.5rem;
    transition: transform ease;
    color: #096d9d;
}
.footer__contact i:hover {
    transform: scale(1.08);
}
.footer__copyright {
    text-align: center;
    margin-top: 40px;
    font-size: 0.8rem;
    border-top: var(--border__footer);
    padding-top: 20px;
}
.footer__copyright p:first-child {
    margin-bottom: .8rem;
}
.footer__copyright p:last-child {
    font-weight: 600;
}
.footer__copyright a, .footer__info a {
    font-family: 'dana extrabold', serif;
    text-decoration: underline;
}
.footer__copyright a:hover, .footer__links a:hover, .footer__info a:hover {
    color: #5e5f64;
    text-shadow: 0 0 5px #5e5f64;
}
/* footer-responsive */

@media only screen and (max-width: 990px) {
    .footer__info-wrapper {
        flex-direction: column-reverse;
        align-items: center;
        gap: 2rem;
    }

    .footer__info {
        text-align: center;
    }

    .footer__logo-wrapper {
        max-width: 250px;
    }

    .footer__info {
        max-width: 95%;
    }
}
@media only screen and (max-width: 500px) {
    .footer-container {
        justify-content: center;
        text-align: center;
        align-items: center;
        flex-direction: column;
    }

    .footer__about {
        max-width: 95%;
    }

    .footer__logo-wrapper {
        max-width: 180px;
    }
}
@media only screen and (max-width: 350px) {
    .footer__title {
        max-width: 160px;
        place-self: center;
    }

    .my-footer-wrapper p, .my-footer-wrapper a {
        font-size: 0.85rem;
    }
}
@media only screen and (max-width: 300px) {
    .footer__icon-wrapper {
        gap: 0;
    }
}
</style>
<div class="my-footer-wrapper">
<div class="footer__info-wrapper">
                <div class="footer__info">
                    <h2 class="footer__title">وبسایت شخصی همایون شریفی</h2>
                    <p>وبسایت <a href="https://homow.ir">homow</a> صرفاً جهت معرفی مهارت‌ها و تجربیات شخصی من طراحی شده است و هیچگونه فعالیت تجاری یا فروش محصول در آن انجام
                        نمی‌شود.</p>
                    <p>تمامی محتوای این سایت توسط خودم نوشته شده در بخش‌هایی از طراحی، الهام گرفته‌ام که به آن‌ها اشاره شده.</p>
                </div>
                <div class="footer__logo-wrapper">
                    <a href="/">
                        <img class="footer__logo" src="/asset/logo/logo.webp" loading="lazy" decoding="async" alt="footer-logo" title="footer logo">
                    </a>
                </div>
            </div>

            <div class="footer-container">
                <div class="footer__about">
                    <h3>درباره من</h3>
                    <p>همایون شریفی، توسعه دهنده وب و عاشق کدنویسی; عاشق تولید محیط هایی که زنده بنظر میرسن و نفس میکشن، مثل همین وبسایت، خوشحال میشم ازم حمایت کنید.</p>
                </div>

                <div class="footer__links">
                    <h3>صفحه ها</h3>
                    <ul>
                        <li><a href="/"><i class="fa-solid fa-house"></i>خانه</a></li>
                        <li><a href="/about-me/"><i class="fa-solid fa-user"></i>من کی ام؟</a></li>
                        <li><a href="/contact/"><i class="fa-solid fa-headset"></i>راه های ارتباطی</a></li>
                        <li><a href="/code-graphy/"><i class="fa-solid fa-code"></i>کدگرافی</a></li>
                    </ul>
                </div>

                <div class="footer__contact">
                    <h3>ارتباط سریع</h3>
                    <div class="footer__icon-wrapper">
                        <a href="tel:+989036364078" title="تماس">
                            <i class="fas fa-phone-alt"></i>
                        </a>
                        <a href="https://www.instagram.com/homow_dev" title="اینستاگرام">
                            <i class="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://t.me/homow_dev" target="_blank" title="تلگرام">
                            <i class="fab fa-telegram"></i>
                        </a>
                        <a href="mailto:homow_dev@proton.me" title="ایمیل">
                            <i class="fas fa-envelope"></i>
                        </a>
                        <a href="https://wa.me/989210629512" target="_blank" title="واتساپ">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="footer__copyright">
                <p>© 2025 تمامی حقوق این وبسایت برای <a href="https://homow.ir">homow.ir</a> محفوظ میباشد و فقط قسمت کوچیکی از سایت ایده برداری شده که
                    در صفحه <a href="/code-graphy/">«کدگرافی»</a> ذکر کرده ام. </p>
                <p> آزاد برای دیدن، الهام‌ گرفتن و ساختن، نه کپی برداری. لطفاً احترام به حقوق این وبسایت را رعایت کنید و
                    درصورت ایده برداری، مانند من منبع را ذکر کنید.</p>
            </div>
</div>`;

class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

export {Footer};
