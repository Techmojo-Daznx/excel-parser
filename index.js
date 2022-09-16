//xlsx is a package that helps in parsing excel sheet to Json format
const xlsx = require('xlsx');

//Jpv is a package that helps in validations for Json
const jpv = require("jpv");

//file system module in nodejs for reading file
var fs = require('fs');


//


convertExcelFileToJsonUsingXlsx();

function convertExcelFileToJsonUsingXlsx() {
    // Read the file using pathname
    const file = xlsx.readFile('./Sample-excel-file.xlsx');
    // Grab the sheet info from the file
    const sheetNames = file.SheetNames;
    const totalSheets = sheetNames.length;
    // Variable to store our data 
    let parsedData = [];
    // Loop through sheets
    for (let i = 0; i < totalSheets; i++) {
        console.log(file.sheetNames);
        // Convert to json using xlsx
        const tempData = xlsx.utils.sheet_to_json(file.Sheets[sheetNames[i]]);
        // Skip header row which is the colum names
        tempData.shift();
        // Add the sheet's json to our data array
        parsedData.push(...tempData);
    }

//converting parsedData to Json
    let jsonParsedData = JSON.stringify(parsedData);

    //  console.log(jsonParsedData);

//Json validation using JPV package didnt apply entirely for completed parsedData but for taken single entity of json object

const json = {ID:"2",Country:"br",Currency:"brl"};

const pattern ={
    ID:"[integer]",
    Country:/[a-z]{2}/,
    Currency:/[a-z]{3}/,
    }

//Validation using JPV if true then it will create JSON output file called data.json
        
if(jpv.validate(json, pattern)){
    generateJSONFile(parsedData);
}
else{
    console.log("error in the excel data");
}
 // call a function to save the data in a json file
//  generateJSONFile(parsedData);


}



function generateJSONFile(data) {
    try {
        
        fs.writeFileSync('Sample.json', JSON.stringify(data))
    } catch (err) {
        console.error(err)
    }
}

