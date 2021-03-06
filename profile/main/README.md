
# Profile / Main


* [rootfs](overlay)

run

``` sh
tree overlay -a
```


## Subject

* [Environment](#environment)
* [Appearance](#appearance)
* [Theme](#theme)
* [Input Method](#input-method)
* [Desktop Environment](#desktop-environment)
* [Window Manager](#window-manager)
* [Util](#util)
* Util / [Grub](#util--grub)
* Util / [Wallpaper](#util--wallpaper)
* Util / [Console Editor](#util--console-editor)
* [Tool](#tool)
* Tool / [Launcher](#tool--launcher)
* Tool / [Terminal](#tool--terminal)
* Tool / [File Manager](#tool--file-manager)
* Tool / [Image Viewer](#tool--image-viewer)
* Tool / [Text Editor](#tool--text-editor)
* Tool / [Media Player](#tool--media-player)



## Environment

### locale

* [/etc/default/locale](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/default/locale)

### font match order

* [/etc/fonts/conf.d/51-font-match-order.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/fonts/conf.d/51-font-match-order.conf)
* [~/.config/fontconfig/conf.d/50-font-match-order.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/fontconfig/conf.d/50-font-match-order.conf)


### mate-volume-control-status-icon

* [~/.config/autostart/mate-volume-control-status-icon.desktop](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/autostart/mate-volume-control-status-icon.desktop)


### xfce4-notifyd

* [~/.config/autostart/xfce4-notifyd.desktop](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/autostart/xfce4-notifyd.desktop)


### xdg-mime-applications

* [/usr/share/applications/mimeapps.list](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/usr/share/applications/mimeapps.list)
* [~/.config/mimeapps.list](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/mimeapps.list)


### xdg-user-dir-templates

* [~/Templates/bash.sh](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/Templates/bash.sh)
* [~/Templates/pygithub.py](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/Templates/pygithub.py)


### system-exit

* [~/.local/share/applications/system-reboot.desktop](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/share/applications/system-reboot.desktop)
* [~/.local/share/applications/system-shutdown.desktop](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/share/applications/system-shutdown.desktop)


## Appearance


### gtkrc

* [~/.config/.gtkrc-2.0](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/share/gtkrc-profile/gruvbox-dark/skel/.gtkrc-2.0)
* [~/.config/gtk-3.0/settings.ini](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/share/gtkrc-profile/gruvbox-dark/skel/.config/gtk-3.0/settings.ini)


### qt5ct

* [~/.config/qt5ct/qt5ct.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/share/qt5ctrc-profile/gruvbox-dark/skel/.config/qt5ct/qt5ct.conf)


### xsettingsd

* [~/.config/xsettingsd/xsettingsd.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/share/xsettingsdrc-profile/theme-gruvbox/xsettingsd.conf)


### xfsettingsd

* [~/.config/xfce4/xfconf/xfce-perchannel-xml/xsettings.xml](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/xfconf/xfce-perchannel-xml/xsettings.xml)




## Theme

## themes

* [~/.themes](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.themes)

### Gruvbox

* [~/.themes/Gruvbox](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.themes/Gruvbox)

### NumixBlue

* [~/.themes/NumixBlue](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.themes/NumixBlue)

### RGapsBlendNoButtons

* [~/.themes/RGapsBlendNoButtons](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.themes/RGapsBlendNoButtons)

## icons

* [~/.icons](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.icons)


### Gruvbox-Dark

* [Gruvbox-Dark](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.icons/Gruvbox-Dark)




## Input Method


### fcitx

* [~/.config/fcitx/profile](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/fcitx/profile)
* [~/.config/fcitx/conf/fcitx-chewing.config](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/fcitx/conf/fcitx-chewing.config)
* [~/.config/fcitx/conf/fcitx-classic-ui.config](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/fcitx/conf/fcitx-classic-ui.config)
* [~/.config/fcitx/conf/fcitx-quickphrase.config](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/fcitx/conf/fcitx-quickphrase.config)
* [~/.config/fcitx/addon/fcitx-kimpanel-ui.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/fcitx/addon/fcitx-kimpanel-ui.conf)
* [~/.config/fcitx/addon/fcitx-quickphrase.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/fcitx/addon/fcitx-quickphrase.conf)
* [~/.config/fcitx/addon/fcitx-spell.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/fcitx/addon/fcitx-spell.conf)


For Ubuntu (Debian)

* [~/.xinputrc](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/fcitx/asset/.xinputrc)

For Manjaro (Arch)

* [~/.pam_environment](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/fcitx/asset/.pam_environment)




## Desktop Environment


### xfce

* [~/.config/xfce4/panel/whiskermenu-1.rc](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/panel/whiskermenu-1.rc)
* [~/.config/xfce4/xfconf/xfce-perchannel-xml/keyboards.xml](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/xfconf/xfce-perchannel-xml/keyboards.xml)
* [~/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-desktop.xml](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-desktop.xml)
* [~/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-keyboard-shortcuts.xml](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-keyboard-shortcuts.xml)
* [~/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-panel.xml](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-panel.xml)
* [~/.config/xfce4/xfconf/xfce-perchannel-xml/xfwm4.xml](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/xfconf/xfce-perchannel-xml/xfwm4.xml)
* [~/.config/xfce4/xfconf/xfce-perchannel-xml/xsettings.xml](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/xfconf/xfce-perchannel-xml/xsettings.xml)
* [~/.config/xfce4/helpers.rc](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/helpers.rc)
* [note-about-xfc](https://github.com/samwhelp/note-about-xfce/tree/gh-pages/_demo/config/xfce-config/main/config/xfce4)


## Window Manager

### openbox

* [~/.local/bin/openboxrc-ctrl](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/bin/openboxrc-ctrl)
* [~/.config/openbox](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/share/openboxrc-profile/openbox-with-tint)
* [note-about-openbox](https://github.com/samwhelp/note-about-openbox/tree/gh-pages/_demo/config/openbox-config/plan/config/openbox)


### i3wm

* [~/.local/bin/i3wmrc-ctrl](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/bin/i3wmrc-ctrl)
* [~/.config/i3](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/share/i3wmrc-profile/i3wm-with-tint)
* [note-about-i3wm](https://github.com/samwhelp/note-about-i3wm/tree/gh-pages/_demo/config/i3wm-config/plan/config/i3)


### bspwm

* [~/.local/bin/bspwmrc-ctrl](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/bin/bspwmrc-ctrl)
* [~/.config/bspwm](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/share/bspwmrc-profile/bspwm-with-tint)
* [note-about-bspwm](https://github.com/samwhelp/note-about-bspwm/tree/gh-pages/_demo/config/bspwm-config/plan/config/bspwm)


### herbstluftwm

* [~/.local/bin/herbstluftwmrc-ctrl](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/bin/herbstluftwmrc-ctrl)
* [~/.config/herbstluftwm](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/share/herbstluftwmrc-profile/herbstluftwm-with-tint)
* [note-about-herbstluftwm](https://github.com/samwhelp/note-about-herbstluftwm/tree/gh-pages/_demo/config/herbstluftwm-config/plan/config/herbstluftwm)


### leftwm

* [~/.local/bin/leftwmrc-ctrl](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/bin/leftwmrc-ctrl)
* [~/.local/bin/leftwmrc-theme-ctrl](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/bin/leftwmrc-theme-ctrl)
* [~/.local/bin/leftwmrc-theme-get](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/bin/leftwmrc-theme-get)
* [~/.config/leftwm](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/share/leftwmrc-profile/leftwm-with-tint)
* [note-about-leftwm](https://github.com/samwhelp/note-about-leftwm/tree/gh-pages/_demo/config/leftwm-config/plan/config/leftwm)


## Util


## Util / Grub

### grubrc-profile

* [~/.local/bin/grubrc-theme-ctrl](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/bin/grubrc-theme-ctrl)
* [~/.local/bin/grubrc-theme-get](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/bin/grubrc-theme-get)
* [grubrc-profile](https://samwhelp.github.io/note-about-grub/read/project/grubrc-profile/)


## Util / Wallpaper

### opset-wallpaper

* [~/.local/bin/opset-wallpaper-*.sh](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/bin)
* [~/.local/share/applications/opset-wallpaper-*.desktop](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/share/applications)
* note-about-wallpaper / [opset-wallpaper](https://samwhelp.github.io/note-about-wallpaper/read/project/opset-wallpaper/)


### wallpaper-select

* [~/.local/bin/wallpaper-select-*.sh](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/bin)
* note-about-wallpaper / [wallpaper-select](https://samwhelp.github.io/note-about-wallpaper/read/project/wallpaper-select/)


### Util / Console Editor

### xfteditor

* [~/.local/bin/xft*.sh](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/bin)
* [~/.local/share/applications/xft*.desktop](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/share/applications)
* [xfteditor](https://samwhelp.github.io/tool-xfteditor/read/project/xfteditor/)


### vimrc-profile

* [~/.local/bin/vimrc-get](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/bin/vimrc-get)
* [~/.local/bin/vimrc-ctrl](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/bin/vimrc-ctrl)
* [~/.local/bin/nvimrc-ctrl](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/bin/nvimrc-ctrl)
* [vimrc-profile](https://github.com/samwhelp/note-about-vim/tree/gh-pages/_demo/project/vimrc-profile/)




## Tool

## Tool / Launcher

### rofi

* [~/.config/rofi/config.rasi](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/rofi/config.rasi)
* [~/.local/share/applications/rofi-show-drun.desktop](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/share/applications/rofi-show-drun.desktop)
* [~/.local/share/applications/rofi-show-window.desktop](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/share/applications/rofi-show-window.desktop)
* [~/.local/share/applications/rofi-show-run.desktop](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/share/applications/rofi-show-run.desktop)




## Tool / Terminal


### sakura

* [~/.config/sakura/sakura.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/sakura/sakura.conf)


### xfce4-terminal

* [~/.config/xfce4/terminal/terminalrc](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/terminal/terminalrc)




## Tool / File Manager

### pcmanfm-qt

* [~/.config/pcmanfm-qt/default/settings.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/pcmanfm-qt/default/settings.conf)


### thunar

* [~/.config/xfce4/xfconf/xfce-perchannel-xml/thunar.xml](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/xfconf/xfce-perchannel-xml/thunar.xml)
* [~/.config/Thunar/uca.xml](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/Thunar/uca.xml)
* [~/.config/Thunar/accels.scm](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/Thunar/accels.scm)


## Tool / Text Editor

## atom

* [~/.atom/config.cson](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.atom/config.cson)


## Tool / Image Viewer

## viewnior

* [~/.config/viewnior/viewnior.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/viewnior/viewnior.conf)


## Tool / Media Player

## mpv

* [~/.config/mpv/mpv.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/mpv/mpv.conf)
