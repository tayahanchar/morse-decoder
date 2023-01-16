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
  let itemPosition = 0;
  let resultArray = [];
  let result = '';

  while(itemPosition < expr.length) {
    decodeElement(expr.substr(itemPosition, 10));
    itemPosition += 10;
  }

  function decodeElement(element) {
    
    if(element === '**********') {
      resultArray.push(' ');
    } else {
      let position = 0;
      let lett = '';
      while(position < element.length) {

        element.substr(position, 2) === '10' ? lett += '.' : element.substr(position, 2) === '11' ? lett += '-' : lett += '';
        
        position += 2;
      }
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