function validatePIN (p) {
  const a = p.split('').length;
  p = p.match(/[^0-9]/g);
  return ((a== 4 || a == 6) && !p) ? true : false;
}
