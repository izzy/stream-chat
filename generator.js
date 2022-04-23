


const fontCheck = new Set([
    // Windows 10
    'Arial', 'Arial Black', 'Bahnschrift', 'Calibri', 'Cambria', 'Cambria Math', 'Candara', 'Comic Sans MS', 'Consolas', 'Constantia', 'Corbel', 'Courier New', 'Ebrima', 'Franklin Gothic Medium', 'Gabriola', 'Gadugi', 'Georgia', 'HoloLens MDL2 Assets', 'Impact', 'Ink Free', 'Javanese Text', 'Leelawadee UI', 'Lucida Console', 'Lucida Sans Unicode', 'Malgun Gothic', 'Marlett', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Sans Serif', 'Microsoft Tai Le', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU-ExtB', 'Mongolian Baiti', 'MS Gothic', 'MV Boli', 'Myanmar Text', 'Nirmala UI', 'Palatino Linotype', 'Segoe MDL2 Assets', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Historic', 'Segoe UI Emoji', 'Segoe UI Symbol', 'SimSun', 'Sitka', 'Sylfaen', 'Symbol', 'Tahoma', 'Times New Roman', 'Trebuchet MS', 'Verdana', 'Webdings', 'Wingdings', 'Yu Gothic',
    // macOS
    'American Typewriter', 'Andale Mono', 'Arial', 'Arial Black', 'Arial Narrow', 'Arial Rounded MT Bold', 'Arial Unicode MS', 'Avenir', 'Avenir Next', 'Avenir Next Condensed', 'Baskerville', 'Big Caslon', 'Bodoni 72', 'Bodoni 72 Oldstyle', 'Bodoni 72 Smallcaps', 'Bradley Hand', 'Brush Script MT', 'Chalkboard', 'Chalkboard SE', 'Chalkduster', 'Charter', 'Cochin', 'Comic Sans MS', 'Copperplate', 'Courier', 'Courier New', 'Didot', 'DIN Alternate', 'DIN Condensed', 'Futura', 'Geneva', 'Georgia', 'Gill Sans', 'Helvetica', 'Helvetica Neue', 'Herculanum', 'Hoefler Text', 'Impact', 'Lucida Grande', 'Luminari', 'Marker Felt', 'Menlo', 'Microsoft Sans Serif', 'Monaco', 'Noteworthy', 'Optima', 'Palatino', 'Papyrus', 'Phosphate', 'Rockwell', 'Savoye LET', 'SignPainter', 'Skia', 'Snell Roundhand', 'Tahoma', 'Times', 'Times New Roman', 'Trattatello', 'Trebuchet MS', 'Verdana', 'Zapfino',
].sort());


const fields = [
    { label: "Websocket URI", name: "ws_uri", type: "text", defaultValue: "ws://localhost:8080", help: "The address of your Streamer.Bot. See Streamer.Bot -> Server/Clients -> Websocket Server. Should look like 'ws://ADDRESS:PORT/ENDPOINT" },
    { label: "Direction (horizontal if enabled)", name: "direction", type: "checkbox", help: "Set to 'horizontal' this will scroll the text from right to left instead of bottom to top" },
    { label: "Bubbles", name: "bubbles", type: "checkbox", help: "Displays bubbles instead of the standard chat log" },
    { label: "Background", name: "background", type: "color", defaultValue: "#FFFFFF", nullable: true, help: "Background of the whole chat page. Careful: By default this will be overridden by OBS" },
    { label: "Background Color", name: "background_color", type: "color", defaultValue: "#FFFFFF", nullable: true, help: "If set overrides all chat bubble colours" },
    { label: "Text Color", name: "text_color", type: "color", nullable: true, help: "If set overrides all user name colours"},
    { label: "Default Color", name: "background", type: "color", nullable: true, help: "This sets the default background/bubble colour for users who don't have a colour set" },
    { label: "Badges", name: "badges", type: "checkbox", help: "If set to false this disable broadcaster/VIP/moderator badges"},
    { label: "Highlights", name: "highlights", type: "checkbox", defaultValue: false, help: "If set to false this disables visual difference for highlighted messages" },
    { label: "Timestamp", name: "timestamp", type: "checkbox", defaultValue: false, help: "If set to true displays the time of the message" },
    { label: "Timestamp locale", name: "timestamp_locale", type: "text", defaultValue: "en-US", help: "The regional setting to use for the message time as ISO 639-1 language code." },
    { label: "Cmdprefix", name: "cmdprefix", type: "text", nullable: true, help: "A prefix for bot commands. If this is set, chat messages starting with this won't be displayed" },
    { label: "Bots", name: "bots", type: "text", nullable: true, help: "A comma-separated list of accounts whose messages will not be shown(case-insensitive)" },
    { label: "Fade duration", name: "fade_duration", type: "number", nullable: true, help: "Time in seconds until messages are removed" },
    { label: "Font Family", name: "fontfamily", type: "text", nullable: true, help: "Sets any (locally installed) font" },
    { label: "Font size", name: "fontsize", type: "text", nullable: true, help: "CSS class font-size value (e.g. x-large, 2em, 22px)" },
    { label: "Emote size", name: "emote_size", type: "text", nullable: true, help: "CSS class size value (e.g. 2em, 22px)" },
    { label: "OBS Layer width", name: "layer-width", type: "number", defaultValue: "300", help: "The OBS layer width. Can be changed in OBS later." },
    { label: "OBS Layer height", name: "layer-height", type: "number", defaultValue: "500", help: "The OBS layer height. Can be changed in OBS later." },
    { label: "OBS Layer name", name: "layer-name", type: "text", defaultValue: "Chat Overlay", help: "The OBS layer name. Can be changed in OBS later." },
]
const iframe = document.querySelector("#preview");
const chatFrame = document.querySelector("#chat-frame");
const obsLink = document.querySelector("#obs-url");
const baseUrl = window.location.href.replace("generator.html", "chat.html?");

const copyButton = document.querySelector("#copy-button");
const urlEl = document.querySelector("#url")
const generatorEl = document.querySelector("#generator");
const debugSwitch = document.querySelector("#debug");

async function buildMarkup() {

    const textElements = fields.map(({ label, name, type, defaultValue, nullable, help }) => {
        const rowEl = document.createElement("span");

        switch (type) {
            case "fontlist": {
                var inputEl = document.createElement("select")
                const fonts = availableFonts().then((fonts) => {
                    const options = fonts.map((font, index, array) => {
                        const opt = document.createElement("option")
                        opt.value = font;
                        opt.text = font;

                        return opt;
                    })
                    inputEl.append(...options);
                    inputEl.name = name;
                });
                break



            }
            case "checkbox": {
                var inputEl = document.createElement("label");

                inputEl.classList.add(type)
                inputEl.innerText = "Enabled:"
                const checkbox = document.createElement("input");
                inputEl.append(checkbox)
                checkbox.value = name;
                checkbox.name = name;
                checkbox.type = type;
                break;
            }

            default: {
                var inputEl = document.createElement("input", {});

                inputEl.name = name;
                if (type !== "color") {
                    inputEl.classList.add("input");
                }

                inputEl.type = type;
                inputEl.value = defaultValue || "";
            }
        }



        const labelEl = document.createElement("label");
        labelEl.innerText = label;
        labelEl.classList.add("label")
        rowEl.append(labelEl, inputEl)
        if (nullable) {
            const labelNullableRadio = document.createElement("label");
            labelNullableRadio.classList.add("checkbox")
            labelNullableRadio.innerText = "Enabled: "
            const nullableRadio = document.createElement("input", {

            })
            nullableRadio.id = `${name}_nullable`
            nullableRadio.type = "checkbox"
            labelNullableRadio.append(nullableRadio)
            rowEl.append(labelNullableRadio)

        }

        if (help) {
            const helpEl = document.createElement("span");
            const helpElInner = document.createElement("span");
            helpEl.className = "help";
            helpEl.innerText = "?";
            helpElInner.innerText = help;
            helpEl.append(helpElInner);
            rowEl.append(helpEl);
        }

        return rowEl;
    })

    generatorEl.append(...textElements);
    generateURL();
}

const availableFonts = async () => {
    await document.fonts.ready;

    const fontAvailable = new Set();

    for (const font of fontCheck.values()) {
        if (document.fonts.check(`12px "${font}"`)) {
            fontAvailable.add(font);
        }
    }

    return [...fontAvailable.values()];
};

const generateURL = () => {
    const searchParams = new URLSearchParams
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    const formData = new FormData(document.querySelector("#generator"));
    for ([key, value] of formData.entries()) {
        console.log(key, value)
        if (value) {
            const isNullable = document.querySelector(`#${key}_nullable`)
            if (isNullable && !isNullable.checked) {
                continue;
            }

            // Change the chat preview direction dynamically
            if (key === "direction" && value === "direction") {
                searchParams.append(key, "horizontal");
                iframe.style.width = "100%";
                iframe.style.height = "6rem";
                chatFrame.style.float = "none";
            }

            // Colour values
            if (value[0] === "#") {
                value = value.slice(1)
            }

            if (value === key) {
                searchParams.append(key, true)
            } else {
                searchParams.append(key, value)
            }
        }
    }

    checkboxes.forEach((c) => {
        if (c.checked === false && c.name) {
            if (c.name === "direction") {
                searchParams.append(c.name, "vertical");
                iframe.style.width = "300px";
                iframe.style.height = "500px";
                chatFrame.style.float = "left";
            } else {
                searchParams.append(c.name, "false")
            }
        }
    });
    setUrl(baseUrl + searchParams.toString())
}

const setUrl = (url) => {
    let iUrl = url;
    if (debugSwitch.checked) {
        iUrl = url + "&debug=true";
    }
    iframe.src = iUrl;

    obsLink.href = url;
    urlEl.value = url;

    console.log(["new url: ", url]);
}

const copyToClipBoard = () => {
    navigator.permissions.query({ name: "clipboard-write" }).then(result => {
        if (result.state == "granted" || result.state == "prompt") {
            navigator.clipboard.writeText(urlEl.value)
        }
    });
}

copyButton.addEventListener("click", copyToClipBoard)
generatorEl.addEventListener("change", generateURL)
debugSwitch.addEventListener("change", generateURL)

buildMarkup();