import * as customObserver from "/js/main.js"
import {TextBoxList} from "/component/text-box-list/text-box-list.js"

window.customElements.define("text-box-list", TextBoxList);

const title = document.getElementById("title")
const topMainLaptop = document.querySelector(".top-main__lap-top")
const topMainPerson = document.querySelector(".top-main__person")
const img = document.querySelector('.contact-wrapper-img');
const form = document.querySelector('#custom-form form');
const formStatus = document.querySelector('.form-status');
const formStatusText = document.querySelector('.form-status span');
const formStatusBtn = document.querySelector('.form-status button');

customObserver.runObserver(title, customObserver.typingAnimations, {})
customObserver.runObserver(topMainPerson, customObserver.addClassName.bind(null, [[topMainLaptop, "push-down-lap-top"]]), {})

img.addEventListener('mouseenter', () => {
    if (!img.classList.contains('hover-anim')) {
        img.classList.add('hover-anim');

    }
});

form.addEventListener('submit', async e => {
    e.preventDefault()
    const formData = new FormData(form)

    await fetch('https://formsubmit.co/ajax/homow_dev@outlook.com', {
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
