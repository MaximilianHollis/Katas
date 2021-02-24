function toCamelCase(str){
  //regex - or _
  let words = str.split(/-|_/);
  
  let upperCased = words.map((w, i) => {
    i ?
    w = [w.split('')[0].toUpperCase(), w.substring(1, w.length)].join('')
     : 0
     return w
  })
  return upperCased.join('')
}
