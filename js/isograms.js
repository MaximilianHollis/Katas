function isIsogram(str){
  let chars = new Set()
  let answer = true;
  str.split('').map((s) => {
    if(chars.has(s.toLowerCase())){
      answer = false;
      return;
    } else {
        chars.add(s.toLowerCase())
    }
  })
  return answer
}
