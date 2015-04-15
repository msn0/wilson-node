"use strict";

module.exports = function (upVotes, total) {

  if (total === 0) {
    return {
      left: 0,
      right: 0
    };
  }

  // phat is the proportion of successes
  // in a Bernoulli trial process
  var phat = upVotes / total;

  // z is 1-alpha/2 percentile of a standard
  // normal distribution for error alpha=5%
  var z = 1.96;

  // implement the algorithm
  // (http://goo.gl/kgmV3g)
  var a = phat + z * z / (2 * total);
  var b = z * Math.sqrt((phat * (1 - phat) + z * z / (4 * total)) / total);
  var c = 1 + z * z / total;

  // an object representation of interval
  // (with left and right endpoints) is returned
  return {
    left: (a - b) / c,
    right: (a + b) / c
  };
};
