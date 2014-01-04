var sayHelloWorld1 = function() {
	locallySayHelloWorld(1);
}
exports.sayHelloWorld1 = sayHelloWorld1;

exports.sayHelloWorld2 = function() {
	locallySayHelloWorld(2);
}

var helloWorld1 = function() {
	console.log('hello world 1');
}
exports.helloWorld1 = helloWorld1;

exports.helloWorld2 = function() {
	console.log('hello world 2');
}

// --- private --- 

function locallySayHelloWorld(version) {	
	if (version == 1) {
		helloWorld1();
	}
	
	else if (version == 2) {
		// the following line will cause a crash since helloWorld2 is not defined
		// helloWorld2();
	}
}