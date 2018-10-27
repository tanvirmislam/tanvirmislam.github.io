var row = 100;
var col = 100;

var canvas          = document.querySelector('#canvas'); 
var widthPercent    = 80;
var heightPercent   = 30;
canvas.style.width  = String(widthPercent)  + '%';
canvas.style.height = String(heightPercent) + '%';

var cellWidth    = String(Math.ceil((canvas.offsetWidth  * (widthPercent/100))  / col)) + 'px';
var cellHeight   = String(Math.ceil((canvas.offsetHeight * (widthPercent/100))  / row)) + 'px';    
//var cellWidth  = String(Math.ceil((2/467)*canvas.offsetWidth)) + 'px';
//var cellHeight = String(Math.ceil((2/378)*canvas.offsetHeight)) + 'px';    


var b1 = createArray();
var b2 = createArray();

var currentBoard = 'b1';
var currentPtr = b1;
var nextPtr    = b2;

var isMousePressed = false;	// Detect continuous mouse press

createTable(row, col);

var interval;				// set and clear interval
var lockStart = true;		// Prevent overlapping calls to startLife


//-------------------------------------------------------------------------------------------------------
//  Add Actions
//-------------------------------------------------------------------------------------------------------
var startButton = document.querySelector('#startButton');
startButton.addEventListener('click', function() {
    if (lockStart == true) {
    	lockStart = false;
    	interval = setInterval(startLife, 50);
    	//startLife();
    }
    
});

var stopButton = document.querySelector('#stopButton');
stopButton.addEventListener('click', function() {
    lockStart = true;
    clearInterval(interval);
});

var clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', function() {
    clearLife();
});

var gliderGunSetup = document.querySelector('#gliderGunSetup');
gliderGunSetup.addEventListener('click', function() { addPattern('gliderGun'); });

var spaceShipSetup = document.querySelector('#spaceShipSetup');
spaceShipSetup.addEventListener('click', function() { addPattern('spaceShip'); });

var explosionSetup = document.querySelector('#explostionSetup');
explostionSetup.addEventListener('click', function() { addPattern('explosion'); });
//-------------------------------------------------------------------------------------------------------



//-------------------------------------------------------------------------------------------------------
//  Life Functions
//-------------------------------------------------------------------------------------------------------
function startLife() {
	if (lockStart == false) {
		lockStart = true;
	    evolve(currentPtr, nextPtr);
	        
	    if (currentBoard == 'b1') {
	        currentBoard = 'b2';
	        currentPtr = b2;
	        nextPtr    = b1;
	    }
	    else {
	        currentBoard = 'b1';
	        currentPtr = b1;
	        nextPtr    = b2;
	    }
	    lockStart = false;
	}
}

function evolve(current, next) {
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            var liveCount = liveNeigbors(i, j, current);

            if (current[i][j] == 0) {
                //console.log("Live count of (" + i + "," + j + "): " + liveCount);
                if (liveCount == 3) {
                    //console.log("Creating a new cell at (" + i + "," +  j + ")");
                    next[i][j] = 1;
                    getSquare(i,j).style.backgroundColor = 'black';
                }
                else {	
                    next[i][j] = 0;
                    getSquare(i,j).style.backgroundColor = 'white';
                }
            }
            else if (current[i][j] == 1) {
                //console.log("Counted: " + liveCount);
                if (liveCount < 2 || liveCount > 3) {
                    //console.log("Deleting a cell at (" + i + "," +  j + ")");
                    next[i][j] = 0;
                    getSquare(i,j).style.backgroundColor = 'white';
                }
                else {
                    //console.log("Keeping the cell alive at (" + i + "," +  j + ")");
                    next[i][j] = 1;
                    getSquare(i,j).style.backgroundColor = 'black';
                }
            }
        }
    }
}

function liveNeigbors(i, j, board) {
    //console.log("counting liveNeigbors");

    var prevRow = ((i-1) < 0 ? row-1 : i-1);
    var nextRow = (i+1) % row;
    var prevCol = ((j-1) < 0 ? col-1 : j-1);
    var nextCol = (j+1) % col;

    var xCoord = [prevCol, prevCol, prevCol, j      , j      , nextCol, nextCol, nextCol];
    var yCoord = [prevRow, i      , nextRow, prevRow, nextRow, prevRow, i      , nextRow];

    var count = 0;
    for (var k = 0; k < 8; k++) {
        if (board[yCoord[k]][xCoord[k]] == 1) {
            count++;
        }
    }

    return count;
}
//-------------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------------
//  Initiation Functions
//-------------------------------------------------------------------------------------------------------
function createArray() {
    var ara = [];
    for (var i = 0; i < row; i++) {
        ara[i] = [];
        for (var j = 0; j < col; j++) {
            ara[i][j] = 0;
        }
    }
    return ara;
}

function createTable(row, col) {
    var table = document.createElement('table');
    table.style.width  = '100%';
    table.style.height = '100%';
    table.style.border = '2px solid black';
    table.style.borderCollapse = 'collapse';
    
    var tbdy = document.createElement('tbody');

    for (var i = 0; i < row; i++) {
        var tr = document.createElement('tr');
        
        for (var j = 0; j < col; j++) {
            var td = document.createElement('td');

            td.id  = String(i) + '-' + String(j);
            
            td.style.width  = cellWidth;
            td.style.height = cellHeight;

            td.style.border = '1px solid black';

            td.addEventListener("click", function(e) {
               //console.log("square clicked");
                clickFunc(e);
            });

            td.addEventListener("mousedown", function(e) {
                //console.log("mouse down");
                mouseDownFunc(e);
            });

            td.addEventListener("mouseup", function(e) {
                //console.log("mouse up");
                mouseUpFunc(e);
            });

            td.addEventListener("mousemove", function(e) {
                //console.log("continuing click");
                contClickFunc(e);
            });

            tr.appendChild(td);
        }
        tbdy.appendChild(tr);
    }

    
    table.appendChild(tbdy);
    canvas.appendChild(table);

}

function createCellAt(squareId) {
    var coord  = squareId.split('-');
    var r = parseInt(coord[0]);
    var c = parseInt(coord[1]);
    
    console.log("Creatine life at (" + r + "," + c + ")");

    currentPtr[r][c] = 1;
}
//-------------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------------
//  Reset board array
//-------------------------------------------------------------------------------------------------------
function clearLife() {
    stopButton.click();
    b1 = createArray();
    b2 = createArray();
    currentBoard = 'b1';
    currentPtr   = b1;
    nextPtr      = b2;
    isMousePressed = false;
    print(b1);
}
//-------------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------------
//  Display board
//-------------------------------------------------------------------------------------------------------
function print(board) {
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (board[i][j] == 0) {
                getSquare(i,j).style.backgroundColor = 'white';
            }
            else {
                getSquare(i,j).style.backgroundColor = 'black';
            }
        }
    }
}
//-------------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------------
//  Event Action Functions
//-------------------------------------------------------------------------------------------------------
function clickFunc(event) {
    event.target.style.backgroundColor = 'black';
    createCellAt(event.target.id);
    //isMousePressed = true;
}

function mouseDownFunc(event) {
    isMousePressed = true;
}

function mouseUpFunc(event) {
    isMousePressed = false;
}

function contClickFunc(event) {
    if (isMousePressed == true) {
        event.target.style.backgroundColor = "black";
        createCellAt(event.target.id);
    }
    // var x = event.clientX;
    // var y = event.clientY;
    // var coor = "Coordinates: (" + x + "," + y + ")";
    // console.log(coor);
}


//-------------------------------------------------------------------------------------------------------
//  Utility Functions
//-------------------------------------------------------------------------------------------------------
function getSquare(i, j) {
    var square = document.getElementById(String(i)+ '-' + String(j));
    return square;
}
//-------------------------------------------------------------------------------------------------------


//-------------------------------------------------------------------------------------------------------
//  Add Pattern Function
//-------------------------------------------------------------------------------------------------------
function addPattern(pattern) {
    var lockStatus = lockStart;
    if (lockStart == false) {
        stopButton.click();
    }

    switch (pattern) {
        case 'gliderGun':    
            currentPtr[18][20] = 1;
            currentPtr[18][21] = 1;
            currentPtr[19][20] = 1;
            currentPtr[19][21] = 1;
            currentPtr[19][28] = 1;
            currentPtr[20][28] = 1;
            currentPtr[20][29] = 1;
            currentPtr[18][29] = 1;
            currentPtr[18][30] = 1;
            currentPtr[19][30] = 1;
            currentPtr[20][36] = 1;
            currentPtr[20][37] = 1;
            currentPtr[21][36] = 1;
            currentPtr[22][36] = 1;
            currentPtr[21][38] = 1;
            currentPtr[18][42] = 1;
            currentPtr[17][42] = 1;
            currentPtr[18][43] = 1;
            currentPtr[16][43] = 1;
            currentPtr[16][44] = 1;
            currentPtr[17][44] = 1;
            currentPtr[16][54] = 1;
            currentPtr[16][55] = 1;
            currentPtr[17][55] = 1;
            currentPtr[17][54] = 1;
            currentPtr[23][55] = 1;
            currentPtr[23][56] = 1;
            currentPtr[24][57] = 1;
            currentPtr[24][55] = 1;
            currentPtr[25][55] = 1;
            currentPtr[28][46] = 1;
            currentPtr[28][45] = 1;
            currentPtr[28][44] = 1;
            currentPtr[29][44] = 1;
            currentPtr[30][45] = 1;
            break;

        case 'spaceShip':
        	currentPtr[4][21] = 1;
            currentPtr[2][21] = 1;
            currentPtr[1][22] = 1;
            currentPtr[1][23] = 1;
            currentPtr[1][24] = 1;
            currentPtr[1][25] = 1;
            currentPtr[2][25] = 1;
            currentPtr[3][25] = 1;
            currentPtr[4][24] = 1;

            currentPtr[47][39] = 1;
            currentPtr[49][39] = 1;
            currentPtr[46][40] = 1;
            currentPtr[46][41] = 1;
            currentPtr[46][42] = 1;
            currentPtr[46][43] = 1;
            currentPtr[47][43] = 1;
            currentPtr[48][43] = 1;
            currentPtr[49][42] = 1;

            currentPtr[64][10] = 1;
            currentPtr[63][11] = 1;
            currentPtr[63][12] = 1;
            currentPtr[63][13] = 1;
            currentPtr[63][14] = 1;
            currentPtr[64][14] = 1;
            currentPtr[65][14] = 1;
            currentPtr[66][13] = 1;
            currentPtr[66][10] = 1;          
            break;

        case 'explosion':
            currentPtr[45][73] = 1;
            currentPtr[46][73] = 1;
            currentPtr[47][73] = 1;
            currentPtr[48][73] = 1;
            currentPtr[49][73] = 1;
            currentPtr[45][75] = 1;
            currentPtr[49][75] = 1;
            currentPtr[45][77] = 1;
            currentPtr[46][77] = 1;
            currentPtr[47][77] = 1;
            currentPtr[48][77] = 1;
            currentPtr[49][77] = 1;

            currentPtr[74][81] = 1;
            currentPtr[75][81] = 1;
            currentPtr[76][81] = 1;
            currentPtr[77][81] = 1;
            currentPtr[78][81] = 1;
            currentPtr[74][83] = 1;
            currentPtr[78][83] = 1;
            currentPtr[74][85] = 1;
            currentPtr[75][85] = 1;
            currentPtr[76][85] = 1;
            currentPtr[77][85] = 1;
            currentPtr[78][85] = 1;
            
            currentPtr[66][19] = 1;
            currentPtr[67][19] = 1;
            currentPtr[68][19] = 1;
            currentPtr[69][19] = 1;
            currentPtr[70][19] = 1;
            currentPtr[66][21] = 1;
            currentPtr[70][21] = 1;
            currentPtr[66][23] = 1;
            currentPtr[67][23] = 1;
            currentPtr[68][23] = 1;
            currentPtr[69][23] = 1;
            currentPtr[70][23] = 1;
            break;
    }
    print(currentPtr);

    if (lockStatus == false) {
        startButton.click();
    }
}
//-------------------------------------------------------------------------------------------------------
