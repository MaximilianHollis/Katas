var moveZeros = function (arr) {
  //make sure to use strict equality due to stupid js stuff
  const count = arr.filter(elem => elem === 0);
  let newArr = arr.filter(elem => elem !== 0);
  count.map(elem => newArr.push(elem))
  return newArr;
}
