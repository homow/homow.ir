import * as customObserver from "/js/main.js"
import {createTitleTextImg} from "/component/title-text-img/title-text-img.js";
import {aboutSiteData} from "/about-site/data/about-site-data.js"

const title = document.getElementById("title")
const aboutSiteWrapper = document.querySelector(".about-site-content")
const aboutSiteTech = document.querySelector(".about-site__tech")

customObserver.runObserver(title, customObserver.typingAnimations, {})
customObserver.runObserver(aboutSiteTech, customObserver.addClassName.bind(null, [[aboutSiteTech, "animate-tech"]]), {})
aboutSiteWrapper.appendChild(createTitleTextImg(aboutSiteData))
