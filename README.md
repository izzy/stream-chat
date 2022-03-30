# twitch-chat

Twitch Chat Overlay for OBS based on [streamer.bot](https://streamer.bot/)'s websocket, using pronouns from [pronouns.alejo.io](https://pronouns.alejo.io/).

## Config

Supported settings are as follows. To use them just add them as URL parameters, e.g.

```
file:///C:/path/to/twitch-chat/chat.html?default_color=FF0000&bubbles=true
```

### direction

Set to "horizontal" this will scroll the text from right to left instead of bottom to top.

### bubbles (set to "true" to enable)

Displays bubbles instead of the standard chat log display

### ws_uri

`default: ws://localhost:8080/)`

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
