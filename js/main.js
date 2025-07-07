function runObserver(elem, callback, {advanced = null, delay = 0, once = true, thr = .9}) {
    const observerElem = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.observerAnimate) {
                if (once) entry.target.dataset.observerAnimate = "true"

                callback(entry);

                advanced && setTimeout(() => {
                    advanced()
                }, delay)

                obs.unobserve(entry.target)
            }
        });
    }, {threshold: thr})
    observerElem.observe(elem)
}

function typeText(el, text, speed = 100) {
    return new Promise(resolve => {
        let index = 0;
        let buffer = '';
        let lastFrame = 0;

        function step(timestamp) {
            if (timestamp - lastFrame >= speed && index < text.length) {
                buffer += text[index++];
                el.textContent = buffer;
                lastFrame = timestamp;
            }

            if (index < text.length) {
                requestAnimationFrame(step);
            } else {
                resolve();
            }
        }

        requestAnimationFrame(step);
    });
}

const typingAnimations = entry => {
    const elem = entry.target;
    const text = elem.dataset.text;
    const speed = +elem.dataset.speed;
    return typeText(elem, text, speed);
}

const addClassName = (array) => {
    array.forEach(([elem, cls]) => {
        if (Array.isArray(cls)) {
            elem.classList.add(...cls);
        } else {
            elem.classList.add(cls);
        }
    });
}

export {runObserver, typeText, typingAnimations, addClassName};
