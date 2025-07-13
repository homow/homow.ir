import * as customObserver from "/js/main.js"
import {createTitleTextImg} from "/component/title-text-img/title-text-img.js";
import {aboutSiteData} from "/about-site/data/about-site-data.js"

const title = document.getElementById("title")
const aboutSiteWrapper = document.querySelector(".about-site-content")

customObserver.runObserver(title, customObserver.typingAnimations, {})

aboutSiteWrapper.appendChild(createTitleTextImg(aboutSiteData))
