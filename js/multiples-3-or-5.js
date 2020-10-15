function solution(n){
  let numbers = [0];
  for (let i = 0; i < n; i++){
    if (i % 3 === 0 || i % 5 === 0){
      numbers[i] = i;
    }
  }
  //remember to put return in inner functions
  return numbers.reduce((acc, a) => {return acc + a}, 0);
}

//Much cleaner
function solution(n){
  let numbers = 0;
  for (let i = 0; i < n; i++){
    if (i % 3 === 0 || i % 5 === 0){
      numbers =+ i;
    }
  }
  //remember to put return in inner functions
  return numbers;
}
