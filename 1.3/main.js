// d3.js
// Selections and data joins

d3.json("data/ages.json").then(data =>{
    data.forEach(element => {
        element.age = Number(element.age)
    });


    const areas = d3.select("#chart-area").append("svg")
        .attr("width",400)
        .attr("height",400)

    const circles = areas.selectAll("circle")
        .data(data)

    circles.enter().append("circle")
        .attr("cx",(d, i)=> (i*50) + 50)
        .attr("cy",250)
        .attr("r",(d)=> 2* d.age)
        .attr("fill", d =>{
            if(d.name === "Tony"){
                return "blue"
            } else{
                return "red"
            }
        })
}).catch(error =>{
    console.log(error)
})





     
      