/**
 ** ## API
 **
 ** * https://develop.kde.org/docs/plasma/scripting/api/
 ** * https://develop.kde.org/docs/plasma/scripting/keys/
 ** * https://develop.kde.org/docs/plasma/scripting/examples/
 **
 **/




////////////////////////////////////////////////////////////////////////////////
/// Head: plasma
//

var plasma = getApiVersion(1);

//
/// Tail: plasma
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
/// Head: panel
//

//
// ## Top Panel
//

const panel = new Panel;

panel.location = "top";
panel.alignment = "left";
panel.floating = false;
panel.hiding = "none";
panel.height = Math.round(gridUnit * 1.8);
panel.lengthMode = "fill";


//
/// Tail: panel
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
/// Head: main_menu / kickoff
//

var main_menu = panel.addWidget("org.kde.plasma.kickoff");


main_menu.currentConfigGroup = ["Shortcuts"];

main_menu.writeConfig("global", "Alt+F1");


main_menu.currentConfigGroup = ["General"];

main_menu.writeConfig("icon", "start-here");
main_menu.writeConfig("lengthFirstMargin", 8);

main_menu.writeConfig("paneSwap", true);
main_menu.writeConfig("switchCategoryOnHover", true);

main_menu.writeConfig("alphaSort", "true");

main_menu.writeConfig("favoritesPortedToKAstats", "false"); //Are the favorites ported to use KActivitiesStats to allow per-activity favorites
main_menu.writeConfig("favoritesDisplay", 1); //How to display favorites: 0 = Grid, 1 = List

main_menu.writeConfig("favorites", [
	"applications:org.kde.dolphin.desktop",
	"applications:org.kde.kate.desktop",
	"preferred://browser",
	"applications:org.kde.konsole.desktop",
	"applications:systemsettings.desktop",
	"applications:org.kde.discover.desktop"
]);

//
/// Tail: main_menu / kickoff
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
/// Head: global_app_menu
//

var global_app_menu = panel.addWidget("org.kde.plasma.appmenu")

//
/// Tail: global_app_menu
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
/// Head: spacer
//

var left_spacer = panel.addWidget("org.kde.plasma.panelspacer");

//
/// Tail: spacer
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
/// Head: digitalclock
//
var clock = panel.addWidget("org.kde.plasma.digitalclock");


clock.currentConfigGroup = ["Appearance"];

clock.writeConfig("dateFormat", "custom");
clock.writeConfig("customDateFormat", "yyyy-MM-dd");
clock.writeConfig("showSeconds", "Always");
clock.writeConfig("use24hFormat", 2);

//
/// Tail: digitalclock
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
/// Head: spacer
//

var right_spacer = panel.addWidget("org.kde.plasma.panelspacer");

//
/// Tail: spacer
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
/// Head: systemtray
//

panel.addWidget("org.kde.plasma.systemtray");

//
/// Tail: systemtray
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
/// Head: userswitcher
//

var user_switcher = panel.addWidget("org.kde.plasma.userswitcher");


user_switcher.currentConfigGroup = ["General"];

user_switcher.writeConfig("showFace", true);
user_switcher.writeConfig("showName", false);
user_switcher.writeConfig("showTechnicalInfo", true);

//
/// Tail: userswitcher
////////////////////////////////////////////////////////////////////////////////
