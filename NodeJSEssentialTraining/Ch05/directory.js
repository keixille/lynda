var fs = require("fs");

if(fs.existsSync("lib_dir")) {
    console.log("Directory already there")
} else {
    fs.mkdir("lib_dir", function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("Directory Created");
        }
    })
}