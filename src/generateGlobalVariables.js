const {isPlainObject, forEach} = require('lodash');

/**
 * Recurse over a parsed structure to create a list of all values
 * with unique global paths
 */
module.exports = function generateGlobalVariables(input, scope = []) {
  const variables = [];

  if (isPlainObject(input)) {
    forEach(input, (val, key) => {
      const nextScope = [...scope, key];
      variables.push(...generateGlobalVariables(val, nextScope));
    });
  } else if (input.getValue) {
    variables.push([scope, input.getValue()]);
  } else if (input.getStruct) {
    variables.push(...generateGlobalVariables(input.getStruct(), scope));
  } else {
    variables.push([scope, input]);
  }

  return variables;
};
