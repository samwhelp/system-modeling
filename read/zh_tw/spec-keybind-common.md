
# 通用鍵盤組合鍵操作


## 主題

* [快速上手指南](https://samwhelp.github.io/system-modeling/read/zh_tw/quick-start)
* [統整對照](#統整對照)
* [系統操作](#系統操作)
* [開啟應用程式](#開啟應用程式)
* [桌面圖片](#桌面圖片)
* [螢幕截圖](#螢幕截圖)
* [音量控制](#音量控制)
* [視窗操作](#視窗操作)
* [畫面佈局](#畫面佈局)
* [工作空間](#工作空間)
* [其他](#其他)
* [相關連結](#相關連結)


## 統整對照

* [使用「方向鍵」相關的操作](https://samwhelp.github.io/system-modeling/read/zh_tw/spec-keybind/with-arrow-key)
* [使用「k_j_h_l 鍵」相關的操作](https://samwhelp.github.io/system-modeling/read/zh_tw/spec-keybind/with-k_j_h_l-key)
* [使用「grave_tab_a_s 鍵」相關的操作](https://samwhelp.github.io/system-modeling/read/zh_tw/spec-keybind/with-grave_tab_a_s-key)
* [使用「上排數字鍵」相關的操作](https://samwhelp.github.io/system-modeling/read/zh_tw/spec-keybind/with-number-key)


## 方向鍵

| 方向  | 按鍵  | 按鍵 | 按鍵  |
| ----- | ----- | ---- | ----- |
| 上    | Up    | k    | grave |
| 下    | Down  | j    | Tab   |
| 左    | Left  | h    | a     |
| 右    | Right | l    | s     |

> 「grave」 指的是 「`」 ，在「Tab」鍵上方，也就是「~」那個鍵。


## 修飾鍵

| 按鍵  | 別名 | 別名      | 別名  |
| ----- | ---- | ------- | ----- |
| Alt   | Mod1 |         |       |
| Win   | Mod4 | Super   | Meta  |
| Ctrl  |      | Control |       |
| Shift |      |         |       |

* [轉換鍵](https://zh.wikipedia.org/zh-tw/轉換鍵) ([Alt](https://en.wikipedia.org/wiki/Alt_key))
* [超級鍵](https://zh.wikipedia.org/zh-tw/超級鍵) ([Super](https://en.wikipedia.org/wiki/Super_key_(keyboard_button)))
* [Windows鍵](https://zh.wikipedia.org/zh-tw/Windows鍵) ([Win](https://en.wikipedia.org/wiki/Windows_key))
* [控制鍵](https://zh.wikipedia.org/zh-tw/控制鍵) ([Ctrl](https://en.wikipedia.org/wiki/Control_key))
* [換檔鍵](https://zh.wikipedia.org/zh-tw/換檔鍵) ([Shift](https://en.wikipedia.org/wiki/Shift_key))


## 系統操作

| 按鍵組合          | 功能         |
| ----------------- | ------------ |
| `Alt + Shift + c` | 重新套用設定 |
| `Alt + Shift + x` | 登出         |
| `Alt + Shift + z` | 關機         |


## 開啟應用程式

### 開啟應用程式 (Terminal)

| 按鍵組合          | 功能          | 執行指令                     |
| ----------------- | ------------- | ---------------------------- |
| `Alt + Enter`     | 開啟 Terminal | `sakura -m`                  |
| `Alt + Shift + a` | 開啟 Terminal | `sakura -m`                  |
| `Alt + Ctrl + a`  | 開啟 Terminal | `xfce4-terminal --maximize`  |
| `Alt + Shift + t` | 開啟 Terminal | `xterm`                      |
| `Alt + Ctrl + t`  | 開啟 Terminal | `urxvt`                      |
| `Alt + Shift + y` | 開啟 Terminal | `xfce4-terminal --drop-down` |

> 開啟「Terminal」，除了上面的快速鍵，另外我比較常用的操作，是先開啟「pcmanfm-qt」或是「thunar」，切換到要工作的資料夾，然後按下「F4」，然後就會開啟我慣用的「sakura(Terminal)」，一開始就會在該工作資料夾路徑底下。

> 另外「dolphin(File Manager)」有整合「kconsole(Terminal)」在一起。

### 開啟應用程式 (Rofi)

| 按鍵組合          | 功能                           | 執行指令                        |
| ----------------- | ------------------------------ | ------------------------------- |
| `Alt + Shift + d` | 開啟 Rofi (可用應用程式列表)   | `rofi -show drun -show-icons`   |
| `Alt + Shift + w` | 開啟 Rofi (已經開啟的視窗列表) | `rofi -show window -show-icons` |
| `Alt + Shift + r` | 開啟 Rofi (可用指令列表)       | `rofi -show run`                |


### 開啟應用程式 (常用的)

| 按鍵組合          | 功能           | 執行指令     |
| ----------------- | -------------- | ------------ |
| `Alt + Shift + f` | 開啟檔案管理器 | `pcmanfm-qt` |
| `Alt + Shift + g` | 開啟檔案管理器 | `thunar`     |
| `Alt + Shift + e` | 開啟文字編輯器 | `mousepad`   |
| `Alt + Shift + b` | 開啟網頁瀏覽器 | `firefox`    |


## 桌面圖片

| 按鍵組合         | 功能                 | 執行指令                                         |
| ---------------- | -------------------- | ------------------------------------------------ |
| `Alt + w`        | 隨機更換新的桌面圖片 | `feh --bg-fill --randomize ~/Pictures/Wallpaper` |
| `Alt + Ctrl + w` | 更換成預設的桌面圖片 | `feh --bg-fill ~/Pictures/Wallpaper/default.jpg` |

> 在「xfce」，則是採用我開發的腳本「[wallpaper-select-xfce](https://samwhelp.github.io/note-about-fzf/read/project/wallpaper-select/wallpaper-select-xfce)」，其他的「wm」，都是採用「[wallpaper-select-feh](https://samwhelp.github.io/note-about-fzf/read/project/wallpaper-select/wallpaper-select-feh.html)」

## 螢幕截圖

| 按鍵組合      | 功能                 | 執行指令   |
| ------------- | -------------------- | ---------- |
| `Print`       | 螢幕截圖             | `scrot`    |
| `Alt + Print` | 選取螢幕畫面區塊截圖 | `scrot -s` |


## 音量控制

| 按鍵組合          | 功能             | 執行指令                                    |
| ----------------- | ---------------- | ------------------------------------------- |
| `Alt + Shift + v` | 開啟音量控制面板 | `mate-volume-control`                       |
| `Alt + m`         | 音量切換成靜音   | `amixer -q -D pulse sset Master Toggle`     |
| `Alt + Shift + <` | 減小音量         | `amixer -q -D pulse sset Master 5%- unmute` |
| `Alt + Shift + >` | 增加音量         | `amixer -q -D pulse sset Master 5%+ unmute` |
| `Alt + Ctrl + ,`  | 緩慢地減小音量   | `amixer -q -D pulse sset Master 1%- unmute` |
| `Alt + Ctrl + .`  | 緩慢地增加音量   | `amixer -q -D pulse sset Master 1%+ unmute` |


| 按鍵組合               | 功能           | 執行指令                                    |
| ---------------------- | -------------- | ------------------------------------------- |
| `XF86AudioMute`        | 音量切換成靜音 | `amixer -q -D pulse sset Master Toggle`     |
| `XF86AudioLowerVolume` | 減小音量       | `amixer -q -D pulse sset Master 5%- unmute` |
| `XF86AudioRaiseVolume` | 增加音量       | `amixer -q -D pulse sset Master 5%+ unmute` |


## 視窗操作

### 切換顯示桌面

| 按鍵組合  | 功能         |
| --------- | ------------ |
| `Win + d` | 切換顯示桌面 |


### 視窗關閉

| 按鍵組合          | 功能     |
| ----------------- | -------- |
| `Win + q`         | 關閉視窗 |
| `Win + Shift + q` | 關閉視窗 |
| `Alt + F4`        | 關閉視窗 |


### 視窗全螢幕

| 按鍵組合  | 功能       |
| --------- | ---------- |
| `Win + f` | 視窗全螢幕 |
| `F11`     | 視窗全螢幕 |


### 視窗最大化

| 按鍵組合  | 功能       |
| --------- | ---------- |
| `Win + w` | 視窗最大化 |


### 單一視窗浮動或平鋪

| 按鍵組合  | 功能                                         |
| --------- | -------------------------------------------- |
| `Win + n` | 單一視窗，切換成「浮動狀態」或是「平鋪狀態」 |


### 視窗移動

> 視窗在浮動狀態

| 按鍵組合          | 功能           |
| ----------------- | -------------- |
| `Win + Shift + k` | 視窗往上方移動 |
| `Win + Shift + j` | 視窗往下方移動 |
| `Win + Shift + h` | 視窗往左方移動 |
| `Win + Shift + l` | 視窗往右方移動 |


| 按鍵組合              | 功能           |
| --------------------- | -------------- |
| `Win + Shift + Up`    | 視窗往上方移動 |
| `Win + Shift + Down`  | 視窗往下方移動 |
| `Win + Shift + Left`  | 視窗往左方移動 |
| `Win + Shift + Right` | 視窗往右方移動 |

> 也可以使用「`Win + 滑鼠左鍵按住不放`」，移動滑鼠來拖曳視窗。


### 視窗更改大小

> 視窗在浮動狀態

| 按鍵組合         | 功能                                        |
| ---------------- | ------------------------------------------- |
| `Win + Ctrl + k` | 移動視窗下(南)方邊界，往上方移動 (高度減少) |
| `Win + Ctrl + j` | 移動視窗下(南)方邊界，往下方移動 (高度增加) |
| `Win + Ctrl + h` | 移動視窗右(東)方邊界，往左方移動 (寬度減少) |
| `Win + Ctrl + l` | 移動視窗右(東)方邊界，往右方移動 (寬度增加) |


| 按鍵組合             | 功能                                        |
| -------------------- | ------------------------------------------- |
| `Win + Ctrl + Up`    | 移動視窗下(南)方邊界，往上方移動 (高度減少) |
| `Win + Ctrl + Down`  | 移動視窗下(南)方邊界，往下方移動 (高度增加) |
| `Win + Ctrl + Left`  | 移動視窗右(東)方邊界，往左方移動 (寬度減少) |
| `Win + Ctrl + Right` | 移動視窗右(東)方邊界，往右方移動 (寬度增加) |

> 也可以使用「`Win + 滑鼠右鍵按住不放`」，移動滑鼠來更改視窗大小。


### 視窗聚焦切換

| 按鍵組合  | 功能                   |
| --------- | ---------------------- |
| `Win + a` | 聚焦切換到前面一個視窗 |
| `Win + s` | 聚焦切換到後面一個視窗 |


| 按鍵組合  | 功能                   |
| --------- | ---------------------- |
| `Win + h` | 聚焦切換到前面一個視窗 |
| `Win + l` | 聚焦切換到後面一個視窗 |


| 按鍵組合      | 功能                   |
| ------------- | ---------------------- |
| `Win + Left`  | 聚焦切換到前面一個視窗 |
| `Win + Right` | 聚焦切換到後面一個視窗 |


### 視窗位置交換

> 視窗在平鋪狀態

| 按鍵組合  | 功能                   |
| --------- | ---------------------- |
| `Win + k` | 和前面一個視窗交換位置 |
| `Win + j` | 和後面一個視窗交換位置 |


| 按鍵組合     | 功能                   |
| ------------ | ---------------------- |
| `Win + Up`   | 和前面一個視窗交換位置 |
| `Win + Down` | 和後面一個視窗交換位置 |


## 畫面佈局

### 佈局切換

| 按鍵組合  | 功能                       |
| --------- | -------------------------- |
| `Alt + k` | 切換到前面一個「畫面佈局」 |
| `Alt + j` | 切換到後面一個「畫面佈局」 |


| 按鍵組合     | 功能                       |
| ------------ | -------------------------- |
| `Alt + Up`   | 切換到前面一個「畫面佈局」 |
| `Alt + Down` | 切換到後面一個「畫面佈局」 |


## 工作空間

### 我個人定義的工作空間

| 工作空間(Workspace) | 名稱  |
| ------------------- | ----- |
| 1                   | File  |
| 2                   | Edit  |
| 3                   | Web   |
| 4                   | Term  |
| 5                   | Misc  |

### 切換到指定的工作空間

| 按鍵組合  | 功能                    |
| --------- | ----------------------- |
| `Alt + Ctrl + 1` | 切換到工作空間 1 (File) |
| `Alt + Ctrl + 2` | 切換到工作空間 2 (Edit) |
| `Alt + Ctrl + 3` | 切換到工作空間 3 (Web)  |
| `Alt + Ctrl + 4` | 切換到工作空間 4 (Term) |
| `Alt + Ctrl + 5` | 切換到工作空間 5 (Misc) |

### 循環切換工作空間

| 按鍵組合  | 功能                                   |
| --------- | -------------------------------------- |
| `Alt + z` | 在目前和先前的工作空間來回切換(反覆按) |

| 按鍵組合  | 功能                 |
| --------- | -------------------- |
| `Alt + a` | 切換到上一個工作空間 |
| `Alt + s` | 切換到下一個工作空間 |

| 按鍵組合  | 功能                 |
| --------- | -------------------- |
| `Alt + h` | 切換到上一個工作空間 |
| `Alt + l` | 切換到下一個工作空間 |

| 按鍵組合      | 功能                 |
| ------------- | -------------------- |
| `Alt + Left`  | 切換到上一個工作空間 |
| `Alt + Right` | 切換到下一個工作空間 |


### 視窗移到指定的工作空間

| 按鍵組合  | 功能                      |
| --------- | ------------------------- |
| `Alt + Shift + 1` | 視窗移到工作空間 1 (File) |
| `Alt + Shift + 2` | 視窗移到工作空間 2 (Edit) |
| `Alt + Shift + 3` | 視窗移到工作空間 3 (Web)  |
| `Alt + Shift + 4` | 視窗移到工作空間 4 (Term) |
| `Alt + Shift + 5` | 視窗移到工作空間 5 (Misc) |


## 其他

### Tab / grave / Esc

| 按鍵組合      |
| ------------- |
| `Win + Tab`   |
| `Win + grave` |
| `Win + Esc`   |
| `All + Tab`   |
| `All + grave` |
| `All + Esc`   |

> grave 指的是 `

| 按鍵組合 (Openbox) | 功能             |
| ------------------ | ---------------- |
| `Win + Tab`        | 切換到下一個視窗 |
| `All + Tab`        | 切換到下一個視窗 |

| 按鍵組合 (Leftwm) | 功能                         |
| ----------------- | ---------------------------- |
| `Win + Esc`       | 單一視窗，切換成「平鋪狀態」 |
| `Win + grave`     | 和前面一個視窗交換位置       |
| `Win + Tab`       | 和後面一個視窗交換位置       |
| `Alt + grave`     | 切換到前面一個「畫面佈局」   |
| `Alt + Tab`       | 切換到後面一個「畫面佈局」   |


| 按鍵組合 (Bspwm) | 功能                                         |
| ---------------- | -------------------------------------------- |
| `Win + Esc`      | 單一視窗，切換成「浮動狀態」或是「平鋪狀態」 |
| `Win + grave`    | 和前面一個視窗交換位置                       |
| `Win + Tab`      | 和後面一個視窗交換位置                       |
| `Alt + grave`    | 切換到前面一個「畫面佈局」                   |
| `Alt + Tab`      | 切換到後面一個「畫面佈局」                   |


| 按鍵組合 (I3wm) | 功能                                         |
| --------------- | -------------------------------------------- |
| `Win + grave`   | 單一視窗，切換成「浮動狀態」或是「平鋪狀態」 |
| `Win + Tab`     | 在所有的畫面布局狀態切換                     |
| `Alt + grave`   | 在「tabbed」和「stacking」之間切換           |
| `Alt + Tab`     | 在「splitv」和「splith」之間切換             |
| `Win + w`       | 在「tabbed」和「split」之間切換              |


## 相關連結

* [首頁](https://samwhelp.github.io/system-modeling/)
* [通用滑鼠加組合鍵操作](https://samwhelp.github.io/system-modeling/read/zh_tw/spec-mousebind-common)
* [sxhkd-config-demo](https://github.com/samwhelp/note-about-bspwm/tree/gh-pages/_demo/config/sxhkd-config)

## 維基百科

* [電腦鍵盤](https://zh.wikipedia.org/zh-tw/電腦鍵盤)
* [模板:鍵盤](https://zh.wikipedia.org/zh-tw/Template:鍵盤)
* [鍵盤配置](https://zh.wikipedia.org/zh-tw/鍵盤配置)

## Manpage

* man [xmodmap](https://man.archlinux.org/man/xmodmap.1)
* man [keysyms](https://man.archlinux.org/man/extra/tk/keysyms.n.en)
* Search: [xkeysymtostring](https://man.archlinux.org/search?q=xkeysymtostring)


## Arch Wiki

* [X keyboard extension (正體中文)](https://wiki.archlinux.org/title/X_keyboard_extension_(%E6%AD%A3%E9%AB%94%E4%B8%AD%E6%96%87))
* [xmodmap](https://wiki.archlinux.org/title/Xmodmap_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))

``` sh
xmodmap -pke | grep -i Escape
```

```
xmodmap -pk | grep -i Escape
```
