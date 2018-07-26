/*
*
*  Implémentez la fonction closestToZero pour retourner la température la plus proche de zéro qui appartient au tableau ts.
*  - Si ts est vide, retournez 0 (zéro).
*  - Si deux nombres sont tout aussi proches de zéro, considérez le nombre positif comme étant le plus proche de zéro
*
*  Données :
*  Les températures sont toujours exprimées avec des nombres flottants allant de -273 à 5526.
*  Le tableau ts est toujours valide et n’est jamais null.
*
*/

/*
*  Loop through <ts> to return the temperature that is closest to 0
*
*  @param {Array} ts : an array of temperatures as floating numbers
*  @return {Number} the temperature closest to 0
*/
function closestToZero(ts) {
  if (ts.length === 0) return 0;

  let closestToZero = Math.abs(ts[0]);
  ts.forEach(temp => {
    if (Math.abs(temp) < Math.abs(closestToZero)) {
      closestToZero = temp;
    } else if (Math.abs(temp) === Math.abs(closestToZero)) {
      closestToZero = Math.max(closestToZero, temp);
    }
  });

  if (Math.abs(ts[0]) === Math.abs(closestToZero)) return Math.max(ts[0], closestToZero);

  return closestToZero;
}

closestToZero(ts);
