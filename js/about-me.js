import * as customObserver from '/js/main.js';
import {TextBoxIcon} from '/component/text-boxIcon/text-boxIcon.js';

const titleText = document.querySelector('.title__text span:first-child');
const reqToDev = document.querySelector(".req-to-develop__sub")
const reqToDevWrapper = document.querySelector(".about-site-img")

customObserver.runObserver(titleText, customObserver.typingAnimations, {})
customObserver.runObserver(reqToDevWrapper, customObserver.addClassName.bind(null, [[reqToDev, "add-animate-to-dev"]]), {})

window.customElements.define('text-box-icon', TextBoxIcon);
