
# Spec / Keybind / Common


## Subject

* [Review](#review)
* [System Control](#system-control)
* [Launch Application](#launch-application)
* [Wallpaper](#wallpaper)
* [Screenshot](#screenshot)
* [Volume Control](#volume-control)
* [Window Control](#window-control)
* [Layout Control](#layout-control)
* [Workspace Control](#workspace-control)
* [Misc](#misc)
* [Link](#link)


## Review

* [With Arrow Key](https://samwhelp.github.io/system-modeling/read/en_us/spec-keybind/with-arrow-key)
* [With k_j_h_l Key](https://samwhelp.github.io/system-modeling/read/en_us/spec-keybind/with-k_j_h_l-key)
* [With grave_tab_a_s Key](https://samwhelp.github.io/system-modeling/read/en_us/spec-keybind/with-grave_tab_a_s-key)
* [With Number Key](https://samwhelp.github.io/system-modeling/read/en_us/spec-keybind/with-number-key)


| Key   | Key | Key   |
| ----- | --- | ----- |
| Up    | k   | grave |
| Down  | j   | Tab   |
| Left  | h   | a     |
| Right | l   | s     |

> grave means ` (~)


## System Control

| Keybind           | Action   |
| ----------------- | -------- |
| `Alt + Shift + c` | Reload   |
| `Alt + Shift + x` | Logout   |
| `Alt + Shift + z` | Shutdown |


## Launch Application

### Launch Terminal

| Keybind           | Action          | Command                      |
| ----------------- | --------------- | ---------------------------- |
| `Alt + Enter`     | Launch Terminal | `sakura -m`                  |
| `Alt + Shift + a` | Launch Terminal | `sakura -m`                  |
| `Alt + Ctrl + a`  | Launch Terminal | `xfce4-terminal --maximize`  |
| `Alt + Shift + t` | Launch Terminal | `xterm`                      |
| `Alt + Ctrl + t`  | Launch Terminal | `urxvt`                      |
| `Alt + Shift + y` | Launch Terminal | `xfce4-terminal --drop-down` |


### Launch Rofi

| Keybind           | Action      | Command                         |
| ----------------- | ----------- | ------------------------------- |
| `Alt + Shift + d` | Launch Rofi | `rofi -show drun -show-icons`   |
| `Alt + Shift + w` | Launch Rofi | `rofi -show window -show-icons` |
| `Alt + Shift + r` | Launch Rofi | `rofi -show run`                |


### Launch Favorite

| Keybind           | Action              | Command      |
| ----------------- | ------------------- | ------------ |
| `Alt + Shift + f` | Launch File Manager | `pcmanfm-qt` |
| `Alt + Shift + g` | Launch File Manager | `thunar`     |
| `Alt + Shift + e` | Launch Text Editor  | `mousepad`   |
| `Alt + Shift + b` | Launch Web Browser  | `firefox`    |


## Wallpaper

| Keybind          | Action            | Command                                          |
| ---------------- | ----------------- | ------------------------------------------------ |
| `Alt + w`        | Wallpaper Shuf    | `feh --bg-fill --randomize ~/Pictures/Wallpaper` |
| `Alt + Ctrl + w` | Wallpaper Default | `feh --bg-fill ~/Pictures/Wallpaper/default.jpg` |

> For xfce: [wallpaper-select-xfce](https://github.com/samwhelp/note-about-fzf/tree/gh-pages/_demo/project/wallpaper-select/wallpaper-select-xfce). For other wm: [wallpaper-select-feh](https://github.com/samwhelp/note-about-fzf/tree/gh-pages/_demo/project/wallpaper-select/wallpaper-select-feh).

## Screenshot

| Keybind       | Action                   | Command    |
| ------------- | ------------------------ | ---------- |
| `Print`       | Screenshot               | `scrot`    |
| `Alt + Print` | Screenshot Selected Area | `scrot -s` |


## Volume Control

| Keybind           | Action                 | Command                                     |
| ----------------- | ---------------------- | ------------------------------------------- |
| `Alt + Shift + v` | Launch Volume Control  | `mate-volume-control`                       |
| `Alt + m`         | Volume Toggle Mute     | `amixer -q -D pulse sset Master Toggle`     |
| `Alt + Shift + <` | Volume Decrease        | `amixer -q -D pulse sset Master 5%- unmute` |
| `Alt + Shift + >` | Volume Increase        | `amixer -q -D pulse sset Master 5%+ unmute` |
| `Alt + Ctrl + ,`  | Volume Decrease Slowly | `amixer -q -D pulse sset Master 1%- unmute` |
| `Alt + Ctrl + .`  | Volume Increase Slowly | `amixer -q -D pulse sset Master 1%+ unmute` |


| Keybind                | Action                 | Command                                     |
| ---------------------- | ---------------------- | ------------------------------------------- |
| `XF86AudioMute`        | Volume Toggle Mute     | `amixer -q -D pulse sset Master Toggle`     |
| `XF86AudioLowerVolume` | Volume Decrease        | `amixer -q -D pulse sset Master 5%- unmute` |
| `XF86AudioRaiseVolume` | Volume Increase        | `amixer -q -D pulse sset Master 5%+ unmute` |


## Window Control

### Toggle Show Desktop

| Keybind   | Action              |
| --------- | ------------------- |
| `Win + d` | Toggle Show Desktop |


### Window Close

| Keybind           | Action       |
| ----------------- | ------------ |
| `Win + q`         | Close Window |
| `Win + Shift + q` | Kill Window  |
| `Alt + F4`        | Close Window |


### Window Fullscreen

| Keybind   | Action            |
| --------- | ----------------- |
| `Win + f` | Window FullScreen |
| `F11`     | Window FullScreen |


### Window Maximize

| Keybind   | Action          |
| --------- | --------------- |
| `Win + w` | Window Maximize |


### Window FloatingToggle

| Keybind       | Action                          |
| ------------- | ------------------------------- |
| `Win + n`     | Window Toggle Floating or Tited |


### Window Move

> On Window Floating

| Keybind           | Action               |
| ----------------- | -------------------- |
| `Win + Shift + k` | Window Move to Up    |
| `Win + Shift + j` | Window Move to Down  |
| `Win + Shift + h` | Window Move to Left  |
| `Win + Shift + l` | Window Move to Right |


| Keybind               | Action               |
| --------------------- | -------------------- |
| `Win + Shift + Up`    | Window Move to Up    |
| `Win + Shift + Down`  | Window Move to Down  |
| `Win + Shift + Left`  | Window Move to Left  |
| `Win + Shift + Right` | Window Move to Right |


### Window Resize

> On Window Floating

| Keybind          | Action                                 |
| ---------------- | -------------------------------------- |
| `Win + Ctrl + k` | Move Window Bottom(South) Side to Up   |
| `Win + Ctrl + j` | Move Window Bottom(South) Side to Down |
| `Win + Ctrl + h` | Move Window Right(East) Side to Left   |
| `Win + Ctrl + l` | Move Window Right(East) to Right       |


| Keybind              | Action                                 |
| -------------------- | -------------------------------------- |
| `Win + Ctrl + Up`    | Move Window Bottom(South) Side to Up   |
| `Win + Ctrl + Down`  | Move Window Bottom(South) Side to Down |
| `Win + Ctrl + Left`  | Move Window Right(East) Side to Left   |
| `Win + Ctrl + Right` | Move Window Right(East) Side to Right  |


### Window Focus

| Keybind   | Action                |
| --------- | --------------------  |
| `Win + a` | Focus Previous Window |
| `Win + s` | Focus Next Window     |


| Keybind   | Action                |
| --------- | --------------------  |
| `Win + h` | Focus Previous Window |
| `Win + l` | Focus Next Window     |


| Keybind       | Action                |
| ------------- | --------------------- |
| `Win + Left`  | Focus Previous Window |
| `Win + Right` | Focus Next Window     |


### Window Swap

> On Window Tiling

| Keybind   | Action                    |
| --------- | ------------------------- |
| `Win + k` | Swap With Previous Window |
| `Win + j` | Swap With Next Window     |


| Keybind      | Action                    |
| ------------ | ------------------------- |
| `Win + Up`   | Swap With Previous Window |
| `Win + Down` | Swap With Next Window     |


## Layout Control

### Layout Toggle

| Keybind      | Action                 |
| ------------ | ---------------------- |
| `Alt + k`    | Layout Toggle Previous |
| `Alt + j`    | Layout Toggle Next     |


| Keybind      | Action                 |
| ------------ | ---------------------- |
| `Alt + Up`   | Layout Toggle Previous |
| `Alt + Down` | Layout Toggle Next     |


## Workspace Control

### Workspace Switch


| Workspace | Title |
| --------- | ----- |
| 1         | File  |
| 2         | Edit  |
| 3         | Web   |
| 4         | Term  |
| 5         | Misc  |

| Keybind   | Action                       |
| --------- | ---------------------------- |
| `Alt + Ctrl + 1` | Switch to Workspace 1 (File) |
| `Alt + Ctrl + 2` | Switch to Workspace 2 (Edit) |
| `Alt + Ctrl + 3` | Switch to Workspace 3 (Web)  |
| `Alt + Ctrl + 4` | Switch to Workspace 4 (Term) |
| `Alt + Ctrl + 5` | Switch to Workspace 5 (Misc) |


| Keybind   | Action                       |
| --------- | ---------------------------- |
| `Alt + z` | Switch to Prior Workspace    |

| Keybind   | Action                       |
| --------- | ---------------------------- |
| `Alt + a` | Switch to Previous Workspace |
| `Alt + s` | Switch to Next Workspace     |

| Keybind   | Action                       |
| --------- | ---------------------------- |
| `Alt + h` | Switch to Previous Workspace |
| `Alt + l` | Switch to Next Workspace     |

| Keybind       | Action                       |
| ------------- | ---------------------------- |
| `Alt + Left`  | Switch to Previous Workspace |
| `Alt + Right` | Switch to Next Workspace     |


### Window Move to Workspace

| Keybind   | Action                            |
| --------- | --------------------------------- |
| `Alt + Shift + 1` | Window Move to Workspace 1 (File) |
| `Alt + Shift + 2` | Window Move to Workspace 2 (Edit) |
| `Alt + Shift + 3` | Window Move to Workspace 3 (Web)  |
| `Alt + Shift + 4` | Window Move to Workspace 4 (Term) |
| `Alt + Shift + 5` | Window Move to Workspace 5 (Misc) |

## Misc

### Tab / grave / Esc

| Keybind       |
| ------------- |
| `Win + Tab`   |
| `Win + grave` |
| `Win + Esc`   |
| `All + Tab`   |
| `All + grave` |
| `All + Esc`   |

> grave 指的是 `

| Keybind (Openbox) | Action                |
| ----------------- | --------------------- |
| `Win + Tab`       | Switch To Next Window |
| `All + Tab`       | Switch To Next Window |


| Keybind (Leftwm) | Action                    |
| ---------------- | ------------------------- |
| `Win + Esc`      | Window Toggle to Tiling   |
| `Win + grave`    | Swap With Previous Window |
| `Win + Tab`      | Swap With Next Window     |
| `Alt + grave`    | Layout Toggle Previous    |
| `Alt + Tab`      | Layout Toggle Next        |


| Keybind (Bspwm) | Action                              |
| --------------- | ----------------------------------- |
| `Win + Esc`     | Window Toggle to Floating Or Tiling |
| `Win + grave`   | Swap With Previous Window           |
| `Win + Tab`     | Swap With Next Window               |
| `Alt + grave`   | Layout Toggle Previous              |
| `Alt + Tab`     | Layout Toggle Next                  |


| Keybind (I3wm) | Action                                   |
| -------------- | ---------------------------------------- |
| `Win + grave`  | Window Toggle to Floating Or Tiling      |
| `Win + Tab`    | Layout toggle all                        |
| `Alt + grave`  | Layout toggle between tabbed or stacking |
| `Alt + Tab`    | Layout toggle between splitv or splith   |
| `Win + w`      | Layout toggle between tabbed or stacking |


## Link

* [Home](https://samwhelp.github.io/system-modeling/)
* [spec-mousebind-common](https://samwhelp.github.io/system-modeling/read/en_us/spec-mousebind-common)
* [sxhkd-config-demo](https://github.com/samwhelp/note-about-bspwm/tree/gh-pages/_demo/config/sxhkd-config)


## Wiki

* [Computer keyboard](https://en.wikipedia.org/wiki/Computer_keyboard)
* [Template:Keyboard](https://en.wikipedia.org/wiki/Template:Keyboard)
* [Keyboard layout](https://en.wikipedia.org/wiki/Keyboard_layout)

## Manpage

* man [xmodmap](https://man.archlinux.org/man/xmodmap.1)
* man [keysyms](https://man.archlinux.org/man/extra/tk/keysyms.n.en)
* Search: [xkeysymtostring](https://man.archlinux.org/search?q=xkeysymtostring)

## Arch Wiki

* [X keyboard extension](https://wiki.archlinux.org/title/X_keyboard_extension)
* [xmodmap](https://wiki.archlinux.org/title/xmodmap)

``` sh
xmodmap -pke | grep -i Escape
```

```
xmodmap -pk | grep -i Escape
```
