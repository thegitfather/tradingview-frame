if (typeof require !== "undefined") {
  if (typeof require("nw.gui") !== "undefined") {
    var win = nw.Window.get();

    // set proxy
    // nw.App.setProxyConfig("socks5://127.0.0.1:8080");
    // nw.App.setProxyConfig("http://192.168.2.1:3128");

    win.show();

    // use chrome-args in package.json to disable cache, eg.:
    // "chromium-args": "--user-data-dir='temp/' --disk-cache-size=1 --media-cache-size=1 --incognito",

    // nw.gui.App.clearCache();

    // need NW.js SDK version so dev tools will work
    // win.showDevTools();

    $(function() {
      $.getScript( "https://s3.tradingview.com/tv.js", function() {
        const tvframe = initTradingView();

        if (tvframe && tvframe.iframe) {
          $(tvframe.iframe).load(() => {
            // console.log('tvframe loaded');
            modifyIframe();
          });
        } else {
          console.log('tvframe not loaded..')
        }
      }).done(function() { console.log('request succeeded!'); })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.error('request failed!');
        // win.close();
        nw.App.crashBrowser();
      })
      .always(function() { console.log('request ended!'); });
    });
  }
}

var initTradingView = function() {
  return new TradingView.widget({
    "autosize": true,
    "symbol": "OANDA:SPX500USD",
    "interval": "1440", // in minutes; 1 day = 60 * 24
    "timezone": "Europe/Berlin",
    "theme": "White",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "allow_symbol_change": true,
    "watchlist": [
      "OANDA:SPX500USD",
      "OANDA:DE30EUR",
      "CURRENCYCOM:UK100",
      "OANDA:CN50USD",
      "COINBASE:ETHUSD",
      "COINBASE:BTCUSD",
      "OANDA:EURUSD",
      "OANDA:XAUUSD",
      "OANDA:XPDUSD",
      "OANDA:BCOUSD",
      "OANDA:EURGBP",
      "OANDA:USDCNH",
      "BITMEX:EVOL7D",
      "BITMEX:BVOL24H",
      "BITMEX:BVOL7D",
      "KRAKEN:XMRUSD",
      "COINBASE:LINKUSD",
      "COINBASE:ZRXUSD",
      "BINANCE:LENDUSDT",
      "BINANCE:POLYUSD",
      "COINBASE:KNCUSD",
      "BINANCE:RENUSDT",
      "KUCOIN:SNXUSDT",
      "BITFINEX:NECUSD",
      "KRAKEN:BATUSD",
      "KUCOIN:DXETH",
      "NASDAQ:GOOG",
      "NASDAQ:AMZN",
      "NYSE:BABA",
      "NASDAQ:TSLA",
      "NASDAQ:AMD",
      "NASDAQ:HIMX",
      "NYSE:SHOP",
      "NYSE:NET",
      "NASDAQ:SSRM",
      "XETR:DEZ",
    ],
    "details": true,
    "hotlist": true,
    "hideideas": true
  });

  $("iframe").css("opacity", "0.3").css("pointer-events", "none");
  $("body").attr("style", "margin:0; overflow:hidden;");
  $("body").attr("style", "background:hidden;");
};

var modifyIframe = function() {
  $("iframe").css("opacity", "1").css("pointer-events", "all");
	// $("body").attr("style", "margin:0; overflow:hidden;");
  $("iframe").contents().find(".dl-header").attr("style", "text-align:center; padding:0;");
  $("iframe").contents().find(".dl-header-price").attr("style", "display:block; font-size:44px; line-height:1em;");
  $("iframe").contents().find(".dl-header-change").attr("style", "display:block; font-size:24px; line-height:1em; margin-bottom:0;");
  $("iframe").contents().find(".symbol-list-item").attr("style", "height:auto;");
  $("iframe").contents().find(".symbol-list-item > div").attr("style", "margin:0;");
  $("iframe").contents().find(".symbol-list-item:even").css("background-color", "#eeeeee");

  // drag & drop handle to resize watchlist
  var $handle = $("iframe").contents().find(".widgetbar-handle");
  $handle.simulate("drag-n-drop", { dx: -120 });
};
