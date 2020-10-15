function songDecoder(song){
  //for some reason there was tabs so i had to use jank to remove them
  return(song.replace(/wub/gi, ' ').replace(/\s\s+/g, ' ').trim());
}
