
*oas-wizard* is a simple OpenAPI Spec generator using a resource (json) schema as starting point

Usage: 
```bash
node index <OpenAPISpecFile.yaml> <ResourceSchemaFile.yaml> <Prefix> <ResourceName> <IdPropertyName>
```

Example:
```bash
node index tests/static/contactsAPI00.yaml tests/static/contactSchema.yaml contact nick

```