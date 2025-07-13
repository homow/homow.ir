import {addStyle} from "/component/main/createTagLink.js"
addStyle("/css/img-modal.css")

const allImages = document.querySelectorAll('.zoom-in-this-img')

const createModalImage = () => {
    return `<div class="img-modal-wrapper">
<span>x</span>
<img src="" alt="zoom-img">
</div>`
}

document.body.insertAdjacentHTML("afterbegin", createModalImage());

const modalWrapper = document.querySelector('.img-modal-wrapper');

modalWrapper.addEventListener("click", e => {
    if (e.target.tagName === "SPAN") {
        modalWrapper.classList.remove("enable-img-modal");
    }
})

const zoomInImage = event => {
    modalWrapper.classList.add("enable-img-modal");
    modalWrapper.querySelector("img").src = event.target.dataset.zoomSrc;
}

allImages.forEach(image => {
    image.addEventListener('click', zoomInImage)
})
