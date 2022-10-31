//Function called by button in main HTML
function createTable(){
  
  /*Getting id of blank table created in HTML*/
  var multiplicationTable = document.getElementById("tableDisplay");

  /*Getting info entered in form after submit button createTable() function is called*/
  var multiplierMin = document.getElementById('InputMultiplierMinimum').value;
  var multiplierMax = document.getElementById('InputMultiplierMaximum').value;
  var multiplicandMin = document.getElementById('InputMultiplicandMinimum').value;
  var multiplicandMax = document.getElementById('InputMultiplicandMaximum').value;


  /*Convert input to integers in order to preform multiplicantion operations*/
  multiplierMin = parseInt(multiplierMin);
  multiplierMax = parseInt(multiplierMax);
  multiplicandMin = parseInt(multiplicandMin);
  multiplicandMax = parseInt(multiplicandMax);

  /*Getting elements for the error box's in order to display faults when detectingfor error handeliong*/
  document.getElementById('error-box-1').innerHTML = "";
  document.getElementById('error-box-2').innerHTML = "";
  document.getElementById('error-box-3').innerHTML = "";
  document.getElementById('error-box-4').innerHTML = "";
  document.getElementById('error-box-5').innerHTML = "";

  //Variable to count number of errors with inputs after hitting submit
  var error = 0;

  //Error Handling for not entering a numerical number into form
  if(isNaN(multiplierMin) || isNaN(multiplierMax) || isNaN(multiplicandMin) || isNaN(multiplicandMax)){
    document.getElementById('error-box-5').innerHTML += "Error: Please enter valid numerical numbers (Integers) for all form sections" + "\n";
    error += 1;
  }
  //Error handeling for inputs being being outside the range of -200 <-> 200
  if(multiplierMin < -200 || multiplierMin > 200){
    document.getElementById('error-box-1').innerHTML += "Error: Entries must not be less than -200 or greater than 200" + "\n";
    error += 1;
  }

  if(multiplierMax < -200 || multiplierMax > 200){
    document.getElementById('error-box-2').innerHTML += "Error: Entries must not be less than -200 or greater than 200" + "\n";
    error += 1;
  }
  if(multiplicandMin < -200 || multiplicandMin > 200){
    document.getElementById('error-box-3').innerHTML += "Error: Entries must not be less than -200 or greater than 200" + "\n";
    error += 1;
  }
  if(multiplicandMax < -200 || multiplicandMax > 200){
    document.getElementById('error-box-4').innerHTML += "Error: Entries must not be less than -200 or greater than 200" + "\n";
    error += 1;
  }

  //Error handeling for the minimum column value being bigger than the maximum
  if(multiplierMin > multiplierMax){
    document.getElementById('error-box-1').innerHTML += "Error: Minimum Column Value must be less than or equal to Maximum Column Value"+ "\n";
    error += 1;
  }

  //Error handeling for the minimum row value being bigger than the maximum
  if(multiplicandMin > multiplicandMax){
    document.getElementById('error-box-3').innerHTML += "Error: Minimum Column Value must be less than or equal to Maximum Row Value" + "\n";
    error += 1;
  }
//If any errors have occured do not generate the table by returning
  if(error != 0){
    return;
  }

  /*Create empty table variable and initialize first cell to have the * symbol
  https://www.w3schools.com/html/html_tables.asp*/
  var table = "<thead> <tr> <th>" + "*" + "</th>"
  
  //Adding the top row of numbers inside of the 
  for (let i = multiplierMin; i <= multiplierMax ;i++) {
    table += "<th>" + i + "</th>";
  }
  table += "</tr> </thead> <tbody> ";  //end first row

//Generates the first row of the table by adding the values from minimum row value up through maximum
//https://www.freecodecamp.org/news/nesting-for-loops-in-javascript/
  for(let j = multiplicandMin; j <= multiplicandMax; j++){
    table += "<tr> <th scope=\"row\">" + j + "</td>";
    //Generates content of the table and adds the resulting valyes into individual cells
    for(let i = multiplierMin; i <= multiplierMax; i++){
      table += "<td>" + j*i + "</td>";
    }
  }
  //Set the table element in the HTML to be equal to variable table to be displayed.
  multiplicationTable.innerHTML = table;
}