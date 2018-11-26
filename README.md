
*oas-wizard* is a simple OpenAPI Spec generator using a resource (json) schema as starting point

Usage: 
```bash
node index <OpenAPISpecFile.yaml> <ResourceSchemaFile.yaml> <Prefix> <ResourceName> <IdPropertyName>
```

Example:
```bash
node index tests/static/contact/contactOAS000.yaml tests/static/contact/contactSchema.yaml contact nick

```

This tool is expected to be used in combination with others; as an example we propose the following lifecycle:
 - Think about an example of data in json
 - Extract the example schema (using tools such as https://www.jsonschema.net/ ).
 - Transform json into yaml (using tools such as https://www.json2yaml.com/ ).
 - Use *oas-wizard* to generate the OAS spec.
 - Generate a server scaffolding with  https://www.npmjs.com/package/oas-generator 
 - Implement the controllers for each operation.
 - Enjoy your API
 
 