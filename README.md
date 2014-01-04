Hello-Express
=============

Hello World using the Express framework with Node.js

Hello World app showing the difference between 

```
var someFunction = function(stuff) {
};
exports.someFunction = someFunction;
```

and

```
exports.someFunction = function(stuff) {
};
```

The second form does not enable you to call the function within the same file, there is no local definition of the function
Here is an example I just created:

so when the helloWorld2() is uncommented, the output of the program looks like this:

```
troy@Troys-MacBook-Pro ~/D/Hello-Express> node app
hello world 1

/Users/troy/Desktop/Hello-Express/routes/helloWorld.js:27
helloWorld2();
^
ReferenceError: helloWorld2 is not defined
```
