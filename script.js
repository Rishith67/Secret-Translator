const morseCodeMap = {
  A: '*^',     B: '++--',    C: '%$^',     D: '^*%',
  E: '+',      F: '~^+',     G: '$~$',     H: '**^^',
  I: '^^',     J: '+^++',    K: '^%$',     L: '*$++',
  M: '%%',     N: '^+',      O: '$$$',     P: '+%%+',
  Q: '%%+^',   R: '*+*',     S: '***',     T: '-',
  U: '^+~',    V: '***+',    W: '+$$',     X: '%++%',
  Y: '%+%%',   Z: '%%**',
  0: '0000',   1: '+000',    2: '++00',    3: '+++0',
  4: '++++',   5: '#####',   6: '-####',   7: '--###',
  8: '---##',  9: '----#',
  ' ': '|',    '.': '*+*+*', ',': '%%,,%%'
};

const reverseMorseCodeMap = {
  '*^': 'A',
  '++--': 'B',
  '%$^': 'C',
  '^*%': 'D',
  '+': 'E',
  '~^+': 'F',
  '$~$': 'G',
  '**^^': 'H',
  '^^': 'I',
  '+^++': 'J',
  '^%$': 'K',
  '*$++': 'L',
  '%%': 'M',
  '^+': 'N',
  '$$$': 'O',
  '+%%+': 'P',
  '%%+^': 'Q',
  '*+*': 'R',
  '***': 'S',
  '-': 'T',
  '^+~': 'U',
  '***+': 'V',
  '+$$': 'W',
  '%++%': 'X',
  '%+%%': 'Y',
  '%%**': 'Z',
  '0000': '0',
  '+000': '1',
  '++00': '2',
  '+++0': '3',
  '++++': '4',
  '#####': '5',
  '-####': '6',
  '--###': '7',
  '---##': '8',
  '----#': '9',
  '|': ' ',
  '*+*+*': '.',
  '%%,,%%': ','
};


function covertenglishtext(){
const secretext = document.getElementById("secret").value;
let result = '';
var secrettext = secretext.toUpperCase();
for(let i=0;i<secrettext.length;i++){
    if(morseCodeMap[secrettext[i]]){
        result = result + morseCodeMap[secrettext[i]] + ' ';
    }
}
    document.getElementById("secret-text").textContent = result;
}


function covertsecretcode(){
    const a = document.getElementById("english").value;
    let result = '';
    const codes = a.trim().split(' ');
    
    for(let i=0;i<codes.length;i++){
        if(reverseMorseCodeMap[codes[i]]){
            result = result + reverseMorseCodeMap[codes[i]];
        }
    }
    document.getElementById("english-text").textContent = result;

}

function clear(){
    document.getElementById("secret-text").textContent = "";
    document.getElementById("english-text").textContent = "";
    document.getElementById("secret").value = "";
    document.getElementById("english").value = "";
}



function copy() {
    const text = document.getElementById("secret-text").textContent;
    if(text !== ""){
        navigator.clipboard.writeText(text);
        alert("The secret code has been copied to clipboard");
    }

}

function copy2(){
    const text = document.getElementById("english-text").textContent;
    if(text !== ""){
        navigator.clipboard.writeText(text);
        alert("The english text has been copied to clipboard");
    }
}