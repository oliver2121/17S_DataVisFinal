var f1 =  [
      [
      {axis:"Blocks",value:0},
      {axis:"Points",value:0},
      {axis:"Assists",value:0},
      {axis:"Turnovers",value:0},
      {axis:"Rebounds",value:0},
      {axis:"Steals",value:0},
        ],[
      {axis:"Blocks",value:0},
      {axis:"Points",value:0},
      {axis:"Assists",value:0},
      {axis:"Turnovers",value:0},
      {axis:"Rebounds",value:0},
      {axis:"Steals",value:0},
        ]
    ];
var f2 = [
      [
      {axis:"Blocks",value:0},
      {axis:"Points",value:0},
      {axis:"Assists",value:0},
      {axis:"Turnovers",value:0},
      {axis:"Rebounds",value:0},
      {axis:"Steals",value:0},
        ],[
      {axis:"Blocks",value:0},
      {axis:"Points",value:0},
      {axis:"Assists",value:0},
      {axis:"Turnovers",value:0},
      {axis:"Rebounds",value:0},
      {axis:"Steals",value:0},
        ]
    ];  

var f3 = [
      [
      {axis:"Blocks",value:0},
      {axis:"Points",value:0},
      {axis:"Assists",value:0},
      {axis:"Turnovers",value:0},
      {axis:"Rebounds",value:0},
      {axis:"Steals",value:0},
        ],[
      {axis:"Blocks",value:0},
      {axis:"Points",value:0},
      {axis:"Assists",value:0},
      {axis:"Turnovers",value:0},
      {axis:"Rebounds",value:0},
      {axis:"Steals",value:0},
        ]
    ];

var f4 = [
      [
      {axis:"Blocks",value:0},
      {axis:"Points",value:0},
      {axis:"Assists",value:0},
      {axis:"Turnovers",value:0},
      {axis:"Rebounds",value:0},
      {axis:"Steals",value:0},
        ],[
      {axis:"Blocks",value:0},
      {axis:"Points",value:0},
      {axis:"Assists",value:0},
      {axis:"Turnovers",value:0},
      {axis:"Rebounds",value:0},
      {axis:"Steals",value:0},
        ]
    ];

 var f5 = [
      [
      {axis:"Blocks",value:0},
      {axis:"Points",value:0},
      {axis:"Assists",value:0},
      {axis:"Turnovers",value:0},
      {axis:"Rebounds",value:0},
      {axis:"Steals",value:0},
        ],[
      {axis:"Blocks",value:0},
      {axis:"Points",value:0},
      {axis:"Assists",value:0},
      {axis:"Turnovers",value:0},
      {axis:"Rebounds",value:0},
      {axis:"Steals",value:0},
        ]
    ];   




var w = 200
	h = 200;

var colorscale = d3.scale.category10();

//Legend titles
//var LegendOptions = ['Celtics',newData];

var C1 = [
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
var C2 = [
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

var C3 = [
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

var C4 = [
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

var C5 = [
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

var W1 = [
		  [
			{axis:"Blocks",value:0},
			{axis:"Points",value:6.7},
			{axis:"Assists",value:9},
			{axis:"Turnovers",value:4},
			{axis:"Rebounds",value:6.5},
			{axis:"Steals",value:1.5},
			  ],[
			{axis:"Blocks",value:1},
			{axis:"Points",value:5.2},
			{axis:"Assists",value:9},
			{axis:"Turnovers",value:3},
			{axis:"Rebounds",value:4.6},
			{axis:"Steals",value:2},
			  ]
		];

var W2 = [
      [
      {axis:"Blocks",value:0.5},
      {axis:"Points",value:6.1},
      {axis:"Assists",value:4.5},
      {axis:"Turnovers",value:2.5},
      {axis:"Rebounds",value:7},
      {axis:"Steals",value:2}
        ],[
      {axis:"Blocks",value:0.5},
      {axis:"Points",value:6.5},
      {axis:"Assists",value:7},
      {axis:"Turnovers",value:1.5},
      {axis:"Rebounds",value:4},
      {axis:"Steals",value:2.5},
        ]
    ];

var W3 = [
      [
      {axis:"Blocks",value:0.5},
      {axis:"Points",value:2.8},
      {axis:"Assists",value:3},
      {axis:"Turnovers",value:1.5},
      {axis:"Rebounds",value:5.5},
      {axis:"Steals",value:1.5}
        ],[
      {axis:"Blocks",value:2},
      {axis:"Points",value:5.4},
      {axis:"Assists",value:4.5},
      {axis:"Turnovers",value:0.5},
      {axis:"Rebounds",value:10.5},
      {axis:"Steals",value:3.5},
        ]
    ];

var W4 = [
      [
      {axis:"Blocks",value:2},
      {axis:"Points",value:2.8},
      {axis:"Assists",value:3.5},
      {axis:"Turnovers",value:2.5},
      {axis:"Rebounds",value:6},
      {axis:"Steals",value:0}
        ],[
      {axis:"Blocks",value:0.5},
      {axis:"Points",value:2.9},
      {axis:"Assists",value:3.5},
      {axis:"Turnovers",value:1},
      {axis:"Rebounds",value:11.5},
      {axis:"Steals",value:1.5},
        ]
    ];

var W5 = [
      [
      {axis:"Blocks",value:2.5},
      {axis:"Points",value:3.2},
      {axis:"Assists",value:6},
      {axis:"Turnovers",value:2},
      {axis:"Rebounds",value:11.5},
      {axis:"Steals",value:1}
        ],[
      {axis:"Blocks",value:0},
      {axis:"Points",value:13.5},
      {axis:"Assists",value:3},
      {axis:"Turnovers",value:1.5},
      {axis:"Rebounds",value:14},
      {axis:"Steals",value:0.5},
        ]
    ];

var a1 = [
      [
      {axis:"Blocks",value:0},
      {axis:"Points",value:5.6},
      {axis:"Assists",value:9},
      {axis:"Turnovers",value:5},
      {axis:"Rebounds",value:4},
      {axis:"Steals",value:0}
        ],[
      {axis:"Blocks",value:0},
      {axis:"Points",value:4.2},
      {axis:"Assists",value:9},
      {axis:"Turnovers",value:2},
      {axis:"Rebounds",value:7},
      {axis:"Steals",value:0},
        ]
    ];
var a1 = [
      [
      {axis:"Blocks",value:0},
      {axis:"Points",value:5.6},
      {axis:"Assists",value:9},
      {axis:"Turnovers",value:5},
      {axis:"Rebounds",value:4},
      {axis:"Steals",value:0}
        ],[
      {axis:"Blocks",value:0},
      {axis:"Points",value:4.2},
      {axis:"Assists",value:9},
      {axis:"Turnovers",value:2},
      {axis:"Rebounds",value:7},
      {axis:"Steals",value:0},
        ]
    ];

var a2 = [
      [
      {axis:"Blocks",value:0},
      {axis:"Points",value:5.6},
      {axis:"Assists",value:9},
      {axis:"Turnovers",value:5},
      {axis:"Rebounds",value:4},
      {axis:"Steals",value:0}
        ],[
      {axis:"Blocks",value:0},
      {axis:"Points",value:4.2},
      {axis:"Assists",value:9},
      {axis:"Turnovers",value:2},
      {axis:"Rebounds",value:7},
      {axis:"Steals",value:0},
        ]
    ];

var a3 = [
      [
      {axis:"Blocks",value:0},
      {axis:"Points",value:4.6},
      {axis:"Assists",value:0},
      {axis:"Turnovers",value:1},
      {axis:"Rebounds",value:13},
      {axis:"Steals",value:0}
        ],[
      {axis:"Blocks",value:1},
      {axis:"Points",value:1.8},
      {axis:"Assists",value:2},
      {axis:"Turnovers",value:0},
      {axis:"Rebounds",value:11},
      {axis:"Steals",value:0},
        ]
    ];

var a4 = [
      [
      {axis:"Blocks",value:0},
      {axis:"Points",value:3.2},
      {axis:"Assists",value:4},
      {axis:"Turnovers",value:2},
      {axis:"Rebounds",value:6},
      {axis:"Steals",value:4}
        ],[
      {axis:"Blocks",value:2},
      {axis:"Points",value:7},
      {axis:"Assists",value:5},
      {axis:"Turnovers",value:2},
      {axis:"Rebounds",value:5},
      {axis:"Steals",value:3},
        ]
    ]; 

var a5 = [
      [
      {axis:"Blocks",value:1},
      {axis:"Points",value:2.6},
      {axis:"Assists",value:0},
      {axis:"Turnovers",value:5},
      {axis:"Rebounds",value:15},
      {axis:"Steals",value:1}
        ],[
      {axis:"Blocks",value:1},
      {axis:"Points",value:7.2},
      {axis:"Assists",value:9},
      {axis:"Turnovers",value:1},
      {axis:"Rebounds",value:14},
      {axis:"Steals",value:2},
        ]
    ];

var t1 = [
      [
      {axis:"Blocks",value:0.5},
      {axis:"Points",value:7.8},
      {axis:"Assists",value:10},
      {axis:"Turnovers",value:4},
      {axis:"Rebounds",value:8},
      {axis:"Steals",value:1}
        ],[
      {axis:"Blocks",value:0.25},
      {axis:"Points",value:3.9},
      {axis:"Assists",value:5},
      {axis:"Turnovers",value:2},
      {axis:"Rebounds",value:4},
      {axis:"Steals",value:0.5},
        ]
    ]; 
var t2 = [
      [
      {axis:"Blocks",value:0},
      {axis:"Points",value:3.2},
      {axis:"Assists",value:1.5},
      {axis:"Turnovers",value:2},
      {axis:"Rebounds",value:6.5},
      {axis:"Steals",value:0.5}
        ],[
      {axis:"Blocks",value:0},
      {axis:"Points",value:1.6},
      {axis:"Assists",value:0.75},
      {axis:"Turnovers",value:1},
      {axis:"Rebounds",value:3.25},
      {axis:"Steals",value:0.25},
        ]
    ];

var t3 = [
      [
      {axis:"Blocks",value:0.5},
      {axis:"Points",value:3},
      {axis:"Assists",value:2.5},
      {axis:"Turnovers",value:1},
      {axis:"Rebounds",value:9},
      {axis:"Steals",value:1.5}
        ],[
      {axis:"Blocks",value:0.25},
      {axis:"Points",value:1.5},
      {axis:"Assists",value:1.25},
      {axis:"Turnovers",value:0.5},
      {axis:"Rebounds",value:4.5},
      {axis:"Steals",value:0.75},
        ]
    ];               

var t4 = [
      [
      {axis:"Blocks",value:0.5},
      {axis:"Points",value:2.4},
      {axis:"Assists",value:1.5},
      {axis:"Turnovers",value:0.5},
      {axis:"Rebounds",value:5.5},
      {axis:"Steals",value:0.5}
        ],[
      {axis:"Blocks",value:0.25},
      {axis:"Points",value:1.2},
      {axis:"Assists",value:0.75},
      {axis:"Turnovers",value:0.25},
      {axis:"Rebounds",value:2.75},
      {axis:"Steals",value:0.25},
        ]
    ];  

var t5 = [
      [
      {axis:"Blocks",value:1.5},
      {axis:"Points",value:3.9},
      {axis:"Assists",value:8.5},
      {axis:"Turnovers",value:3.5},
      {axis:"Rebounds",value:13.5},
      {axis:"Steals",value:2}
        ],[
      {axis:"Blocks",value:0.75},
      {axis:"Points",value:1.95},
      {axis:"Assists",value:4.25},
      {axis:"Turnovers",value:1.75},
      {axis:"Rebounds",value:6.75},
      {axis:"Steals",value:1},
        ]
    ]; 

var i1 = [
      [
      {axis:"Blocks",value:0.5},
      {axis:"Points",value:6.3},
      {axis:"Assists",value:8.5},
      {axis:"Turnovers",value:1},
      {axis:"Rebounds",value:2.5},
      {axis:"Steals",value:1.5}
        ],[
      {axis:"Blocks",value:0.5},
      {axis:"Points",value:5.2},
      {axis:"Assists",value:8},
      {axis:"Turnovers",value:4.5},
      {axis:"Rebounds",value:5.5},
      {axis:"Steals",value:0.5},
        ]
    ]; 

var i2 = [
      [
      {axis:"Blocks",value:1.5},
      {axis:"Points",value:3},
      {axis:"Assists",value:2.5},
      {axis:"Turnovers",value:2.5},
      {axis:"Rebounds",value:12},
      {axis:"Steals",value:0.5}
        ],[
      {axis:"Blocks",value:0},
      {axis:"Points",value:2.7},
      {axis:"Assists",value:4},
      {axis:"Turnovers",value:1.5},
      {axis:"Rebounds",value:13},
      {axis:"Steals",value:2},
        ]
    ]; 

var i3 = [
      [
      {axis:"Blocks",value:0},
      {axis:"Points",value:4},
      {axis:"Assists",value:3},
      {axis:"Turnovers",value:1.5},
      {axis:"Rebounds",value:7},
      {axis:"Steals",value:2.5}
        ],[
      {axis:"Blocks",value:2.5},
      {axis:"Points",value:3.5},
      {axis:"Assists",value:3.5},
      {axis:"Turnovers",value:3},
      {axis:"Rebounds",value:8.5},
      {axis:"Steals",value:1.5},
        ]
    ]; 

var i4 = [
      [
      {axis:"Blocks",value:1.5},
      {axis:"Points",value:3},
      {axis:"Assists",value:2.5},
      {axis:"Turnovers",value:2.5},
      {axis:"Rebounds",value:12},
      {axis:"Steals",value:0.5}
        ],[
      {axis:"Blocks",value:0},
      {axis:"Points",value:2.7},
      {axis:"Assists",value:4},
      {axis:"Turnovers",value:1.5},
      {axis:"Rebounds",value:13},
      {axis:"Steals",value:2},
        ]
    ]; 


var i5 = [
      [
      {axis:"Blocks",value:1.5},
      {axis:"Points",value:4.2},
      {axis:"Assists",value:3.5},
      {axis:"Turnovers",value:3},
      {axis:"Rebounds",value:14},
      {axis:"Steals",value:0.5}
        ],[
      {axis:"Blocks",value:2},
      {axis:"Points",value:4.1},
      {axis:"Assists",value:0.5},
      {axis:"Turnovers",value:3.5},
      {axis:"Rebounds",value:13},
      {axis:"Steals",value:2},
        ]
    ]; 

var c1 = [
      [
      {axis:"Blocks",value:0.7},
      {axis:"Points",value:1.46},
      {axis:"Assists",value:12.3},
      {axis:"Turnovers",value:2},
      {axis:"Rebounds",value:13.7},
      {axis:"Steals",value:2.3}
        ],[
      {axis:"Blocks",value:0},
      {axis:"Points",value:6.37},
      {axis:"Assists",value:7.7},
      {axis:"Turnovers",value:4.3},
      {axis:"Rebounds",value:5.7},
      {axis:"Steals",value:2.7},
        ]
    ];

var c2 = [
      [
      {axis:"Blocks",value:0.7},
      {axis:"Points",value:3.6},
      {axis:"Assists",value:3.7},
      {axis:"Turnovers",value:2.0},
      {axis:"Rebounds",value:4.7},
      {axis:"Steals",value:0}
        ],[
      {axis:"Blocks",value:1},
      {axis:"Points",value:3.54},
      {axis:"Assists",value:5.3},
      {axis:"Turnovers",value:1.7},
      {axis:"Rebounds",value:6.7},
      {axis:"Steals",value:0.3},
        ]
    ]; 

var c3 = [
      [
      {axis:"Blocks",value:0.3},
      {axis:"Points",value:6.54},
      {axis:"Assists",value:5},
      {axis:"Turnovers",value:1},
      {axis:"Rebounds",value:7.3},
      {axis:"Steals",value:1.7}
        ],[
      {axis:"Blocks",value:0.7},
      {axis:"Points",value:4},
      {axis:"Assists",value:1.3},
      {axis:"Turnovers",value:2.0},
      {axis:"Rebounds",value:8.0},
      {axis:"Steals",value:0.7},
        ]
    ];

var c4 = [
      [
      {axis:"Blocks",value:0.7},
      {axis:"Points",value:3.6},
      {axis:"Assists",value:3.7},
      {axis:"Turnovers",value:2},
      {axis:"Rebounds",value:4.7},
      {axis:"Steals",value:0}
        ],[
      {axis:"Blocks",value:1},
      {axis:"Points",value:4.5},
      {axis:"Assists",value:5.3},
      {axis:"Turnovers",value:1.7},
      {axis:"Rebounds",value:6.7},
      {axis:"Steals",value:0.3},
        ]
    ]; 

var c5 = [
      [
      {axis:"Blocks",value:0.7},
      {axis:"Points",value:2.86},
      {axis:"Assists",value:1.3},
      {axis:"Turnovers",value:1},
      {axis:"Rebounds",value:9.7},
      {axis:"Steals",value:0}
        ],[
      {axis:"Blocks",value:2.3},
      {axis:"Points",value:4.14},
      {axis:"Assists",value:7.7},
      {axis:"Turnovers",value:1.3},
      {axis:"Rebounds",value:11},
      {axis:"Steals",value:0},
        ]
    ]; 

var b1 = [
      [
      {axis:"Blocks",value:0.7},
      {axis:"Points",value:2.86},
      {axis:"Assists",value:1.3},
      {axis:"Turnovers",value:1},
      {axis:"Rebounds",value:9.7},
      {axis:"Steals",value:0}
        ],[
      {axis:"Blocks",value:2.3},
      {axis:"Points",value:4.14},
      {axis:"Assists",value:7.7},
      {axis:"Turnovers",value:1.3},
      {axis:"Rebounds",value:11},
      {axis:"Steals",value:0},
        ]
    ];  

var b2 = [
      [
      {axis:"Blocks",value:0.7},
      {axis:"Points",value:2.86},
      {axis:"Assists",value:1.3},
      {axis:"Turnovers",value:1},
      {axis:"Rebounds",value:9.7},
      {axis:"Steals",value:0}
        ],[
      {axis:"Blocks",value:2.3},
      {axis:"Points",value:4.14},
      {axis:"Assists",value:7.7},
      {axis:"Turnovers",value:1.3},
      {axis:"Rebounds",value:11},
      {axis:"Steals",value:0},
        ]
    ];                        

var b3 = [
      [
      {axis:"Blocks",value:0.7},
      {axis:"Points",value:2.86},
      {axis:"Assists",value:1.3},
      {axis:"Turnovers",value:1},
      {axis:"Rebounds",value:9.7},
      {axis:"Steals",value:0}
        ],[
      {axis:"Blocks",value:2.3},
      {axis:"Points",value:4.14},
      {axis:"Assists",value:7.7},
      {axis:"Turnovers",value:1.3},
      {axis:"Rebounds",value:11},
      {axis:"Steals",value:0},
        ]
    ];

 
var b4 = [
      [
      {axis:"Blocks",value:0.7},
      {axis:"Points",value:2.86},
      {axis:"Assists",value:1.3},
      {axis:"Turnovers",value:1},
      {axis:"Rebounds",value:9.7},
      {axis:"Steals",value:0}
        ],[
      {axis:"Blocks",value:2.3},
      {axis:"Points",value:4.14},
      {axis:"Assists",value:7.7},
      {axis:"Turnovers",value:1.3},
      {axis:"Rebounds",value:11},
      {axis:"Steals",value:0},
        ]
    ]; 

var b5 = [
      [
      {axis:"Blocks",value:0.7},
      {axis:"Points",value:2.86},
      {axis:"Assists",value:1.3},
      {axis:"Turnovers",value:1},
      {axis:"Rebounds",value:9.7},
      {axis:"Steals",value:0}
        ],[
      {axis:"Blocks",value:2.3},
      {axis:"Points",value:4.14},
      {axis:"Assists",value:7.7},
      {axis:"Turnovers",value:1.3},
      {axis:"Rebounds",value:11},
      {axis:"Steals",value:0},
        ]
    ];

var d1 = [
      [
      {axis:"Blocks",value:1},
      {axis:"Points",value:8.1},
      {axis:"Assists",value:13.3},
      {axis:"Turnovers",value:2},
      {axis:"Rebounds",value:6.7},
      {axis:"Steals",value:1.0}
        ],[
      {axis:"Blocks",value:1.3},
      {axis:"Points",value:4.2},
      {axis:"Assists",value:9.7},
      {axis:"Turnovers",value:1.3},
      {axis:"Rebounds",value:6.7},
      {axis:"Steals",value:1.0},
        ]
    ];  

var d2 = [
      [
      {axis:"Blocks",value:0},
      {axis:"Points",value:2.7},
      {axis:"Assists",value:1.7},
      {axis:"Turnovers",value:0.7},
      {axis:"Rebounds",value:6.3},
      {axis:"Steals",value:1.0}
        ],[
      {axis:"Blocks",value:1.7},
      {axis:"Points",value:3.5},
      {axis:"Assists",value:4.3},
      {axis:"Turnovers",value:1.3},
      {axis:"Rebounds",value:5.7},
      {axis:"Steals",value:1.7},
        ]
    ];                        

var d33 = [
      [
      {axis:"Blocks",value:0.3},
      {axis:"Points",value:3.5},
      {axis:"Assists",value:1.7},
      {axis:"Turnovers",value:1.3},
      {axis:"Rebounds",value:6.3},
      {axis:"Steals",value:1.3}
        ],[
      {axis:"Blocks",value:0.3},
      {axis:"Points",value:4.9},
      {axis:"Assists",value:2.0},
      {axis:"Turnovers",value:0.7},
      {axis:"Rebounds",value:7.7},
      {axis:"Steals",value:0.3},
        ]
    ];

 
var d4 = [
      [
      {axis:"Blocks",value:1.0},
      {axis:"Points",value:2.2},
      {axis:"Assists",value:1.0},
      {axis:"Turnovers",value:1.0},
      {axis:"Rebounds",value:11},
      {axis:"Steals",value:0.7}
        ],[
      {axis:"Blocks",value:1.7},
      {axis:"Points",value:4.1},
      {axis:"Assists",value:4.3},
      {axis:"Turnovers",value:1.3},
      {axis:"Rebounds",value:9.3},
      {axis:"Steals",value:0.3},
        ]
    ]; 

var d5 = [
      [
      {axis:"Blocks",value:2.7},
      {axis:"Points",value:4.8},
      {axis:"Assists",value:6.0},
      {axis:"Turnovers",value:2.3},
      {axis:"Rebounds",value:10.7},
      {axis:"Steals",value:1.0}
        ],[
      {axis:"Blocks",value:2.7},
      {axis:"Points",value:4.8},
      {axis:"Assists",value:6.0},
      {axis:"Turnovers",value:2.3},
      {axis:"Rebounds",value:10.7},
      {axis:"Steals",value:1.0},
        ]
    ];      

var mycfg = {
  w: w,
  h: h,
  maxValue: 0.6,
  levels: 6,
  TranslateX: 50,
  TranslateY: 70,
  ExtraWidthX: 300
}



// var mycfg = {
//   w: w,
//   h: h,
//   maxValue: 0.6,
//   levels: 6,
//   TranslateX: 50,
//   TranslateY: 70,
//   ExtraWidthX: 300
// }

// var svg = d3.select(".chart")
// 	.append("svg")
// 	.attr("width", w)
// 	.attr("height", h)
// 	.append("g");

// d3.select('#select-list2')
//   .on('draw', function() {
//   	RadarChart.draw(".chart1", C1, mycfg)
//          RadarChart.draw('.chart2', C2, mycfg)
//          RadarChart.draw('.chart3', C3, mycfg)
//          RadarChart.draw('.chart4', C4, mycfg)
//          RadarChart.draw('.chart5', C5, mycfg);
//   });

d3.select('#select-list2')
  .on('change', function() {
    var newData = d3.select(this).property('value');
    var legend = d3.select('.chart6').append('legend')
   .attr("x", 10)
  .attr("y", 20)
  .attr("width", 100)
  .attr("height", 20)
;

    if (newData === 'NULL') {
    	 RadarChart.draw(".chart1", f1, mycfg)
         RadarChart.draw('.chart2', f2, mycfg)
         RadarChart.draw('.chart3', f3, mycfg)
         RadarChart.draw('.chart4', f4, mycfg)
         RadarChart.draw('.chart5', f5, mycfg)
         d3.select('.chart6').append('text1').attr("x",0).attr("y",-20).text(newData)
    }

    if       (newData === 'CLE') {
	 d3.selectAll('text1').remove()
    	 RadarChart.draw(".chart1", C1, mycfg)
         RadarChart.draw('.chart2', C2, mycfg)
         RadarChart.draw('.chart3', C3, mycfg)
         RadarChart.draw('.chart4', C4, mycfg)
         RadarChart.draw('.chart5', C5, mycfg);
         d3.select('.chart6').append('text1').attr("x",0).attr("y",-20).text(newData)
       
    } else if (newData === 'WAS') {
	 d3.selectAll('text1').remove()
         RadarChart.draw(".chart1", W1, mycfg)
         RadarChart.draw('.chart2', W2, mycfg)
         RadarChart.draw('.chart3', W3, mycfg)
         RadarChart.draw('.chart4', W4, mycfg)
         RadarChart.draw('.chart5', W5, mycfg);
         d3.select('.chart6').append('text1').attr("x",0).attr("y",-20).text(newData)

    } else if (newData === 'ATL') {
	 d3.selectAll('text1').remove()
         RadarChart.draw(".chart1", a1, mycfg)
         RadarChart.draw('.chart2', a2, mycfg)
         RadarChart.draw('.chart3', a3, mycfg)
         RadarChart.draw('.chart4', a4, mycfg)
         RadarChart.draw('.chart5', a5, mycfg)
         d3.select('.chart6').append('text1').attr("x",0).attr("y",-20).text(newData)

    } else if (newData === 'TOR') {
	 d3.selectAll('text1').remove()
         RadarChart.draw(".chart1", t1, mycfg)
         RadarChart.draw('.chart2', t2, mycfg)
         RadarChart.draw('.chart3', t3, mycfg)
         RadarChart.draw('.chart4', t4, mycfg)
         RadarChart.draw('.chart5', t5, mycfg)
         d3.select('.chart6').append('text1').attr("x",0).attr("y",-20).text(newData)

    } else if (newData === 'IND') {
	 d3.selectAll('text1').remove()
         RadarChart.draw(".chart1", i1, mycfg)
         RadarChart.draw('.chart2', i2, mycfg)
         RadarChart.draw('.chart3', i3, mycfg)
         RadarChart.draw('.chart4', i4, mycfg)
         RadarChart.draw('.chart5', i5, mycfg)
         d3.select('.chart6').append('text1').attr("x",0).attr("y",-20).text(newData)

    } else if (newData === 'CHI') {
	 d3.selectAll('text1').remove()
         RadarChart.draw(".chart1", c1, mycfg)
         RadarChart.draw('.chart2', c2, mycfg)
         RadarChart.draw('.chart3', c3, mycfg)
         RadarChart.draw('.chart4', c4, mycfg)
         RadarChart.draw('.chart5', c5, mycfg)
         d3.select('.chart6').append('text1').attr("x",0).attr("y",-20).text(newData)

    } else if (newData === 'DET') {
	 d3.selectAll('text1').remove()
         RadarChart.draw(".chart1", d1, mycfg)
         RadarChart.draw('.chart2', d2, mycfg)
         RadarChart.draw('.chart3', d33, mycfg)
         RadarChart.draw('.chart4', d4, mycfg)
         RadarChart.draw('.chart5', d5, mycfg);
         d3.select('.chart6').append('text1').attr("x",0).attr("y",-20).text(newData)
    }

    // d3.select('text').remove();

});
// var newData = d3.select(this).property('value');

// var LegendOptions = ['Celtics',newData];
// var svg3 = d3.select('svg');

var screenWidth3 = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;


// var margin = {top: 30, right: 100, bottom: 10, left: 100},
//     PSwidth = 800 - margin.left - margin.right,
//     PSheight = 500 - margin.top - margin.bottom;

// var svg3 = d3.select(".chart").append("svg")
//     .attr("width", screenWidth3)
//     .attr("height", 700)
//     .append("g")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// var legend = d3.select('svg').append('legend')
//    .attr("x", 300)
//   .attr("y", 100)
//   .attr("width", 100)
//   .attr("height", 100)
// ;


// legend.append("rect")
//   .attr("x", 200)
//   .attr("y", 25)
//   .attr("width", 10)
//   .attr("height", 10)
//   .style("fill", 'red');

// legend.append("text")
//   .attr("x", w - 65)
//   .attr("y", 25)
//   .text('ok');

var RadarChart = {

  draw: function(id, d, options){
  var cfg = {
	 radius: 5,
	 // w: 600,
	 // h: 600,
	 factor: 1,
	 factorLegend: .85,
	 levels: 3,
	 maxValue: 0,
	 radians: 2 * Math.PI,
	 opacityArea: 0.5,
	 ToRight: 5,
	 // TranslateX: 100,
	 // TranslateY: 100,
	 ExtraWidthX: 200,
	 ExtraWidthY: 200,
	 color: d3.scale.category10()
	};

	if('undefined' !== typeof options){
	  for(var i in options){
		if('undefined' !== typeof options[i]){
		  cfg[i] = options[i];
		}
	  }
	}
	cfg.maxValue = Math.max(cfg.maxValue, d3.max(d, function(i){return d3.max(i.map(function(o){return o.value;}))}));
	var allAxis = (d[0].map(function(i, j){return i.axis}));
	var total = allAxis.length;
	var radius = cfg.factor*Math.min(cfg.w/2, cfg.h/2);
	var Format = d3.format(".2n");
	d3.select(id).select("svg").remove();

	var g = d3.select(id)
			.append("svg")
			.attr("width", cfg.w+cfg.ExtraWidthX)
			.attr("height", cfg.h+cfg.ExtraWidthY)
			.append("g")
			.attr("transform", "translate(" + cfg.TranslateX + "," + cfg.TranslateY + ")");
			;

	var tooltip;

	//Circular segments
	for(var j=0; j<cfg.levels-1; j++){
	  var levelFactor = cfg.factor*radius*((j+1)/cfg.levels);
	  g.selectAll(".levels")
	   .data(allAxis)
	   .enter()
	   .append("svg:line")
	   .attr("x1", function(d, i){return levelFactor*(1-cfg.factor*Math.sin(i*cfg.radians/total));})
	   .attr("y1", function(d, i){return levelFactor*(1-cfg.factor*Math.cos(i*cfg.radians/total))-50;})
	   .attr("x2", function(d, i){return levelFactor*(1-cfg.factor*Math.sin((i+1)*cfg.radians/total));})
	   .attr("y2", function(d, i){return levelFactor*(1-cfg.factor*Math.cos((i+1)*cfg.radians/total))-50;})
	   .attr("class", "line")
	   .style("stroke", "white")
	   .style("stroke-opacity", "0.6")
	   .style("stroke-width", "0.6px")
	   .attr("transform", "translate(" + (cfg.w/2-levelFactor) + ", " + (cfg.h/2-levelFactor) + ")");
	}

	//Text indicating at what % each level is
	for(var j=0; j<cfg.levels; j++){
	  var levelFactor = cfg.factor*radius*((j+1)/cfg.levels);
	  g.selectAll(".levels")
	   .data([1]) //dummy data
	   .enter()
	   .append("svg:text")
	   .attr("x", function(d){return levelFactor*(1-cfg.factor*Math.sin(0));})
	   .attr("y", function(d){return levelFactor*(1-cfg.factor*Math.cos(0))-50;})
	   .attr("class", "legend")
	   .style("font-family", "sans-serif")
	   .style("font-size", "10px")
	   .attr("transform", "translate(" + (cfg.w/2-levelFactor + cfg.ToRight) + ", " + (cfg.h/2-levelFactor) + ")")
	   .attr("fill", "#fff")
	   .text(Format((j+1)*cfg.maxValue/cfg.levels));
	}

	series = 0;


	var axis = g.selectAll(".axis")
			.data(allAxis)
			.enter()
			.append("g")
			.attr("class", "axis");

	axis.append("line")
		.attr("x1", cfg.w/2)
		.attr("y1", cfg.h/2 - 50)
		.attr("x2", function(d, i){return cfg.w/2*(1-cfg.factor*Math.sin(i*cfg.radians/total));})
		.attr("y2", function(d, i){return cfg.h/2*(1-cfg.factor*Math.cos(i*cfg.radians/total))-50;})
		.attr("class", "line")
		.style("stroke", "white")
		.style("stroke-width", "2px");

	axis.append("text")
		.attr("class", "legend")
		.text(function(d){return d})
		.style("font-family", "Helvetica")
		.style("font-size", "11px")
		.style("text-shadow", "0px 0px 0px #fff")
		.attr("fill", "#fff")
		.attr("text-anchor", "middle")
		.attr("dx", "-0.5em")
		.attr("dy", "2em")
		.attr("transform", function(d, i){return "translate(0, -10)"})
		.attr("x", function(d, i){return cfg.w/2*(1-cfg.factorLegend*Math.sin(i*cfg.radians/total))-60*Math.sin(i*cfg.radians/total);})
		.attr("y", function(d, i){return cfg.h/2*(1-Math.cos(i*cfg.radians/total))-20*Math.cos(i*cfg.radians/total)-53;});


	d.forEach(function(y, x){
	  dataValues = [];
	  g.selectAll(".nodes")
		.data(y, function(j, i){
		  dataValues.push([
			cfg.w/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total)),
			cfg.h/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))-50
		  ]);
		});
	  dataValues.push(dataValues[0]);
	  g.selectAll(".area")
					 .data([dataValues])
					 .enter()
					 .append("polygon")
					 .attr("class", "radar-chart-serie"+series)
					 .style("stroke-width", "2px")
					 .style("stroke", "cfg.color(series)")
					 .attr("points",function(d) {
						 var str="";
						 for(var pti=0;pti<d.length;pti++){
							 str=str+d[pti][0]+","+d[pti][1]+" ";
						 }
						 return str;
					  })
					 .style("fill", function(j, i){return cfg.color(series)})
					 .style("fill-opacity", cfg.opacityArea)
					 .on('mouseover', function (d){
										z = "polygon."+d3.select(this).attr("class");
										g.selectAll("polygon")
										 .transition(200)
										 .style("fill-opacity", 0.1);
										g.selectAll(z)
										 .transition(200)
										 .style("fill-opacity", .7);
									  })
					 .on('mouseout', function(){
										g.selectAll("polygon")
										 .transition(200)
										 .style("fill-opacity", cfg.opacityArea);
					 });
	  series++;
	});
	series=0;


	d.forEach(function(y, x){
	  g.selectAll(".nodes")
		.data(y).enter()
		.append("svg:circle")
		.attr("class", "radar-chart-serie"+series)
		.attr('r', cfg.radius)
		.attr("alt", function(j){return Math.max(j.value, 0)})
		.attr("cx", function(j, i){
		  dataValues.push([
			cfg.w/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total)),
			cfg.h/2*(1-(parseFloat(Math.max(j.value, 0))/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))
		]);
		return cfg.w/2*(1-(Math.max(j.value, 0)/cfg.maxValue)*cfg.factor*Math.sin(i*cfg.radians/total));
		})
		.attr("cy", function(j, i){
		  return cfg.h/2*(1-(Math.max(j.value, 0)/cfg.maxValue)*cfg.factor*Math.cos(i*cfg.radians/total))-50;
		})
		.attr("data-id", function(j){return j.axis})
		.style("fill", cfg.color(series)).style("fill-opacity", .9)
		.on('mouseover', function (d){
					newX =  parseFloat(d3.select(this).attr('cx')) - 10;
					newY =  parseFloat(d3.select(this).attr('cy')) - 5;

					tooltip
						.attr('x', newX)
						.attr('y', newY)
						.text(Format(d.value))
						.transition(200)
						.style('opacity', 1);

					z = "polygon."+d3.select(this).attr("class");
					g.selectAll("polygon")
						.transition(200)
						.style("fill-opacity", 0.1);
					g.selectAll(z)
						.transition(200)
						.style("fill-opacity", .7);
				  })
		.on('mouseout', function(){
					tooltip
						.transition(200)
						.style('opacity', 0);
					g.selectAll("polygon")
						.transition(200)
						.style("fill-opacity", cfg.opacityArea);
				  })
		.append("svg:title")
		.text(function(j){return Math.max(j.value, 0)});

	  series++;
	});
	//Tooltip
	tooltip = g.append('text')
			   .style('opacity', 0)
			   .style('font-family', 'sans-serif')
			   .style('font-size', '13px');
  }
};
