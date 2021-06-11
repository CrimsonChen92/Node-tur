// CommonJS, every file is module (by default)
//Modules- Encapsulated Code (only share minimum)

// const secret = "SUPER SECRET";  //line 10 is if we want everything in one module
// const john = "john";
// const peter = "peter";

// const sayHi = (name) => {
//   console.log(`hello there ${name}`);
// };

//line 15-21 is if we split this to 3 modules and combine them again with module.exports, then require("./filelink")
//and then in the terminal, we can use them by doing node filename. in this case node 3-modules

const names = require("./4-names");
//const {john, peter} = require("./4-names");  you can destruct to use sayHi(john). or if you use name code above
const sayHi = require("./5-utils");

sayHi("chen");
sayHi(names.john);
sayHi(names.peter);

// sayHi(john); this will work if we did destruct
// sayHi(peter);

//below is another way to do it, with file 6-alternative.js

const data = require("./6-alternative-flavor");
console.log(data);
console.log(data.singlePerson);
console.log(data.items);

//from 7-mind-fuck
//bc in file 7, we have a fn and also use the fn by fnName(), we don;t even need to module.exports it
//and can call it still
require("./7-mind-grenade");
