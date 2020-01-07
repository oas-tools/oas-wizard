"use strict";

const fs = require('fs');
const mustache = require('mustache');
const yaml = require("js-yaml");
const jsonSchemaGenerator = require('json-schema-generator');

const template = fs.readFileSync('./templates/basic.yaml', "utf8");

/**
 * @function  [createOAS]
 * @returns {int} Result Status: 0 (OK)
 */
const createOAS = (oasFileName, ResourceSampleFileName, resourceName, idPropertyName) => {
    console.log("Creating " + oasFileName + "...");
    console.log("  - Sample File: '" + ResourceSampleFileName + "'");
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

    const resourceSchema = jsonSchemaGenerator(yaml.load(fs.readFileSync(ResourceSampleFileName)));

    // Fix to remove "$schema" attribute in order to have compatibility with oas-generator OAS schema
    delete resourceSchema.$schema;

    oas.components.schemas[resourceName] = resourceSchema;

    output = yaml.safeDump(oas);

    fs.writeFileSync(oasFileName, output, 'utf8');

    console.log("Done.");

};

module.exports = {createOAS};
