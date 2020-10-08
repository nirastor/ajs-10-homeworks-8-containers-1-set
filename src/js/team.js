// eslint-disable-next-line no-unused-vars
export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(characer) {
    if (this.members.has(characer)) {
      throw new Error('The character has already been added');
    }
    this.members.add(characer);
    return this;
  }

  addAll(arr) {
    arr.forEach((item) => {
      this.members.add(item);
    });
    return this;
  }

  toArray() {
    const arr = [];
    this.members.forEach((member) => {
      arr.push(member);
    });
    return arr;
  }
}
