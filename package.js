// Do not modify package name yet
// Mongol detects it to decide if 
// it should display the SDK

Package.describe({
  name:          "meteortoys:mongolkit",
  summary:       "Extension Kit for Mongol",
  version:       "0.1.0",
  git:           "https://github.com/MeteorToys/sdk.git",
  documentation: "README.md",
  debugOnly:     true
});

Package.onUse(function(api) {

  var clientFiles = [
    "client/main.html",
    "client/main.js",
    "client/main.css",
  ];

  var MongolKit = [
    "config/config.js"
  ];

  api.add_files(clientFiles, "client");
  api.add_files(MongolKit,   "client");
  api.versionsFrom("1.0");
  api.use(["templating","mongo"], "client");

});
