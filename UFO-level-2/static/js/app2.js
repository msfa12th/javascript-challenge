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

tableData.forEach(function(tableData) {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key,value])=>{
        var cell = row.append("td");
        cell.text(value);
    });
});

var dateMenu = d3.select('#selectDate');
dateMenu.on("change", dropdownDateChange);
for ( var x=0; x<unqDate.length; x++) {
    dateMenu.append('option').text(unqDate[x]);
    dateMenu.append('option').attr("value", unqDate[x]);
};

var cityMenu = d3.select('#selectCity');
cityMenu.on("change", dropdownCityChange);
for ( var x=0; x<unqCity.length; x++) {
    cityMenu.append('option').text(unqCity[x]);
};


var stateMenu = d3.select('#selectState');
stateMenu.on("change", dropdownStateChange);
for ( var x=0; x<unqState.length; x++) {
    stateMenu.append('option').text(unqState[x]);
};

var countryMenu = d3.select('#selectCountry');
countryMenu.on("change", dropdownCountryChange);
for ( var x=0; x<unqCountry.length; x++) {
    countryMenu.append('option').text(unqCountry[x]);
};


var shapeMenu = d3.select('#selectShape');
shapeMenu.on("change", dropdownShapeChange);
for ( var x=0; x<unqShape.length; x++) {
    shapeMenu.append('option').text(unqShape[x]);
};

// set default values for drop down menus
var inputDateValue = "All Dates";
var inputCityValue = "All Cities";
var inputStateValue = "All States";
var inputCountryValue = "All Countries";
var inputShapeValue = "All Shapes";

var filteredDate = tableData;
var filteredCity = filteredDate;
var filteredState = filteredCity;
var filteredCountry = filteredState;
var filteredShape = filteredCountry;


function dropdownDateChange() {
    inputDateValue = dateMenu.property("value");
    console.log("Date change");
}

function dropdownCityChange() {
    inputCityValue = d3.select(this).property('value');
    tbody.selectAll("tr").remove();
}

function dropdownStateChange() {
    inputStateValue = d3.select(this).property('value');
    tbody.selectAll("tr").remove();
}

function dropdownCountryChange() {
    inputCountryValue = d3.select(this).property('value');
    tbody.selectAll("tr").remove();
}


function dropdownShapeChange() {
    inputShapeValue = d3.select(this).property('value');
    tbody.selectAll("tr").remove();
}

//Click handler
button.on("click", function() {

    d3.event.preventDefault();
    console.log("Hello world, butto click")
    
    //clear out values on the form
    //need to delete rows from previous query
    tbody.selectAll("tr").remove();
    console.log("remove the rows? before filtering");
    

    if (inputDateValue != 'All Dates') {
        filteredDate = tableData.filter(tableData => tableData.datetime === inputDateValue);
    }
    else {
        filteredDate = tableData;
    };

    if (inputCityValue != 'All Cities') {
        filteredCity = filteredDate.filter(filteredDate => filteredDate.city === inputCityValue);
    }
    else {
        filteredCity = filteredDate;
    };   

    if (inputStateValue != 'All States') {
        filteredState = filteredCity.filter(filteredCity => filteredCity.state === inputStateValue);
    }
    else {
        filteredState = filteredCity;
    };   

    if (inputCountryValue != 'All Countries') {
        filteredCountry = filteredState.filter(filteredState => filteredState.country === inputCountryValue);
    }
    else {
        filteredCountry = filteredState;
    };   

    if (inputShapeValue != 'All Shapes') {
        filteredShape = filteredCountry.filter(filteredCountry => filteredCountry.shape === inputShapeValue);
    }
    else {
        filteredShape = filteredCountry;
    };   

    filteredData = filteredShape;

    filteredData.forEach(function(filteredData) {
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(([key,value])=>{
            var cell = row.append("td");
            cell.text(value);
        });
    });
})