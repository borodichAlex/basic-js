module.exports = function countCats(arr) {
  return arr.reduce((sum, subArr) => sum + subArr.filter(item => item === '^^').length, 0);
};
