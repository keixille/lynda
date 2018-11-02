var fs = require("fs");

fs.renameSync("./lib_dir/project-config.js", "./lib_dir/config.json");
console.log("Config json file renamed");

fs.rename("./lib_dir/notes.md", "./notes.md", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("Notes.md moved successfully");
    }
});