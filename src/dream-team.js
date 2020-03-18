module.exports = function createDreamTeam(arr) {

  if (!(Array.isArray(arr))) return false

  let name = '';

  arr.forEach(item => {
    if (typeof item === 'string') {
      item = item.trim();
      name += item[0].toUpperCase();
    }
  })

  return name.split('').sort().join('');


};