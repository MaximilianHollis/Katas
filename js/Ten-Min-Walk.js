function isValidWalk(walk) {
  let count = 0;
  let n = 0, s = 0, e = 0, w = 0;
  walk.map(d => {
    (d === "n") ? n++ : 0;
    (d === "s") ? s++ : 0;
    (d === "e") ? e++ : 0;
    (d === "w") ? w++ : 0;    
    });
    return (((n - s  === 0) || (s - n  === 0)) && ((e - w  === 0) || (w - e  === 0)) && ((n + s + e + w  === 10))) ? true : false
}
