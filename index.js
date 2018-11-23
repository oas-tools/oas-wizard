
//Based on : https://scotch.io/tutorials/build-an-interactive-command-line-application-with-nodejs

const program = require('commander');
const package = require('./package.json');

const { createOAS } = require('./commands.js');

program
    .version(package.version)
    .description(package.name + ": " + package.description);

program
    .usage('<OpenAPISpecFile.yaml> <ResourceSchemaFile.json> <ResourcePath> <IdPropertyName>')
    .arguments('<oasFileName> <resourceSchemaFileName> <resourcePath> <idPropertyName>')
    .action((oasFileName, resourceSchemaFileName, resourcePath, idPropertyName) => {
        createOAS(oasFileName, resourceSchemaFileName, resourcePath, idPropertyName);
    });


program.parse(process.argv);