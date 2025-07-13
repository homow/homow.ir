import {addStyle} from "/component/main/createTagLink.js";

addStyle("/component/text-box-icon/text-box-icon.css");

const createTextBoxIcon = data => {
    const textBoxIconWrapper = document.createElement('div');
    textBoxIconWrapper.className = "text-box-icon-wrapper";

    data.forEach(box => {
        // main wrapper
        const wrapper = document.createElement("div")
        wrapper.className = "text-box-icon"
        wrapper.addEventListener("mouseenter", () => wrapper.querySelector("i").classList.add("slideIn-Animate"))
        wrapper.addEventListener("mouseleave", () => wrapper.querySelector("i").classList.remove("slideIn-Animate"))
        // title
        const title = document.createElement("h2")
        title.className = "text-box-icon__title-wrapper"

        // icon
        const icon = document.createElement("i")
        icon.className = box.dataIcon
        icon.style.color = box.dataColor

        // title text
        const titleText = document.createElement("span")
        titleText.className = "text-box-icon__title"
        titleText.textContent = box.dataTitle

        // sub text
        const textWrapper = document.createElement("div");
        textWrapper.className = "text-box-icon__text-wrapper";

        box.dataText.forEach(text => {
            const textSubWrapper = document.createElement("div")
            textSubWrapper.className = "text-box-icon__text"
            textSubWrapper.insertAdjacentHTML("beforeend", `<span style="background-color: ${box.dataColor};" class="text-box__circle"></span><p>${text}</p>`)
            textWrapper.appendChild(textSubWrapper)
        })

        title.append(icon, titleText)
        wrapper.append(title, textWrapper)
        textBoxIconWrapper.appendChild(wrapper)
    })

    return textBoxIconWrapper
}

export {createTextBoxIcon}
