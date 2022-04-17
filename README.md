# twitch-chat

Twitch Chat Overlay for OBS based on [streamer.bot](https://streamer.bot/)'s websocket, using pronouns from [pronouns.alejo.io](https://pronouns.alejo.io/).

## Config

Supported settings are as follows. To use them just add them as URL parameters, e.g.

```
file:///C:/path/to/twitch-chat/chat.html?default_color=FF0000&bubbles=true
```

### Config options

| option           | default              | valid options | description                                                                                    | example                        |
|------------------|----------------------|---------------|------------------------------------------------------------------------------------------------|--------------------------------|
| ws_uri           | ws://localhost:8080/ |               | The Streamer.Bot's local websocket URL                                                         | ws_uri=ws://localhost:8080/    |
| direction        |                      | horizontal    | Set to "horizontal" this will scroll the text from right to left instead of bottom to top      | direction=horizontal           |
| bubbles          | false                | boolean       | Displays bubbles instead of the standard chat log display                                      | bubbles=true                   |
| background       |                      | color         | Background of the whole chat page. Careful: By default this will be overridden by OBS          | background=000000              |
| background_color |                      | color         | If set overrides all chat bubble colours                                                       | background_color=FF0000        |
| text_color       |                      |               | If set overrides all user name colours                                                         | text_color=FF0000              |
| default_color    |                      |               | This sets the default background/bubble colour for users who don't have a colour set           | default_color=FF0000           |
| badges           | true                 | boolean       | If set to false this disable broadcaster/VIP/moderator badges                                  | badges=false                   |
| highlights       | true                 | boolean       | If set to false this disables visual difference for highlighted messages                       | highlights=false               |
| timestamp        | false                | boolean       | If set to true displays the time of the message                                                | timestamp=true                 |
| timestamp_locale | en-US                | locale        | The regional setting to use for the message time                                               | timestamp_locale=de-DE         |
| cmdprefix        |                      | string        | A prefix for bot commands. If this is set, chat messages starting with this won't be displayed | cmdprefix=!                    |
| bots             |                      | string        | A comma-separated list of accounts whose messages will not be shown(case-insensitive)          | bots=streamelements,streamlabs |
| fade_duration    |                      | number        | Time in seconds until messages are removed                                                     | fade_duration=60               |

### Types

`color`: 6-digit HEX colour code without the '#'

`boolean`: true or 1, false or 0

`locale`: [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)(i.e. 'de-DE' or 'en-GB')


## I've read this README but I still have questions/problems, where can I get help?

If you have a Github account, opening an issue is the best way to give feedback. Otherwise you can join my [Discord](https://discord.gg/yRTM7H2tek) and ask you question in #development or send me a message on [Twitter](https://twitter.com/angry_izzy).
