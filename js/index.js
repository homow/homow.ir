import * as customObserver from '/js/main.js';
import {TextBoxList} from "/component/text-box-list/text-box-list.js"
import {CTAx} from "/component/CTA-X/CTA-X.js";
import {CustomForm} from "/component/custom-form/custom-form.js";

window.customElements.define("text-box-list", TextBoxList);
window.customElements.define("cta-x", CTAx)
window.customElements.define("custom-form", CustomForm)

const versionHeader = document.querySelector('.version-header');
const terminal = document.querySelector('.terminal');
const jsCode = terminal.querySelector(".js-code p")
const buttonAnimate = terminal.querySelector(".button-animate p");
const buttonEvent = terminal.querySelector(".rotating-btn-wrapper");
const terminalText = terminal.querySelector(".open-text")
const codeLine = terminal.querySelector(".code-line")
const terminalCodeWrapper = document.querySelector(".terminal__code-wrapper");
const allTextTerminal = terminalText.querySelectorAll(".open-text__p")
const webStormCodes = document.querySelector('.webstorm-coding-wrapper');
const webStormJsCode = webStormCodes.querySelector(".webstorm-js-coding")
const matrixImg = document.querySelector(".terminal__matrix-img")
const noteEditor = document.querySelector(".note-editor");
const aboutSkills = document.querySelector(".about-skills-wrapper");

// change terminal style
buttonEvent.addEventListener("click", async () => {
    await backspaceTypingAnimations(jsCode);
    await backspaceTypingAnimations(buttonAnimate);

    customObserver.addClassName([
        [terminalCodeWrapper, "un-active"],
        [terminalText, "active-text"],
        [matrixImg, "active-matrix"]
    ])

    for (const el of allTextTerminal) {
        await typingTerminalText(el);
    }

    codeLine.classList.add("code-line__no-animation");
}, {once: true});

const typingTerminalText = el => {
    return customObserver.typeText(el, el.dataset.text, +el.dataset.speed);
}

// delete text
const backspaceTyping = (elem, speed) => {
    return new Promise(resolve => {
        let index = elem.textContent.length;
        let start = null;

        function step(timestamp) {
            start = start || timestamp;
            const elapsed = timestamp - start;

            if (elapsed > speed && index) {
                index--;
                elem.textContent = elem.textContent.substring(0, index);
                start = timestamp;
            }

            if (index > 0) {
                requestAnimationFrame(step);
            } else {
                resolve();
            }
        }

        requestAnimationFrame(step);
    });
};

// delete text
const backspaceTypingAnimations = elem => {
    const speed = +elem.dataset.speed;
    return backspaceTyping(elem, speed);
}

// code editor
const showNoteEditor = () => {
    const codes = document.querySelectorAll('.note-editor-inset');
    codes.forEach(code => code.classList.add("back-to-inset"))
    document.querySelector(".js-ball").classList.add("js-ball-animate");
}

// typing and animations
customObserver.runObserver(versionHeader, customObserver.typingAnimations, {thr: 1});

(async () => {
    await customObserver.runObserver(jsCode, customObserver.typingAnimations, {thr: 1});
    await customObserver.runObserver(buttonAnimate, customObserver.typingAnimations, {advanced: customObserver.addClassName.bind(null, [[buttonEvent, "active"]]), delay: 3000, once: true, thr: 1});
})();

customObserver.runObserver(aboutSkills, customObserver.addClassName.bind(null, [[aboutSkills, "about-skills-wrapper-animate"]]), {thr: .1})
customObserver.runObserver(webStormJsCode, customObserver.addClassName.bind(null, [[webStormCodes, ["show-css", "show-html"]]]), {});
customObserver.runObserver(noteEditor, showNoteEditor, {})
