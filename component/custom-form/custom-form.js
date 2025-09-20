const template = document.createElement('template');

template.innerHTML = `
<style>
.glass-morphism-box {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
#custom-form {
    position: relative;
    margin-top: 8rem;
    box-shadow: var(--box-shadow);
    border-radius: 12px;
}

#custom-form * {
    font-size: 1.1rem;
}

.img-form {
    width: 20%;
    position: absolute;
    left: -10%;
    top: -10%;
    z-index: -1;
    animation: upDown 4s infinite;
}

@keyframes upDown {
    50% {
        transform: translateY(-50%);
    }
}

.img-form.stop {
    animation: none;
}

.img-form img {
    width: 100%;
    transform: rotate(-36deg);
}

#custom-form p {
    padding: 4rem 0 2rem 0;
    text-align: center;
    max-width: 50%;
    justify-self: center;
    line-height: 40px;
    margin-left: auto;
    margin-right: auto;
}

.form-status {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 7rem;
    border-radius: 12px;
    background-color: var(--background);
    transition: all 600ms ease;
}

.form-status button {
    color: var(--nav-menu__bg-color) !important;
    background-color: var(--primary__gery);
}

.show-form-status {
    opacity: 1;
    visibility: visible;
    z-index: 3;
    pointer-events: all;
}
#custom-form form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    border-radius: 12px;
    padding: 2rem 1rem;
    z-index: 1;
    position: relative;
}
#custom-form form img {
    position: absolute;
    top: 11%;
    left: 7%;
    width: 15%;
    z-index: -1;
}
#custom-form form label {
    max-width: 600px;
    width: 100%;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}
#custom-form form label * {
    outline: none;
    width: 100%;
    height: 100%;
    padding: .5rem;
    font-family: "dana medium", serif;
    color: var(--primary__black);
}
#custom-form form *::placeholder {
    color: #8d8c8c;
}
#textarea-label {
    height: 200px;
}
#textarea-label textarea {
    resize: none;
}
#custom-form form button, .form-status button {
    border: none;
    outline: none;
    padding: 1rem 3rem;
    cursor: pointer;
    font-family: 'dana medium', serif;
    color: var(--primary__black);
    border-radius: 44px !important;
    transition: all 400ms;
}
#custom-form form button:hover, .form-status button:hover {
    background-color: var(--background__version-header);
}
@media only screen and (max-width: 1200px) {
    .img-form {
        left: 10%;
        top: -13%;
    }
}
@media only screen and (max-width: 820px) {
    .img-form {
        width: 25%;
    }
}
@media only screen and (max-width: 700px) {
    .img-form {
        width: 28%;
    }
}
@media only screen and (max-width: 600px) {
    #custom-form * {
        font-size: 1rem !important;
    }

    #textarea-label {
        height: 150px;
    }

    #custom-form form button {
        padding: 0.6rem 3rem;
    }

    #custom-form form {
        gap: 1.5rem;
    }

    #custom-form p {
        padding: 4rem 0 0 0;
        line-height: 30px;
        font-size: 15px !important;
        max-width: 70%;
    }

    .img-form {
        top: -17%;
    }
}
@media only screen and (max-width: 540px) {
    .img-form {
        top: -13%;
    }
}
@media only screen and (max-width: 500px) {
    #custom-form form img {
        top: 10%;
        left: 6%;
        width: 20%;
    }
}
@media only screen and (max-width: 450px) {
    .img-form {
        top: -9%;
    }
}
@media only screen and (max-width: 360px) {
    #custom-form * {
        font-size: 14px !important;
    }
    .img-form {
        top: -6%;
    }
}
</style>
<div id="custom-form">
<div class="img-form">
    <img loading="lazy" src="/asset/img/contact/mail.webp" alt="mail picture">
</div>
<p>
    اگه حرفی، انتقادی، نظری، پیشنهادی یا حتی برای ارتباط سریع، میتونید با این فرم باهام حرف بزنید
</p>
<div class="form-status">
    <span>پیامت بهم رسید، جواب میدم بزودی</span>
    <button class="primary-button">Done</button>
</div>
<form>
    <img loading="lazy" src="/asset/img/contact/send.webp" alt="send picture">
    <label id="name-label">
        <input class="glass-morphism-box" type="text" name="firstName" placeholder="اسم" required autocomplete="on">
    </label>
    <label id="email-label">
        <input class="glass-morphism-box" type="email" name="emailAddress" placeholder="ایمیل" required autocomplete="on">
    </label>
    <label id="number-label">
        <input class="glass-morphism-box" type="tel" dir="rtl" name="phoneNumber" placeholder="شماره تلفن (اختیاری)" autocomplete="on">
    </label>
    <label id="textarea-label">
        <textarea class="glass-morphism-box" name="message" placeholder="پیام" required></textarea>
    </label>
    <input type="hidden" name="_captcha" value="false">
    <button class="glass-morphism-box" type="submit">ارسال</button>
</form>
</div>`

class CustomForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const form = this.shadowRoot.querySelector('#custom-form form');
        const formStatus = this.shadowRoot.querySelector('.form-status');
        const formStatusText = this.shadowRoot.querySelector('.form-status span');
        const formStatusBtn = this.shadowRoot.querySelector('.form-status button');

        form.addEventListener('submit', async e => {
            e.preventDefault()
            const formData = new FormData(form)

            await fetch('https://formsubmit.co/ajax/ae0abba33882b07073f2bb3a79835337', {
                method: 'POST',
                headers: {"Accept": "application/json"},
                body: formData,
            })
                .then(r => {
                    formStatus.classList.add('show-form-status')
                    if (r.ok) {
                        formStatusText.textContent = "پیامت بهم رسید، بزودی بهت جواب میدم"
                        form.reset()
                    } else {
                        formStatusText.textContent = "مثل اینکه پیامت بهم نرسید، دوباره بفرست"
                    }
                })
                .catch(() => {
                    formStatus.classList.add('show-form-status')
                    formStatusText.textContent = "فکر کنم سرور خرابه، بعدا دوباره تلاش کن"
                })
        })

        formStatusBtn.addEventListener('click', () => {
            formStatus.classList.remove('show-form-status')
        })
    }
}

export {CustomForm};
