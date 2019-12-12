#!/usr/bin/env sh

WINDOW_NAME='TradingView Frame'
CUR_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

command -v nw >/dev/null 2>&1 || { echo -e "Please make sure nw is properly installed (see https://www.npmjs.com/package/nwjs). aborting...\n" >&2; exit 1; }

# try focusing - exit if successful
$(which wmctrl) -F -a "${WINDOW_NAME}" && exit 0

# execute nw
nw "${CUR_DIR}/app"
