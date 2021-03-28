class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }

  encrypt(message, key) {
    if (!message || !key) throw Error('Error')

    let resStr = '';
    const lenKey = key.length;
    const lowerMsg = message.toLowerCase();
    const lowerKey = key.toLowerCase();

    const calcIndexCh = (row, column) => {
      const sum = column + row;
      return (sum >= 26) ? sum - 26 : sum;
    }

    for (let i = 0, j = 0; i < lowerMsg.length; i++) {
      const chMsg = lowerMsg[i];
      const codeChMsg = chMsg.charCodeAt(0);

      if (codeChMsg >= 97 && codeChMsg <= 122) {
        const chKey = lowerKey[j];
        const codeChKey = chKey.charCodeAt(0);

        const row = codeChKey - 97;
        const column = codeChMsg - 97;

        const chTable = String.fromCharCode(calcIndexCh(row, column) + 65);

        resStr += chTable;

        j = (j === lenKey - 1) ? 0 : j + 1;
      } else {
        resStr += chMsg;
      }
    }

    return resStr;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw Error('Error')

    let resStr = '';
    const lenKey = key.length;
    const upperKey = key.toUpperCase();

    const calcIndexCh = (code, shift) => {
      const calc = code - shift;
      return (calc < 65) ? calc + 26 : calc;
    }

    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      const chTable = encryptedMessage[i];
      const codeChTable = chTable.charCodeAt(0);

      if (codeChTable >= 65 && codeChTable <= 90) {
        const chKey = upperKey[j];
        const codeChKey = chKey.charCodeAt(0);

        const row = codeChKey - 65;

        const chMsg = String.fromCharCode(calcIndexCh(codeChTable, row));

        resStr += chMsg;

        j = (j === lenKey - 1) ? 0 : j + 1;
      } else {
        resStr += chTable;
      }
    }

    return resStr;
  }
}

module.exports = VigenereCipheringMachine;
