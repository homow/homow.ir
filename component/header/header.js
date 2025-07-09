const createStyle = href => {
    const style = document.createElement("link")
    style.setAttribute("rel", "stylesheet")
    style.setAttribute("href", href)
    return style
}

const style = createStyle("component/header/header.css")

const rootElem = document.querySelector(":root")

const template = document.createElement('template');

template.innerHTML = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css">
<div class="wrapper__fixed-header">
    <div class="logo">
        <a href="index.html">
            <img src="asset/logo/homow-logo-1-crop.png" alt="logo">
        </a>
    </div>
    <ul class="nav-menu">
        <li class="theme center-flex-item">
            <i class="fas fa-moon"></i>
        </li>
        <li class="nav-menu__items home">
            <a href="index.html" class="nav-menu__link"><i class="fa-solid fa-house"></i>خانه</a>
        </li>
        <li class="nav-menu__items">
            <a href="about-me.html" class="nav-menu__link"><i class="fa-solid fa-code"></i>من کی ام؟</a>
        </li>
        <li class="nav-menu__items">
            <a href="contact.html" class="nav-menu__link"><i class="fa-solid fa-headset"></i>راه های ارتباطی</a>
        </li> 
        <li class="nav-menu__items">
            <a href="contact.html" class="nav-menu__link"><i class="fa-solid fa-circle-info"></i>درباره سایت</a>
        </li>
        <li class="designed-by-homow">
            <a target="_blank" href="https://bioe.ir/homayoun/">Designed with❤️by Homow</a>
        </li>
    </ul>
    <span class="btn__nav-menu">
        <i class="fa fa-bars"></i>
    </span>
</div>`;

class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(style)
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const changeTheme = this.shadowRoot.querySelector('.theme i');
        const navMenu = this.shadowRoot.querySelector('.nav-menu');
        const btn = this.shadowRoot.querySelector('.btn__nav-menu i');

        changeTheme.addEventListener("click", themeControl.changeThemeHandler.bind(null, rootElem));
        btn.addEventListener("click", openNavMenu.bind(null, navMenu));
        themeControl.setTheme(changeTheme, rootElem);

        document.addEventListener("click", e => {
            const path = e.composedPath();
            if (!path.includes(navMenu)) {
                closeMenu(navMenu, btn, e)
            }
        });
    }
}

// changes and set theme
const themeControl = {
    changeThemeHandler: (root, event) => {
        const theme = JSON.parse(localStorage.getItem("theme")) === "dark" ? "light" : "dark";
        localStorage.setItem("theme", JSON.stringify(theme));
        themeControl.setTheme(event.target, root);
    },
    setTheme: (wrapper, root) => {
        const theme = JSON.parse(localStorage.getItem("theme")) === "dark" ? "dark" : "light";
        root.classList.toggle("dark", theme === "dark");
        wrapper.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
    },
};

// open nav menu
const openNavMenu = (menu, event) => {
    event.stopPropagation();

    if (!menu.classList.contains("open__nav-menu")) {
        menu.classList.add("open__nav-menu");
        event.target.className = "fa fa-close";
    } else {
        menu.classList.remove("open__nav-menu");
        event.target.className = "fa fa-bars";
    }
};

// close nav menu
function closeMenu(navMenu, btn, e) {
    e.stopPropagation();

    if (navMenu.classList.contains("open__nav-menu")) {
        navMenu.classList.remove("open__nav-menu");
        btn.className = "fa fa-bars";
    }
}

export {Header};
