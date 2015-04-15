'use strict';

var assert = require('assert');
var wilson = require('./');

describe('Wilson', function () {
  it("should return two values - left and right", function () {
    assert(wilson(1,2).left);
    assert(wilson(1,2).right);
  });
  it("left should be less than right", function () {
    assert(wilson(1,2).left < wilson(2,3).left);
  });
  it("should return (0,0) for up=0, total=0", function () {
    assert.equal(wilson(0, 0).left, 0);
    assert.equal(wilson(0, 0).right, 0);
  });
  it("should return left=0 for up=0, total!=0", function () {
    assert.equal(wilson(0, 99).left, 0);
  });
  it("should return higher value for more up's", function () {
    assert(wilson(1, 10).left < wilson(2, 10).left);
    assert(wilson(1, 10).right < wilson(2, 10).right);
  });
  it("should return higher left for proportionally bigger sample", function () {
    assert(wilson(5, 50).left < wilson(10, 100).left);
    assert(wilson(30, 130).left < wilson(300, 1300).left);
  });
  it("should return expected value", function () {
    assert.equal(wilson(1, 45).left, 0.003933497522757507);
    assert.equal(wilson(4097, 4985).left, 0.8109971539140524);
    assert.equal(wilson(12345, 987654321).left, 0.000012280756127193246);
  });
});
