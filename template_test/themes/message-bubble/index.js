window._templates = window._templates ?? {};

if (!window._classList || !window._classList["message-line"]) {
    throw new Error("message-bubble requires message-line");
}

class MessageBubble extends MessageLine {
  _template = "message-bubble";

  constructor() {
    super();

    // Template diversion from the simple message-line could happen here
  }
}

window._classList["message-bubble"] = MessageBubble;

window._templates["message-bubble"] = `<template id="message-bubble">
    <link rel="stylesheet" href="${BASE_PATH}/themes/message-bubble/index.css" />
    <div class="message-bubble">
        Different templates can build different HTML structures:
        <div class="message-date"></div>
        <div class="message-user"></div>
        <div class="message-text"></div>
    </div>
</template>`;
