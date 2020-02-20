var assert = require('assert');

var commands = require('./../commands.js');
const yaml = require("js-yaml");
var fs = require('fs');

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });

    describe('#createOAS()', function () {
        it('should return something', function () {
            var output = commands.createOAS('./tests/pet-oas.yaml', 
                "./tests/static/petSample.yaml",
                "pet", 
                "name");
            assert.equal(typeof output, typeof yaml.safeDump(""));
            fs.unlinkSync('./tests/pet-oas.yaml');
        });
    });
});
