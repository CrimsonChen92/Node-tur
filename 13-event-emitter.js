// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

//there's on which listen for an event, and emit which emit an event.
//for .on(2para), first is the string, second is the callback
customEmitter.on("response", (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`);
});
//can have multiple event
//order matters, if you emit it first. then these two .on will not happen bc it needs to read the on first.
//then emit it with the same string name, and in emit you pass info to the .on event too.
//Note, the "response" string is built in and not just something you named yours self.
customEmitter.on("response", () => {
  console.log(`some other logic`);
});

//emit will then make that on event happen. it have 2 para. First have to be the same string to link to that .on event
//second can be nothing, or the varible passed to the .on callback.
customEmitter.emit("response", "john", 34);
