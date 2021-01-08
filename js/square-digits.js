function squareDigits(num){
  let nums = [];
  num.toString().split('').map((n) => nums.push(Math.pow(n, 2)))
  return Number(nums.join(''))
}
