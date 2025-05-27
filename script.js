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

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ip_address = data.ip;
    if(ip_address === "27.59.54.225" ){
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
        window.covertenglishtext = covertenglishtext;


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
        window.covertsecretcode = covertsecretcode;

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
        window.copy2 = copy2;
    } else {
        document.body.innerHTML = "<h2>Access Denied</h2>";
    }
  })
  .catch(error => {
    document.getElementById('ip').innerText = "Error getting IP.";
    console.error("IP fetch error:", error);
  });