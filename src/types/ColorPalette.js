module.exports = class ColorPalette {
  constructor(struct, description = null) {
    this.struct = struct;
    this.description = description;
  }
  getStruct() {
    return this.struct;
  }
};
