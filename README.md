# Adjusted TradingView Widget Frame

![Preview](https://github.com/thegitfather/zzz_assets/blob/master/tradingview-frame/tradingviewframe_mod.png?raw=true)

## Prerequisits

- Node.js
- npm
- [NW.js](https://nwjs.io/) or install with [nwjs npm package](https://www.npmjs.com/package/nwjs)

## Start

When `nw` is found in your `$PATH` start with:

```shell
$ nw tradingview-frame/app
```

## Adjust watchlist / settings

Check `app/tradingview-frame.js` and look for the watchlist array (`[...]`).

```js
  ...
  "allow_symbol_change": true,
  "watchlist": [
    "BTCE:BTCUSD",
    "POLONIEX:BTCUSDT",
    "BTCE:BTCEUR",
    "BTCE:ETHUSD",
    "POLONIEX:ETHUSDT",
    "BTCE:ETHBTC",
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

**Note:** Start with the exchange name like `POLONIEX` or `BTCE` to get a full list.


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

### ToDo

- build complete package with NW.js [http://docs.nwjs.io/en/latest/For%20Developers/Building%20NW.js/#build-flavors](http://docs.nwjs.io/en/latest/For%20Developers/Building%20NW.js/#build-flavors)

