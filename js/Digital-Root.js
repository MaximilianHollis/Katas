function digital_root(n) {
  let root = (n + "").split('').map(Number);
  //make sure to convert into array of numbers not strings
  let newNum = root.reduce((sum, add) => sum + add, 0);
  //cant return with ternary so use if- also remember to return the function in the conditional when using recursice algos
  if(((newNum + "").split('').length*1) > 1) {
      return digital_root(newNum)
    } else{
      return newNum;
    }
  }
