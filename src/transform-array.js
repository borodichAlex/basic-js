module.exports = function transform(arr) {

  if (!(Array.isArray(arr))) throw Error;
  if (arr.length === 0) return arr;

  const transformed = [];

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (el === '--discard-next') {
      i++;
      continue;
    }
    if (el === '--discard-prev') {
      transformed.pop();
      continue;
    }
    if (el === '--double-next') {
      const nextEl = arr[i + 1];
      if (nextEl === 'undefined' || i + 1 >= arr.length) continue;
      transformed.push(nextEl);
      continue;
    }
    if (el === '--double-prev') {
      const prevEl = arr[i - 1];
      if (prevEl === 'undefined' || (i - 1) === -1) continue;
      transformed.push(prevEl);
      continue;
    }

    transformed.push(el);
  }

  return transformed;
};