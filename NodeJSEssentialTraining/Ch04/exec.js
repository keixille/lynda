var exec = require("child_process").exec;

// Linux OS
// exec("open http://linkedin.com");
// exec("open -a Terminal .")
// exec("ls", function(err, stdout) {
//     if(err) {
//         throw err;
//     }
//     console.log("Listing Finish");
//     console.log(stdout);
// });

// Windows OS
// exec("start http://linkedin.com");
// exec("start cmd");
// exec("dir", function(err, stdout) {
//     if(err) {
//         throw err;
//     }
//     console.log("Listing Finish");
//     console.log(stdout);
// });
exec("git version", function(err, stdout) {
    if(err) {
        throw err;
    }
    console.log("Git Version Executed");
    console.log(stdout);
});