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
// assign the data to a varaible
var tableData=data;
// select the button
var button=d3.select("#filter-btn");
// create event handlers
button.on("click",runEnter);
// define function
function runEnter(){
  // prevent the page from refreshing
    d3.event.preventDefault();
    // select input element and get the raw html node
    var inputElement=d3.select("#datetime");
    // get the value of the input element
    var inputValue=inputElement.property("value");
    // print the value of the input element
    console.log(inputValue);
    // filter the data
    var filteredData=tableData.filter(ufo=>ufo.datetime === inputValue);
    // print the filtered data
    console.log(filteredData);
    // use D3 to get a reference to the table body
    var list =d3.select("tbody");
    // remove any children from the list 
    list.html("");
    // loop through filtered data
    filteredData.forEach((ufoReport)=>{
      // use D3 to append a table row tr for each uforeport
    var row=list.append("tr");
    // use object.entries to get key and value for each uforeport
    Object.entries(ufoReport).forEach(([key,value])=>{
      // use D3 to append a cell td for each uforeport
        var cell=row.append("td");
        // update each cell's text with value
        cell.text(value);
    });
});

};