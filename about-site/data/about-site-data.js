const aboutSiteData = [
    {
        icon: "fa-solid fa-copyright",
        color: "#EAA64D",
        title: "میخوام از اون قسمت سایتم که گفتم ایده برداری کردم شروع کنم.",
        text: [
            "الهام اصلی من از بخش Header <a class=\"link-hover-style\" target=\"_blank\" href=\"https://saas-kit.framer.website/\">این طرح SaaS Kit</a> بود. البته فقط الهام گرفتم، هیچ محتوایی رو کپی نکردم. همه چیزو از صفر، با دست خودم نوشتم و طراحی کردم.",
        ],
        imgData: [
            "/asset/img/about-site/homow-site.png",
            "/asset/img/about-site/SaaSkit.png"
        ],
        textSub: "لازم به ذکره که این وبسایت برای توسعه دهندگان رایگان و آزاده"
    },
    {
        icon: "fa-solid fa-video",
        color: "#BA487F",
        title: "انیمیشن های استفاده شده در این وبسایت چطور کنترل میشن؟",
        text: [
            "شاید اولین چیزی که توی وبسایت به چشم میاد، انیمیشن ها باشن خصوصا <a href='/' class='link-hover-style' target='_blank'>انیمیشن های صفحه اصلی</a> و شاید بگید که با setInterval یا setTimeout کنترل میشن، اما باید بگم که اشتباه میکنید.",
            "90% انیمیشن ها با تابع IntersectionObserver و requestAnimationFrame کنترل میشن، دقیقا طبق تصویر های زیر"
        ],
        imgData: [
            "/asset/img/about-site/main-JS.png",
            "/asset/img/about-site/index-JS.png"
        ],
        textSub: "این فرمت بصورت کاملا ماژولار هست"
    },

]

{
    `<a href="/about-site" class="link-hover-style" target="_blank">صفحه</a>`
}

export {aboutSiteData}

