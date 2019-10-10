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

    let NewString = expr.match(/.{1,10}/g); //divide string by 10
    let ArrNew = []; //create new array
    console.log(NewString); 
    
    NewString.forEach(function(elem){
    elem=Elem=elem.replace(/^0+/, '')
                  .replace(/10/g, '.')
                  .replace(/11/g, '-');
     console.log(elem);
     if(MORSE_TABLE[elem]){ArrNew.push(MORSE_TABLE[elem])}
     else{ ArrNew.push(' ')}
    });
    console.log(ArrNew);
    return result = ArrNew.join(''); //connect all array elements in a string
    
}

module.exports = {
    decode
}