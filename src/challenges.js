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
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  
let x = Math.abs(4 - 2);

  if (cat1 - mouse < cat2 - mouse) {
    return "cat1";
  } else if (cat2 - mouse < cat1 - mouse) {
    return "cat2";
  } else if (mouse - cat1 + x === mouse - cat2) {
    return "Os gatos trombam e o rato foge";
  }
}
//npm test catAndMouse


// Desafio 8
function fizzBuzz(numbers) {
// seu código aqui
let result = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers [index] % 3 === 0 && numbers [index] % 5 === 0) {
  result.push('fizzBuzz'); 
  } else if (numbers [index] % 3 === 0) {
    result.push('fizz');
  } else if (numbers [index] % 5 === 0) {
    result.push('buzz'); 
  } else {
    result.push('bug!');
  }
}
return result;
}
//npm test fizzBuzz


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
