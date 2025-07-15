import * as customObserver from "/js/main.js"
import {TextBoxList} from "/component/text-box-list/text-box-list.js"
import {CustomForm} from "/component/custom-form/custom-form.js";

window.customElements.define("text-box-list", TextBoxList);
window.customElements.define("custom-form", CustomForm);

const title = document.getElementById("title")
const topMainLaptop = document.querySelector(".top-main__lap-top")
const topMainPerson = document.querySelector(".top-main__person")
const img = document.querySelector('.contact-wrapper-img');

customObserver.runObserver(title, customObserver.typingAnimations, {})
customObserver.runObserver(topMainPerson, customObserver.addClassName.bind(null, [[topMainLaptop, "push-down-lap-top"]]), {})

img.addEventListener('mouseenter', () => {
    if (!img.classList.contains('hover-anim')) {
        img.classList.add('hover-anim');

    }
});
