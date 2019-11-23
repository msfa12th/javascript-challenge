// from data.js
var tableData = data;
var mycounter = 0;
var tbody=d3.select("tbody");
var row=d3.select("tr");    

//Get distinct values for keys
var unqDate = [...new Set(tableData.map(x => x.datetime))];
var unqCity = [...new Set(tableData.map(x => x.city))];
var unqState = [...new Set(tableData.map(x => x.state))];
var unqCountry = [...new Set(tableData.map(x => x.country))];
var unqShape = [...new Set(tableData.map(x => x.shape))];

//Select the button
var button = d3.select("#filter-btn");   

tableData.forEach(function(tableData) {
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(([key,value])=>{
        var cell = row.append("td");
        cell.text(value);
    });
});

//Click handler
button.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    var inputElement = d3.select(".form-control");
    var inputValue = inputElement.property("value");

    // clear the input value
    d3.select(".form-control").node().value = "";

    //clear out values on the form
    //need to delete rows from previous query
    tbody.selectAll("tr").remove();

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    filteredData.forEach(function(filteredData) {
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(([key,value])=>{
            var cell = row.append("td");
            cell.text(value);
        });
    });

});
