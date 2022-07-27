// d3.js
// Selections and data joins

d3.json("data/buildings.json").then(data =>{
    data.forEach(element => {
        element.height = Number(element.height)
    });


    const areas = d3.select("#chart-area").append("svg")
        .attr("width",400)
        .attr("height",400)

    const rects = areas.selectAll("rect")
        .data(data)

    rects.enter().append("rect")
        .attr("x",(d,i) => i* 60)
        .attr("y",0)
        .attr("width",40)
        .attr("height",(d)=>d.height)
        .attr("fill", "grey")
}).catch(error =>{
    console.log(error)
})





     
      