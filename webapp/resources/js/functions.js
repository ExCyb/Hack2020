 function getRandInt(min, max) {

    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

 function getRandFloat(min, max) {
    min = -0.0030;
    max = 0.022;
    return (Math.random() * (max - min) + min);
}

 function getColorForLots(lots) {
     if (lots === 0) {
         return 'darkred'
     }
     if (lots < 3) {
         return 'beige'
     }


     return 'green'
 }

export { getRandInt, getRandFloat, getColorForLots };
