const http = require('http');
const static = "1";

/**
 * @function  [createOAS]
 * @returns {int} Result Status: 0 (OK)
 */
const createOAS = (oasFileName, resourceSchemaFileName, resourcePath, idPropertyName) => {
    console.log("Creating " + oasFileName + "...");
    console.log("  - Schema File: '" + resourceSchemaFileName + "'");
    console.log("  - Resource path: '" + resourcePath + "'");
    console.log("  - idPropertyName: '" + idPropertyName + "'");


};

module.exports = { createOAS };