# stream-chat

[![https://img.shields.io/github/license/izzy/stream-chat](https://img.shields.io/github/license/izzy/stream-chat)](LICENSE.md)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/izzy/stream-chat)](https://github.com/izzy/stream-chat/releases)
[![Discord](https://img.shields.io/discord/402126550004269073?color=7289DA&label=discord)](https://discord.com/invite/yRTM7H2tek)
[![pages-build-deployment](https://github.com/izzy/stream-chat/actions/workflows/pages/pages-build-deployment/badge.svg?branch=main&name=Pages%20Build)](https://chat.bean.tools/)

Chat Overlay for OBS based on [streamer.bot](https://streamer.bot/)'s websocket, using pronouns from [pronouns.alejo.io](https://pronouns.alejo.io/).

## Installation

### Local

To use the Chat overlay locally just download the newest release from the [releases page](https://github.com/izzy/stream-chat/releases/) and unpack it somewhere OBS can reach it.

After unpacking you can open `generator.html` in a browser to open the configurator.

### Online

While this is the easier method, using the online method comes with some drawbacks. First and foremost that Github has a soft limit on Bandwidth and Availability. There is no guarantee that this will always work.

Also keep in mind that Github has their own [data collection policies](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection).

To get started with using this method go to https://chat.bean.tools/generator.html 

### Configuration

Supported settings are in [options.md](options.md). It's easier to use the generator page, but in case you want to build the URL by hand or programatically, these might be helpful

## Troubleshooting
Generally the best way to troubleshoot is to open the browser console (F12) and check for any errors. Error messages in the console might differ depending on your browser. Given OBS is based on CEF(Chromium Embedded Framework) it's likely that Chrome's console is the most accurate.

If you're not sure what to do, feel free to open an issue and we'll try to help. You can also join the discord(see below) and we can help you in text or voice chat.

### Settings set in the generator aren't working in OBS
#### Possible reasons:

* You have not removed the `Local File` checkbox in the OBS Source

#### Solution

* Uncheck `Local File` and paste the generated URL again

### Can't connect to WebSocket

#### Possible errors in the console:

* Firefox can’t establish a connection to the server at ws://127.0.0.1:8080/
* Websocket connection to 'ws://127.0.0.1:8080/' failed: [...]

#### Possible reasons:

* Streamer.Bot is not running
* Streamer.Bot is listening on a different port
* Streamer.Bot is listening on a port that is not exclusively available

#### Troubleshooting:

* Make sure Streamer.Bot is running
* If you're using a custom port, make sure it's the same as the one in the overlay's URL
* If you're using a custom port, make sure it's not in use by another application(try a different port)
* To make sure the port is exclusively available, close Streamer.Bot and run `Get-Process -Id (Get-NetTCPConnection -LocalPort 8080).OwningProcess` in PowerShell. If the output is empty, the port is available, otherwise it's in use by another process and you should probably try a different port.

## I've read this README but I still have questions/problems, where can I get help?

If you have a Github account, opening an issue is the best way to give feedback. Otherwise feel free to join my [Discord](https://discord.gg/yRTM7H2tek) and ask your questions in #development.

## Contributors / Thanks

Thanks to @andi242 for his fork on https://github.com/andi242/twitch-chat
