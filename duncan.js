




var Promise = d3.csv("updatedcscdata.csv");

Promise.then(function(AGE)
            {console.log('updatedcscdata',AGE)},
             
             function(err)
             {console.log('error')}
            )

var initGraph = function(AGE,target)

{
    var screen = {width:600, height:450};
    
    var margins ={top:15, bottom:40, left:70, right:40};
    
    var graph = 
    {
        width:screen.width-margins.left-margins.right,
        height:screen.height-margins.top-margins.bottom,
    };
    
   var svg = d3.select("#histogram")
        .append("svg")
        .attr("width", screen.width)
        .attr("height", screen.height);
    
    var g = d3.select(target)
        .append("g")
        .classed("graph",true)
        .attr("transform","translate("+margins.left+","+margins.top+")");
    
    var xScale = d3.scaleLinear()
        .domain([0,AGE[0]])
        .range([0,graph.width]);
    
    var yScale = d3.scaleLinear()
        .domain([0,1])
        .range([graph.height,0]);
    
    createAxes(screen,margins,graph,target,xScale,yScale)
    
}

var createAxes = function(screen,margins,graph,target,xScale,yScale)
    {
        var xAxis = d3.axisBottom(xScale);
        var yAxis = d3.axisLeft(yScale);
        
        var axes = 
        target.append("g")
    axes.append("g")
        .attr("transform","translate("+margins.left+","+(margins.top+graph.height)+")")
        .call(xAxis)
    axes.append("g")
        .attr("transform","translate("+margins.left+","+(margins.top)+")")
        .call(yAxis);
        
    
    }

