
//Based on : https://scotch.io/tutorials/build-an-interactive-command-line-application-with-nodejs

const program = require('commander');
const package = require('./package.json');

const { createOAS } = require('./commands.js');

program
    .version(package.version)
    .description(package.name + ": " + package.description);

program
    .usage('<OpenAPISpecFile.yaml> <ResourceSchemaFile.yaml> <ResourceName> <IdPropertyName>')
    .arguments('<oasFileName> <resourceSchemaFileName> <resourceName> <idPropertyName>')
    .action((oasFileName, resourceSchemaFileName, resourceName, idPropertyName) => {
        createOAS(oasFileName, resourceSchemaFileName, resourceName, idPropertyName);
    });


program.parse(process.argv);