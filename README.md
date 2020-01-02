# Adjusted TradingView Widget Frame

![Preview](https://github.com/thegitfather/zzz_assets/blob/master/tradingview-frame/tradingviewframe_mod.png?raw=true)

## Prerequisite

- [Node.js](https://nodejs.org)
- npm (comes with Node)
- [NW.js](https://nwjs.io/) or install with [nwjs npm package](https://www.npmjs.com/package/nwjs)

## Add shortcut / desktop entry (Linux)

```shell
$ ./install_desktop-entry.sh
```

## Start via command line

When `nw` is in your `$PATH` start with:

```shell
$ nw tradingview-frame/app
```

## Adjust watchlist / settings

Check `app/tradingview-frame.js` and look for the watchlist array (`[...]`).

```js
  ...
  "allow_symbol_change": true,
  "watchlist": [
    "COINBASE:BTCUSD",
    "COINBASE:ETHUSD",
    "OANDA:EURUSD",
    "OANDA:XAUUSD",
    "OANDA:SPX500USD",
    "OANDA:DE30EUR",
    "NASDAQ:GOOG",
    "NASDAQ:AMZN",
    "NASDAQ:TSLA",
    "NASDAQ:AMD",
    ...
  ],
  "details": true,
  "hotlist": true,
  "hideideas": true
});
...
```

New ticker entries and settings can be tried [here](https://www.tradingview.com/widget/). To switch symbol or explore simply start typing on the keyboard to open the symbol list:

![Symbol List](https://raw.githubusercontent.com/thegitfather/zzz_assets/master/tradingview-frame/tradingview-symbol-list.jpg)

**Note:** Start with the exchange name like `KRAKEN:` or `BITSTAMP:` to get a full list.


## Adjust window dimensions

Values can be adjusted in `app/package.json`:

```json
  "window": {
    "title": "TradingView Frame",
    "show": false,
    "frame": true,
    "width": 1480,
    "height": 640,
    "icon": "tradingview.png",
    ...
  }
...
```

### Donations

BTC: `1CWpaTiyLGuotssbQqrSdPdebVzg92AiAD`
ETH: `0x4DF44D8Cf4DC8E320755c5C4369c86dA5003f996`


### ToDo

- build complete package with NW.js [http://docs.nwjs.io/en/latest/For%20Developers/Building%20NW.js/#build-flavors](http://docs.nwjs.io/en/latest/For%20Developers/Building%20NW.js/#build-flavors)
