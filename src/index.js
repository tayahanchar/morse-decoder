const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let arrayLetters = [];
  let itemPosition = 0;
  let resultArray = [];
  let result = '';

  while(itemPosition < expr.length) {
    arrayLetters.push(expr.substr(itemPosition, 10));
    itemPosition += 10;
  }

  arrayLetters.forEach(element => decodeElement(element));

  function decodeElement(element) {
    let position = 0;
    let wordArray = [];
    
    if(element === '**********') {
      resultArray.push(' ');
    } else {
      while(position < element.length) {
        wordArray.push(element.substr(position, 2));
        position += 2;
      }
      let lett = '';
      wordArray.forEach(letter => {
        if(letter === '10') {
          lett += '.'
        }
        if(letter === '11') {
          lett += '-'
        }
      })
      resultArray.push(lett);
    }
  }

  resultArray.forEach(item => {
    item === ' ' ? result += ' ' : result += MORSE_TABLE[item];
  })

  return result;
}

module.exports = {
    decode
}