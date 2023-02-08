

# Quick Start


## Subject

* [Cheat Sheet](https://samwhelp.github.io/system-modeling/read/en_us/quick-start/cheat-sheet)
* [Start](#Start)
* [Window Control](#window-control)
* [Window Switch](#window-switch)
* [Workspace Switch](#workspace-switch)
* [Application Launch](#application-launch)
* [System Exit](#system-exit)
* [Configuration Reload](#configuration reload)
* [Volume Control](#volume-control)
* [Wallpaper](#wallpaper)
* [Screenhot](#screenhot)


## Start

| Keybind           | Action          | Command                      |
| ----------------- | -------------- | ------------ |
| `Alt + Shift + f` | Launch File Manager | `pcmanfm-qt` |
| `Alt + Shift + a` | Launch Terminal | `sakura -m`                  |
| `Alt + Enter`     | Launch Terminal | `sakura -m`                  |


## Window Control


| Keybind           | Action   |
| ----------------- | -------- |
| `Win + q`         | Close Window |
| `Win + w` | Window Maximize |

> [Close Window] Normal Keybind [`Alt + F4`]。


| Keybind           | Action   |
| ----------------- | -------- |
| `Win + f` | Window FullScreen |
| `Win + d` | 切換顯示桌面 |

> [Window FullScreen] Normal Keybind [`F11`]。


### Window Move

| Mousebind                 | Action      |
| ------------------------- | ----------- |
| `Win + [Mouse Left Click Drag]` | Window Move |

| Keybind          | Action     |
| ----------------- | -------- |
| `Win + e`         | Window Begin Move |


### Window Resize

| Mousebind                  | Action        |
| -------------------------- | ------------- |
| `Win + [Mouse Right Click Drag]` | Window Resize |

| Keybind           | Action   |
| ----------------- | -------- |
| `Win + r`         | Window Begin Resize |


## Window Switch

| Keybind   | Action                |
| --------- | --------------------  |
| `Win + a` | Focus Previous Window |
| `Win + s` | Focus Next Window     |

> [Window Switch] Normal Keybind [`Alt + Tab`]


## Workspace Switch

> Workspace Circle Switch

| Keybind   | Action                       |
| --------- | ---------------------------- |
| `Alt + a` | Switch to Previous Workspace |
| `Alt + s` | Switch to Next Workspace     |

| Keybind   | Action                       |
| --------- | ---------------------------- |
| `Alt + z` | Switch to Prior Workspace    |


> Workspace Specific Switch

| Keybind   | Action                       |
| --------- | ---------------------------- |
| `Alt + Ctrl + 1` | Switch to Workspace 1 (File) |
| `Alt + Ctrl + 2` | Switch to Workspace 2 (Edit) |
| `Alt + Ctrl + 3` | Switch to Workspace 3 (Web)  |
| `Alt + Ctrl + 4` | Switch to Workspace 4 (Term) |
| `Alt + Ctrl + 5` | Switch to Workspace 5 (Misc) |

> Window Move to Specific Workspace

| Keybind   | Action                            |
| --------- | --------------------------------- |
| `Alt + Shift + 1` | Window Move to Workspace 1 (File) |
| `Alt + Shift + 2` | Window Move to Workspace 2 (Edit) |
| `Alt + Shift + 3` | Window Move to Workspace 3 (Web)  |
| `Alt + Shift + 4` | Window Move to Workspace 4 (Term) |
| `Alt + Shift + 5` | Window Move to Workspace 5 (Misc) |


> Further Reading [[With Number Key](https://samwhelp.github.io/system-modeling/read/zh_tw/spec-keybind/with-number-key)]

> or [Alt + number] to [Switch Workspace]

> or [Win + number] to [Switch Window」


## Application Launch

### MainMenu or RunDialog

| Keybind           | Action   |
| --------- | ------------------------- |
| `Alt + F1` | Toggle Show MainMenu |
| `Alt + F2` | Toggle Show RunDialog |


### Rofi

| Keybind           | Action      | Command                         |
| ----------------- | ----------- | ------------------------------- |
| `Alt + Shift + d` | Launch Rofi | `rofi -show drun -show-icons`   |
| `Alt + Shift + w` | Launch Rofi | `rofi -show window -show-icons` |
| `Alt + Shift + r` | Launch Rofi | `rofi -show run`                |


### Launch Favorite Application

| Keybind           | Action          | Command                      |
| ----------------- | -------------- | ------------ |
| `Alt + Shift + f` | Launch File Manager | `pcmanfm-qt` |
| `Alt + Shift + g` | Launch File Manager | `thunar`     |
| `Alt + Shift + e` | Launch Text Editor | `mousepad`   |
| `Alt + Shift + b` | Launch Web Browser | `firefox`    |
| `Alt + Shift + v` | 開啟音量調整器 | `mate-volume-control`    |

> [firefox] can use [`firefox --new-tab about:blank`]


## System Exit

| Keybind           | Action   |
| --------- | ------------------------- |
| `Alt + Shift + x` | Logout Dialog |
| `Alt + Shift + z` | Shutdown  Dialog |


## Configuration Reload

| Keybind           | Action   |
| --------- | ------------------------- |
| `Alt + Shift + c` | Configuration Reload |


## Volume Control

| Keybind           | Action                 | Command                                     |
| ----------------- | ---------------------- | ------------------------------------------- |
| `Alt + m`         | Volume Toggle Mute     | `amixer -q -D pulse sset Master Toggle`     |
| `Alt + Shift + <` | Volume Decrease        | `amixer -q -D pulse sset Master 5%- unmute` |
| `Alt + Shift + >` | Volume Increase        | `amixer -q -D pulse sset Master 5%+ unmute` |



## Wallpaper

| Keybind          | Action            | Command                                          |
| ---------------- | ----------------- | ------------------------------------------------ |
| `Alt + w`        | Wallpaper Shuf    | `feh --bg-fill --randomize ~/Pictures/Wallpaper` |
| `Alt + Ctrl + w` | Wallpaper Default | `feh --bg-fill ~/Pictures/Wallpaper/default.jpg` |

> Helper: [[wallpaper-select](https://samwhelp.github.io/note-about-fzf/read/project/wallpaper-select/)]


## Screenhot

| Keybind       | Action                   | Command    |
| ------------- | ------------------------ | ---------- |
| `Print`       | Screenshot               | `scrot`    |
| `Alt + Print` | Screenshot Selected Area | `scrot -s` |

