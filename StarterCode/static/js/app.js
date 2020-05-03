// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

let tbody = d3.select("tbody");

tableData.forEach(function(ufo) {
    console.log(ufo);
    let row = tbody.append("tr");

    Object.entries(ufo).forEach(function([key, value]) {
        console.log(key, value);
        let cell = row.append("td");
        cell.text(value);
    });
});

//select/filter

let button = d3.select("#filter-btn")

button.on("click", function () {
    console.log("Click!");
    event.preventDefault();
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value");
    let filteredData = tableData.filter(setDate);
    console.log(filteredData);
    filteredData.forEach(function(selections){
    console.log(selections) 
    })
  
    
    let tbody = d3.select("tbody");

    filteredData.forEach(function(alien) {
        console.log(alien);
        let row = tbody.append("tr");

        Object.entries(alien).forEach(function([key, value]) {
            console.log(key, value);
            let cell = row.append("td");
            cell.text(value);
        });
    });

});