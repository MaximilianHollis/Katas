function humanReadable(seconds) {
  let hour = Math.floor(seconds / 3600);
  let second = Math.floor(seconds % 3600);
  let minute = 0;
  
  if (second >= 60){
    minute = Math.floor(second / 60);
    second = second % 60;
  }
  return(pad(hour) + ':' + pad(minute) + ':' + pad(second))
  
  function pad(input){
     return String(input).padStart(2, '0');
  }
}
