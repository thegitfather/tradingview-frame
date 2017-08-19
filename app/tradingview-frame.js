if (typeof require !== "undefined") {
  if (typeof require("nw.gui") !== "undefined") {
    var win = nw.Window.get();

    // set proxy
    // nw.App.setProxyConfig("socks5://127.0.0.1:8080");
    // nw.App.setProxyConfig("http://192.168.2.10:3128");

    win.show();

    // need NW.js SDK version so dev tools will work
    // win.showDevTools();

    $(function() {
      $.getScript( "https://s3.tradingview.com/tv.js", function() {
        initTradingView();
        setTimeout(modifyIframe, 6000);
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
  new TradingView.widget({
    "autosize": true,
    "symbol": "POLONIEX:BTCUSDT",
    "interval": "15",
    "timezone": "Europe/Berlin",
    "theme": "White",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "allow_symbol_change": true,
    "watchlist": [
      "POLONIEX:BTCUSDT",
      "POLONIEX:BCHUSDT",
      "POLONIEX:BCHBTC",
      "POLONIEX:ETHUSDT",
      "POLONIEX:ETHBTC",
      "POLONIEX:XMRBTC",
      "POLONIEX:XMRUSDT",
      "OANDA:EURUSD",
      "OANDA:EURGBP",
      "OANDA:USDCNH",
      "OANDA:USDTHB",
      "FX_IDC:EURTHB",
      "OANDA:XAUUSD",
      "OANDA:XPDUSD",
      "OANDA:CORNUSD",
      "OANDA:BCOUSD",
      "OANDA:SPX500USD",
      "OANDA:DE30EUR",
      "NASDAQ:GOOG",
      "NASDAQ:HIMX",
      "NASDAQ:TSLA",
      "NASDAQ:AMD",
    ],
    "details": true,
    "hotlist": true,
    "hideideas": true
  });

  $("iframe").css("opacity", "0.3").css("pointer-events", "none");
  $("body").attr("style", "margin:0; overflow:hidden;");
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
