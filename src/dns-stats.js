const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let domArr = [];
  for (const iterator of domains) domArr.push(iterator.split('.').reverse());
  let res = {};
  for (let i = 0; i < domArr.length; i++) {
    let str = '';
    for (let j = 0; j < domArr[i].length; j++) {
      str += '.' + domArr[i][j];
      if(!res[str]) res[str] = 1;
      else res[str]++;
    }
  }
  return res;
}

module.exports = {
  getDNSStats
};
