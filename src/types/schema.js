const yaml = require('js-yaml');

const createType = require('../createType');
const Color = require('./Color');
const ColorPalette = require('./ColorPalette');

module.exports = yaml.Schema.create([
  ...createType('!color', 'scalar', Color),
  ...createType('!color-palette', 'mapping', ColorPalette),
]);
