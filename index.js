const fs = require('fs');
const path = require('path');
const util = require('util');
const yaml = require('js-yaml');

class Color {
  constructor(hex) {
    this.hex = hex;
  }
}

class ColorPalette {
  constructor(struct) {
    this.struct = struct;
  }
}

const ColorYamlType = new yaml.Type('!color', {
  // http://www.yaml.org/spec/1.2/spec.html#kind//
  kind: 'scalar',

  // If a node is resolved, use it to create appropriate instance.
  construct: function(data) {
    return new Color(data);
  },

  // Dumper must process instances of given constructor by rules of this YAML type.
  instanceOf: Color,

  // Dumper
  represent: function(color) {
    return color.hex;
  },
});

const ColorPaletteYamlType = new yaml.Type('!color-palette', {
  // http://www.yaml.org/spec/1.2/spec.html#kind//
  kind: 'mapping',

  // If a node is resolved, use it to create appropriate instance.
  construct: function(data) {
    return new ColorPalette(data);
  },

  // Dumper must process instances of given constructor by rules of this YAML type.
  instanceOf: ColorPalette,

  // Dumper
  represent: function(palette) {
    return palette.struct;
  },
});

const schema = yaml.Schema.create([ColorYamlType, ColorPaletteYamlType]);

// Parse and dump
fs.readFile(path.join(__dirname, 'brand.yml'), 'utf8', function(error, data) {
  var loaded;

  if (!error) {
    loaded = yaml.load(data, {schema});
    console.log(util.inspect(loaded, false, 20, true));
  } else {
    console.error(error.stack || error.message || String(error));
  }
});
