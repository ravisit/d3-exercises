// d3.js
// achiving same shapes using javascript


const shapes = d3.select("#chart-area").append("svg")
    .attr("width",400)
    .attr("height",60)

shapes.append("rect")
    .attr("x",0)
    .attr("y",0)
    .attr("width",50)
    .attr("height",50)
    .attr("fill","green")

shapes.append("circle")
    .attr("cx",90)
    .attr("cy",25)
    .attr("r",25)
    .attr("fill","red")

shapes.append("ellipse")
    .attr("cx",145)
    .attr("cy",25)
    .attr("rx",15)
    .attr("ry",25)
    .attr("fill","orange")

shapes.append("line")
     .attr("x1",180)
     .attr("y1",5)
     .attr("x2",230)
     .attr("y2",30)
     .attr("stroke","blue")
     .attr("stroke-width",5)

shapes.append("text")
     .attr("x",245)
     .attr("y",30)
     .attr("font-size","20px")
     .text("Hi")



     
      