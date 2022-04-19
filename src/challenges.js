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

  let lastStrings = paran[paran.length -1];
  let firstString = paran[0];
  ///console.log(lastStrings, firstString)

  let concatStrings = lastStrings.concat(', ' + firstString);

  return concatStrings;

}
//console.log(concatName(['foguete','nao','tem', 're']))
//npm test concatName


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

  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return "cat1";
  } else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return "cat2";
  } else if ( Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return "os gatos trombam e o rato foge";
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
function encode(str1) {
  // seu código aqui

  let a = 1;
  let e = 2;
  let i = 3;
  let o = 4;
  let u = 5;


  for(let index = 0; index < str1.lenght; index += 1)
  if (str1[index]) {

  }
}

function decode(str2) {
  // seu código aqui

  for(let i = 0; index < paranStr.lenght; i += 1)
  if (str2[i] === 1 ) {
    return "a"
  }
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
