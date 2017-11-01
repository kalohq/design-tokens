const fs = require('fs');
const path = require('path');
const util = require('util');
const yaml = require('js-yaml');

const generateGlobalVariables = require('./src/generateGlobalVariables');
const schema = require('./src/types/schema');

// Parse and dump
fs.readFile(path.join(__dirname, 'brand.example.yml'), 'utf8', function(
  error,
  data
) {
  var loaded;

  if (!error) {
    loaded = yaml.load(data, {schema});
    generated = generateGlobalVariables(loaded);
    console.log();
    console.log('Parsed');
    console.log(util.inspect(loaded, false, 20, true));
    console.log();
    console.log('Generated');
    console.log(util.inspect(generated, false, 20, true));
  } else {
    console.error(error.stack || error.message || String(error));
  }
});
