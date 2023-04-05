window._templates = window._templates ?? {};

class MessageLine extends HTMLElement {
    _template;

    constructor() {
        super();

        this._template = this._template ?? this.tagName.toLowerCase();

        this._message = this.innerText;
        this.innerText = "";

        this._user = this.getAttribute('user') ?? "Anonymous";
        this._date = new Date().toLocaleString();

        this.attachShadow({ mode: 'open' });

        let template = document.createElement('div');
        template.innerHTML = window._templates[this._template];
        template = template.firstChild;

        template = template.content.cloneNode(true);

        template.querySelector(".message-text").innerText = this._message;
        template.querySelector(".message-date").innerText = this._date;
        template.querySelector(".message-user").innerText = this._user;

        this.shadowRoot.appendChild(template);
    }
}

window._classList['message-line'] = MessageLine;

window._templates["message-line"] = `<template id="message-line">
    <link rel="stylesheet" href="${BASE_PATH}/themes/message-line/index.css" />
    <p>This is a simple message line:</p>
    <span class="message-date"></span>
    <span class="message-user"></span>
    <span class="message-text"></span>
</template>`;
