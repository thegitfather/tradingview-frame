#!/usr/bin/env bash

window_name='TradingView Frame'
curdir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

command -v nw >/dev/null 2>&1 || { echo -e "Please make sure nw is properly installed (see https://www.npmjs.com/package/nwjs). aborting...\n" >&2; exit 1; }

# try focusing - exit if successful
$(which wmctrl) -F -a "${window_name}" && exit 0

# execute nw
$(which nw) "${curdir}/app"