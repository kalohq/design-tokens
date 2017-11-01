const yaml = require('js-yaml');

/** Create the yaml parser schema types */
module.exports = function createType(tag, kind, Constructor) {
  const Primary = new yaml.Type(tag, {
    // http://www.yaml.org/spec/1.2/spec.html#kind//
    kind,
    construct: function(data) {
      return new Constructor(data);
    },
  });

  // sequence is an alternative type allowing for passing extra data optionally
  // ie. !color #value
  //     !color [#value, A description about the colour]
  const Sequence = new yaml.Type(tag, {
    // http://www.yaml.org/spec/1.2/spec.html#kind//
    kind: 'sequence',
    construct: function(data) {
      return new Constructor(...data);
    },
  });

  return [Primary, Sequence];
};
