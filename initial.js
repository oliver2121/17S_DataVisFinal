var w1 = 180
  h1 = 180;

var mycfg1 = {
  w: w1,
  h: h1,
  maxValue: 0.6,
  levels: 6,
  TranslateX: 50,
  TranslateY: 70,
  ExtraWidthX: 300
}


var f1 =  [
      [
      {axis:"Blocks",value:0.5},
      {axis:"Points",value:8.4},
      {axis:"Assists",value:8.5},
      {axis:"Turnovers",value:3},
      {axis:"Rebounds",value:4},
      {axis:"Steals",value:1.5},
        ],[
      {axis:"Blocks",value:1.5},
      {axis:"Points",value:5.5},
      {axis:"Assists",value:9},
      {axis:"Turnovers",value:1.5},
      {axis:"Rebounds",value:4.5},
      {axis:"Steals",value:0},
        ]
    ];
var f2 = [
      [
      {axis:"Blocks",value:0},
      {axis:"Points",value:5.6},
      {axis:"Assists",value:2},
      {axis:"Turnovers",value:3.5},
      {axis:"Rebounds",value:7.5},
      {axis:"Steals",value:2},
        ],[
      {axis:"Blocks",value:1.5},
      {axis:"Points",value:5.5},
      {axis:"Assists",value:2.5},
      {axis:"Turnovers",value:0},
      {axis:"Rebounds",value:4},
      {axis:"Steals",value:5},
        ]
    ];  

var f3 = [
      [
      {axis:"Blocks",value:1.5},
      {axis:"Points",value:5.2},
      {axis:"Assists",value:3},
      {axis:"Turnovers",value:0.5},
      {axis:"Rebounds",value:6},
      {axis:"Steals",value:3.5},
        ],[
      {axis:"Blocks",value:0.5},
      {axis:"Points",value:6.7},
      {axis:"Assists",value:12.5},
      {axis:"Turnovers",value:2.5},
      {axis:"Rebounds",value:10.5},
      {axis:"Steals",value:2.5},
        ]
    ];

var f4 = [
      [
      {axis:"Blocks",value:2.5},
      {axis:"Points",value:2.1},
      {axis:"Assists",value:3.5},
      {axis:"Turnovers",value:1},
      {axis:"Rebounds",value:9.5},
      {axis:"Steals",value:1},
        ],[
      {axis:"Blocks",value:2},
      {axis:"Points",value:5.6},
      {axis:"Assists",value:1.5},
      {axis:"Turnovers",value:0.5},
      {axis:"Rebounds",value:11.5},
      {axis:"Steals",value:0.29},
        ]
    ];

 var f5 = [
      [
      {axis:"Blocks",value:1.5},
      {axis:"Points",value:2.7},
      {axis:"Assists",value:6},
      {axis:"Turnovers",value:1},
      {axis:"Rebounds",value:6},
      {axis:"Steals",value:1},
        ],[
      {axis:"Blocks",value:1.5},
      {axis:"Points",value:4},
      {axis:"Assists",value:1},
      {axis:"Turnovers",value:0},
      {axis:"Rebounds",value:14},
      {axis:"Steals",value:1.5},
        ]
    ];   

         RadarChart.draw(".chart1", f1, mycfg1)
         RadarChart.draw('.chart2', f2, mycfg1)
         RadarChart.draw('.chart3', f3, mycfg1)
         RadarChart.draw('.chart4', f4, mycfg1)
         RadarChart.draw('.chart5', f5, mycfg1);
