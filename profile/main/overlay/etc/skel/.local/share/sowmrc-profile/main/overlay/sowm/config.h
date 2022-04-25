#ifndef CONFIG_H
#define CONFIG_H

#define MOD        Mod4Mask
#define MOD_ALT    Mod1Mask
#define MOD_WIN    Mod4Mask

#define SHCMD(cmd) { .com = (const char*[]){ "/bin/sh", "-c", cmd, NULL } }

//const char* term[]    = {"sakura",             0};


static struct key keys[] = {

    // ## Window / Control
    {MOD_WIN,    XK_q,    win_kill,    {0}},
    {MOD_WIN,    XK_c,    win_center,  {0}},
    {MOD_WIN,    XK_f,    win_fs,      {0}},

    // ## Window / Switch
    {MOD_WIN,    XK_a,    win_prev,    {0}},
    {MOD_WIN,    XK_s,    win_next,    {0}},

    // ## Workspace
    {MOD_ALT,    XK_1,    ws_go,       {.i = 1}},
    {MOD_WIN,    XK_1,    win_to_ws,   {.i = 1}},
    {MOD_ALT,    XK_2,    ws_go,       {.i = 2}},
    {MOD_WIN,    XK_2,    win_to_ws,   {.i = 2}},
    {MOD_ALT,    XK_3,    ws_go,       {.i = 3}},
    {MOD_WIN,    XK_3,    win_to_ws,   {.i = 3}},
    {MOD_ALT,    XK_4,    ws_go,       {.i = 4}},
    {MOD_WIN,    XK_4,    win_to_ws,   {.i = 4}},
    {MOD_ALT,    XK_5,    ws_go,       {.i = 5}},
    {MOD_WIN,    XK_5,    win_to_ws,   {.i = 5}},

    // ## System
    {MOD_ALT|ShiftMask,    XK_z,         run,    SHCMD("shutdown now")},
    {MOD_ALT|ShiftMask,    XK_x,         run,    SHCMD("killall -9 sowm")},
    {MOD_ALT|ShiftMask,    XK_c,         run,    SHCMD("pkill -USR1 -x sxhkd")},

    // ## App / Terminal
    //{MOD_ALT,    XK_Return,    run,    {.com = term}},
    {MOD_ALT,              XK_Return,    run,    SHCMD("sakura")},
    {MOD_ALT|ShiftMask,    XK_a,         run,    SHCMD("sakura")},
    {MOD_ALT|ControlMask,  XK_a,         run,    SHCMD("xfce4-terminal")},
    {MOD_ALT|ShiftMask,    XK_t,         run,    SHCMD("xterm")},
    {MOD_ALT|ControlMask,  XK_t,         run,    SHCMD("urxvt")},

    // ## Rofi
    {MOD_ALT|ShiftMask,    XK_d,         run,    SHCMD("rofi -show drun -show-icons")},
    {MOD_ALT|ShiftMask,    XK_w,         run,    SHCMD("rofi -show window -show-icons")},
    {MOD_ALT|ShiftMask,    XK_r,         run,    SHCMD("rofi -show run")},

    // ## Dmenu
    {MOD_ALT|ShiftMask,    XK_i,         run,    SHCMD("dmenu_run")},

    // ## App / Misc
    {MOD_ALT|ShiftMask,    XK_f,         run,    SHCMD("pcmanfm-qt")},
    {MOD_ALT|ShiftMask,    XK_g,         run,    SHCMD("thunar")},
    {MOD_ALT|ShiftMask,    XK_e,         run,    SHCMD("mousepad")},
    {MOD_ALT|ShiftMask,    XK_b,         run,    SHCMD("firefox")},

    // ## Wallpaper
    {MOD_ALT,              XK_w,         run,    SHCMD("feh --bg-fill --randomize ~/Pictures/Wallpaper")},
    {MOD_ALT|ControlMask,  XK_w,         run,    SHCMD("feh --bg-fill ~/Pictures/Wallpaper/default.jpg")},

    // ## Screenshot
    {0,                    XK_Print,     run,    SHCMD("scrot")},
    {MOD_ALT,              XK_Print,     run,    SHCMD("scrot -s")},

    // ## Volume
    {MOD_ALT|ShiftMask,    XK_v,         run,    SHCMD("mate-volume-control")},
    //{MOD_ALT|ShiftMask,    XK_v,         run,    SHCMD("pavucontrol")},
    //{MOD_ALT|ShiftMask,    XK_v,         run,    SHCMD("pavucontrol-qt")},

    {MOD_ALT,              XK_m,         run,    SHCMD("amixer -q -D pulse sset Master toggle")},

    {MOD_ALT|ShiftMask,    XK_comma,     run,    SHCMD("amixer -q -D pulse sset Master 5%- unmute")},
    {MOD_ALT|ShiftMask,    XK_period,    run,    SHCMD("amixer -q -D pulse sset Master 5%+ unmute")},

    {MOD_ALT|ControlMask,  XK_comma,     run,    SHCMD("amixer -q -D pulse sset Master 1%- unmute")},
    {MOD_ALT|ControlMask,  XK_period,    run,    SHCMD("amixer -q -D pulse sset Master 1%+ unmute")},

    {MOD_ALT|ControlMask,  XK_comma,     run,    SHCMD("amixer -q -D pulse sset Master 1%- unmute")},
    {MOD_ALT|ControlMask,  XK_period,    run,    SHCMD("amixer -q -D pulse sset Master 1%+ unmute")},


    {0,                    XF86XK_AudioMute,           run,    SHCMD("amixer -q -D pulse sset Master toggle")},
    {0,                    XF86XK_AudioLowerVolume,    run,    SHCMD("amixer -q -D pulse sset Master 5%- unmute")},
    {0,                    XF86XK_AudioRaiseVolume,    run,    SHCMD("amixer -q -D pulse sset Master 5%+ unmute")},

/*
    {0,                    XF86XK_MonBrightnessUp,     run,    SHCMD("bri 10 +")},
    {0,                    XF86XK_MonBrightnessDown,   run,    SHCMD("bri 10 -")},
*/



};

#endif
