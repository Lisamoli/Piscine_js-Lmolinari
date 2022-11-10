// Carl Friedrich Gauss

/* Ecrivez une fonction qui va prendre en paramètre deux entiers non nuls, a et b, de sorte à ce qu a < b.
Votre fonction carlFriedrichGauss renverra la somme de tous les entiers entre ces deux nombres inclus

exemple : 

a = 1
b = 100

===OUTPUT===
  5050
( 1 + 2 + 3 + 4 + 5 + .... + 99 + 100 = 5050
  la somme des entiers de 1 à 100 est 5050)

*/


function carlFriedrichGauss(a,b){
  console.log(((a+b)*b)/2);
  return ((a+b)*b)/2
}

exports.module = {
  carlFriedrichGauss
}