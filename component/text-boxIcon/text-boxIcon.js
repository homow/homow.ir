const template = document.createElement('template');

template.innerHTML = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css">
<style>
html {
    box-sizing: border-box;
}    
*,
*::after,
*::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}
a {
    color: inherit;
}
.text-box-wrapper {
    padding-right: 1rem;
}
.text-box-sub-wrapper {
    display: flex;
    align-items: baseline;
}
.title-box-wrapper {
    margin: 1rem 0;
}
.text-box-wrapper p {
    padding-right: 0.5rem;
}
.text-box-sub-wrapper:not(:last-child) {
    margin-bottom: 1rem;
}
.circle {
    display: block;
    min-width: 6px;
    min-height: 6px;
    border-radius: 100%;
}
.slideIn-Animate {
    animation: slideIn 1s forwards;
}
@keyframes slideIn {
    0% {
      transform: translateX(0) scale(1);
    }
    50% {
      transform: translateX(-400%) scale(1.5);
    }
    100% {
      transform: translateX(0) scale(1);
    }
}
@media only screen and (max-width: 510px) {
    .title-box {
        font-size: 1.2rem;
    }
    .text-box-sub-wrapper {
        font-size: 0.9rem;
    }
}
@media only screen and (max-width: 415px) {
    .title-box {
        font-size: 1.1rem;
    }
    .text-box-sub-wrapper:not(:last-child) {
        margin-bottom: .8rem;
    }
}
</style>

<h2 class="title-box-wrapper">
    <i id="icon-box"></i>
    <span class="title-box"></span>
</h2>

<div class="text-box-wrapper"></div>`;

class TextBoxIcon extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const wrapper = this.shadowRoot.querySelector('.text-box-wrapper');
        const allTextBox = this.querySelectorAll("[slot=text]");
        const fragment = document.createDocumentFragment();

        allTextBox.forEach(el => {
            const textWrapper = document.createElement("div")
            textWrapper.classList.add("text-box-sub-wrapper");

            const circle = document.createElement('span');
            circle.className = 'circle';

            const clone = el.cloneNode(true);

            textWrapper.appendChild(circle);
            textWrapper.appendChild(clone);
            fragment.appendChild(textWrapper);
        })

        fragment && wrapper.appendChild(fragment);

        const dataColor = this.dataset.color;
        const dataTitle = this.dataset.title;
        const dataIcon = this.dataset.icon;

        const title = this.shadowRoot.querySelector(".title-box");
        const icon = this.shadowRoot.querySelector("#icon-box");

        this.shadowRoot.querySelectorAll(".circle").forEach(el => el.style.backgroundColor = dataColor);

        title.textContent = dataTitle
        icon.className = dataIcon;
        icon.style.color = dataColor;

        // event
        this.addEventListener("mouseenter", () => this.shadowRoot.querySelector('#icon-box').classList.add("slideIn-Animate"))
        this.addEventListener("mouseleave", () => this.shadowRoot.querySelector('#icon-box').classList.remove("slideIn-Animate"))
    }
}

export {TextBoxIcon};
