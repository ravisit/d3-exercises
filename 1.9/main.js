// d3.js
// bar graph- axes and labels

const MARGIN = {LEFT:100, RIGHT:10, TOP:10, BOTTOM:100}
const WIDTH = 600 - MARGIN.LEFT - MARGIN.RIGHT
const HEIGHT = 600 - MARGIN.TOP - MARGIN.BOTTOM

const areas = d3.select("#chart-area").append("svg")
        .attr("width", WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
        .attr("height", HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)

d3.json("data/buildings.json").then(data =>{
    data.forEach(element => {
        element.height = Number(element.height)
    });

    const g = areas.append("g")
          .attr("transform", `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

// X label
    g.append("text")
      .attr("class","x axis-label")
      .attr("x",WIDTH/2)
      .attr("y", HEIGHT+100)
      .attr("font-size","15px")
      .attr("text-anchor","middle")
      .text("The word's tallest buildings")

// Y label    
    g.append()
      .attr("class","y axis-label")
      .attr("x", -(HEIGHT/2))
      .attr("y", -60)
      .attr("font-size","20px")
      .attr("text-anchor","middle")
      .attr("transform","rotate(-90)")
      .text("Height (m)")

    const x = d3.scaleBand()
        .domain(data.map(d => d.name))
        .range([0,WIDTH])
        .paddingInner(0.3)
        .paddingOuter(0.2)


    const y = d3.scaleLinear()
          .domain([0, d3.max(data, d=>d.height)])
          .range([0, WIDTH])
    
    const xAxixCall = d3.axisBottom(x)
         g.append("g")
           .attr("class","x axis")
           .attr("transform",`translate(0, ${HEIGHT})`)
           .call(xAxixCall)
           .selectAll("text")
             .attr("y","10")
             .attr("x","-5")
             .attr("text-anchor","end")
             .attr("transform","rotate(-40)")
    
    const yAxisCall = d3.axisLeft(y)
          .ticks(3)
          .tickFormat(d => d + "m")
        g.append("g")
          .attr("class"," y axis")
          .call(yAxisCall)

    const rects = g.selectAll("rect")
        .data(data)

    rects.enter().append("rect")
        .attr("x",(d)=> x(d.name))
        .attr("y",0)
        .attr("width",x.bandwidth)
        .attr("height",(d)=> y(d.height))
        .attr("fill", "grey")
}).catch(error =>{
    console.log(error)
})





     
      