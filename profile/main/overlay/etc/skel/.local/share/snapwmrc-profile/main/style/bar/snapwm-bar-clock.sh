#!/usr/bin/env bash


##
## ## TODO:
##
## * kill old process on restart
##


THE_BASE_DIR_PATH="$(cd -- "$(dirname -- "$0")" ; pwd)"
THE_THEMES_DIR_PATH="$THE_BASE_DIR_PATH/themes"

interval=0

clock() {
	printf " $(date '+%a, %Y-%m-%d %H:%M:%S') "
}

while true; do
	interval=$((interval + 1))

	sleep 1 && xsetroot -name "$(clock)"
done
