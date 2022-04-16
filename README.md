# twitch-chat

Twitch Chat Overlay for OBS based on [streamer.bot](https://streamer.bot/)'s websocket, using pronouns from [pronouns.alejo.io](https://pronouns.alejo.io/).

Disclaimer: This is a fork. Credits to the idea and initial version go to [izzy](https://github.com/izzy/).

## Config

Supported settings are as follows. To use them just add them as URL parameters, e.g.

Example 1: `file:///C:/path/to/twitch-chat/chat.html?ws_uri=ws://localhost:9090/&badges=false&pronouns=false`   
custom SB uri, No badges, no pronouns, vertical chat

Example 2: `file:///C:/path/to/twitch-chat/chat.html?badges=false&pronouns=false&direction=horizontal&fade=12`  
No badges, pronouns, horizontal chat, fade message after 12s

Example 3: `file:///C:/path/to/twitch-chat/chat.html`  
full default, badges, pronouns, vertical chat

## options

| option        | default       | valid options | description |example|
|-------------- |-----------    |------------|------------|------------|
| `direction`     | none          | `horizontal` |vertical or horizontal chat layout|`&direction=horizontal`|
| `fade`       | none      | `int`       | fade messages in horiz. chat after `int` seconds|`&fade=12`|
|`bots`|none|`string`|bot names in comma separated list to be excluded from chat display|`&bot=name1`|
|`cmdprefix`|none|`string`|prefix for commands to exclude from chat display|`&cmdprefix=!`|
|`badges`|`true`|`true`/`false`|enable chat badges|`&badges=false`|
|`pronouns`|`true`|`true`/`false`|display pronouns|`&pronouns=false`|
|`fontsize`|`large`|any css font declaration|set font size in display|`&fontsize=xx-large`|
|`timestamp`|`false`|`true`/`false`|enable timestamps in vert. chat box|`&timestamp=true`|
|`fontfamily`|`sans-serif`|`monospace`/`sans-serif`/`serif`|set font family for chat|`&fontfamily=monospace`|
|`background`|`transparent`|html color code without `#`|set chat background color|`&background=bebebe`|
|`ws_uri`|`ws://localhost:8080/`|`ws://host:port/`|The Streamer Bot WebSocket Address to use.|`&ws_uri=ws://localhost:18080/`|
||||||

## I've read this README but I still have questions/problems, where can I get help?

~~If you have a Github account, opening an issue is the best way to give feedback. Otherwise you can join my [Discord](https://discord.gg/yRTM7H2tek) and ask you question in #development or send me a message on [Twitter](https://twitter.com/angry_izzy).~~

Please note that izzy might not be able to help with this fork.
