/* console.log("Hello World");

var a = 123;
console.log(a);

// create function

var myfunction = function name(a) {
    console.log(2 * a);
};

myfunction(6); */

import logger, {add_num, dummyfunction, genericFunction, nameFunction, name} from './tools.js';  

logger('welcome! we are using modularity');
var a = 5;
var b = 6;
logger('The sum of '+ a +' and '+b+ 'is ' + add_num(6,5))

logger('Welcome to ' + name+'.'+ dummyfunction())

logger(`Welcome to ${name}. ${dummyfunction()}`);

logger(genericFunction())

logger(nameFunction())


