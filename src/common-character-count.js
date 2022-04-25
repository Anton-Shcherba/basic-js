const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1,s2) {
    let res = 0;
    for(const s of s1) {
      for (let i = 0; i < s2.length; i++) {
        if(s == s2[i]){
          res++;
          s2 = s2.slice(0, i) + s2.slice(i+1);
          break;
        }
      }
    }
    return res;
}

module.exports = {
  getCommonCharacterCount
};
