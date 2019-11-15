// from data.js
var tableData = data;
var mycounter = 0;
var tbody=d3.select("tbody");

//Select the button
var button = d3.select("#filter-btn");

//Click handler
button.on("click", function() {
    d3.event.preventDefault();
    var inputElement = d3.select(".form-control");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(tableData);
    //clear out values on the form
    d3.select("ul").html("");

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    filteredData.forEach(function(filteredData) {
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(([key,value])=>{
            var cell = row.append("td");
            cell.text(value);
        });
    });

});

//create similar event handlers to filter data for other columns








// YOUR CODE HERE!