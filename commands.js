const fs = require('fs');
const mustache = require('mustache');
const yaml = require("js-yaml");

const template = fs.readFileSync('./templates/basic.yaml', "utf8");

/**
 * @function  [createOAS]
 * @returns {int} Result Status: 0 (OK)
 */
const createOAS = (oasFileName, resourceSchemaFileName, resourceName, idPropertyName) => {
    console.log("Creating " + oasFileName + "...");
    console.log("  - Schema File: '" + resourceSchemaFileName + "'");
    console.log("  - Resource name: '" + resourceName + "'");
    console.log("  - idPropertyName: '" + idPropertyName + "'");

    var parameters = {};

    parameters.resource = resourceName;
    parameters.Resource = resourceName.charAt(0).toUpperCase() + resourceName.slice(1);
    parameters.resources = parameters.resource + "s";
    parameters.Resources = parameters.Resource + "s";

    parameters.resourceId = idPropertyName;

    var output = mustache.render(template, parameters);

    // Fix for moustache problem with path parameters 
    output = output.replace(/_#{#_/g, "{");
    output = output.replace(/_#}#_/g, "}");

    var oas = yaml.load(output);

    const resourceSchema = yaml.load(fs.readFileSync(resourceSchemaFileName));

    oas.components.schemas[resourceName] = resourceSchema;

    var output = yaml.safeDump(oas);

    fs.writeFileSync(oasFileName, output, 'utf8');

    console.log("Done.");

};

module.exports = { createOAS };