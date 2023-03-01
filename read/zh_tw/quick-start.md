

# 按鍵操作快速上手指南


## 索引

* [Cheat Sheet](https://samwhelp.github.io/system-modeling/read/zh_tw/quick-start/cheat-sheet)
* [操作開端](#操作開端)
* [常用視窗操作](#常用視窗操作)
* [切換視窗](#切換視窗)
* [切換工作空間](#切換工作空間)
* [開啟應用程式](#開啟應用程式)
* [離開系統](#離開系統)
* [重新套用設定](#重新套用設定)
* [音量操作](#音量操作)
* [螢幕亮度](#螢幕亮度)
* [桌面圖片](#桌面圖片)
* [螢幕截圖](#螢幕截圖)
* [切換輸入法](#切換輸入法)
* [方向鍵](#方向鍵)
* [修飾鍵](#修飾鍵)
* [更多說明](https://samwhelp.github.io/system-modeling/read/zh_tw/spec-keybind-common)
* [實作案例](https://samwhelp.github.io/system-modeling/read/zh_tw/case)


## 操作開端

通常我會透過「`Alt + Shift + f`」 或是「`Alt + Shift + g`」

開啟我慣用的「File Manager」，

然後我會在「File Manager」切換到「要操作的資料夾」，

或是指定「要操作的檔案或資料夾」，

按下「滑鼠右鍵」，出現「功能選單」，

針對「檔案」或「資料夾」做一些操作，

例如，我會在某個資料夾，按下右鍵，

然後使用「atom」或「sublime-text」來開啟「專案」。

例如，我會在某個檔案，按下右鍵，

然後使用慣用的「Text Editor」，來開啟「檔案」。

在「File Manager」，我通常會設定「`F4`」，開啟「Terminal」，

這樣的方式，在開啟「Terminal」的時候，會切換到該路徑。

另外，若不是在「File Manager」操作，

我會按下「`Alt + Shift + a`」或「`Alt + Enter`」，

來開啟「Terminal」。


| 按鍵組合          | 功能           | 執行指令     |
| ----------------- | -------------- | ------------ |
| `Alt + Shift + f` | 開啟檔案管理器 | `pcmanfm-qt` |
| `Alt + Shift + g` | 開啟檔案管理器 | `thunar`     |
| `Alt + Shift + a` | 開啟 Terminal | `sakura -m`  |
| `Alt + Enter`     | 開啟 Terminal | `sakura -m`  |


> 這些「按鍵組合」，**大部分**是「**左手單手**」，就能完成操作，

> 所以可以「右手」「滑鼠操作」，搭配「左手」「鍵盤按鍵組合」。


## 常用視窗操作

然後我最常用的「常用視窗操作」，如下

| 按鍵組合          | 功能     |
| ----------------- | -------- |
| `Win + q`         | 關閉視窗 |
| `Win + w` | 視窗最大化 |

> 一般「關閉視窗」的按鍵綁定是在「`Alt + F4`」。


| 按鍵組合          | 功能     |
| ----------------- | -------- |
| `Win + f` | 視窗全螢幕 |
| `Win + d` | 切換顯示桌面 |

> 一般「視窗全螢幕」的按鍵綁定是在「`F11`」。

我還有設定其他的「按鍵組合」，

請參考我整理的「[便利按鍵綁定](https://samwhelp.github.io/system-modeling/read/zh_tw/spec-keybind-common)」，

或是參考我在各個桌面環境的實作設定。


### 視窗操作選單

> 也可以透過「視窗操作選單」來操作。

| 按鍵組合          | 功能     |
| ----------------- | -------- |
| `Alt + Space` | 切換顯示「視窗操作選單」 |


### 視窗移動

除了在「視窗標題列」，使用「滑鼠左鍵按住拖曳」，來「移動視窗」。

還可以透過下面的「按鍵組合」，

就可以在視窗的「Frame」，使用「滑鼠左鍵按住拖曳」，

因此不限於在「視窗標題列」。


| 滑鼠加組合鍵                 | 功能      |
| ------------------------- | ----------- |
| `Win + [滑鼠左鍵按住拖曳]` | 視窗移動 |


或是也可以透過下面的「鍵盤按鍵組合」，觸發「開始移動視窗」的狀態

| 按鍵組合          | 功能     |
| ----------------- | -------- |
| `Win + e`         | 開始移動視窗 |

接著就可以使用「滑鼠移動」，來「移動視窗」，

也可以透過「上，下，左，右」鍵，來「移動視窗」，

有些系統需要，按下「Enter」來「確定移動」，有些則不用，

按下「Esc」，則是恢復「一般狀態」。


### 視窗更改大小

除了在「視窗邊框」，使用「滑鼠左鍵按住拖曳」，來「更改視窗大小」。

還可以透過下面的「按鍵組合」，

就可以在視窗的「Frame」，使用「滑鼠左鍵按住拖曳」，

因此不限於在「視窗邊框」。

| Mousebind                  | 功能        |
| -------------------------- | ------------- |
| `Win + [滑鼠右鍵按住拖曳]` | 視窗更改大小 |


或是也可以透過下面的「鍵盤按鍵組合」，觸發「開始更改視窗大小」的狀態

| 按鍵組合          | 功能     |
| ----------------- | -------- |
| `Win + r`         | 開始更改視窗大小 |

接著就可以使用「滑鼠移動」，來「更改視窗大小」，

也可以透過「上，下，左，右」鍵，來「更改視窗大小」，

有些系統需要，按下「Enter」來「確定更改視窗大小」，有些則不用，

按下「Esc」，則是恢復「一般狀態」。


## 切換視窗

| 按鍵組合  | 功能                   |
| --------- | ---------------------- |
| `Win + a` | 聚焦切換到前面一個視窗 |
| `Win + s` | 聚焦切換到後面一個視窗 |

> 一般「切換視窗」的按鍵綁定是在「`Alt + Tab`」。


## 切換工作空間

> 循環切換工作空間

| 按鍵組合  | 功能                 |
| --------- | -------------------- |
| `Alt + a` | 切換到上一個工作空間 |
| `Alt + s` | 切換到下一個工作空間 |


| 按鍵組合  | 功能                                   |
| --------- | -------------------------------------- |
| `Alt + z` | 在目前和先前的工作空間來回切換(反覆按) |

>  切換到指定的工作空間

| 按鍵組合  | 功能                    |
| --------- | ----------------------- |
| `Alt + Ctrl + 1` | 切換到工作空間 1 (File) |
| `Alt + Ctrl + 2` | 切換到工作空間 2 (Edit) |
| `Alt + Ctrl + 3` | 切換到工作空間 3 (Web)  |
| `Alt + Ctrl + 4` | 切換到工作空間 4 (Term) |
| `Alt + Ctrl + 5` | 切換到工作空間 5 (Misc) |

> 視窗移到指定的工作空間

| 按鍵組合  | 功能                      |
| --------- | ------------------------- |
| `Alt + Shift + 1` | 視窗移到工作空間 1 (File) |
| `Alt + Shift + 2` | 視窗移到工作空間 2 (Edit) |
| `Alt + Shift + 3` | 視窗移到工作空間 3 (Web)  |
| `Alt + Shift + 4` | 視窗移到工作空間 4 (Term) |
| `Alt + Shift + 5` | 視窗移到工作空間 5 (Misc) |

> 可以對照「[使用「上排數字鍵」相關的操作](https://samwhelp.github.io/system-modeling/read/zh_tw/spec-keybind/with-number-key)」

> 若不考慮相容性，可以改成「Alt + 數字鍵」來操作「切換工作空間」，改成「Win + 數字鍵」來操作「視窗移到指定工作空間」。這樣「**左手單手**」就能完成操作，更為便利。


## 開啟應用程式

### 透過「主功能選單」或「執行對話框」

| 按鍵組合  | 功能                      |
| --------- | ------------------------- |
| `Alt + F1` | 切換顯示「主功能選單 (開始功能表)」 |
| `Alt + F2` | 切換顯示「執行對話框 (RunDialog)」 |


### 透過「Rofi」

| 按鍵組合          | 功能                           | 執行指令                        |
| ----------------- | ------------------------------ | ------------------------------- |
| `Alt + Shift + d` | 開啟 Rofi (可用應用程式列表)   | `rofi -show drun -show-icons`   |
| `Alt + Shift + w` | 開啟 Rofi (已經開啟的視窗列表) | `rofi -show window -show-icons` |
| `Alt + Shift + r` | 開啟 Rofi (可用指令列表)       | `rofi -show run`                |


### 指定開啟常用的應用程式

| 按鍵組合          | 功能           | 執行指令     |
| ----------------- | -------------- | ------------ |
| `Alt + Enter`     | 開啟 Terminal | `sakura -m`  |
| `Alt + Shift + a` | 開啟 Terminal | `sakura -m`  |
| `Alt + Shift + y` | 下拉 Terminal | `xfce4-terminal --drop-down` |
| `Alt + Shift + f` | 開啟檔案管理器 | `pcmanfm-qt` |
| `Alt + Shift + g` | 開啟檔案管理器 | `thunar`     |
| `Alt + Shift + e` | 開啟文字編輯器 | `mousepad`   |
| `Alt + Shift + b` | 開啟網頁瀏覽器 | `firefox`    |
| `Alt + Shift + v` | 開啟音量調整器 | `mate-volume-control` |
| `Alt + Shift + s` | 開啟控制台    | `mate-control-center`  |

> 關於「firefox」，可以改為「`firefox --new-tab about:blank`」，就會「開啟新頁籤」，而非「開啟新視窗」


## 離開系統

| 按鍵組合  | 功能                      |
| --------- | ------------------------- |
| `Alt + Shift + x` | 登出系統 (有可能會跳出確認對話框) |
| `Alt + Shift + z` | 關閉系統 (有可能會跳出對話框，可以選擇關閉，休眠) |


## 重新套用設定

| 按鍵組合  | 功能                      |
| --------- | ------------------------- |
| `Alt + Shift + c` | 重新套用設定 |


## 音量操作

| 按鍵組合          | 功能             | 執行指令                                    |
| ----------------- | ---------------- | ------------------------------------------- |
| `Alt + m`         | 音量切換成靜音   | `amixer -q -D pulse sset Master Toggle`     |
| `Alt + Shift + <` | 減小音量         | `amixer -q -D pulse sset Master 5%- unmute` |
| `Alt + Shift + >` | 增加音量         | `amixer -q -D pulse sset Master 5%+ unmute` |


## 螢幕亮度

| 按鍵組合          | 功能             |
| ----------------- | ---------------- |
| `Alt + Shift + [` | 減少螢幕亮度         |
| `Alt + Shift + ]` | 增加螢幕亮度         |


## 桌面圖片

| 按鍵組合         | 功能                 | 執行指令                                         |
| ---------------- | -------------------- | ------------------------------------------------ |
| `Alt + w`        | 隨機更換新的桌面圖片 | `feh --bg-fill --randomize ~/Pictures/Wallpaper` |
| `Alt + Ctrl + w` | 更換成預設的桌面圖片 | `feh --bg-fill ~/Pictures/Wallpaper/default.jpg` |

> 其他「桌面環境」，可搭配我開發的「輔助工具 [wallpaper-select](https://samwhelp.github.io/note-about-fzf/read/project/wallpaper-select/)」。


## 螢幕截圖

| 按鍵組合      | 功能                 | 執行指令   |
| ------------- | -------------------- | ---------- |
| `Print`       | 螢幕截圖             | `scrot`    |
| `Alt + Print` | 選取螢幕畫面區塊截圖 | `scrot -s` |


## 切換輸入法

| 按鍵組合  | 功能                      |
| --------- | ------------------------- |
| `Ctrl + Space` | 切換輸入法 |


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
