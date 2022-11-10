// CyberNumber

/* Créer une fonction cyberNumber qui prend en paramètre un entier et qui doit retourner : 

                  "Cyber" si number est divisible par 3
                  "Punk" si number est divisible par 5
                  "CyberPunk2077" si number est divisible par 3 et 5

*/


function cyberNumber(a){

if (a % 3 == 0 && a % 5 == 0  ) {
  console.log("CyberPunk2077");
  return "CyberPunk2077";
}  if ( a % 3 == 0){
  console.log("Cyber")
  return "Cyber"
} if (a % 5 == 0 ){
  console.log("Punk");
  return "Punk";
}  else {
console.log("pas mutliple de 3 et 5")
}

}

module.exports = {
  cyberNumber
}