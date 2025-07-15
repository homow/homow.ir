import * as customObserver from "/js/main.js"
import {createTitleTextImg} from "/component/title-text-img/title-text-img.js";
import {codeGraphyData} from "/code-graphy/data/code-graphy-data.js"
import {CustomForm} from "/component/custom-form/custom-form.js";
import {CTAx} from "/component/CTA-X/CTA-X.js";

window.customElements.define("custom-form", CustomForm)
window.customElements.define("cta-x", CTAx)

const title = document.getElementById("title")
const aboutSiteWrapper = document.querySelector(".about-site-content")
const aboutSiteTech = document.querySelector(".about-site__tech")

customObserver.runObserver(title, customObserver.typingAnimations, {})
customObserver.runObserver(aboutSiteTech, customObserver.addClassName.bind(null, [[aboutSiteTech, "animate-tech"]]), {})
aboutSiteWrapper.appendChild(createTitleTextImg(codeGraphyData))
