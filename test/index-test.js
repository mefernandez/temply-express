var expect = require('chai').expect;
var engine = require('../temply-express');

describe('Engine', function() {
  it('should export a function', function() {
    expect(engine).to.be.a('function');
  });
});
