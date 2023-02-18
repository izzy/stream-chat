# Configuration
## Manual configuration parameters

To use them just add them as URL parameters, e.g.

```
file:///C:/path/to/stream-chat/chat.html?sb_enabled=true&bubbles=true
```

## Config options

⚠️ **IMPORTANT**: If you have been using version 0.1.7 or older your options likely won't work anymore. No worries, you can convert your old settings by opening the generator.html file and pasting the old URL, then clicking on "Load Settings" - this will give you a new URL you can then copy into OBS.


| option             | default              | valid options | description                                                                                    | example                          |
|--------------------|----------------------|---------------|------------------------------------------------------------------------------------------------|----------------------------------|
| `sb_enabled`       | true                 | boolean       | Enable Streamer.Bot integration                                                                | `sb_enabled=true`                |
| `sb_ws_uri`        | ws://127.0.0.1:8080/ | uri           | The Streamer.Bot's local websocket URL                                                         | `ws_uri=ws://localhost:8080/`    |
| `sb_twitch`        | true                 | boolean       | Enable Streamer.Bot Twitch Messsages                                                           | `sb_twitch=true`                 |
| `sb_youtube`       | true                 | boolean       | Enable Streamer.Bot YouTube Messsages                                                          | `sb_youtube=true`                |
| `version_check`    | true                 | boolean       | Checks for new versions when starting the overlay and displays a warning when a new version is available | `version_check=true`   |
| `version_alert`    | false                | boolean       | Uses a popup instead of the obnoxiously large notification. CAREFUL: If you have the overlay setup more than once or reload the overlay frequently this might be a bad idea | `version_alert=true`   |
| `direction`        |                      | horizontal    | Set to "horizontal" this will scroll the text from right to left instead of bottom to top      | `direction=horizontal`           |
| `bubbles`          | false                | boolean       | Displays bubbles instead of the standard chat log display                                      | `bubbles=true`                   |
| `background`       |                      | color         | Background of the whole chat page. Careful: By default this will be overridden by OBS          | `background=000000`              |
| `bubble_color`     |                      | color         | If set overrides all chat bubble colours                                                       | `bubble_color=FF0000`            |
| `text_color`       |                      | color         | If set overrides all user name colours                                                         | `text_color=FF0000`              |
| `msg_color`        |                      | color         | If set overrides all message text colours                                                      | `msg_color=FF0000`               |
| `default_color`    |                      | color         | This sets the default background/bubble colour for users who don't have a colour set           | `default_color=FF0000`           |
| `badges`           | true                 | boolean       | If set to false this disable broadcaster/VIP/moderator badges                                  | `badges=false`                   |
| `badges_left`      | false                | boolean       | Moves broadcaster/VIP/moderator badges to the left                                             | `badges_left=true`               |
| `highlights`       | true                 | boolean       | If set to false this disables visual difference for highlighted messages                       | `highlights=false`               |
| `announcements`    | true                 | boolean       | If set to false this disables announcement messages                                            | `announcements=false`            |
| `timestamp`        | false                | boolean       | If set to true displays the time of the message                                                | `timestamp=true`                 |
| `timestamp_locale` | en-US                | locale        | The regional setting to use for the message time                                               | `timestamp_locale=de-DE`         |
| `cmdprefix`        |                      | string        | A prefix for bot commands. If this is set, chat messages starting with this won't be displayed | `cmdprefix=!`                    |
| `bots`             |                      | string        | A comma-separated list of accounts whose messages will not be shown(case-insensitive)          | `bots=streamelements,streamlabs` |
| `fade_duration`    |                      | number        | Time in seconds until messages are removed                                                     | `fade_duration=60`               |
| `max_messages`     |                      | number        | Maximum number of messages before old ones get deleted                                         | `max_messages=10`                |
| `fontfamily`       | Open Sans            | string        | set (any locally installed) font                                                               | `fontfamily=Calibri`             |
| `fontsize`         | large                | number/string | CSS class font-size value (e.g. x-large, 2em, 22px)                                            | `fontsize=22px`                  |
| `emote_size`       | 1.4rem               | number/string | CSS class size value (e.g. 2em, 22px)                                                          | `emote_size=22px`                |
| `version_check`    | true               | boolean | Check for new stream-chat versions on startup                                                          | `version_check=false`                |
| `version_alert`       | false               | boolean | Use an alert popup for new versions(can be clicked away, but be careful, might open several windows!)                                                          | `version_alert=true`                |
#### Types

`color`: 6-digit HEX colour code without the '#'

`boolean`: true or 1, false or 0

`locale`: [ISO 639-1 language code](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)(i.e. 'de-DE' or 'en-GB')
