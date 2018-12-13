##### Adding node packages ######
// Install dependency
npm install express
// Install dev dependend
npm install babel-cli babel-preset-es2015 babel-preset-stage-0 --save-dev

##### Managing global directory #####
// Windows 7 or later
[%drive%]:\Users\[%user%]\AppData\Roaming\npm\node_modules
// Install globally
npm install express -g

##### Updating a package #####
// Install specific version
npm install eslint@5.2.0 -g
// Checking for update locally
npm outdated
// Update package
npm update eslint OR npm install eslint

##### Removing a package #####
// Remove package
npm uninstall babel-preset-es2015

##### Semantic versioning #####
~~~~~ "express": ^4.16.3 ~~~~~
4 --> Major releases
16 --> Minor releases
3 --> Patch releases
^4.16.3 (Caret) --> Installing any recent version 4.x.x
~4.16.3 (Tilde) --> Installing any recent version 4.16.x
4.16.3 --> Installing version 4.16.3

##### package-lock.json #####
package.json        | package-lock.json
"express": ^4.16.3  | "express": 4.16.3

##### NPM cache #####
// Check error in cache
npm cache verify
// Clean cache
npm cache clean --force

##### NPM audit #####
npm -v --> Proper version is 6 or more

##### Scripting in package.json #####
npm run [%script_name%]

##### NPX #####
npm -v --> Proper version is 5.2 or more