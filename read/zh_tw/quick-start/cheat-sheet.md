

# 一覽表


## 索引

* [Quick Start](https://samwhelp.github.io/system-modeling/read/zh_tw/quick-start)
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


## 操作開端

| 按鍵組合          | 功能           | 執行指令     |
| ----------------- | -------------- | ------------ |
| `Alt + Shift + f` | 開啟檔案管理器 | `pcmanfm-qt` |
| `Alt + Shift + g` | 開啟檔案管理器 | `thunar`     |
| `Alt + Shift + a` | 開啟 Terminal | `sakura -m`  |
| `Alt + Enter`     | 開啟 Terminal | `sakura -m`  |


## 常用視窗操作


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

### 視窗移動

| 滑鼠加組合鍵                 | 功能      |
| ------------------------- | ----------- |
| `Win + [滑鼠左鍵按住拖曳]` | 視窗移動 |

| 按鍵組合          | 功能     |
| ----------------- | -------- |
| `Win + e`         | 開始移動視窗 |


### 視窗更改大小

| Mousebind                  | 功能        |
| -------------------------- | ------------- |
| `Win + [滑鼠右鍵按住拖曳]` | 視窗更改大小 |

| 按鍵組合          | 功能     |
| ----------------- | -------- |
| `Win + r`         | 開始更改視窗大小 |


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
