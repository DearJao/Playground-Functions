// Desafio 1
function compareTrue(paran1, paran2) {
  // seu código aqui
    if (paran1 === true && paran2 === true) {
        return(true);
    } else {
        return(false);
    }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence (texto) {
// seu código aqui

let textoSeparado = texto.split(" ");

return textoSeparado
}


// Desafio 4
function concatName(paran) {
  // seu código aqui

  let lastPositions = paran[paran.lenght[-1]];
  let firstPositions = paran[paran.lenght[0]];

  let concatStrings = lastPositions.concat(firstPositions);

  return concatStrings;

}


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  
let teamWins = wins * 3;
let teamTies = ties * 1;

return teamWins + teamTies;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let maiorNumeroAteAgora = array[0];
    for(let i = 0; i <= array.length; i += 1) {
      if(array[i] > maiorNumeroAteAgora) {
        maiorNumeroAteAgora = array[i];
        }
    }
  
  let result = 0;
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] === maiorNumeroAteAgora) {
        result +=1; 
        } 
    }
return result;
}


// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
