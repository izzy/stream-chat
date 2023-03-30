const fontCheck = new Set([
    // Windows 10
    'Arial', 'Arial Black', 'Bahnschrift', 'Calibri', 'Cambria', 'Cambria Math', 'Candara', 'Comic Sans MS', 'Consolas', 'Constantia', 'Corbel', 'Courier New', 'Ebrima', 'Franklin Gothic Medium', 'Gabriola', 'Gadugi', 'Georgia', 'HoloLens MDL2 Assets', 'Impact', 'Ink Free', 'Javanese Text', 'Leelawadee UI', 'Lucida Console', 'Lucida Sans Unicode', 'Malgun Gothic', 'Marlett', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Sans Serif', 'Microsoft Tai Le', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU-ExtB', 'Mongolian Baiti', 'MS Gothic', 'MV Boli', 'Myanmar Text', 'Nirmala UI', 'Palatino Linotype', 'Segoe MDL2 Assets', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Historic', 'Segoe UI Emoji', 'Segoe UI Symbol', 'SimSun', 'Sitka', 'Sylfaen', 'Symbol', 'Tahoma', 'Times New Roman', 'Trebuchet MS', 'Verdana', 'Webdings', 'Wingdings', 'Yu Gothic',
    // macOS
    'American Typewriter', 'Andale Mono', 'Arial', 'Arial Black', 'Arial Narrow', 'Arial Rounded MT Bold', 'Arial Unicode MS', 'Avenir', 'Avenir Next', 'Avenir Next Condensed', 'Baskerville', 'Big Caslon', 'Bodoni 72', 'Bodoni 72 Oldstyle', 'Bodoni 72 Smallcaps', 'Bradley Hand', 'Brush Script MT', 'Chalkboard', 'Chalkboard SE', 'Chalkduster', 'Charter', 'Cochin', 'Comic Sans MS', 'Copperplate', 'Courier', 'Courier New', 'Didot', 'DIN Alternate', 'DIN Condensed', 'Futura', 'Geneva', 'Georgia', 'Gill Sans', 'Helvetica', 'Helvetica Neue', 'Herculanum', 'Hoefler Text', 'Impact', 'Lucida Grande', 'Luminari', 'Marker Felt', 'Menlo', 'Microsoft Sans Serif', 'Monaco', 'Noteworthy', 'Optima', 'Palatino', 'Papyrus', 'Phosphate', 'Rockwell', 'Savoye LET', 'SignPainter', 'Skia', 'Snell Roundhand', 'Tahoma', 'Times', 'Times New Roman', 'Trattatello', 'Trebuchet MS', 'Verdana', 'Zapfino',
].sort());

let groups = {
    Integrations: {
        id: "integrations",
        label: "Integrations",
        color: "pink",
    },

    StreamerBot: {
        id: "streamerbot",
        label: "Streamer.Bot",
        color: "purple",
    },

    /*BeanBot: {
        id: "beanbot",
        label: "Bean.Bot",
        color: "green",
    },*/

    Chat: {
        id: "chat",
        label: "Chat",
        color: "blue",
    },

    Theme: {
        id: "theme",
        label: "Theme",
        color: "orange",
    },

    ThemeColours: {
        id: "theme_colours",
        label: "Theme - Colours",
        color: "orange",
    },

    ThemeText: {
        id: "theme_font",
        label: "Theme - Text & Size",
        color: "orange",
    },
}

const css_size_hint = "CSS class font-size value (e.g. x-large, 2em, 22px)";

let fields = [
    { group: groups.Integrations, label: "Check for new stream-chat versions", name: "version_check", type: "checkbox", defaultValue: true, help: "Checks for new versions when starting the overlay and displays a warning when a new version is available." },
    { group: groups.Integrations, label: "Use an alert popup for new versions(read the notice!)", name: "version_alert", type: "checkbox", defaultValue: false, help: "Uses a popup instead of the obnoxiously large notification. CAREFUL: If you have the overlay setup more than once or reload the overlay frequently this might be a bad idea!" },
    { group: groups.Integrations, label: "Streamer.Bot enabled", name: "sb_enabled", type: "checkbox", defaultValue: true, help: "Enables Streamer.Bot websocket integration when active." },

    { group: groups.StreamerBot, label: "Websocket URI", name: "sb_ws_uri", type: "text", defaultValue: "ws://127.0.0.1:8080", help: "The address of your Streamer.Bot. See Streamer.Bot -> Server/Clients -> Websocket Server. Should look like 'ws://ADDRESS:PORT/ENDPOINT" },
    { group: groups.StreamerBot, label: "Twitch", name: "sb_twitch", type: "checkbox", defaultValue: true, help: "Show Twitch messages from Streamer.Bot" },
    { group: groups.StreamerBot, label: "YouTube", name: "sb_youtube", type: "checkbox", defaultValue: true, help: "Show YouTube messages from Streamer.Bot" },

    { group: groups.Chat, label: "Cmdprefix", name: "cmdprefix", type: "text", nullable: true, help: "A prefix for bot commands. If this is set, chat messages starting with this won't be displayed" },
    { group: groups.Chat, label: "Bots", name: "bots", type: "text", nullable: true, help: "A comma-separated list of accounts whose messages will not be shown(case-insensitive)" },

    { group: groups.Theme, label: "Direction (horizontal if enabled)", name: "direction", type: "checkbox", help: "Set to 'horizontal' this will scroll the text from right to left instead of bottom to top" },
    { group: groups.Theme, label: "Bubbles", name: "bubbles", type: "checkbox", help: "Displays bubbles instead of the standard chat log" },
    { group: groups.Theme, label: "Badges", name: "badges", type: "checkbox", help: "If set to false this disable broadcaster/VIP/moderator badges"},
    { group: groups.Theme, label: "Badges on the left", name: "badges_left", type: "checkbox", help: "Moves broadcaster/VIP/moderator badges to the left"},
    { group: groups.Theme, label: "Highlights", name: "highlights", type: "checkbox", defaultValue: true, help: "If set to false this disables visual difference for highlighted messages" },
    { group: groups.Theme, label: "Announcements", name: "announcements", type: "checkbox", defaultValue: true, help: "If set to false this disables announcement messages" },
    { group: groups.Theme, label: "Timestamp", name: "timestamp", type: "checkbox", defaultValue: false, help: "If set to true displays the time of the message" },

    { group: groups.ThemeText, label: "Fade duration", name: "fade_duration", type: "number", nullable: true, help: "Time in seconds until messages are removed" },
    { group: groups.ThemeText, label: "Max. messages", name: "max_messages", type: "number", nullable: true, help: "Maximum number of messages before old ones get deleted" },
    { group: groups.ThemeText, label: "Font Family", name: "fontfamily", type: "text", nullable: true, help: "Sets any (locally installed) font" },
    { group: groups.ThemeText, label: "Font size", name: "fontsize", type: "text", nullable: true, help: `${css_size_hint}` },
    { group: groups.ThemeText, label: "Emote size", name: "emote_size", type: "text", nullable: true, help: `${css_size_hint}` },
    { group: groups.ThemeText, label: "Chat Bubble Border Size", name: "bubble_border_size", type: "text", defaultValue: 0, nullable: true, help: `If set overrides chat bubble border size. ${css_size_hint}` },
    { group: groups.ThemeText, label: "Chat Bubble Border Radius", name: "bubble_border_radius", type: "text", defaultValue: 0, nullable: true, help: `If set overrides chat bubble border radius ${css_size_hint}` },
    { group: groups.ThemeText, label: "Timestamp locale", name: "timestamp_locale", type: "text", defaultValue: "en-US", help: "The regional setting to use for the message time as ISO 639-1 language code." },

    { group: groups.ThemeColours, label: "Background", name: "background", type: "color", defaultValue: "#FFFFFF", nullable: true, help: "Background of the whole chat page. Careful: By default this will be overridden by OBS" },
    { group: groups.ThemeColours, label: "Chat Bubble Color", name: "bubble_color", type: "color", defaultValue: "#FFFFFF", nullable: true, help: "If set overrides all chat bubble colours" },
    { group: groups.ThemeColours, label: "Chat Bubble Border Color", name: "bubble_border_color", type: "color", defaultValue: "#FFFFFF", nullable: true, help: "If set overrides chat bubble border colour" },
    { group: groups.ThemeColours, label: "Username Color", name: "text_color", type: "color", nullable: true, help: "If set overrides all user name colours"},
    { group: groups.ThemeColours, label: "Message Color", name: "msg_color", type: "color", nullable: true, help: "If set overrides message colours" },
    { group: groups.ThemeColours, label: "Default Color", name: "default_color", type: "color", nullable: true, help: "This sets the default background/bubble colour for users who don't have a colour set" },
    { group: groups.ThemeColours, label: "Highlight Color", name: "highlight_color", type: "color", nullable: true, help: "This sets the colour for highlighted messages" },
    { group: groups.ThemeColours, label: "Highlight Background Color", name: "highlight_bg_color", type: "color", nullable: true, help: "This sets the background/bubble colour for highlighted messages" },
    { group: groups.ThemeColours, label: "Announcement Color", name: "announcement_color", type: "color", nullable: true, help: "This sets the colour for announcement messages" },
    { group: groups.ThemeColours, label: "Announcement Background Color", name: "announcement_bg_color", type: "color", nullable: true, help: "This sets the background/bubble colour for announcement messages" },
]

// OBS will relentlessly ignore any options when dragging a local file:// URL
// into it. To reduce issues with people getting confused over the settings 
// not working we just disable the drag button and instead leave the user with
// the copy button. 
// It's not ideal but it's the best we can do.
const isLocal = window.location.protocol === "file:";
if (isLocal === false) {
    groups['Obs'] = {
        id: "obs",
        label: "Obs",
        color: "yellow",
    };

    fields.push(
        { group: groups.Obs, label: "OBS Layer width", name: "layer-width", type: "number", defaultValue: "300", help: "The OBS layer width. Can be changed in OBS later." },
        { group: groups.Obs, label: "OBS Layer height", name: "layer-height", type: "number", defaultValue: "500", help: "The OBS layer height. Can be changed in OBS later." },
        { group: groups.Obs, label: "OBS Layer name", name: "layer-name", type: "text", defaultValue: "Chat Overlay", help: "The OBS layer name. Can be changed in OBS later." },
    );
}

const iframe = document.querySelector("#preview");
const chatFrame = document.querySelector("#chat-frame");
const configSection = document.querySelector("#config-section");
const obsLink = document.querySelector("#obs-url");
const baseUrl = window.location.href.replace("generator.html", "chat.html?");

const copyButton = document.querySelector("#copy-button");
const loadButton = document.querySelector("#load-obs-button");
const dragButton = document.querySelector("#obs-url");
const urlEl = document.querySelector("#url")
const loadUrlEl = document.querySelector("#load-url")
const generatorEl = document.querySelector("#generator");
const debugSwitch = document.querySelector("#debug");

async function buildMarkup() {

    for (const [groupName, group] of Object.entries(groups)) {
        const groupEl = document.createElement("div");
        groupEl.id = "group-" + group.id;
        groupEl.classList.add("group");
        groupHead = document.createElement("h2");
        groupHead.innerText = group.label;
        groupHead.style.borderImageSource = `linear-gradient(to right, var(--${group.color}), rgba(0,0,0,0))`;
        groupEl.appendChild(groupHead);
        generatorEl.appendChild(groupEl);
    }

    fields.map(({ group, label, name, type, defaultValue, nullable, help }) => {
        const groupEl = document.getElementById("group-" + group.id);
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
                break;
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
                if (defaultValue === true) {
                    checkbox.checked = true;
                }
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

        groupEl.append(rowEl);
    })

    
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

const changeDirection = (horizontal = false) => {
    console.log("changeDirection", horizontal);
    if (horizontal === true) {
        iframe.style.width = "98%";
        iframe.style.height = "6rem";
        chatFrame.style.float = "none";
        configSection.style.display = "block";
    } else {
        iframe.style.width = "300px";
        iframe.style.height = "500px";
        chatFrame.style.float = "left";
        configSection.style.display = "flex";
    }
}

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

let toastTimeout;
const showToast = (message, type = "success") => {
    clearTimeout(toastTimeout);

    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList = "toast-" + type;
    toast.style.opacity = 1;
    toastTimeout = setTimeout(() => {
        toast.style.opacity = 0;
    }, 5000);
}

const copyToClipBoard = () => {
    navigator.permissions.query({ name: "clipboard-write" }).then(result => {
        if (result.state == "granted" || result.state == "prompt") {
            navigator.clipboard.writeText(urlEl.value);
            showToast("Copied to clipboard!", "success");
        }
    });
}

const loadFromUrl = () => {
    let url = loadUrlEl.value;
    if (!url) { return; }

    try {
        url = new URL(url);
    } catch (e) {
        showToast("Invalid URL", "error");
        return;
    }
    console.log(["load url: ", url.toString()]);

    // deprecated parameters that will be rewritten
    const deprecatedParams = {
        "background_color": "bubble_color",
        "sb_websocket": "sb_ws_uri",
    }

    for (const [key, value] of url.searchParams.entries()) {
        if (deprecatedParams[key]) {
            console.debug(["Deprecated parameter: ", key, value])
            url.searchParams.delete(key);
            url.searchParams.append(deprecatedParams[key], value);
        }
    }

    for (const [key, value] of url.searchParams) {
        console.log(["Loading value: ", key, value])
        const el = document.querySelector(`[name="${key}"]`);
        if (el) {
            if (el.type === "checkbox") {
                el.checked = value === "true";
                el.dispatchEvent(new Event("change"));
            } else {
                if (el.type === "color") {
                    console.log(["color: ", value, el.name])
                    el.value = `#${value}`;
                } else {
                    el.value = value;
                }
                const nullable = document.querySelector(`#${key}_nullable`)
                if (nullable) {
                    nullable.checked = true;
                }
            }
        }
    }

    generateURL();

    showToast("Loaded from url!", "success");
    loadUrlEl.value = "";
}

copyButton.addEventListener("click", copyToClipBoard)
loadButton.addEventListener("click", loadFromUrl)
generatorEl.addEventListener("change", generateURL)
debugSwitch.addEventListener("change", generateURL)
dragButton.addEventListener("click", (e) => {e.preventDefault();})

buildMarkup();

if (isLocal === true) {
    document.getElementById("obs-url").style.display = "none";
    document.getElementById("obs-url-help").style.display = "none";
}

const bubbles = document.querySelector("input[name=bubbles]");
const bubble_color = document.querySelector("input[name=bubble_color]").parentNode;
const bubble_border_color = document.querySelector("input[name=bubble_border_color]").parentNode;
const bubble_border_radius = document.querySelector("input[name=bubble_border_radius]").parentNode;
const bubble_border_size = document.querySelector("input[name=bubble_border_size]").parentNode;
bubbles.addEventListener("change", (e) => {
    if (e.target.checked) {
        bubble_color.style.display = "";
        bubble_border_color.style.display = "";
        bubble_border_radius.style.display = "";
        bubble_border_size.style.display = "";
    } else {
        bubble_color.style.display = "none";
        bubble_border_color.style.display = "none";
        bubble_border_radius.style.display = "none";
        bubble_border_size.style.display = "none";
        document.getElementById("bubble_color_nullable").checked = false;
    }
});

const highlights = document.querySelector("input[name=highlights]");
const highlight_color = document.querySelector("input[name=highlight_color]").parentNode;
const highlight_bg_color = document.querySelector("input[name=highlight_bg_color]").parentNode;
highlights.addEventListener("change", (e) => {
    if (e.target.checked) {
        highlight_color.style.display = "";
        highlight_bg_color.style.display = "";
    } else {
        highlight_color.style.display = "none";
        highlight_bg_color.style.display = "none";
        document.getElementById("highlight_color_nullable").checked = false;
    }
});

const default_color = document.querySelector("input[name=default_color]").parentNode;
const username_color = document.querySelector("input[name=text_color]").parentNode;
username_color.addEventListener("change", (e) => {
    if (e.target.checked) {
        default_color.style.display = "none";
    } else {
        default_color.style.display = "";
    }
});

const announcements = document.querySelector("input[name=announcements]");
const announcement_color = document.querySelector("input[name=announcement_color]").parentNode;
const announcement_bg_color = document.querySelector("input[name=announcement_bg_color]").parentNode;
announcements.addEventListener("change", (e) => {
    if (e.target.checked) {
        announcement_color.style.display = "";
        announcement_bg_color.style.display = "";
    } else {
        announcement_color.style.display = "none";
        announcement_bg_color.style.display = "none";
        document.getElementById("announcement_color_nullable").checked = false;
    }
});

bubbles.dispatchEvent(new Event("change"));

const directionEl = document.querySelector("input[name=direction]");
directionEl.addEventListener("change", (e) => {
    changeDirection(e.target.checked);
});

const sb_enabled = document.querySelector("input[name=sb_enabled]");

sb_enabled.addEventListener("change", (e) => {
    const sb_group = document.getElementById("group-" + groups.StreamerBot.id);
    if (e.target.checked) {
        sb_group.classList.remove("group-closed");
        sb_group.classList.add("group-open");
    } else {
        sb_group.classList.remove("group-open");
        sb_group.classList.add("group-closed");
    }
});