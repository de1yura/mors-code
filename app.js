const button = document.getElementsByClassName('.convert');
const input = document.getElementById('myInput');
const morseDisplay = document.getElementById('morse_display');
const mInput = document.getElementById('mInput');
const mButton = document.getElementById('mButton');
const englishDisplay = document.getElementById('english_display');


const Morse = {
  'a':'.-',
  'b':'-...',
  'c':'-.-',
  'd':'-..',
  'e':'.',
  'f':'..-.',
  'g':'--.',
  'h':'....',
  'i':'..',
  'j':'.---',
  'k':'-.-',
  'l':'.-..',
  'm':'--',
  'n':'-.',
  'o':'---',
  'p':'.--.',
  'q':'--.-',
  'r':'.-.',
  's':'...',
  't':'-',
  'u':'..-',
  'v':'...-',
  'w':'.--',
  'x':'-..-',
  'y':'-.--',
  'z':'--..',
  '1':'.----',
  '2':'..---',
  '3':'...--',
  '4':'....-',
  '5':'.....',
  '6':'-....',
  '7':'--...',
  '8':'---..',
  '9':'----.',
  '0':'-----',
  '/':'/'
}
const letters = Object.keys(Morse);
const morse = Object.values(Morse);

const toMorse = () => {
  const greeting = input.value
  const greetingSplit = greeting.toLowerCase().split("");
  const greetingSlash = greetingSplit.map(a => a === " " ? "/" :a);
  const greetingMorse = greetingSlash.map((letter) =>  Morse[letter]).join("     ");
  morseDisplay.innerHTML= greetingMorse;
}

const toEng = () => {
  const morseInput = mInput.value;
  const morseSplit = morseInput.split(" ");
  const morseString = morseSplit.map((m) => {
    m.toString()
    return Object.keys(Morse)[Object.values(Morse).indexOf(m)]
  })


  const spaceAdder = morseString.map((m) => m.replace("/", " "));
  const morseFinal = spaceAdder.join("");

  englishDisplay.innerHTML=morseFinal;

console.log(morseFinal);
}