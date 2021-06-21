setInterval(() => {
  console.log("hello world");
}, 2000);
console.log(`I will run first`);
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error

//setInterval is async, but every 2000ms, it'll run again and again and again.
