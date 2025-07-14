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

const closeModal = () => {
    modalWrapper.classList.remove("enable-img-modal");
}

modalWrapper.addEventListener("click", e => e.target.tagName === "SPAN" && closeModal())
document.addEventListener("keydown", e => e.key === "Escape" & modalWrapper.matches(".enable-img-modal") && closeModal())

const openModalImg = event => {
    modalWrapper.classList.add("enable-img-modal");
    modalWrapper.querySelector("img").src = event.target.dataset.zoomSrc;
}

allImages.forEach(image => {
    image.addEventListener('click', openModalImg)
})
