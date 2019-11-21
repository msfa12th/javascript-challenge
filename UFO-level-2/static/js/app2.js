// from data.js
var tableData = data;
var mycounter = 0;
var tbody=d3.select("tbody");

//Select the button
var button = d3.select("#filter-btn");

//Get distinct values for keys
var unqDate = [...new Set(tableData.map(x => x.datetime))];
var unqCity = [...new Set(tableData.map(x => x.city))];
var unqState = [...new Set(tableData.map(x => x.state))];
var unqCountry = [...new Set(tableData.map(x => x.country))];
var unqShape = [...new Set(tableData.map(x => x.shape))];


//Click handler
button.on("click", function() {
    d3.event.preventDefault();
    var inputDateElement = d3.select(".form-date");
    var inputDateValue = inputDateElement.property("value");
    var inputCityElement = d3.select(".form-city");
    var inputCityValue = inputCityElement.property("value");
    var inputStateElement = d3.select(".form-state");
    var inputStateValue = inputStateElement.property("value");
    var inputCountryElement = d3.select(".form-country");
    var inputCountryValue = inputCountryElement.property("value");
    var inputShapeElement = d3.select(".form-shape");
    var inputShapeValue = inputShapeElement.property("value");


    //instead of individual I think i can use this
    var inputElems = d3.selectAll("input");

    inputElems.on("change", function(d, i) {   // ** Highlight Change **
        // do something here
   });


   function inputChange() {
       alert(this.value);   // ** Highlight this.value **
   }
   
   inputElems.on("change", inputChange);
    console.log(inputDateValue);
    console.log(inputCityValue);
    console.log(inputStateValue);
    console.log(inputCountryValue);
    console.log(inputShapeValue);

    //clear out values on the form
    //d3.select("ul").html("");
    //need to delete rows from previous query
    tbody.selectAll("tr").remove();
    
    var filteredData = tableData.filter(tableData => tableData.datetime === inputDateValue);
    filteredData.forEach(function(filteredData) {
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(([key,value])=>{
            var cell = row.append("td");
            cell.text(value);
        });
    });

});

//create similar event handlers to filter data for other columns




