// d3.js
// bar graph- linear scale


const areas = d3.select("#chart-area").append("svg")
        .attr("width",400)
        .attr("height",400)

d3.json("data/buildings.json").then(data =>{
    data.forEach(element => {
        element.height = Number(element.height)
    });

    const y = d3.scaleLinear()
          .domain([0, 828])
          .range([0, 400])

    const rects = areas.selectAll("rect")
        .data(data)

    rects.enter().append("rect")
        .attr("x",(d,i) => i* 60)
        .attr("y",0)
        .attr("width",40)
        .attr("height",(d)=> y(d.height))
        .attr("fill", "grey")
}).catch(error =>{
    console.log(error)
})





     
      