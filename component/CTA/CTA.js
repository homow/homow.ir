const template = document.createElement('template');

template.innerHTML = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css">
<style>
a {
    text-decoration: none;
    color: inherit;
}
.CTA-phone {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}
.primary-button {
    color: var(--primary__white);
    background-color: var(--primary__black);
    border-radius: 4px;
    padding: 0.5rem 1rem;
    display: flex;
    transition: 300ms;
    width: fit-content;
    align-items: baseline;
    gap: .5rem;
}
.primary-button:hover {
    background-color: var(--primary__hover) !important;
}
.contact-to-me-btn-arrow {
    margin-top: 2.4rem;
    justify-self: center;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    text-decoration: none;
    font-weight: 500;
    padding: 12px 16px;
    border-radius: 8px;
    transition: all 0.3s ease;
    direction: rtl;
    background-color: transparent;
}
.contact-to-me-btn-arrow:hover {
    padding-right: 24px;
    background-color: rgba(0, 0, 0, 0.04);
}
.contact-to-me-btn-arrow i {
    transition: transform 0.3s ease, margin 0.3s ease;
    font-size: 14px;
}
.contact-to-me-btn-arrow i {
    transition: transform 0.3s ease, margin 0.3s ease;
    font-size: 14px;
}
p {
    margin: 1rem 0 2rem 0;
    text-align: center;
}
.contact-to-me-btn-arrow:hover i {
    transform: translateX(-4px);
}
html.dark .contact-to-me-btn-arrow:hover {
    background-color: rgba(0, 0, 0, 0.24);
}
@media only screen and (max-width: 450px) {
    .CTA-phone {
        font-size: 14px;
    }
}
@media only screen and (max-width: 420px) {
    .CTA-phone {
        flex-direction: column;
    }
}
</style>
<p>جهت همکاری، سفارش پروژه یا مشاوره رایگان باهام در ارتباط باش.</p>
<div class="CTA-phone center-flex-item ">
    <a href="tel:+989036364078" class="contact-to-me-btn primary-button"><i class="fa-solid fa-phone-volume"></i>تماس مستقیم 1</a>
    <a href="tel:+989210629512" class="contact-to-me-btn primary-button"><i class="fa-solid fa-phone-volume"></i>تماس مستقیم 2</a>
</div>
<a href="/contact/" class="CTA-more-contact contact-to-me-btn-arrow">
    <i class="fa-solid fa-headphones"></i>
    دیگر راه های ارتباطی
    <i class="fas fa-arrow-left"></i>
</a>`

class CTA extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

export {CTA};
