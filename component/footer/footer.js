const createStyle = href => {
    const style = document.createElement("link")
    style.setAttribute("rel", "stylesheet")
    style.setAttribute("href", href)
    return style
}

const style = createStyle("component/footer/footer.css")

const template = document.createElement('template');

template.innerHTML = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css">
<div class="my-footer-wrapper">
<div class="footer__info-wrapper">
                <div class="footer__info">
                    <h2 class="footer__title">وبسایت شخصی همایون شریفی</h2>
                    <p>این وبسایت صرفاً جهت معرفی مهارت‌ها و تجربیات شخصی من طراحی شده است و هیچگونه فعالیت تجاری یا فروش محصول در آن انجام
                        نمی‌شود.</p>
                    <p>تمامی محتوای این سایت توسط خودم نوشته شده در بخش‌هایی از طراحی، الهام گرفته‌ام که به آن‌ها اشاره شده.</p>
                </div>
                <div class="footer__logo-wrapper">
                    <a href="index.html">
                        <img class="footer__logo" src="asset/logo/homow-logo-1-crop.png" alt="footer-logo" title="footer logo">
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
                        <li><a href="index.html"><i class="fa-solid fa-house"></i>خانه</a></li>
                        <li><a href="about-me.html"><i class="fa-solid fa-code"></i>من کی ام؟</a></li>
                        <li><a href="contact.html"><i class="fa-solid fa-headset"></i>راه های ارتباطی</a></li>
                        <li><a href="about-site.html"><i class="fa-solid fa-circle-info"></i>درباره سایت</a></li>
                    </ul>
                </div>

                <div class="footer__contact">
                    <h3>ارتباط</h3>
                    <div class="footer__icon-wrapper">
                        <a href="https://wa.me/989210629512" target="_blank" title="واتساپ">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                        <a href="tel:+989210629512" title="تماس 2">
                            <i class="fas fa-phone-alt"></i>
                        </a>
                        <a href="tel:+989036364078" title="تماس 1">
                            <i class="fas fa-phone"></i>
                        </a>
                        <a href="mailto:homayoun.sharifi80@gmail.com" title="ایمیل">
                            <i class="fas fa-envelope"></i>
                        </a>
                        <a href="https://t.me/homow_dev" target="_blank" title="تلگرام">
                            <i class="fab fa-telegram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="footer__copyright">
                <p>© 2025 تمامی حقوق این وبسایت برای <a href="https://homow.ir">homow.ir</a> محفوظ میباشد و فقط قسمت کوچیکی از سایت ایده برداری شده که
                    در صفحه <a href="/about">«درباره من»</a> ذکر کرده ام. </p>
                <p> آزاد برای دیدن، الهام‌ گرفتن و ساختن، نه کپی برداری. لطفاً احترام به حقوق این وبسایت را رعایت کنید و
                    درصورت ایده برداری، مانند من منبع را ذکر کنید.</p>
            </div>
</div>`;

class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(style)
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

export {Footer};
