module.exports = class Color {
  constructor(hex, description = null) {
    this.hex = hex;
    this.description = description;
  }
  getValue() {
    return this.hex;
  }
};
