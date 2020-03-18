const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (!this.chain) this.chain = [];

    if (!(value === undefined)) {
      value = (this.chain.length) ? `~( ${value + ''} )~` : `~( ${value + ''} )~`;
    } else {
      value = (this.chain.length) ? `~()~` : `~()~`;
    }

    this.chain.push(value);
    return this
  },
  removeLink(position) {
    if (!this.chain) throw new Error

    if ((typeof position === 'number') && (!isNaN(position)) && (position < this.getLength()) && (position > 0)) {
      this.chain.splice(position - 1, 1)
      return this
    }

    this.chain = []
    throw Error
  },
  reverseChain() {
    if (!this.chain) throw new Error

    this.chain.reverse()

    return this
  },
  finishChain() {
    let result = this.chain.join('').slice(1, -1)
    this.chain = []

    return result
  }
};

module.exports = chainMaker;
