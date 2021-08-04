const fieldCords = [
    {x:0, y:0, pieceX:0, pieceY: 0},
    {x:1, y:0, pieceX:50, pieceY: 0},
    {x:2, y:0, pieceX:100, pieceY: 0},
    {x:3, y:0, pieceX:150, pieceY: 0},
    {x:4, y:0, pieceX:200, pieceY: 0},
    {x:5, y:0, pieceX:250, pieceY: 0},
    {x:6, y:0, pieceX:300, pieceY: 0},
    {x:7, y:0, pieceX:350, pieceY: 0},
    {x:8, y:0, pieceX:400, pieceY: 0},
    {x:9, y:0, pieceX:450, pieceY: 0},
    {x:0, y:1, pieceX:0, pieceY: 50},
    {x:1, y:1, pieceX:50, pieceY: 50},
    {x:2, y:1, pieceX:100, pieceY: 50},
    {x:3, y:1, pieceX:150, pieceY: 50},
    {x:4, y:1, pieceX:200, pieceY: 50},
    {x:5, y:1, pieceX:250, pieceY: 50},
    {x:6, y:1, pieceX:300, pieceY: 50},
    {x:7, y:1, pieceX:350, pieceY: 50},
    {x:8, y:1, pieceX:400, pieceY: 50},
    {x:9, y:1, pieceX:450, pieceY: 50},
    {x:0, y:2, pieceX:0, pieceY: 100},
    {x:1, y:2, pieceX:50, pieceY: 100},
    {x:2, y:2, pieceX:100, pieceY: 100},
    {x:3, y:2, pieceX:150, pieceY: 100},
    {x:4, y:2, pieceX:200, pieceY: 100},
    {x:5, y:2, pieceX:250, pieceY: 100},
    {x:6, y:2, pieceX:300, pieceY: 100},
    {x:7, y:2, pieceX:350, pieceY: 100},
    {x:8, y:2, pieceX:400, pieceY: 100},
    {x:9, y:2, pieceX:450, pieceY: 100},
    {x:0, y:3, pieceX:0, pieceY: 150},
    {x:1, y:3, pieceX:50, pieceY: 150},
    {x:2, y:3, pieceX:100, pieceY: 150},
    {x:3, y:3, pieceX:150, pieceY: 150},
    {x:4, y:3, pieceX:200, pieceY: 150},
    {x:5, y:3, pieceX:250, pieceY: 150},
    {x:6, y:3, pieceX:300, pieceY: 150},
    {x:7, y:3, pieceX:350, pieceY: 150},
    {x:8, y:3, pieceX:400, pieceY: 150},
    {x:9, y:3, pieceX:450, pieceY: 150},
    {x:0, y:4, pieceX:0, pieceY: 200},
    {x:1, y:4, pieceX:50, pieceY: 200},
    {x:2, y:4, pieceX:100, pieceY: 200},
    {x:3, y:4, pieceX:150, pieceY: 200},
    {x:4, y:4, pieceX:200, pieceY: 200},
    {x:5, y:4, pieceX:250, pieceY: 200},
    {x:6, y:4, pieceX:300, pieceY: 200},
    {x:7, y:4, pieceX:350, pieceY: 200},
    {x:8, y:4, pieceX:400, pieceY: 200},
    {x:9, y:4, pieceX:450, pieceY: 200},
    {x:0, y:5, pieceX:0, pieceY: 250},
    {x:1, y:5, pieceX:50, pieceY: 250},
    {x:2, y:5, pieceX:100, pieceY: 250},
    {x:3, y:5, pieceX:150, pieceY: 250},
    {x:4, y:5, pieceX:200, pieceY: 250},
    {x:5, y:5, pieceX:250, pieceY: 250},
    {x:6, y:5, pieceX:300, pieceY: 250},
    {x:7, y:5, pieceX:350, pieceY: 250},
    {x:8, y:5, pieceX:400, pieceY: 250},
    {x:9, y:5, pieceX:450, pieceY: 250},
    {x:0, y:6, pieceX:0, pieceY: 300},
    {x:1, y:6, pieceX:50, pieceY: 300},
    {x:2, y:6, pieceX:100, pieceY: 300},
    {x:3, y:6, pieceX:150, pieceY: 300},
    {x:4, y:6, pieceX:200, pieceY: 300},
    {x:5, y:6, pieceX:250, pieceY: 300},
    {x:6, y:6, pieceX:300, pieceY: 300},
    {x:7, y:6, pieceX:350, pieceY: 300},
    {x:8, y:6, pieceX:400, pieceY: 300},
    {x:9, y:6, pieceX:450, pieceY: 300},
    {x:0, y:7, pieceX:0, pieceY: 350},
    {x:1, y:7, pieceX:50, pieceY: 350},
    {x:2, y:7, pieceX:100, pieceY: 350},
    {x:3, y:7, pieceX:150, pieceY: 350},
    {x:4, y:7, pieceX:200, pieceY: 350},
    {x:5, y:7, pieceX:250, pieceY: 350},
    {x:6, y:7, pieceX:300, pieceY: 350},
    {x:7, y:7, pieceX:350, pieceY: 350},
    {x:8, y:7, pieceX:400, pieceY: 350},
    {x:9, y:7, pieceX:450, pieceY: 350},
    {x:0, y:8, pieceX:0, pieceY: 400},
    {x:1, y:8, pieceX:50, pieceY: 400},
    {x:2, y:8, pieceX:100, pieceY: 400},
    {x:3, y:8, pieceX:150, pieceY: 400},
    {x:4, y:8, pieceX:200, pieceY: 400},
    {x:5, y:8, pieceX:250, pieceY: 400},
    {x:6, y:8, pieceX:300, pieceY: 400},
    {x:7, y:8, pieceX:350, pieceY: 400},
    {x:8, y:8, pieceX:400, pieceY: 400},
    {x:9, y:8, pieceX:450, pieceY: 400},
    {x:0, y:9, pieceX:0, pieceY: 450},
    {x:1, y:9, pieceX:50, pieceY: 450},
    {x:2, y:9, pieceX:100, pieceY: 450},
    {x:3, y:9, pieceX:150, pieceY: 450},
    {x:4, y:9, pieceX:200, pieceY: 450},
    {x:5, y:9, pieceX:250, pieceY: 450},
    {x:6, y:9, pieceX:300, pieceY: 450},
    {x:7, y:9, pieceX:350, pieceY: 450},
    {x:8, y:9, pieceX:400, pieceY: 450},
    {x:9, y:9, pieceX:450, pieceY: 450},
  ];

  export default fieldCords;