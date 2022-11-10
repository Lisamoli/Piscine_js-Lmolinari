/* Ecrivez une fonction divide qui prend en paramètre deux arguments et qui retourne la division du premier par le second, attention la division par zéro est interdite et doit retourner la chaîne de caractère Forbidden */

function divide (a, b) { 
if (b == 0) {  
return ("Forbidden")
} else { 
return a / b;
 }
 }

// Ne touchez pas les lignes en dessous.
module.exports = {
  divide
}