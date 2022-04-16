# twitch-chat

Twitch Chat Overlay for OBS based on [streamer.bot](https://streamer.bot/)'s websocket, using pronouns from [pronouns.alejo.io](https://pronouns.alejo.io/).

Disclaimer: This is a fork. Credits to the idea and initial version go to [izzy](https://github.com/izzy/).

## Config

Supported settings are as follows. To use them just add them as URL parameters, e.g.

```
file:///C:/path/to/twitch-chat/chat.html?default_color=FF0000
```

Example 1: `file:///C:/path/to/twitch-chat/chat.html?ws_uri=ws://localhost:18080/&badges=false&pronouns=false`   
No badges, no pronouns, vertical chat

Example 2: `file:///C:/path/to/twitch-chat/chat.html?ws_uri=ws://localhost:18080/&badges=false&pronouns=false&direction=horizontal&fade=12`  
No badges, pronouns, horizontal chat, fade message after 12s

Example 3: `file:///C:/path/to/twitch-chat/chat.html`  
full default, badges, pronouns, vertical chat


## options

| option        | default       | valid options | description |example|
|-------------- |-----------    |------------|------------|------------|
| direction     | none          | `horizontal` |vertical or horizontal chat layout|`&direction=horizontal`|
| fade       | none      | `int`       | fade messages in horiz. chat after `int` seconds|`&fade=12`|
|bots|none|string|bot names in comma separated list to be excluded from chat display|`&bot=name1`|
|cmdprefix|none|`string`|prefix for commands to exclude from chat display|`&cmdprefix=!`|
|pronouns|`true`|`true`/`false`|display pronouns|`&pronouns=false`|
|fontsize|`large`|any css font declaration|set font size in display|`&fontsize=xx-large`|
|timestamp|`false`|`true`/`false`|enable timestamps in vert. chat box|`&timestamp=true`|
|fontfamily|`sans-serif`|`monospace`/`sans-serif`/`serif`|set font family for chat|`&fontfamily=monospace`|

### ws_uri

`default: ws://localhost:8080/`

The Streamer Bot WebSocket Address to use.

### background_color

Set to a 6-character hex colour this will overwrite all user bubble colours.

### text_color

Set to a 6-character hex colour this will overwrite all username colours.

### default_color

This sets the default background/bubble colour for users who don't have a colour set.

### badges

`default: true`

Set to false disables broadcaster/VIP/moderator badges

### highlights

`default: true`

Set to false this disables a visual difference for highlighted messages.
## I've read this README but I still have questions/problems, where can I get help?

If you have a Github account, opening an issue is the best way to give feedback. Otherwise you can join my [Discord](https://discord.gg/yRTM7H2tek) and ask you question in #development or send me a message on [Twitter](https://twitter.com/angry_izzy).
