/*
Write a function named bindToAnArg(func, arg) that will accept a function func and any argument arg. The bindToAnArg function should return the passed-in function func modified to always be invoked with the passed-in argument arg.
*/

function bindToAnArg(func, arg) {
  let なんで = func.bind("こればか", arg)
  return なんで
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
