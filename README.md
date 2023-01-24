# system-modeling

* [system-modeling](https://samwhelp.github.io/system-modeling/) ([GitHub](https://github.com/samwhelp/system-modeling))
* [note-about-ubuntu](https://samwhelp.github.io/note-about-ubuntu/) ([GitHub](https://github.com/samwhelp/note-about-ubuntu))
* [note-about-manjaro](https://samwhelp.github.io/note-about-manjaro/) ([GitHub](https://github.com/samwhelp/note-about-manjaro))
* [note-about-ubuntu](https://samwhelp.github.io/note-about-archlinux/) ([GitHub](https://github.com/samwhelp/note-about-archlinux))
* [note-about-archcraft](https://samwhelp.github.io/note-about-archcraft/) / [archcraft-adjustment-package](https://github.com/samwhelp/archcraft-adjustment-package)
* [note-about-asamos](https://samwhelp.github.io/note-about-asamos/) ([GitHub](https://github.com/samwhelp/note-about-asamos)) / [asamarch-documentation](https://samwhelp.github.io/asamarch-documentation/)
* samwhelp / [note](https://samwhelp.github.io/book/)
* GitHub / [Supported themes](https://pages.github.com/themes/) / [pages-themes](https://github.com/pages-themes/)


## Spec

| Spec | 中文說明 |
| --- | --- |
| [Keybind](https://samwhelp.github.io/system-modeling/read/en_us/spec-keybind-common) | [中文說明](https://samwhelp.github.io/system-modeling/read/zh_tw/spec-keybind-common) |
| [Mousebind](https://samwhelp.github.io/system-modeling/read/en_us/spec-mousebind-common) | [中文說明](https://samwhelp.github.io/system-modeling/read/zh_tw/spec-mousebind-common) |


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


### qt-style-follow-gtk

* [/etc/profile.d/qt-style-follow-gtk.sh](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/profile.d/qt-style-follow-gtk.sh)


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

* [~/.pam_environment](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/fcitx/asset/.pam_environment) ([deprecated](https://wiki.archlinux.org/title/environment_variables#Using_pam_env))


## dconf

* [/etc/dconf/profile/user](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/dconf/profile/user)
* /etc/dconf/db/distro
* /etc/dconf/db/distro.d
* /etc/dconf/db/site
* /etc/dconf/db/site.d
* /etc/dconf/db/local
* /etc/dconf/db/local.d
* ~/.config/dconf/user
* ~/.config/dconf/user.d
* ~/.config/dconf/user.txt


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
* [note-about-xfce](https://github.com/samwhelp/note-about-xfce/tree/gh-pages/_demo/config/xfce-config/main/config/xfce4)


### gnome-shell

* [/usr/share/glib-2.0/schemas/50_gnome-shell-config-main.gschema.override](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/usr/share/glib-2.0/schemas/50_gnome-shell-config-main.gschema.override)
* [/usr/share/glib-2.0/schemas/50_gnome-shell-favorite-apps.gschema.override](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/usr/share/glib-2.0/schemas/50_gnome-shell-favorite-apps.gschema.override)
* [/usr/share/glib-2.0/schemas/50_gnome-shell-keybind-main.gschema.override](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/usr/share/glib-2.0/schemas/50_gnome-shell-keybind-main.gschema.override)
* [/usr/share/glib-2.0/schemas/50_gnome-shell-theme-main.gschema.override](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/usr/share/glib-2.0/schemas/50_gnome-shell-theme-main.gschema.override)
* [/usr/share/glib-2.0/schemas/50_gnome-shell-wallpaper-main.gschema.override](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/usr/share/glib-2.0/schemas/50_gnome-shell-wallpaper-main.gschema.override)
* [/usr/share/glib-2.0/schemas/50_gnome-shell-workspace-main.gschema.override](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/usr/share/glib-2.0/schemas/50_gnome-shell-workspace-main.gschema.override)
* [/etc/dconf/db/distro.d/50_gnome-shell-keybind-custom](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/dconf/db/distro.d/50_gnome-shell-keybind-custom)



### kde-plasma

* [~/.config/kglobalshortcutsrc](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/kglobalshortcutsrc)


## Window Manager

### openbox

* [~/.local/bin/openboxrc-ctrl](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/bin/openboxrc-ctrl)
* [~/.config/openbox](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/share/openboxrc-profile/openbox-with-tint2-panel)
* [note-about-openbox](https://github.com/samwhelp/note-about-openbox/tree/gh-pages/_demo/config/openbox-config/plan/config/openbox)


| Path | Note |
| --- | --- |
| [~/.config/openbox/rc.xml](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/share/openboxrc-profile/openbox-with-tint2-panel/rc.xml) | openbox rc |
| [~/.config/openbox/menu.xml](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/share/openboxrc-profile/openbox-with-tint2-panel/menu.xml) | openbox menu |
| [~/.config/openbox/environment](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/share/openboxrc-profile/openbox-with-tint2-panel/environment) | openbox environment |
| [~/.config/openbox/autostart](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/share/openboxrc-profile/openbox-with-tint2-panel/autostart) | openbox autostart |


### i3wm

* [~/.local/bin/i3wmrc-ctrl](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/bin/i3wmrc-ctrl)
* [~/.config/i3](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/share/i3wmrc-profile/i3wm-with-tint2-panel)
* [note-about-i3wm](https://github.com/samwhelp/note-about-i3wm/tree/gh-pages/_demo/config/i3wm-config/plan/config/i3)


### bspwm

* [~/.local/bin/bspwmrc-ctrl](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/bin/bspwmrc-ctrl)
* [~/.config/bspwm](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/share/bspwmrc-profile/bspwm-with-tint2-panel)
* [note-about-bspwm](https://github.com/samwhelp/note-about-bspwm/tree/gh-pages/_demo/config/bspwm-config/plan/config/bspwm)


### herbstluftwm

* [~/.local/bin/herbstluftwmrc-ctrl](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/bin/herbstluftwmrc-ctrl)
* [~/.config/herbstluftwm](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/share/herbstluftwmrc-profile/herbstluftwm-with-tint2-panel)
* [note-about-herbstluftwm](https://github.com/samwhelp/note-about-herbstluftwm/tree/gh-pages/_demo/config/herbstluftwm-config/plan/config/herbstluftwm)


### leftwm

* [~/.local/bin/leftwmrc-ctrl](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/bin/leftwmrc-ctrl)
* [~/.local/bin/leftwmrc-theme-ctrl](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/bin/leftwmrc-theme-ctrl)
* [~/.local/bin/leftwmrc-theme-get](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.local/bin/leftwmrc-theme-get)
* [~/.config/leftwm](https://github.com/samwhelp/system-modeling/tree/main/profile/main/overlay/etc/skel/.local/share/leftwmrc-profile/leftwm-with-tint2-panel)
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


### gnome-terminal

* [/etc/dconf/db/distro.d/50_gnome-terminal](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/dconf/db/distro.d/50_gnome-terminal)


## Tool / File Manager

### pcmanfm-qt

* [~/.config/pcmanfm-qt/default/settings.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/pcmanfm-qt/default/settings.conf)


### thunar

* [~/.config/xfce4/xfconf/xfce-perchannel-xml/thunar.xml](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/xfconf/xfce-perchannel-xml/thunar.xml)
* [~/.config/Thunar/uca.xml](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/Thunar/uca.xml)
* [~/.config/Thunar/accels.scm](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/Thunar/accels.scm)


## Tool / Text Editor


### xed

* [/usr/share/glib-2.0/schemas/50_xed.gschema.override](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/usr/share/glib-2.0/schemas/50_xed.gschema.override)


### mousepad

* [/usr/share/glib-2.0/schemas/50_mousepad.gschema.override](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/usr/share/glib-2.0/schemas/50_mousepad.gschema.override)


### gedit

* [/usr/share/glib-2.0/schemas/50_gedit.gschema.override](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/usr/share/glib-2.0/schemas/50_gedit.gschema.override)
* [~/.config/gedit/tools/open-terminal-here](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/gedit/tools/open-terminal-here)


### atom

* [~/.atom/config.cson](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.atom/config.cson)


## Tool / Image Viewer

### viewnior

* [~/.config/viewnior/viewnior.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/viewnior/viewnior.conf)


## Tool / Media Player

### mpv

* [~/.config/mpv/mpv.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/mpv/mpv.conf)
