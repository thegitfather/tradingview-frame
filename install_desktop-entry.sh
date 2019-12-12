#!/usr/bin/env sh

CUR_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
LOCAL_SHORTCUT_DIR="$HOME/.local/share/applications"

command -v nw >/dev/null 2>&1 || { echo -e "Please make sure nw is properly installed (see https://www.npmjs.com/package/nwjs). aborting...\n" >&2; exit 1; }

NW_PATH="$(which nw)"

if [ -d $LOCAL_SHORTCUT_DIR ]; then
  # echo "${NW_PATH}"
  # echo "${CUR_DIR}"
  # sed -i "s/wiki_host/${host_name}/g"
  sed "s#NW_PATH#${NW_PATH}#g" tradingview-frame.template.desktop > tradingview-frame.desktop

  if [ -f ./tradingview-frame.desktop ]; then
    sed -i "s#CUR_DIR#${CUR_DIR}#g" tradingview-frame.desktop
    cp ./tradingview-frame.desktop $LOCAL_SHORTCUT_DIR
  fi
fi
