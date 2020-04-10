[![Build Status](https://travis-ci.org/isa-group/oas-wizard.svg?branch=master)](https://travis-ci.org/isa-group/oas-wizard) 
[![dependencies Status](https://david-dm.org/isa-group/oas-wizard.svg)](https://david-dm.org/isa-group/oas-wizard)
[![codecov](https://codecov.io/gh/isa-group/oas-wizard/branch/master/graph/badge.svg)](https://codecov.io/gh/isa-group/oas-wizard)
[![Known Vulnerabilities](https://snyk.io/test/github/isa-group/oas-wizard/badge.svg)](https://snyk.io/test/github/isa-group/oas-wizard)
[![Greenkeeper badge](https://badges.greenkeeper.io/isa-group/oas-wizard.svg)](https://greenkeeper.io/)
[![Maintainability](https://api.codeclimate.com/v1/badges/826c4f28b9bc9e33e9fe/maintainability)](https://codeclimate.com/github/isa-group/oas-wizard/maintainability) 

[![NPM](https://nodei.co/npm/oas-wizard.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/oas-wizard/)

*oas-wizard* is a simple OpenAPI Spec generator using a (yaml) resource sample as starting point

## Usage
Install oas-wizard globally:
```bash
npm install -g oas-wizard
```

The command sintax is the following:
```bash
oas-wizard <OpenAPISpecFile.yaml> <ResourceSampleFile.yaml> <Prefix> <ResourceName> <IdPropertyName>
```

You can also clone this repository and use the following command sintax: 
```bash
node index <OpenAPISpecFile.yaml> <ResourceSampleFile.yaml> <Prefix> <ResourceName> <IdPropertyName>
```

## Thirty seconds tutorial - From zero to REST server!
In this tutorial, you will be able to generate a RESTful API server in just three commands (Node.js required). Let's start:

1. Clone our tutorial folder to obtain an example input file for the tool:

   `npx degit https://github.com/isa-group/oas-wizard/tutorial`

2. Use this tool to generate the openAPI specification with one of the tutorial files downloaded:

   `npx oas-wizard ./pet-oas.yaml ./petSample.yaml pet name`

3. Use [oas-generator](https://github.com/isa-group/oas-generator), to generate the server from the OAS generated:

   `npx oas-generator ./pet-oas.yaml -n petServer`

Now to run the server just access the `petServer` folder and run `npm start`. Once the dependencies are installed access `localhost:8080/docs` to see the SwaggerUI API documentation.  

## Five minutes tutorial - Create your own RESTful API
This tool is expected to be used in combination with others; as an example we propose the following lifecycle:
1. Think about an example of resource and write it in yaml (e.g. `contactSample.yaml`)
   ```yml
   nick: Peter
   phone: 123456
   email: "peter@peter.org"
   ```
2. Use *oas-wizard* to generate the OAS spec (e.g. `contact-oas.yaml`) based on the sample file you created using with a resource name and the id property:
   ```bash
   oas-wizard contact-oas.yaml contactSample.yaml contact nick
   ```

3. Generate a server scaffolding with  [oas-generator](https://www.npmjs.com/package/oas-generator) (using node v8 or up) 
   ```bash
   npm install -g oas-generator
   oas-generator contact-oas.yaml -n contactServer
   cd contactServer
   npm start
   ```
You should have a fully working API server mockup up and running in port 8080. Check the SwaggerUI API documentation at `localhost:8080/docs`. Now it's your turn to implement the controllers for each operation (files `controllers/*Service.js`).

Enjoy your API!
 
