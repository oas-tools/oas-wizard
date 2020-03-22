var assert = require('assert');

var commands = require('./../commands.js');
var fs = require('fs');

describe('Array', function () {
    describe('#createOAS()', function () {
        it('should equal the known good example (contact)', function () {
            // Generation of OAS
            var generatedFileName = './tests/contactOAS.yaml';
            commands.createOAS(generatedFileName, "./tests/static/contact/contactSample.yaml", "contact", "nick")

            // Read of generated file with known good example file
            var oasGenerated = fs.readFileSync(generatedFileName, 'utf8');
            var oasExample = fs.readFileSync('./tests/static/contact/contactOAS.yaml', 'utf8');

            // Assert and removal of file
            assert.equal(oasGenerated, oasExample);
            fs.unlinkSync(generatedFileName);
        });
    });

    describe('#createOAS()', function () {
        it('should equal the known good example (pet)', function () {
            // Generation of OAS
            var generatedFileName = './tests/petOAS.yaml';
            commands.createOAS(generatedFileName, "./tests/static/pet/petSample.yaml", "pet", "name")

            // Read of generated file with known good example file
            var oasGenerated = fs.readFileSync(generatedFileName, 'utf8');
            var oasExample = fs.readFileSync('./tests/static/pet/petOAS.yaml', 'utf8');

            // Assert and removal of file
            assert.equal(oasGenerated, oasExample);
            fs.unlinkSync(generatedFileName);
        });
    });
});

