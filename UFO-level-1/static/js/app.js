// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get Table body reference
var tbody = d3.select("tbody");

function buildTable(data){
    data.forEach((dataRow) => {
        const row = tbody.append("tr");

        
        Object.values(dataRow).forEach((value) =>{
            row.append("td").text(value);
        });
    });
};

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", filterTable);
form.on("submit", filterTable);

// Complete the event handler function for the form
function filterTable() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var dateElement = d3.select("#datetime");

    var dateValue = dateElement.property("value");

    if ((dateValue === "") || (dateValue === " "))
    {
        tbody.html("");
        buildTable(tableData);
    }
    else
    {
        var dateFilter = tableData.filter(dtRow => dtRow.datetime === dateValue);
        if (dateFilter === " "){
            tbody.html("");
        }
        else {
            tbody.html("");
            buildTable(dateFilter)};
    };
};

buildTable(tableData);
