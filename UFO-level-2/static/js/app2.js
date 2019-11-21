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

unqDate.sort();
unqCity.sort();
unqState.sort();
unqCountry.sort();
unqShape.sort();

var dateMenu = d3.select('#selectDate');
for ( var x=0; x<unqDate.length; x++) {
    dateMenu.append('option').text(unqDate[x]);
    // dateMenu.append('option').value(unqDate[x]);
};

var cityMenu = d3.select('#selectCity');
for ( var x=0; x<unqCity.length; x++) {
    cityMenu.append('option').text(unqCity[x]);
};


var stateMenu = d3.select('#selectState');
for ( var x=0; x<unqState.length; x++) {
    stateMenu.append('option').text(unqState[x]);
};

var countryMenu = d3.select('#selectCountry');
for ( var x=0; x<unqCountry.length; x++) {
    countryMenu.append('option').text(unqCountry[x]);
    // countryMenu.append('option').value(unqCountry[x]);
};


var shapeMenu = d3.select('#selectShape');
for ( var x=0; x<unqShape.length; x++) {
    shapeMenu.append('option').text(unqShape[x]);
    // shapeMenu.append('option').value(unqShape[x]);
};


//Click handler
button.on("click", function() {
    d3.event.preventDefault();
    var inputDateElement = d3.select("#selectDate");
    var inputDateValue = inputDateElement.property("value");
    var inputCityElement = d3.select("#selectCity");
    var inputCityValue = inputCityElement.property("value");
    var inputStateElement = d3.select("selectState");
    var inputStateValue = inputStateElement.property("value");
    var inputCountryElement = d3.select("#selectCountry");
    var inputCountryValue = inputCountryElement.property("value");
    var inputShapeElement = d3.select("#selectShape");
    var inputShapeValue = inputShapeElement.property("value");

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




