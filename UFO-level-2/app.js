
var tbody = d3.select("tbody");

data.forEach((ufoReport) => {
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
var tableData=data;
var button=d3.select("#filter-btn");
button.on("click",runEnter);
function runEnter(){
    d3.event.preventDefault();
    
    var date=d3.select("#datetime").property("value");
    var city=d3.select("#city").property("value");
    var state=d3.select("#state").property("value");
    var country=d3.select("#country").property("value");
    var shape=d3.select("#shape").property("value");
    
    var filteredData=tableData.filter(ufo=>ufo.datetime === date||ufo.city===city||ufo.state===state||ufo.country===country||ufo.shape===shape);
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