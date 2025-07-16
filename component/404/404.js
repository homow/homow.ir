const template = document.createElement('template');

template.innerHTML = `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css">
<style>
        * {
            margin: 0;
            font-family: 'Courier New', monospace;
            color: #00ff91;
            overflow: hidden;
            font-size: 2.5rem;
            -webkit-tap-highlight-color: transparent;
        }

        .link, #homow {
            text-decoration: none;
            display: flex;
            align-items: center;
            margin-top: 6rem;
            color: #f8f8f8;
            box-shadow: 0 0 18px 0 rgb(2 194 44);
            width: fit-content;
            padding: 1.5rem 2.5rem;
            border-radius: 12px;
            transition: all 0.3s ease;
        }

        a:hover {
            background: rgba(255, 255, 255, 0.05);
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.3), 0 0 10px rgba(255, 255, 255, 0.15) inset;
            color: #ffffff;
            transform: translateY(-3px) scale(1.03);
        }

        i {
            padding-right: 1rem;
        }

        .terminal {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(15, 15, 15, 0.95);
            width: 80%;
            max-width: 800px;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 0 40px rgba(0, 255, 145, 0.3);
        }

        .code-line {
            white-space: pre;
            overflow: hidden;
            border-right: .15em solid #00ff91;
            animation: typing 3s steps(30, end), blink .75s step-end infinite;
        }

        .output {
            margin-top: 20px;
            opacity: 0;
            animation: fadeIn 1s ease-in-out forwards;
            animation-delay: 3s;
            color: #ffffff;
        }
        #homow {
            position: absolute;
            top: 40px;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            padding: .8rem 1.2rem;
        }

        @keyframes typing {
            from {
                width: 0
            }
            to {
                width: 100%
            }
        }

        @keyframes blink {
            from, to {
                border-color: transparent
            }
            50% {
                border-color: #00ff91;
            }
        }

        @keyframes fadeIn {
            to {
                opacity: 1;
            }
        }
        @media only screen and (max-width: 1000px) {
            .terminal * {
                font-size: 2rem;
            }
        }
        @media only screen and (max-width: 780px) {
            .terminal * {
                font-size: 1.8rem;
            }
        }
        @media only screen and (max-width: 700px) {
            * {
                font-size: 1.8rem;
                letter-spacing: -3px;
            }
        }
        @media only screen and (max-width: 580px) {
            .terminal *, * {
                font-family: "dana medium",serif !important;
                letter-spacing: unset;
                font-size: 1.4rem;
            }
            .fa-solid {
                font-family: "Font Awesome 6 Free",serif !important;
            }
        }
        @media only screen and (max-width: 420px) {
            .terminal *, * {
                font-size: 1.2rem;
            }
            .link {
                padding: .8rem 1rem;
            }
        }
        @media only screen and (max-width: 350px) {
            .terminal *, * {
                font-size: 1rem;
            }
        }
    </style>
<a target="_blank" href="/about-me/" id="homow">who is homow?</a>
<div class="terminal">
    <div class="code-line">console.log("404 | not found!");</div>
    <div class="output">→ 404 | not found!</div>
    <a class="link" href="/"><i class="fa-solid fa-arrow-left"></i>back to homow site</a>
</div>`;

class NotFound extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

export {NotFound};
