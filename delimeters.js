function validParentheses(p){
  let arr = p.split('');
  let open = 0, close = 0;
  arr.map(a => {
    //subtracting from open to force the evaluation false is a really hacky way to prevent there being more closing than open delimeters
    (a === '(') ? open++ : close++; (open - close) < 0 ? open-- : null})
  
  return (open === close) && !(arr[0] === ')' || arr[arr.length-1] === '(') ? true : false
}
