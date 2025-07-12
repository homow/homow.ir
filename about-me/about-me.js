import * as customObserver from '/js/main.js';
import {aboutMySkills} from "/about-me/data/about-me-data.js";
import {createTextBoxIcon} from "/component/text-box-icon/text-box-icon.js";

const titleText = document.querySelector('.title__text span:first-child');
const reqToDev = document.querySelector(".req-to-develop__sub")
const reqToDevWrapper = document.querySelector(".about-site-img")
const wrapper = document.getElementById("skills-box");

customObserver.runObserver(titleText, customObserver.typingAnimations, {})
customObserver.runObserver(reqToDevWrapper, customObserver.addClassName.bind(null, [[reqToDev, "add-animate-to-dev"]]), {})

wrapper.appendChild(createTextBoxIcon(aboutMySkills));
