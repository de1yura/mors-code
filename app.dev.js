"use strict";

var button = document.getElementsByClassName('.convert');
var input = document.getElementById('myInput');
var morseDisplay = document.getElementById('morse_display');
var mButton = document.getElementById('mButton');
var Morse = {
  'a': '.-',
  'b': '-...',
  'c': '-.-',
  'd': '-..',
  'e': '.',
  'f': '..-.',
  'g': '--.',
  'h': '....',
  'i': '..',
  'j': '.---',
  'k': '-.-',
  'l': '.-..',
  'm': '--',
  'n': '-.',
  'o': '---',
  'p': '.--.',
  'q': '--.-',
  'r': '.-.',
  's': '...',
  't': '-',
  'u': '..-',
  'v': '...-',
  'w': '.--',
  'x': '-..-',
  'y': '-.--',
  'z': '--..',
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  '0': '-----',
  '/': '/',
  '.': '.-.-.-',
  ',': '--..--',
  '?': '..--..'
};
var letters = Object.keys(Morse);
var morse = Object.values(Morse);

var toMorse = function toMorse() {
  var greeting = input.value;
  var greetingSplit = greeting.toLowerCase().split("");
  var greetingSlash = greetingSplit.map(function (a) {
    return a === " " ? "/" : a;
  });
  var greetingMorse = greetingSlash.map(function (letter) {
    return Morse[letter];
  }).join(" ");
  morseDisplay.innerHTML = greetingMorse;
};

var toEng = function toEng() {
  var morseInput = input.value;
  var morseSplit = morseInput.split(" ");
  var morseString = morseSplit.map(function (m) {
    m.toString();
    return Object.keys(Morse)[Object.values(Morse).indexOf(m)];
  });
  var spaceAdder = morseString.map(function (m) {
    return m.replace("/", " ");
  });
  var morseFinal = spaceAdder.join("");
  morseDisplay.innerHTML = morseFinal;
  console.log(morseFinal);
};