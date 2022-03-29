# twitch-chat
Twitch Chat Overlay for OBS based on StreamerBot's websocket, using pronouns from https://pronouns.alejo.io/

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
