// use D3 to get a reference to the table body
var tbody = d3.select("tbody");
// loop through data
data.forEach((ufoReport) => {
  // use D3 to append a table row tr for each uforeport
  var row = tbody.append("tr");
  // use object.entriest to get key and value for each uforeport
  Object.entries(ufoReport).forEach(([key, value]) => {
    // use D3 to append a cell per each value
    var cell = row.append("td");
    // use D3 to update each cell's text with value
    cell.text(value);
  });
});
// assign the data to a variable
var tableData=data;
// select the button
var button=d3.select("#filter-btn");
// create event handlers
button.on("click",runEnter);
// define function
function runEnter(){
  // prevent page from refreshing
    d3.event.preventDefault();
    // get the values of the input elements
    var date=d3.select("#datetime").property("value");
    var city=d3.select("#city").property("value");
    var state=d3.select("#state").property("value");
    var country=d3.select("#country").property("value");
    var shape=d3.select("#shape").property("value");
    // filter the data using the values of the input elements
    var filteredData=tableData.filter(ufo=>ufo.datetime === date||ufo.city===city||ufo.state===state||ufo.country===country||ufo.shape===shape);
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
      // use D3 to append a table cell td per each uforeport value
        var cell=row.append("td");
        // update each cell's text with value
        cell.text(value);
    });
});

};