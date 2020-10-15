function spinWords(w){
  let words = w.split(' ');
  return words.map((w) => (w.length > 4) ? w.split('').reverse().join('') : w).join(' ');
}
