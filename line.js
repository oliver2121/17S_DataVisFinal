var screenWidth2 = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var margin = {top: 20, right: -40, bottom: 10, left: 60},
    PSwidth = 2 * screenWidth2 / 3 - margin.left - margin.right,
    PSheight = 500 - margin.top - margin.bottom;

var collor = d3.scale.category20();

var PSx = d3.scale.ordinal().rangePoints([420, 420 + PSwidth], 1),
    PSy = {};

var line = d3.svg.line(),
    axis = d3.svg.axis().orient("left"),
    background,
    foreground;

var svg2 = d3.select("body").append("svg")
    .attr("width", screenWidth2)
    .attr("height", 550)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var size = 140,
    padding = 12;

  var PSmargin = {top: -140, right: 10, bottom: 10, left: 10},
    PSwidth = screenWidth2 / 3 - PSmargin.left - PSmargin.right,
    PSheight = 300 - PSmargin.top - PSmargin.bottom;

var x2 = d3.scale.linear()
    .range([padding / 2, size - padding / 2]);

var y2 = d3.scale.linear()
    .range([size - padding / 2, padding / 2]);

var xAxis2 = d3.svg.axis()
    .scale(x2)
    .orient("bottom")
    .ticks(10);

var yAxis2 = d3.svg.axis()
    .scale(y2)
    .orient("left")
    .ticks(10);

var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0.8);
var colour = d3.scale.category10();

d3.csv('36mperformance.csv', function(error, players) {
  PSx.domain(dimensions = d3.keys(players[0]).filter(function(d) {
    return  d != 'Name' && d != "Team" &&  d != "G" && d != "GS" && d != "MP" && d != "FGA" && d != "FG%" && d != "3PA" && d != "3P%" && d != "2PA" && d != "2P%" && d != "FT" && d != "FTA" && d != "FT%" && d != "ORB" && d != "DRB" && d != "PF" && (PSy[d] = d3.scale.linear()
        .domain(d3.extent(players, function(p) { return +p[d]; }))
        .range([PSheight -1, 10]));
  }));
  // Add grey background lines for context.
  background = svg2.append("g")
      .attr("class", "background")
    .selectAll("path")
      .data(players)
    .enter().append("path")
    .attr("opacity", .4)
      .attr("d", path);
//Add blue foreground lines for focus.
  foreground = svg2.append("g")
      .attr("class", "foreground")
    .selectAll("path")
      .data(players)
    .enter().append("path")
      .attr("opacity", .8)
      .attr("d", path)
      .style("stroke",function(d){ return colour(d.Team);
      })
      .on("mouseover", function(d) {
                tooltip.transition()
                     .duration(200)
                     .style("opacity", 1);
                tooltip.html(d["Name"] )
                     .style("left", (d3.event.pageX + 5) + "px")
                     .style("top", (d3.event.pageY - 28) + "px");
            })
            .on("mouseout", function(d) {
                tooltip.transition()
                     .duration(500)
                     .style("opacity", 0);
            });;
  // Add a group element for each dimension.
  var g = svg2.selectAll(".dimension")
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
//Returns the path for a given data point.
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

  xAxis2.tickSize(size * n);
  yAxis2.tickSize(-size * n);

  svg2.append("g")
      .attr("transform", "translate(" + padding + "," + padding / 2 + ")");

  svg2.selectAll(".x.axis")
      .data(traits)
    .enter().append("g")
      .attr("class", "x axis")
      .attr("transform", function(d, i) { return "translate(" + (n - i - 1) * size + ",0)"; })
      .each(function(d) { x2.domain(domainByTrait[d]); d3.select(this).call(xAxis2); });

  svg2.selectAll(".y.axis")
      .data(traits)
    .enter().append("g")
      .attr("class", "y axis")
      .attr("transform", function(d, i) { return "translate(0," + i * size + ")"; })
      .each(function(d) { y2.domain(domainByTrait[d]); d3.select(this).call(yAxis2); });

  var cell = svg2.selectAll(".cell")
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

    x2.domain(domainByTrait[p.x]);
    y2.domain(domainByTrait[p.y]);

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
        .attr("cx", function(d) { return x2(d[p.x]); })
        .attr("cy", function(d) { return y2(d[p.y]); })
        .attr("r", 2.5)
        .style("fill", function(d) { return colour(d.Team); })
        .on("mouseover", function(d) {
                tooltip.transition()
                     .duration(200)
                     .style("opacity", 1);
                tooltip.html(d["Name"] )
                     .style("left", (d3.event.pageX + 5) + "px")
                     .style("top", (d3.event.pageY - 28) + "px");
            })
            .on("mouseout", function(d) {
                tooltip.transition()
                     .duration(500)
                     .style("opacity", 0);
            });;
  }

var FilteredData;

function brushstart() {
  d3.event.sourceEvent.stopPropagation();
}

var groups = [
  "Biology",
  "Biomedical Engineering",
  "Chemical Engineering",
  "Chemistry and Biochemistry",
  "Civil Environmental Eng",
  "Computer Science",
  "Electrical Computer Eng",
  "Fire Protection Engineering",
  "Interdisciplinary Programs",
  "Management",
  "Mathematical Sciences",
  "Mechanical Engineering",
  "Physics",
  "Social Science"
];

var legendColour = d3.scale.ordinal(d3.schemeCategory10)
    .domain(groups);

var legend = d3.select(".legend").append("svg")
      .attr("class", "legend")
      .attr("width", 400)
      .attr("height", 300)
    .selectAll("g")
      .data(legendColour.domain().slice())
    .enter().append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

legend.append("circle")
        .attr("r", 7)
        .attr("cx", 10)
        .attr("cy", 10)
        .style("fill", legendColour);

legend.append("text")
        .attr("x", 25)
        .attr("y", 9)
        .attr("dy", ".35em")
        .text(function(d) { return d; });

        //console.log(legend);

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
}

function cross(a, b) {
    var c = [], n = a.length, m = b.length, i, j;
    for (i = -1; ++i < n;) for (j = -1; ++j < m;) c.push({x: a[i], i: i, y: b[j], j: j});
    return c;
  }
});
