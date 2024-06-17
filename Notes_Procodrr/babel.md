## What is Babel?
Babel is a JavaScript compiler
Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:

Transform syntax
Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)
Source code transformations (codemods)



to create package.json 
in terminal ----> write command -> npm init -y




1. install link : npm install --save @babel/standalone

// ensure that it should be added three dependencies in package.json
and also creates two folders :
1. node_modules
2. package-lock.json



1.  npm install @babel/node
2.  npm install @babel/cli
3.  npm install @babel/core




create .babelrc file -> add this 
{
    "presets": ["@babel/preset-react"]
     } 


then install this 
// ERROR : module not found 
npm i @babel/preset-react -D





## Source-maps :
1st method
 "build": "babel ./script.js -d lib --source-maps

 this create one another file named as :
 script.js.map



2nd method : 
in .babelrc file add key 
"sourceMaps" : true 


## babel documentation : https://babeljs.io/docs/