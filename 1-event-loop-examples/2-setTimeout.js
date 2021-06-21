// started operating system process
console.log("first");
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");
// completed and exited operating system process

//here you see first, third, then second as the setTimeout offload it, and setTimeout is async too.
