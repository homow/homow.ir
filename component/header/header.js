const rootElem = document.querySelector(":root")

const template = document.createElement('template');

template.innerHTML = `<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css">
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
    text-decoration: none;
}
li {
    list-style-type: none;
}
.overlay {
    display: none;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    inset: 0;
    min-width: 100vw;
    min-height: 100vh;
}
.designed-by-homow {
    display: none;
    position: absolute;
    bottom: 13%;
    width: 100%;
    text-align: center;
    font-size: 14px;
}
.center-flex-item {
    display: flex;
    align-items: center;
    justify-content: center;
}
.open__nav-menu {
    right: 0 !important;
}
.logo {
    width: 100px;
}
.logo a {
    height: 58px;
    display: flex;
    align-items: center;
}
.logo img {
    border-radius: 4px;
    width: 100%;
}
.wrapper__fixed-header {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: space-between;
}
.theme {
    width: 41px;
    height: 40px;
}
.theme i {
    background-color: var(--primary__black);
    color: var(--primary__white);
    border-radius: 100%;
    padding: 0.5rem 0.6rem;
    font-size: 1.5rem;
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: center;
}
.nav-menu {
    display: flex;
    align-items: center;
    gap: 2rem;
}
.nav-menu__items:last-child .nav-menu__link:hover {
    background-color: var(--primary__hover) !important;
}
.nav-menu__link {
    color: var(--primary__black);
    padding: 0.3rem;
    display: flex;
    align-items: center;
    gap: .3rem;
    font-weight: 500;
    transition: 300ms;
}
.home .nav-menu__link {
    align-items: baseline;
}
.nav-menu__link:hover {
    color: var(--nav-menu__hover-new__color);
}

.btn__nav-menu {
    display: none;
    font-size: 1.4rem;
    color: var(--primary__black);
    cursor: pointer;
}

@media (max-width: 1000px) {
    .theme i {
        font-size: 1.2rem;
    }

    .nav-menu {
        gap: .7rem;
        font-size: .9rem;
    }
}

@media only screen and (min-width: 720px) and (max-width: 1000px) {
    .theme i {
        line-height: 24px;
    }
}

@media only screen and (max-width: 825px) {
    .nav-menu {
        gap: 0.55rem;
        font-size: .85rem;
    }

    .nav-menu__link {
        padding: 0.5rem;
    }
}
@media only screen and (min-width: 720px) {
    .overlay {
        display: none !important;
    }
}
@media only screen and (max-width: 720px) {
    .logo {
        display: block;
    }

    .logo a {
        height: 46px;
    }

    .wrapper__fixed-header {
        flex-direction: row;
    }

    .nav-menu {
        font-size: 1rem;
        position: fixed;
        top: 0;
        right: -240px;
        bottom: -100vh;
        z-index: 99999;
        flex-direction: column;
        background-color: var(--nav-menu__bg-color);
        gap: 1rem;
        box-shadow: 0 0 4px 0 var(--nav-menu__bg-color);
        transition: all 0.5s;
        padding-top: .8rem;
    }

    .nav-menu__link:hover {
        color: var(--primary__white);
        background-color: var(--nav-menu__hover-new__bc);
    }
    
    .designed-by-homow {
        display: block;
    }

    .theme {
        margin-right: .5rem;
        align-self: start;
        width: 39px;
        height: 37px;
    }

    .nav-menu__items {
        width: 100%;
    }

    .nav-menu__link {
        width: 100%;
        background-color: unset;
        color: var(--primary__black);
        padding: 18px 20px 18px 50px;
    }

    .btn__nav-menu {
        display: block;
    }
}

@media only screen and (max-width: 340px) {
    .nav-menu {
        font-size: .9rem;
    }
}
</style>
<div class="overlay"></div>
<div class="wrapper__fixed-header">
    <div class="theme">
        <i class="fas fa-moon"></i>
    </div>
    <ul class="nav-menu">
        <li class="logo center-flex-item">
            <a href="https://homow.ir/">
            <img src="/asset/logo/logo.webp" alt="logo" fetchpriority="high" decoding="async">
        </a>
        </li>
        <li class="nav-menu__items home">
            <a href="/" class="nav-menu__link"><i class="fa-solid fa-house"></i>خانه</a>
        </li>
        <li class="nav-menu__items">
            <a href="/about-me/" class="nav-menu__link"><i class="fa-solid fa-user"></i>من کی ام؟</a>
        </li>
        <li class="nav-menu__items">
            <a href="/contact/" class="nav-menu__link"><i class="fa-solid fa-headset"></i>راه های ارتباطی</a>
        </li> 
        <li class="nav-menu__items">
            <a href="/code-graphy/" class="nav-menu__link"><i class="fa-solid fa-code"></i>کدگرافی</a>
        </li>
        <li class="designed-by-homow">
            <a target="_blank" href="https://card.homow.ir/">Designed with❤️by Homow</a>
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
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        const changeTheme = this.shadowRoot.querySelector('.theme i');
        const navMenu = this.shadowRoot.querySelector('.nav-menu');
        const btn = this.shadowRoot.querySelector('.btn__nav-menu i');
        const overlay = this.shadowRoot.querySelector('.overlay');

        changeTheme.addEventListener("click", themeControl.changeThemeHandler.bind(null, rootElem));
        btn.addEventListener("click", openNavMenu.bind(null, navMenu, overlay));
        themeControl.setTheme(changeTheme, rootElem);

        document.addEventListener("click", e => {
            const path = e.composedPath();
            if (!path.includes(navMenu)) {
                closeMenu(navMenu, btn, overlay, e)
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
const openNavMenu = (menu, overlay, event) => {
    event.stopPropagation();

    if (!menu.classList.contains("open__nav-menu")) {
        menu.classList.add("open__nav-menu");
        event.target.className = "fa fa-close";
        overlay.style.display = "block";
    } else {
        menu.classList.remove("open__nav-menu");
        event.target.className = "fa fa-bars";
        overlay.style.display = "none";
    }
};

// close nav menu
function closeMenu(navMenu, btn, overlay, e) {
    e.stopPropagation();

    if (navMenu.classList.contains("open__nav-menu")) {
        navMenu.classList.remove("open__nav-menu");
        btn.className = "fa fa-bars";
        overlay.style.display = "none";
    }
}

export {Header};
