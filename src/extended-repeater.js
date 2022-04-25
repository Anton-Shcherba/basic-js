const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str);
  if (typeof options === 'undefined') return str;
  let repeatTimes = options.repeatTimes;
  if (typeof repeatTimes === 'undefined') repeatTimes = 1;
  let additionRepeatTimes = options.additionRepeatTimes;
  if (typeof additionRepeatTimes === 'undefined') additionRepeatTimes = 1;
  if (typeof options.addition === 'undefined') additionRepeatTimes = 0;
  let addition = String(options.addition);
  let separator = '+';
  if (typeof options.separator !== 'undefined') separator = options.separator;
  let additionSeparator = '|';
  if (typeof options.additionSeparator !== 'undefined') additionSeparator = options.additionSeparator;

  let result = '';
  for (let i = 0; i < repeatTimes; i++) {
    result += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      result += addition;

      if (j+1 != additionRepeatTimes) result += additionSeparator;
    }
    if (i+1 != repeatTimes) result += separator;
  }
  return result;
}

module.exports = {
  repeater
};
