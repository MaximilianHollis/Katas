//#very-readable-oneliners
decodeMorse = function(m){
    return (m.split("   ").map(m => m.split(" ").map(m => MORSE_CODE[m]).join("")).join(" ")).trim();
}
