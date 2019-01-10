
*oas-wizard* is a simple OpenAPI Spec generator using a (yaml) resource sample as starting point

Usage: 
```bash
node index <OpenAPISpecFile.yaml> <ResourceSampleFile.yaml> <Prefix> <ResourceName> <IdPropertyName>
```

Example:
```bash
node index tests/pet-oas.yaml tests/static/petSample.yaml pet name
```

This tool is expected to be used in combination with others; as an example we propose the following lifecycle:
 - Think about an example of resource in yaml
 - Use *oas-wizard* to generate the OAS spec.
 - Generate a server scaffolding with  https://www.npmjs.com/package/oas-generator 
 - Implement the controllers for each operation.
 - Enjoy your API!
 
 