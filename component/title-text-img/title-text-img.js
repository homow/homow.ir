import {createTagLink} from "/component/main/createTagLink.js";

const addStyle = href => {
    const styleTag = createTagLink(href);

    const head = document.querySelectorAll("head link[rel=stylesheet]")
    head[head.length - 1].insertAdjacentElement("afterend", styleTag);
}

addStyle("/component/title-text-img/title-text-img.css");

const catchAlt = path => {
    const match = path.match(/([^\/]+)(?=\.[^\/]+$)/);
    return match ? match[0] : null;
};

export const createTitleTextImg = data => {
    const wrapper = document.createElement("div");
    wrapper.className = "title-text-img-wrapper";

    data.forEach(item => {
        const subWrapper = document.createElement("div");
        subWrapper.className = "title-text-img-sub-wrapper";

        const allTextWrapper = document.createElement("div");
        allTextWrapper.className = "title-text-img__all-text-wrapper glass-morphism-box";

        const title = document.createElement("h3");
        title.className = "title-text__title";
        title.textContent += item.title;
        allTextWrapper.appendChild(title);

        const icon = document.createElement("i")
        icon.className = item.icon

        title.insertAdjacentElement("afterbegin", icon);

        const textWrapper = document.createElement("div");
        textWrapper.className = "title-text__text-wrapper";

        item.text.forEach(t => {
            const text = document.createElement("p");
            text.className = "title-text-img__text";
            text.innerHTML = `${t}`;
            textWrapper.appendChild(text);
        })

        allTextWrapper.appendChild(textWrapper);

        const imgWrapper = document.createElement("div");
        imgWrapper.className = "title-text__img-wrapper";

        item.imgData.forEach(imgSrc => {
            const imgWrapperSub = document.createElement("div");
            const imgTag = document.createElement("img");
            imgTag.src = `${imgSrc}`;
            imgTag.loading = "lazy";
            imgTag.alt = catchAlt(imgSrc);
            imgTag.className = "zoom-in-this-img";
            imgTag.dataset.zoomSrc = `${imgSrc}`;
            imgWrapperSub.appendChild(imgTag);
            imgWrapper.appendChild(imgWrapperSub);
        })

        const textSub = document.createElement("p");
        textSub.className = "title-text__img-text-sub";
        textSub.innerHTML = item.textSub;

        subWrapper.append(allTextWrapper, imgWrapper, textSub);
        wrapper.appendChild(subWrapper);
    })

    return wrapper;
}
