module.exports = class Stroke {
  constructor(value, description = null) {
    this.value = value;
    this.description = description;
  }
  getValue() {
    return this.value;
  }
};
