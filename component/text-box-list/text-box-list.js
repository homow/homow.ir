const template = document.createElement("template");
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
    text-decoration: none;
    color: inherit;
}
a:hover {
    color: #5e5f64 !important;
    text-shadow: 0 0 5px #5e5f64;
}
.text-list-wrapper li {
    list-style-type: none;
    display: flex;
    gap: 0.5rem;
    padding-right: 1rem;
    margin-top: .4rem;
}
.text-list-wrapper i {
    font-size: 1.4rem;
}
[slot=text-list] {
    padding: 1.2rem 0 1rem 0;
    border-radius: 6px;
    transition: all 250ms;
}
[slot=text-list]:hover {
    background-color: var(--box-hover);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
}

html.dark [slot=text-list]:hover {
    color: rgba(248, 248, 248, 0.91);
}

@media only screen and (min-width: 800px) {
    .title-list-wrapper {
        font-size: 1.6rem;
    }
    .text-list-wrapper {
        font-size: 18px;
    }
}
@media only screen and (max-width: 500px) {
    .title-list-wrapper {
        font-size: 1.35rem;
    }
}
@media only screen and (max-width: 400px) {
    .text-list-wrapper li {
        padding-right: .4rem;
    }
}
</style>
<h2 class="title-list-wrapper">
<i></i>
<span></span>
</h2>
<ul class="text-list-wrapper"></ul>`;

class TextBoxList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const icon = this.dataset.icon;
        const color = this.dataset.color;
        const title = this.shadowRoot.querySelector(".title-list-wrapper");
        title.querySelector("i").className = icon;
        title.querySelector("i").style.color = color;
        title.querySelector("span").textContent = this.dataset.title;

        const wrapper = this.shadowRoot.querySelector('.text-list-wrapper');
        const slot = this.querySelectorAll("[slot=text-list]")
        const fragment = document.createDocumentFragment();

        slot.forEach(slot => {
            const icon = document.createElement("i")
            icon.className = slot.dataset.icon
            icon.style.color = slot.dataset.color;

            const clone = slot.cloneNode(true);
            clone.insertAdjacentElement("afterbegin", icon);
            fragment.appendChild(clone);
        })

        fragment && wrapper.appendChild(fragment);
    }
}

export {TextBoxList};
