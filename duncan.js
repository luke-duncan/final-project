




var Promise = d3.csv("updatedcscdata.csv");

Promise.then(function(AGES)
            {console.log('updatedcscdata',AGES);
             initGraph(AGES,"#histogram");
            },
             
             function(err)
             {console.log('error')}
            )

var initGraph = function(AGES,target)

{
    var screen = {width:600, height:450};
    
    var margins ={top:15, bottom:40, left:70, right:40};
    
    var graph = 
    {
        width:screen.width-margins.left-margins.right,
        height:screen.height-margins.top-margins.bottom,
    };
    
   var svg = d3.select(target)
        .attr("width", screen.width)
        .attr("height", screen.height);
    
    var g = d3.select(target)
        .append("g")
        .classed("graph",true)
        .attr("transform","translate("+margins.left+","+margins.top+")");
    
    var getAGES = function(AGE)
    { 
        var getAge = function(updatedcscdata)
        {return AGE}
        
        return updatedcscdata.map(getAge)
    console.log(getAGES)
    }
    
    var xScale = d3.scaleBand()
        .domain(getAGES)
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
        
        var axes = d3.select(target)
        .append("g")
    axes.append("g")
        .attr("transform","translate("+margins.left+","+(margins.top+graph.height)+")")
        .call(xAxis)
    axes.append("g")
        .attr("transform","translate("+margins.left+","+(margins.top)+")")
        .call(yAxis);
        
    
    }

var drawRecs = function()



