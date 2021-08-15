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

    var rowfilter = []

    // Select the input element and get the raw HTML node
    var dateElement = d3.select("#datetime");
    var dateValue = dateElement.property("value");

    var cityElement = d3.select("#city");
    var cityValue = cityElement.property("value");

    var stateElement = d3.select("#state");
    var stateValue = stateElement.property("value");

    var countryElement = d3.select("#country");
    var countryValue = countryElement.property("value");

    var shapeElement = d3.select("#shape");
    var shapeValue = shapeElement.property("value");

    if (dateValue)
        {rowFilter = tableData.filter(dtRow =>  (dtRow.datetime === dateValue));}

    if (cityValue)
        {rowFilter = rowFilter.filter(dtRow =>  (dtRow.city === cityValue));}
    
    if (stateValue)
        {rowFilter = rowFilter.filter(dtRow =>  (dtRow.state === stateValue));}
    
    if (countryValue)
        {rowFilter = rowFilter.filter(dtRow =>  (dtRow.country === countryValue));}
                                                
    if (shapeValue)
        {rowFilter = rowFilter.filter(dtRow =>  (dtRow.shape === shapeValue));}                                          

    console.log(rowFilter)

    if ((dateValue === " ") && 
        (cityValue === " ") &&
        (stateValue === " ") &&
        (countryValue === " ") &&
        (shapeValue === " "))  {
            tbody.html("");
            buildTable(tableData);
    }

    if (rowFilter === " ") {
        tbody.html("");}
    else {
        tbody.html("");
        buildTable(rowFilter);
    }
}

buildTable(tableData);

