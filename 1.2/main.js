// d3.js
// Selections and data joins

const data = [25, 15, 12, 20, 10 ]

const areas = d3.select("#chart-area").append("svg")
    .attr("width",400)
    .attr("height",400)

const circles = areas.selectAll("circle")
      .data(data)

circles.enter().append("circle")
    .attr("cx",(d, i)=> (i*50) + 50)
    .attr("cy",250)
    .attr("r",(d)=>d)
    .attr("fill", "red")







     
      