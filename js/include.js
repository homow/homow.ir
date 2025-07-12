import {Header} from "/component/header/header.js";
import {Footer} from "/component/footer/footer.js";
import {CTA} from "/component/CTA/CTA.js";

const metaAndIcons = `<!-- meta -->
<meta name="author" content="همایون شریفی (homayoun sharifi)">
<meta name="copyright" content="Homow - همایون شریفی">
<meta http-equiv="Content-Language" content="fa">
<meta name="language" content="fa">
 
<!-- icons -->
<link rel="icon" type="image/svg+xml" href="/asset/favicon/favicon.svg">
<link rel="icon" type="image/png" sizes="96x96" href="/asset/favicon/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="32x32" href="/asset/favicon/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/asset/favicon/favicon-16x16.png">
<link rel="shortcut icon" href="/asset/favicon/favicon.ico">
<link rel="apple-touch-icon" href="/asset/favicon/apple-touch-icon.png">
<link rel="manifest" href="/asset/favicon/site.webmanifest">
<link rel="icon" type="image/png" sizes="192x192" href="/asset/favicon/web-app-manifest-192x192.png">
<link rel="icon" type="image/png" sizes="512x512" href="/asset/favicon/web-app-manifest-512x512.png">`

const head = document.head;
const parser = new DOMParser();
const nodes = parser.parseFromString(metaAndIcons, "text/html").head.childNodes;
head.append(...nodes);

window.customElements.define("my-header", Header);
window.customElements.define("my-footer", Footer);
window.customElements.define("call-action", CTA);
