const codeGraphyData = [
    {
        icon: "fa-solid fa-copyright",
        color: "#EAA64D",
        title: "میخوام از اون قسمت سایتم که گفتم ایده برداری کردم شروع کنم.",
        text: [
            "الهام اصلی من از بخش Header <a class=\"link-hover-style\" target=\"_blank\" href=\"https://saas-kit.framer.website/\">«این طرح SaaS kit»</a> بود. البته فقط الهام گرفتم، هیچ محتوایی رو کپی نکردم. همه چیزو از صفر، با دست خودم نوشتم و طراحی کردم.",
            "من فقط و فقط همین قسمت رو ایده گرفتم، تمام سایتم بدون کپی و بدون طراحی از روی هیچ طرح قبلی و فقط با ذهن و خلاقیت خودم بوده"
        ],
        imgData: [
            "/asset/img/about-site/homow-site.webp",
            "/asset/img/about-site/SaaSkit.webp"
        ],
        textSub: "لازم به ذکره که این وبسایت برای توسعه دهندگان رایگان و آزاده"
    },
    {
        icon: "fa-solid fa-folder-tree",
        color: "#9B3922",
        title: "ساختار تگ ها و دایرکتوری ها",
        text: [
            "من به شدت روی ساختار تگ ها و دایرکتوری(پوشه)ها حساسم، همونطور که میبینید; ساختار ها کاملا قابل فهم برای هرکسی هست",
            "با این ساختار، هرکسی که وارد این پروژه بشه به راحتی میتونه پروژه رو درک بکنه، جزئیات و ساختار با نام های قابل فهم و واضح"
        ],
        imgData: [
            "/asset/img/about-site/template.webp",
        ],
        textSub: "ساختار از مهمترین عامل های پروژه هست."
    },
    {
        icon: "fa-solid fa-layer-group",
        color: "#6A42C2",
        title: "واکنش گرا بودن یا Responsive",
        text: [
            "در طراحی وبسایت، واکنش گرا بودن یا Responsive از تمام بخش های وبسایت مهمتره، پس من دقت زیادی در این مسئله کردم تا به تمامی کاربران احترام بذارم",
            "من بهتون تضمین میدم، قالب صفحات این وبسایت تا 280px هم بهم نمیریزه به دلیل تعداد BreakPoint ها و وسواس من در این موضوع.",
            "نتیجه وسواس من این شد که هر کاربری با هر دیوایسی، میتونه در تم دارک و لایت این وبسایت تجربه راحتی داشته باشه"
        ],
        imgData: [
            "/asset/img/about-site/responsive-code.webp"
        ],
        textSub: "وسواس من رو مشاهده میکنید"
    },
    {
        icon: "fa-solid fa-video",
        color: "#BA487F",
        title: "انیمیشن های استفاده شده در این وبسایت چطور کنترل میشن؟",
        text: [
            "شاید اولین چیزی که توی وبسایت به چشم میاد، انیمیشن ها باشن خصوصا انیمیشن های <a href='/' class='link-hover-style' target='_blank'>«صفحه اصلی»</a> و شاید بگید که با setInterval یا setTimeout کنترل میشن، اما باید بگم که اشتباه میکنید.",
            "بیش از ۹۰٪ انیمیشن‌ها با کمک IntersectionObserver که کاستومش کردم و requestAnimationFrame اجرا می‌شن؛ یعنی اجرای دقیق، به‌صرفه و بهینه بر اساس موقعیت واقعی عناصر در صفحه، نه زمان‌بندی کورکورانه."
        ],
        imgData: [
            "/asset/img/about-site/main-JS.webp",
            "/asset/img/about-site/index-JS.webp"
        ],
        textSub: "این فرمت بصورت کاملا ماژولار هست"
    },
    {
        icon: "fa-solid fa-repeat",
        color: "#4E71FF",
        title: "قسمت های تکرار شونده مثل header و footer چطور تکرار میشن؟",
        text: [
            "قسمت هایی مثل header و footer رو با قابلیت shadow DOM و کامپوننت محور پیاده سازی و توسعه دادم که کاملا قابلیت استفاده ساده و راحتی داره",
            "در تصاویر زیر میبینید که من چطور توسعه دادم این قسمت هارو، فقط کافیه که طبق فایل HTML، اونارو با custom-element اضافه کنید به اول و آخر و هر صفحه"
        ],
        imgData: [
            "/asset/img/about-site/footer-header-code.webp"
        ],
        textSub: "این قابلیت یکم پیچیده تر از ساختار ماژولار هست"
    },
    {
        icon: "fa-solid fa-person-walking-arrow-loop-left",
        color: "#C5172E",
        title: "دیگر قسمت های تکرار شونده در وبسایت",
        text: [
            "شاید بگید پس حتما قسمتی مثل باکس های معرفی در صفحه <a href='/about-me/' class='link-hover-style' target='_blank'>«درباره من»</a> یا همین صفحه هم با ساختار بالایی توسعه دادم، اما باید بگم خیر",
            "من این قسمت رو با JS خالص ماژولار و بدون custom elements توسعه دادم چون; کاستوم المنت ها مقدار زیادی کد HTML نیاز دارن، ولی این ساختار خیر",
            "این ساختار ماژولار یک دیتا میگیره طبق قسمت راست تصویر و یک template کامل برمیگردونه"
        ],
        imgData: [
            "/asset/img/about-site/text-box-icon-code.webp"
        ],
        textSub: "بدون درگیری مستقیم با DOM و مرورگر کاربر"
    },
    {
        icon: "fa-solid fa-sliders",
        color: "#169976",
        title: "مدیریت نسخه و توسعه",
        text: [
            "من مدیریت نسخه و آپدیت هارو با ابزار های Git و GitHub انجام دادم",
            "این ابزارهای فوق العاده و رایگان این روزها نقش به شدت مفید و بزرگی در زندگی توسعه دهنده ها دارن.",
            "محیط کدنویسی من یا Code Editor هم ابزار قدرتمند WebStorm بود، البته بخاطر مشکل فجیع لوکال هاست در Root مجبور شدم از Node.js برای ادیت زنده استفاده کنم",
            "من یک <a href='/not-contact/' class='link-hover-style' target='_blank'>«صفحه 404»</a> هم طراحی کردم که شاید گذرتون بهش نخوره، پس لینکش رو همینجا گذاشتم"
        ],
        imgData: [
            "/asset/img/about-site/git-github.webp",
            "/asset/img/about-site/webstorm.webp"
        ],
        textSub: "<a href='https://github.com/homow' class='link-hover-style' target='_blank'>«صفحه گیت هاب من»</a>  رو بیشتر بررسی کنید "
    }
]

export {codeGraphyData}
