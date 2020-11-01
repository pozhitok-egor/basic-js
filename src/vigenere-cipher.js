const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
    this.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  }

  encrypt(message, key) {
    let lowerCaseMessage = message.toLowerCase();
    let lowerCaseKey = key.toLowerCase();
    let resultativeMessage = '';
    while (lowerCaseKey.length < message.length) {
      lowerCaseKey += lowerCaseKey;
    }
    let j = 0;
    for (let i = 0; i < lowerCaseMessage.length; i++) {
      if (this.alphabet.indexOf(lowerCaseMessage[i]) === -1) {
        resultativeMessage += lowerCaseMessage[i];
        continue;
      }
      let shift = this.alphabet.indexOf(lowerCaseKey[j]);
      let code = this.alphabet.indexOf(lowerCaseMessage[i]) + shift > this.alphabet.length-1 ?
        this.alphabet.indexOf(lowerCaseMessage[i]) + shift - this.alphabet.length :
        this.alphabet.indexOf(lowerCaseMessage[i]) + shift;
      resultativeMessage += this.alphabet[code];
      j++;
    }
    return this.reverse ? resultativeMessage.toUpperCase() : resultativeMessage.toUpperCase().split('').reverse().join('');
  }

  decrypt(message, key) {
    let lowerCaseMessage = message.toLowerCase();
    let lowerCaseKey = key.toLowerCase();
    let resultativeMessage = '';
    while (lowerCaseKey.length < message.length) {
      lowerCaseKey += lowerCaseKey;
    }
    let j = 0;
    for (let i = 0; i < lowerCaseMessage.length; i++) {
      if (this.alphabet.indexOf(lowerCaseMessage[i]) === -1) {
        resultativeMessage += lowerCaseMessage[i];
        continue;
      }
      let shift = this.alphabet.indexOf(lowerCaseKey[j]);
      let code = this.alphabet.indexOf(lowerCaseMessage[i]) - shift < 0 ?
        this.alphabet.indexOf(lowerCaseMessage[i]) - shift + this.alphabet.length :
        this.alphabet.indexOf(lowerCaseMessage[i]) - shift;
      resultativeMessage += this.alphabet[code];
      j++;
    }
    return this.reverse ? resultativeMessage.toUpperCase() : resultativeMessage.toUpperCase().split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
