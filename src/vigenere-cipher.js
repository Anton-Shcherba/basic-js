const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(normal = true) {
    this.isInverse = !normal;
  }
  encrypt(message, key) {
    if (typeof message === 'undefined' || typeof key === 'undefined') throw new Error("Incorrect arguments!");
    let result = '';
    let key_i = 0;
    for (let i = 0; i < message.length; i++) {
      let letter = message[i].toUpperCase().charCodeAt() - 65;
      if (letter < 0 || letter > 25) result += message[i];
      else {
        let codeLetter = key[key_i % key.length].toUpperCase().charCodeAt() - 65;
        result += String.fromCharCode((letter+codeLetter) % 26 + 65);
        key_i++;
      }
    }
    if(this.isInverse) return result.split('').reverse().join('');
    return result;
  }
  decrypt(message, key) {
    function mod(n, p){
      if ( n < 0 ) n = p - Math.abs(n) % p;
      return n % p;
    }
    if (typeof message === 'undefined' || typeof key === 'undefined') throw new Error("Incorrect arguments!");
    let result = '';
    let key_i = 0;
    for (let i = 0; i < message.length; i++) {
      let letter = message[i].toUpperCase().charCodeAt() - 65;
      if (letter < 0 || letter > 25) result += message[i];
      else {
        let codeLetter = key[key_i % key.length].toUpperCase().charCodeAt() - 65;
        result += String.fromCharCode(mod((letter-codeLetter), 26) + 65);
        key_i++;
      }
    }
    if(this.isInverse) return result.split('').reverse().join('');
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
