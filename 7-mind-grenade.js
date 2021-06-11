const num1 = 5;
const num2 = 10;

function addValue() {
  console.log(`ths sume is : ${num1 + num2}`);
}

addValue();

//if you have a function inside the module as shown above. and then invoke it by doing addValue();
//and then just require it on another module. It'll run on node terminal without calling the function
