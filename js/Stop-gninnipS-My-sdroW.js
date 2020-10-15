function spinWords(w){
  let words = w.split(' ');
  return words.map((w) => (w.length > 4) ? reverse(w) : w).join(' ');
}
            
function reverse(w){
  let words = w.split('')
  return words.reverse().join('');
}
