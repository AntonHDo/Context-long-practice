/*
Write a function named changeContext(func, obj) that will accept a function func and an object obj. The changeContext function should return the result of the function func INVOKED with the object obj as its CONTEXT.
*/

let changeContext = (func, obj) => {

  // return func.call(obj) //  this is the call method, it invokes itself.

  let binded = func.bind(obj) // with the bind method

  return binded()// we must invoke the variable, with ()
  // make obj the context being binded
}

class Person {
  constructor(name) {
    this.name = name;
  }
}

function extractName() {
  return this.name;
}

const kristen = new Person('Kristen');
console.log(changeContext(extractName, kristen)); // => Kristen


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
