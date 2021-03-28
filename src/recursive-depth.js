module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let amount = 1;
    let max = 1;

    for (let el of arr) {
      if (Array.isArray(el)) {
        const res = amount + this.calculateDepth(el);
        if (res > max) max = res;
      }
    }

    return max;
  }
};