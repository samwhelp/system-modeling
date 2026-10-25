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
// ## Bottom Dock
//

const panel = new Panel();

panel.location = "bottom";
panel.alignment = "center";
panel.floating = false;
panel.hiding = "none";
panel.height = Math.round(gridUnit * 3.2);
panel.lengthMode = "fit";

//
/// Tail: panel
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
/// Head: icontasks
//

var icontasks = panel.addWidget("org.kde.plasma.icontasks");


icontasks.currentConfigGroup = ["General"];

icontasks.writeConfig("fill", false);
icontasks.writeConfig("iconSpacing", 2);

icontasks.writeConfig("forceStripes", true);
icontasks.writeConfig("maxStripes", 1);

icontasks.writeConfig("showOnlyCurrentActivity", true);
icontasks.writeConfig("showOnlyCurrentDesktop", true);
icontasks.writeConfig("showOnlyCurrentScreen", false);

icontasks.writeConfig("showToolTips", false);
icontasks.writeConfig("wheelSkipMinimized", false);

icontasks.writeConfig("launchers", [
	"applications:org.kde.dolphin.desktop",
	"applications:org.kde.kate.desktop",
	"preferred://browser",
	"applications:org.kde.konsole.desktop",
	"applications:systemsettings.desktop",
	"applications:org.kde.discover.desktop"
]);

//
/// Tail: icontasks
////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
/// Head: minimizeall
//

panel.addWidget("org.kde.plasma.minimizeall");

//
/// Tail: minimizeall
////////////////////////////////////////////////////////////////////////////////
