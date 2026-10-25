

# System Modeling / Profile / Main


* [rootfs](overlay)


run to view the structure of the directory overlay.

``` sh
tree overlay -a
```


simple way to install all files to system.

``` sh
sudo cp -rfT overlay /
```


or choose the file you want to install.




## Subject

* [Environment](#environment)
* [Appearance](#appearance)
* [Theme](#theme)
* [Input Method](#input-method)
* [Desktop Environment](#desktop-environment)
* [Window Manager](#window-manager)
* [Util](#util)
* [Tool](#tool)
* Tool / [Launcher](#tool--launcher)
* Tool / [Terminal](#tool--terminal)
* Tool / [File Manager](#tool--file-manager)
* Tool / [Text Editor](#tool--text-editor)
* Tool / [Image Viewer](#tool--image-viewer)
* Tool / [Media Player](#tool--media-player)




## Environment

* [locale](#locale)
* [timezone](#timezone)
* [font match order](#font-match-order)
* [xdg-mime-applications](#xdg-mime-applications)
* [xdg-user-dir-templates](#xdg-user-dir-templates)


### locale

| Config File Path | Symbolic Link |
| ---------------- | ------------- |
| [/etc/default/locale](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/default/locale) | `/etc/locale.conf` |
| [/etc/locale.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/locale.conf) |  |


## timezone

| Config File Path | Symbolic Link |
| ---------------- | ------------- |
| [/etc/localtime](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/localtime) | `/usr/share/zoneinfo/Asia/Taipei` |
| [/etc/timezone](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/timezone) |  |


### font match order

| Config File Path |
| ---------------- |
| `/etc/fonts/conf.d/51-font-match-order.conf` |
| [~/.config/fontconfig/conf.d/50-font-match-order.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/fontconfig/conf.d/50-font-match-order.conf) |


### xdg-mime-applications

| Config File Path |
| ---------------- |
| [/usr/share/applications/mimeapps.list](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/usr/share/applications/mimeapps.list) |
| [~/.config/mimeapps.list](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/mimeapps.list) |


### xdg-user-dir-templates

| Config File Path |
| ---------------- |
| [~/Templates/empty.txt](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/Templates/empty.txt) |
| [~/Templates/bash.sh](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/Templates/bash.sh) |
| [~/Templates/dl.sh](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/Templates/dl.sh) |
| [~/Templates/pygithub.py](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/Templates/pygithub.py) |
| [~/Templates/iso-to-usb.sh](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/Templates/iso-to-usb.sh) |




## Appearance

* [default cursor](#default-cursor)
* [gtk](#gtk)
* [qt](#qt)
* [kvantum](#kvantum)
* [xsettingsd](#xsettingsd)
* [xfce](#xfce)


### default cursor

| Config File Path |
| ---------------- |
| `/usr/share/icons/default/index.theme` |
| [~/.icons/default/index.theme](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.icons/default/index.theme) |


### gtk

| Config File Path |
| ---------------- |
| [~/.config/.gtkrc-2.0](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.gtkrc-2.0) |


| Config File Path |
| ---------------- |
| [~/.config/gtk-3.0/settings.ini](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/gtk-3.0/settings.ini) |
| [~/.config/gtk-3.0/gtk.css](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/gtk-3.0/gtk.css) |
| [~/.config/gtk-3.0/color.css](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/gtk-3.0/color.css) |
| [~/.config/gtk-3.0/vte-terminal.css](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/gtk-3.0/vte-terminal.css) |


| Config File Path |
| ---------------- |
| [~/.config/gtk-4.0/settings.ini](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/gtk-4.0/settings.ini) |
| [~/.config/gtk-4.0/gtk.css](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/gtk-4.0/gtk.css) |
| [~/.config/gtk-4.0/color.css](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/gtk-4.0/color.css) |
| [~/.config/gtk-4.0/vte-terminal.css](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/gtk-4.0/vte-terminal.css) |


### qt

| Config File Path |
| ---------------- |
| [~/.config/qt5ct/qt5ct.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/qt5ct/qt5ct.conf) |
| [~/.config/qt6ct/qt6ct.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/qt6ct/qt6ct.conf) |


### kvantum

| Config File Path |
| ---------------- |
| [~/.config/Kvantum/kvantum.kvconfig](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/Kvantum/kvantum.kvconfig) |


### xsettingsd

| Config File Path |
| ---------------- |
| [~/.config/xsettingsd/xsettingsd.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xsettingsd/xsettingsd.conf) |


### xfce

| Config File Path |
| ---------------- |
| [~/.config/xfce4/xfconf/xfce-perchannel-xml/xsettings.xml](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/xfconf/xfce-perchannel-xml/xsettings.xml) |
| [~/.config/xfce4/xfconf/xfce-perchannel-xml/xfwm4](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/xfconf/xfce-perchannel-xml/xfwm4.xml) |




## Theme




## Input Method

* [fcitx5](#fcitx5)


### fcitx5

| Config File Path |
| ---------------- |
| [~/.config/fcitx5/profile](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/fcitx5/profile) |
| [~/.config/fcitx5/config](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/fcitx5/config) |
| [~/.config/fcitx5/conf/classicui.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/fcitx5/conf/classicui.conf) |
| [~/.config/fcitx5/conf/chewing.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/fcitx5/conf/chewing.conf) |


* For Debian (Ubuntu)

| Config File Path |
| ---------------- |
| [~/.xinputrc](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.xinputrc) |


* For Archlinux (Manjaro)

| Config File Path |
| ---------------- |
| [/etc/environment.d/50_input-method.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/environment.d/50_input-method.conf) |

> Deprecated: `~/.pam_environment`. See: Arch Wiki / Environment variables / [Using pam_env](https://wiki.archlinux.org/title/Environment_variables#Using_pam_env)




## Desktop Environment

* [xfce](#xfce)


### xfce

| Config File Path |
| ---------------- |
| [~/.config/xfce4/panel/whiskermenu-1.rc](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/panel/whiskermenu-1.rc) |
| [~/.config/xfce4/xfconf/xfce-perchannel-xml/keyboards.xml](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/xfconf/xfce-perchannel-xml/keyboards.xml) |
| [~/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-desktop.xml](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-desktop.xml) |
| [~/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-keyboard-shortcuts.xml](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-keyboard-shortcuts.xml) |
| [~/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-panel.xml](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/xfconf/xfce-perchannel-xml/xfce4-panel.xml) |
| [~/.config/xfce4/xfconf/xfce-perchannel-xml/xfwm4.xml](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/xfconf/xfce-perchannel-xml/xfwm4.xml) |
| [~/.config/xfce4/xfconf/xfce-perchannel-xml/xsettings.xml](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/xfconf/xfce-perchannel-xml/xsettings.xml) |
| [~/.config/xfce4/helpers.rc](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/helpers.rc) |

> See Also: [xfce-adjustment](https://github.com/samwhelp/xfce-adjustment)




## Window Manager


### openbox


### i3wm


### bspwm


### herbstluftwm


### leftwm




## Util




## Tool


## Tool / Launcher


### rofi

| Config File Path |
| ---------------- |
| [~/.config/rofi/config.rasi](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/rofi/config.rasi) |


| Config File Path |
| ---------------- |
| `~/.local/share/applications/rofi-show-drun.desktop` |
| `~/.local/share/applications/rofi-show-window.desktop` |
| `~/.local/share/applications/rofi-show-run.desktop` |


| Config File Path |
| ---------------- |
| [/usr/share/applications/rofi-show-drun.desktop](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/usr/share/applications/rofi-show-drun.desktop) |
| [/usr/share/applications/rofi-show-window.desktop](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/usr/share/applications/rofi-show-window.desktop) |
| [/usr/share/applications/rofi-show-run.desktop](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/usr/share/applications/rofi-show-run.desktop) |




## Tool / Terminal

* [sakura](#sakura)
* [xfce4-terminal](#xfce4-terminal)


### sakura

| Config File Path |
| ---------------- |
| [~/.config/sakura/sakura.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/sakura/sakura.conf) |


### xfce4-terminal

| Config File Path |
| ---------------- |
| [~/.config/xfce4/terminal/terminalrc](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/terminal/terminalrc) |




## Tool / File Manager


### thunar

| Config File Path |
| ---------------- |
| [~/.config/xfce4/xfconf/xfce-perchannel-xml/thunar.xml](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/xfce4/xfconf/xfce-perchannel-xml/thunar.xml) |
| [~/.config/Thunar/uca.xml](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/Thunar/uca.xml) |
| [~/.config/Thunar/accels.scm](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/Thunar/accels.scm) |


### pcmanfm-qt

| Config File Path |
| ---------------- |
| [~/.config/pcmanfm-qt/default/settings.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/pcmanfm-qt/default/settings.conf) |


## Tool / Text Editor




## Tool / Image Viewer

* [viewnior](#viewnior)


### viewnior

| Config File Path |
| ---------------- |
| [~/.config/viewnior/viewnior.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/viewnior/viewnior.conf) |




## Tool / Media Player

* [mpv](#mpv)


### mpv

| Config File Path |
| ---------------- |
| [~/.config/mpv/mpv.conf](https://github.com/samwhelp/system-modeling/blob/main/profile/main/overlay/etc/skel/.config/mpv/mpv.conf) |
