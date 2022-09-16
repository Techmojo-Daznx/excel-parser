# excel-parser

POC on node-JS way of parsing  Excel file to json

Dependencies:
Packages Used/Tested
1.xlsx:
 https://www.npmjs.com/package/xlsx
This package is used for converting Excel input file to JSON output (parsing).

Pros: Supports different file formats 



2.JPV: JSON Pattern Validator.
https://www.npmjs.com/package/jpv
It makes validation easy but most validation are done using Pattern matching with Regular Expression


3. Validator-JS :
https://www.npmjs.com/package/validatorjs

Pros: Inbuilt with lot of validation methods

4.NodeJs: for writing the code which uses inbuilt filesystem module to work with excel file.


Steps taken to achieve desired results:-

Sample.xlsx(input)                  xlsx-parser                 JPV-validation(If true)                   data.json(output)

Attaching the Code. Please install these packages and try :-


npm install xlsx
npm install jpv –save


How to validate Json data using JPV?

const json = {ID:"2",Country:"br",Currency:"brl"};

const pattern ={
    ID:"[integer]",
    Country:/[a-z]{2}/,
    Currency:/[a-z]{3}/
}


If the json schema (pattern ) matches the json data then
jpv.validate(json, pattern)

Above code is validated to true otherwise false

We need to include xlsx file in  the root of the project folder to work and converted to json type
