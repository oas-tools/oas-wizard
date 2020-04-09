var assert = require('assert');

var commands = require('./../commands.js');
var fs = require('fs');
var yaml = require('js-yaml')

var toDelete = [];
var testsData = [ // [output, input, resourceName, idPropertyName, outputExample]
    ['./tests/contactOAS.yaml', "./tests/static/contact/contactSample.yaml", "contact", "nick", './tests/static/contact/contactOAS.yaml'],
    ['./tests/petOAS.yaml', "./tests/static/pet/petSample.yaml", "pet", "name", './tests/static/pet/petOAS.yaml']
]

describe('Array', function () {

    for (let testData of testsData){
        describe('#createOAS(' + testData[2] + ')', function () {
            it('should equal the known good example (' + testData[2] + ')', function (done) {
                try {
                    // Generation of OAS
                    commands.createOAS(...[...testData].splice(0,4));
                    toDelete.push(testData[0]);

                    // Read of generated file with known good example file
                    var oasGenerated = yaml.safeLoad(fs.readFileSync(testData[0], 'utf8'));
                    var oasExample = yaml.safeLoad(fs.readFileSync(testData[4], 'utf8'));

                    // Assert and removal of file
                    assert.deepStrictEqual(oasGenerated, oasExample);

                    done();
                } catch (err) {
                    assert.fail(err.message);
                }
            });
        });
    }

    after((done) => {
        for (let filename of toDelete){
            fs.unlinkSync(filename);
        }
        done();
    });
});

