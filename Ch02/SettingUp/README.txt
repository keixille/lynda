##### 01 #####
##### Starting project #####
1. Install httpster globally
npm install -g httpster

2. Start local server
httpster -d ./dist -p 3000

##### 04 #####
##### Babel static transpiling #####
1. Install babel-cli
npm install babel-cli@6.18.0 --save-dev

2. Install babel-cli globally
npm install -g babel-cli

3. Install babel-preset-react
npm install babel-preset-react@6.16.0 --save-dev

4. Install babel-preset-latest
npm install babel-preset-latest@6.16.0 --save-dev

5. Install babel-preset-stage-0
npm install babel-preset-stage-0@6.16.0 --save-dev

6. Generate bundle.js
babel ./src/index.js --out-file ./dist/bundle.js

##### 05 #####
##### Building with webpack #####
1. Install webpack
npm install webpack@1.13.3 --save-dev
* If error happen --> npm ERR! Unexpected end of JSON input while parsing near '...","webpack-dev-middle'
** Solution --> Clear npm cache in C:\Users\%USERNAME%\AppData\Roaming\npm-cache

2. Install babel-loader
npm install babel-loader@6.2.5 --save-dev

3. Install webpack-dev-server
npm install webpack-dev-server@1.16.2 --save-dev

4. Generate bundle.js
npm run build

5. Start local server
npm run start

##### 06 #####
##### Loading JSON with webpack #####
1. Install react
npm install react@15.3.2 --save

2. Install react-dom
npm install react-dom@15.3.2 --save

3. Install json-loader
npm install json-loader@0.5.4 --save-dev

4. Start local server
npm run start

##### 07 #####
##### Adding CSS to webpack build #####
1. Install autoprefixer-loader
npm install autoprefixer-loader@3.2.0 --save-dev

2. Install css-loader
npm install css-loader@0.25.0 --save-dev

3. Install sass-loader
npm install sass-loader@4.0.2 --save-dev

4. Install peer dependency for sass-loader
npm install node-sass@4.9.4 --save-dev

5. Install style-loader
npm install style-loader@0.13.1 --save-dev

6. Start local server
npm run start