function pigIt(str){
  let words = str.split(' ');
  let letters = words.map(s => s.split(''));

  letters.map(l => {
    let keep = (l.shift());
    l.push(keep);
    isLetter(l[0]) ? l.push('ay') : null;
  })
    return letters.map(l => l.join('')).join(' ')
}

function isLetter(str) {
    str.toLowerCase();
    return (str.length === 1 && str.match(/[a-z]/i));
}
