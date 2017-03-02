// <!DOCTYPE html>
// <meta charset="utf-8">
// <title>Player data</title>
// <style>

// svg {
//   font: 10px sans-serif;
// }

// .background path {
//   fill: none;
//   stroke: #ddd;
//   shape-rendering: crispEdges;
// }

// .cir path{
//   fill-opacity: .3;
// }

// .foreground path {
//   fill: none;
// }

// .brush .extent {
//   fill-opacity: .3;
//   stroke: #fff;
//   shape-rendering: crispEdges;
// }

// .axis,
// .frame {
//   shape-rendering: crispEdges;
// }

// .axis line {
//   stroke: #ddd;
//   shape-rendering: crispEdges;
//   fill: none;
// }

// .axis path {
//   display: none;
//   fill: none;
// }

// .axis text {
//   text-shadow: 0 .5px 0 #fff, 1px 0 0 #fff, 0 -1px 0 #fff, -1px 0 0 #fff;
// }


// .PSaxis line,
// .PSaxis path {
//   fill: none;
//   stroke: #000;
//   shape-rendering: crispEdges;
// }

// .PSaxis text {
//   text-shadow: 0 .5px 0 #fff, 1px 0 0 #fff, 0 -1px 0 #fff, -1px 0 0 #fff;
// }

// .frame {
//   fill: none;
//   stroke: #aaa;
// }

// circle {
//   fill-opacity: .8;
// }

// circle.hidden {
//   fill: #ccc !important;
// }

// .extent {
//   fill: #000;
//   fill-opacity: .125;
//   stroke: #fff;
//   shape-rendering: crispEdges;
// }

// text.leg{
//   font-style: italic;
//   font-size: 20px;
// }

// </style>
// <body>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js"></script>
// <script>
var margin = {top: 30, right: 10, bottom: 10, left: 10},
    PSwidth = 600 - margin.left - margin.right,
    PSheight = 300 - margin.top - margin.bottom;

var arc = d3.svg.arc().innerRadius(60).outerRadius(90);

var collor = d3.scale.category20();

var PSx = d3.scale.ordinal().rangePoints([400, 400 + PSwidth], 1),
    PSy = {};

var line = d3.svg.line(),
    axis = d3.svg.axis().orient("left"),
    background,
    foreground;

var svg = d3.select("body").append("svg")
    .attr("width", 1600)
    .attr("height", 1000)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var size = 120,
    padding = 12;

  var PSmargin = {top: 30, right: 10, bottom: 10, left: 10},
    PSwidth = 600 - PSmargin.left - PSmargin.right,
    PSheight = 300 - PSmargin.top - PSmargin.bottom;

var x = d3.scale.linear()
    .range([padding / 2, size - padding / 2]);

var y = d3.scale.linear()
    .range([size - padding / 2, padding / 2]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .ticks(10);

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);

var color = d3.scale.category10();

d3.csv('36mperformance.csv', function(error, players) {
  PSx.domain(dimensions = d3.keys(players[0]).filter(function(d) {
    return  d != 'Name' && d != "Team" &&  d != "G" && d != "GS" && d != "MP" && d != "FG" && d != "FGA" && d != "FG%" && d != "3PA" && d != "3P%" && d != "2PA" && d != "2P%" && d != "FT" && d != "FTA" && d != "FT%" && d != "ORB" && d != "DRB" && d != "PF" && (PSy[d] = d3.scale.linear()
        .domain(d3.extent(players, function(p) { return +p[d]; }))
        .range([PSheight -1, 10]));
  }));
  // Add grey background lines for context.
  background = svg.append("g")
      .attr("class", "background")
    .selectAll("path")
      .data(players)
    .enter().append("path")
    .attr("opacity", .5)
      .attr("d", path);
// Add blue foreground lines for focus.
  foreground = svg.append("g")
      .attr("class", "foreground")
    .selectAll("path")
      .data(players)
    .enter().append("path")
      .attr("opacity", .7)
      .attr("d", path)
      .style("stroke",function(d){ return color(d.Team);
      });
  // Add a group element for each dimension.
  var g = svg.selectAll(".dimension")
      .data(dimensions)
    .enter().append("g")
      .attr("class", "dimension")
      .attr("transform", function(d) {return "translate(" + PSx(d) + ")"; });
  // Add an axis and title.
  g.append("g")
      .attr("class", "PSaxis")
      .each(function(d) { d3.select(this).call(axis.scale(PSy[d])); })
    .append("text")
      .style("text-anchor", "middle")
      .attr("y", -1)
      .text(function(d) { return d; });
    // Add and store a brush for each axis.
  g.append("g")
      .attr("class", "brush")
      .each(function(d) { d3.select(this).call(PSy[d].brush = d3.svg.brush().y(PSy[d]).on("brushstart", brushstart).on("brush", brush).on("brushend", brushend)); })
    .selectAll("rect")
      .attr("x", -8)
      .attr("width", 16);
// Returns the path for a given data point.
function path(d) {
  return line(dimensions.map(function(p) { return [PSx(p), PSy[p](d[p])]; }));
}

var domainByTrait = {},
      traits = d3.keys(players[0]).filter(function(d) { return d == "FG" || d == "2P" || d == "3P"; }),
      n = traits.length;

  traits.forEach(function(trait) {
    domainByTrait[trait] = d3.extent(players, function(d) {return d[trait]; });
  });

  domainByTrait["PTS"] = ["0","50"];
  domainByTrait["AST"] = ["0","20"];
  domainByTrait["STL"] = ["0","5"];
  domainByTrait["Age"] = ["16","40"];
  domainByTrait["TRB"] = ["0","4"];
  domainByTrait["BLK"] = ["0","4"];
  domainByTrait["3P"] = ["0","7"];
  domainByTrait["2P"] = ["0","10"];
  domainByTrait["FT"] = ["0","10"];

  xAxis.tickSize(size * n);
  yAxis.tickSize(-size * n);

  svg.append("g")
      .attr("transform", "translate(" + padding + "," + padding / 2 + ")");

  svg.selectAll(".x.axis")
      .data(traits)
    .enter().append("g")
      .attr("class", "x axis")
      .attr("transform", function(d, i) { return "translate(" + (n - i - 1) * size + ",0)"; })
      .each(function(d) { x.domain(domainByTrait[d]); d3.select(this).call(xAxis); });

  svg.selectAll(".y.axis")
      .data(traits)
    .enter().append("g")
      .attr("class", "y axis")
      .attr("transform", function(d, i) { return "translate(0," + i * size + ")"; })
      .each(function(d) { y.domain(domainByTrait[d]); d3.select(this).call(yAxis); });

  var cell = svg.selectAll(".cell")
      .data(cross(traits, traits))
    .enter().append("g")
      .attr("class", "cell")
      .attr("transform", function(d) { return "translate(" + (n - d.i - 1) * size + "," + d.j * size + ")"; })
      .each(plot);

  cell.filter(function(d) { return d.i === d.j; }).append("text")
      .attr("x", padding)
      .attr("y", padding)
      .attr("dy", ".71em")
      .text(function(d) { return d.x; })
      .attr("style","font-style: italic; font-size: 20px;");

var circles;

  function plot(p) {
    var cell = d3.select(this);

    x.domain(domainByTrait[p.x]);
    y.domain(domainByTrait[p.y]);

    cell.append("rect")
        .attr("class", "frame")
        .attr("x", padding / 2)
        .attr("y", padding / 2)
        .attr("width", size - padding)
        .attr("height", size - padding);

  circles = cell.selectAll("circle")
        .data(players)
        .enter()
        .append("circle")
        .attr("cx", function(d) { return x(d[p.x]); })
        .attr("cy", function(d) { return y(d[p.y]); })
        .attr("r", 2)
        .style("fill", function(d) { return color(d.Team); });
  }

// var pieit = function(pieData, place, i){
//   var pie = d3.layout.pie()
//   .value(function(d){return d.count; })
//   .sort(null);
//   var path = place.selectAll('.cir' + i)
//           .data(pie(pieData))
//           .enter()
//           .append('path')
//           .attr("class","cir" + i)
//           .attr('d', arc)
//           .attr('fill', function(d){return collor(d.data.lable);});
//   var legendRectSize = 18;
//   var legendSpacing = 4;
//   var legend = place.selectAll('.legend' + i)
//             .data(collor.domain())
//             .enter()
//             .append('g')
//             .attr('class', 'legend' + i)
//             .attr('transform', function(d, i) {
//               var height = legendRectSize + legendSpacing;
//               var offset =  height * collor.domain().length / 2;
//               var horz = -1 * legendRectSize;
//               var vert = i * height - offset;
//               return 'translate(' + horz + ',' + vert + ')';
//             });
//
//           legend.append('rect')
//             .attr('width', legendRectSize)
//             .attr('height', legendRectSize)
//             .style('fill', collor)
//             .style('stroke', collor);
//
//           legend.append('text')
//             .attr('x', legendRectSize + legendSpacing)
//             .attr('y', legendRectSize - legendSpacing)
//             .text(function(d) { return d; });
// }

  // svg.append('text')
  //           .attr('x', 205)
  //           .attr('y', 400)
  //           .attr('class','leg')
  //           .text('Mother\'s Education');
  // svg.append('text')
  //           .attr('x', 415)
  //           .attr('y', 400)
  //           .attr('class','leg')
  //           .text('Father\'s Education');
  // svg.append('text')
  //           .attr('x', 650)
  //           .attr('y', 400)
  //           .attr('class','leg')
  //           .text('Traveltime');
  // svg.append('text')
  //           .attr('x', 850)
  //           .attr('y', 400)
  //           .attr('class','leg')
  //           .text('Studytime');


  // var cirAge = svg.append('g')
  // .attr('transform','translate(' + 100 + ',' + 500 + ')');
  // var cirPTS = svg.append('g')
  // .attr('transform','translate(' + 300 + ',' + 500 + ')');
  // var cirFedu = svg.append('g')
  // .attr('transform','translate(' + 500 + ',' + 500 + ')');
  // var cirtra = svg.append('g')
  // .attr('transform','translate(' + 700 + ',' + 500 + ')');
  // var cirstu = svg.append('g')
  // .attr('transform','translate(' + 900 + ',' + 500 + ')');

//   var Age = [];
//   var PTS = [];
//   var Fedu = [];
//   var traveltime = [];
//   var studytime = [];
//   var cont;
//
//   for(var j = 15, c = 22; j <= c ; j++)
//   {
//     cont = {
//       lable: j.toString(),
//       count: players.filter(function(d){
//         return d["Age"] == j;
//     }).length
//     }
//     Age.push(cont);
//   }
//   for(var j = 0, c = 4; j <= c ; j++)
//   {
//     cont = {
//       lable: j.toString(),
//       count: players.filter(function(d){
//         return d["PTS"] == j;
//     }).length
//     }
//     PTS.push(cont);
//   }
//   for(var j = 0, c = 4; j <= c ; j++)
//   {
//     cont = {
//       lable: j.toString(),
//       count: players.filter(function(d){
//         return d["Fedu"] == j;
//     }).length
//     }
//     Fedu.push(cont);
//   }
//   for(var j = 1, c = 4; j <= c ; j++)
//   {
//     cont = {
//       lable: j.toString(),
//       count: players.filter(function(d){
//         return d["traveltime"] == j;
//     }).length
//     }
//     traveltime.push(cont);
//   }
//   for(var j = 1, c = 4; j <= c ; j++)
//   {
//     cont = {
//       lable: j.toString(),
//       count: players.filter(function(d){
//         return d["studytime"] == j;
//     }).length
//     }
//     studytime.push(cont);
//   }
// pieit(PTS,cirPTS,1);
// pieit(Fedu,cirFedu,2);
// pieit(studytime,cirstu,3);
// pieit(traveltime,cirtra,4);
// PTS =[];
// Age = [];
// Fedu = [];
// traveltime = [];
// studytime = [];

var FilteredData;

function brushstart() {
  d3.event.sourceEvent.stopPropagation();
}


// Handles a brush event, toggling the display of foreground lines.
function brush() {

  var actives = dimensions.filter(function(p) {return !PSy[p].brush.empty(); }),
      extents = actives.map(function(p) {return PSy[p].brush.extent(); });
  foreground.style("display", function(d) {
    return actives.every(function(p, i) {
      return extents[i][0] <= d[p] && d[p] <= extents[i][1];
    }) ? null : "none";
  });

  FilteredData = players.filter(function(d){
      return actives.every(function(p, i) {
        return extents[i][0] <= d[p] && d[p] <= extents[i][1];
      })});

}

function brushend(){
  var actives = dimensions.filter(function(p) {return !PSy[p].brush.empty(); }),
      extents = actives.map(function(p) {return PSy[p].brush.extent(); });

  svg.selectAll("circle").attr("class", function(d){
      for(var i = 0, m = 10; i < m ; i++ ){
        if(!!extents[i])
        {
          if(extents[i][0] > d[actives[i]] || d[actives[i]] > extents[i][1])
            return "hidden";
        }
  }});

// var pieit = function(pieData, place, i){
//   var pie = d3.layout.pie()
//   .value(function(d){return d.count; })
//   .sort(null);
//   var path = place.selectAll('.cir' + i)
//           .data(pie(pieData))
//           .enter()
//           .append('path')
//           .attr("class","cir" + i)
//           .attr('d', arc)
//           .attr('fill', function(d){return collor(d.data.lable);});
// }

  // var cirPTS = svg.append('g')
  // .attr('transform','translate(' + 300 + ',' + 500 + ')');
  // var cirFedu = svg.append('g')
  // .attr('transform','translate(' + 500 + ',' + 500 + ')');
  // var cirtra = svg.append('g')
  // .attr('transform','translate(' + 700 + ',' + 500 + ')');
  // var cirstu = svg.append('g')
  // .attr('transform','translate(' + 900 + ',' + 500 + ')');

  // var PTS = [];
  // var Fedu = [];
  // var traveltime = [];
  // var studytime = [];
  // var cont;

  // for(var j = 0, c = 4; j <= c ; j++)
  // {
  //   cont = {
  //     lable: j.toString(),
  //     count: FilteredData.filter(function(d){
  //       return d["PTS"] == j;
  //   }).length
  //   }
  //   PTS.push(cont);
  // }
  // for(var j = 0, c = 4; j <= c ; j++)
  // {
  //   cont = {
  //     lable: j.toString(),
  //     count: FilteredData.filter(function(d){
  //       return d["Fedu"] == j;
  //   }).length
  //   }
  //   Fedu.push(cont);
  // }
  // for(var j = 1, c = 4; j <= c ; j++)
  // {
  //   cont = {
  //     lable: j.toString(),
  //     count: FilteredData.filter(function(d){
  //       return d["traveltime"] == j;
  //   }).length
  //   }
  //   traveltime.push(cont);
  // }
  // for(var j = 1, c = 4; j <= c ; j++)
  // {
  //   cont = {
  //     lable: j.toString(),
  //     count: FilteredData.filter(function(d){
  //       return d["studytime"] == j;
  //   }).length
  //   }
  //   studytime.push(cont);
  // }
// pieit(PTS,cirPTS,1);
// pieit(Fedu,cirFedu,2);
// pieit(studytime,cirstu,3);
// pieit(traveltime,cirtra,4);
// PTS =[];
// Fedu = [];
// traveltime = [];
// studytime = [];
}

function cross(a, b) {
    var c = [], n = a.length, m = b.length, i, j;
    for (i = -1; ++i < n;) for (j = -1; ++j < m;) c.push({x: a[i], i: i, y: b[j], j: j});
    return c;
  }
});

// </script>
