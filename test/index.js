var assert = require('assert');
var fs = require('fs');


describe('form generator', function() {
  describe('component', function() {
    it('exists', function() {
      if (!fs.existsSync('src/form-generator.vue')) {
        throw ("Form generator file does not exists!");
      }
    });
  });
});