var path = require('path'); // Module for path
var util = require('util'); // Module for logging with timestamp
var v8 = require('v8'); // Module for memory

util.log(path.basename(__filename));
var dirUploads = path.join(__dirname, 'www', 'files', 'uploads');
util.log(dirUploads);
util.log(v8.getHeapStatistics());