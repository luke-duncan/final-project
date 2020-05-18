
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
    var screen = {width:900, height:550};
    
    var margins ={top:40, bottom:60, left:80, right:60};
    
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
        .attr("transform","translate("+(margins.left+ 30)+","+margins.top+")");
    
    
    var xScale = d3.scaleBand()
        .domain(["18-25","26-34","35-44","45-54","55-64","65"])
        .range([0,graph.width])
        .paddingInner(.05);
    
    var yScale = d3.scaleLinear()
        .domain([0,1])
        .range([graph.height,0]);
    
    
    
    
    
    createAxes(screen,margins,graph,target,xScale,yScale)
    createLabels(screen,margins,graph,target)
    setButtons(graph,AGES,target,xScale,yScale)  
   
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

var createLabels = function(screen,margins,graph,target)
{
    var labels= d3.select(target)
        .append("g")
    
labels.append("text")
        .text("Age")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("x",margins.left+(graph.width/2))
        .attr("y",screen.height)
    
labels.append("text")
        .attr("transform","translate(20, "+(margins.top+(graph.height/2))+")")
        .text("Distribution by Total Users/Cases")
        .classed("label",true)
        .attr("text-anchor","middle")
        .attr("transform","rotate(90)")
    
    
}

var drawRecsTwitter = function(AGES,graph,target,xScale,yScale,height)
{
var rects =
    d3.select(target)
    .select(".graph")
    .selectAll('rect')
    .data(AGES)

    rects.enter()
        .append("rect");
    
    rects.exit()
        .remove();
    d3.select(target)
        .select(".graph")
        .selectAll("rect")
        .transition()
        .duration(1500)
    .attr("width",50)
   .attr("x",function(AGE){
      
       return xScale(AGE.AGE);
   })
    .attr("y",function(AGE){
        return yScale(AGE.Twitter)
    })
    .attr("height",function(AGE)
          {return graph.height-yScale(AGE.Twitter)})
    .style("fill","lightblue")
    

}

var drawRecsInstagram = function(AGES,graph,target,xScale,yScale,height)
{
var rects =
    d3.select(target)
    .select(".graph")
    .selectAll('rect')
    .data(AGES)

rects.enter()
        .append("rect");
    
    rects.exit()
        .remove();
    d3.select(target)
        .select(".graph")
        .selectAll("rect")
        .transition()
        .duration(1500)   

    .attr("width",50)
   .attr("x",function(AGE){
      
       return xScale(AGE.AGE);
   })
    .attr("y",function(AGE){
        return yScale(AGE.Instagram)
    })
    .attr("height",function(AGE)
          {return graph.height-yScale(AGE.Instagram)})
    .style("fill","red")
    

}

var drawRecsDepression = function(AGES,graph,target,xScale,yScale,height)
{
var rects =
    d3.select(target)
    .select(".graph")
    .selectAll('rect')
    .data(AGES)
  rects.enter()
        .append("rect");
    
   // rects.exit()
     //   .remove();
    d3.select(target)
        .select(".graph")
        .selectAll("rect")
        .transition()
        .duration(1500)
    .attr("width",50)
   .attr("x",function(AGE){
      
       return xScale(AGE.AGE);
   })
    .attr("y",function(AGE){
        return yScale(AGE.Depressed)
    })
    .attr("height",function(AGE)
          {return graph.height-yScale(AGE.Depressed)})
    .style("stroke","black")
    .style("fill","none")
    
    
    

}

var drawRecsFacebook = function(AGES,graph,target,xScale,yScale,height)
{
var rects =
    d3.select(target)
    .select(".graph")
    .selectAll('rect')
    .data(AGES)
   rects.enter()
        .append("rect");
    
    rects.exit()
        .remove();
    d3.select(target)
        .select(".graph")
        .selectAll("rect")
        .transition()
        .duration(1500)
    
    .attr("width",50)
   .attr("x",function(AGE){
      
       return xScale(AGE.AGE);
   })
    .attr("y",function(AGE){
        return yScale(AGE.Facebook)
    })
    .attr("height",function(AGE)
          {return graph.height-yScale(AGE.Facebook)})
    .style("fill","blue")
    

}


/*var clearRecs = function(target)
{
    d3.select(target)
        .select(".graph")
        .selectAll("rect")
        .remove()
}
*/

var setButtons = function(graph,AGES,target,xScale,yScale)
    {
      d3.select("#Instagram").on("click",function()
                              {
         // clearRecs(target);
          drawRecsInstagram(AGES,graph,target,xScale,yScale)}
                            )
        
         d3.select("#Twitter").on("click",function()
                              {
         // clearRecs(target);
          drawRecsTwitter(AGES,graph,target,xScale,yScale)})
        
         d3.select("#Depression").on("click",function()
                              {
         // clearRecs(target);
          drawRecsDepression(AGES,graph,target,xScale,yScale)}
                            )
        
         d3.select("#Facebook").on("click",function()
                              {
        //  clearRecs(target);
          drawRecsFacebook(AGES,graph,target,xScale,yScale)}
                            )
                            
                                
        
        
   }



