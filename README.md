Hello-Express
=============

Hello World app using the Express framework with Node.js to show the difference between three function forms: 
form 1:

```
var someFunction = function(stuff) {
};
exports.someFunction = someFunction;
```

form 2:

```
exports.someFunction = function(stuff) {
};
```

form 3:

```
var someFunction = exports.someFunction = function(stuff) {
};
```

The first and third form work but the second will crash the program. The second form does not enable you to call the function within the same file since the function has not been defined.

In this example, in app.js, the exported functions sayHelloWorld1 (form 1) and sayHelloWorld2 (form 2) are called.

```
// hello world
var helloWorld = require('./routes/helloWorld');

// hello world 1
helloWorld.sayHelloWorld1();

// hello world 2
helloWorld.sayHelloWorld2();
```

When helloWorld2() is uncommented, the program crashes and the output looks as follows:

```
troy@Troys-MacBook-Pro ~/D/Hello-Express> node app
hello world 1

/Users/troy/Desktop/Hello-Express/routes/helloWorld.js:27
helloWorld2();
^
ReferenceError: helloWorld2 is not defined
```
