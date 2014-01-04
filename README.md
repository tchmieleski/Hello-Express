Hello-Express
=============

Hello World using the Express framework with Node.js

Hello World app showing the difference between form 1

```
var someFunction = function(stuff) {
};
exports.someFunction = someFunction;
```

and form 2

```
exports.someFunction = function(stuff) {
};
```


The second form does not enable you to call the function within the same file since the function has not been defined.

In this example, in app.js, the exported functions sayHelloWorld1 and sayHelloWorld2 are called.

```
// hello world
var helloWorld = require('./routes/helloWorld');

// hello world 1 (form 1 above)
helloWorld.sayHelloWorld1();

// hello world 2 (form 2 above)
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
