import * as customObserver from '/js/main.js';
import {aboutMySkills} from "/about-me/data/about-me-data.js";
import {createTextBoxIcon} from "/component/text-box-icon/text-box-icon.js";
import {CTAx} from "/component/CTA-X/CTA-X.js";
import {CustomForm} from "/component/custom-form/custom-form.js";

window.customElements.define("cta-x", CTAx)
window.customElements.define("custom-form", CustomForm)

const titleText = document.querySelector('.title__text span:first-child');
const reqToDev = document.querySelector(".req-to-develop__sub")
const reqToDevWrapper = document.querySelector(".req-to-develop-wrapper")
const wrapper = document.getElementById("skills-box");

customObserver.runObserver(titleText, customObserver.typingAnimations, {})
customObserver.runObserver(reqToDevWrapper, customObserver.addClassName.bind(null, [[reqToDev, "add-animate-to-dev"]]), {thr: .5})

wrapper.appendChild(createTextBoxIcon(aboutMySkills));
