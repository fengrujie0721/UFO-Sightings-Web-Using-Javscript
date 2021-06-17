// get a reference to the table body
var tbody = d3.select("tbody");
// loop through data
data.forEach((ufoReport) => {
  // use D3 to append a table row tr for each uforeport
  var row = tbody.append("tr");
  // use object entries to get key and value
  Object.entries(ufoReport).forEach(([key, value]) => {
    // use D3 to append  a cell td for each uforeport
    var cell = row.append("td");
    // update each cell's text with value
    cell.text(value);
  });
});
var tableData=data;
var button=d3.select("#filter-btn");

button.on("click",runEnter);

function runEnter(){
    d3.event.preventDefault();
    var inputElement=d3.select("#datetime");
    var inputValue=inputElement.property("value");
    console.log(inputValue);
    var filteredData=tableData.filter(ufo=>ufo.datetime === inputValue);
    console.log(filteredData);
    var list =d3.select("tbody");
    list.html("");
    filteredData.forEach((ufoReport)=>{
    var row=list.append("tr");
    Object.entries(ufoReport).forEach(([key,value])=>{
        var cell=row.append("td");
        cell.text(value);
    });
});

};