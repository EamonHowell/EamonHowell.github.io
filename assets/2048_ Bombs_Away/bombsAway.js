Allowed = [2,4]  //The allowed values that the game places in the game
dimension = 4
gamBord = [
	[null,null,null,null],
	[null,null,null,null],
	[null,null,null,null],
	[null,null,null,null]
]
var permScore = 0

/*
gamBord = [
	[2, 4, 8, 16],
	[32, 64, 128, 256],
	[512, 1024, 2048, 2],
	[2, 2, 2, 2]
  ]
	*/

  //On document load -> call reset
console.log(gamBord)
function reset(){
	Allowed = [2,4]  //The allowed values that the game places in the game
	dimension = 4
	gamBord = [
		[null,null,null,null],
		[null,null,null,null],
		[null,null,null,null],
		[null,null,null,null]
	]
	var permScore = 0

	add_value()
	add_value()

	console.log(gamBord)
	updateBord()
	bombUsed = false
	document.getElementById("bombButton").classList.remove('disabled');
	document.getElementById("bombButton").disabled = false;
}
	//Go through all game cells, and remove their inner html, and reset the background color
	add_value()
	add_value()

	console.log(gamBord)
	updateBord()
	document.addEventListener('keydown', function(event) {
		if (event.key === 'ArrowUp') {
			console.log("heard")
			up_click();
			if(!checkLose()){
				if(bombUsed){
					document.getElementById("lose").textContent="You Lose! Click Reset to try again"
				}else{
					alert("Automatically using your bomb to prevent a loss.")
					activateBomb()
				}
			}
		}
		if (event.key === 'ArrowDown') {
			console.log("heard")
			down_click();
			if(!checkLose()){
				if(bombUsed){
					document.getElementById("lose").textContent="You Lose! Click Reset to try again"
				}else{
					alert("Automatically using your bomb to prevent a loss.")
					activateBomb()
				}
			}
		}
		if (event.key === 'ArrowLeft') {
			console.log("heard")
			left_click();
			if(!checkLose()){
				if(bombUsed){
					document.getElementById("lose").textContent="You Lose! Click Reset to try again"
				}else{
					alert("Automatically using your bomb to prevent a loss.")
					activateBomb()
				}
			}
		}
		if (event.key === 'ArrowRight') {
			console.log("heard")
			right_click();
			if(!checkLose()){
				if(bombUsed){
					document.getElementById("lose").textContent="You Lose! Click Reset to try again"
				}else{
					alert("Automatically using your bomb to prevent a loss.")
					activateBomb()
				}
			}
		}
		if (event.key.toLowerCase() === 'b') {
			activateBomb();
		}
	});

function add_value(){
	let empies = []
	for (row = 0; row < dimension; row++){
		for (cell = 0; cell < dimension; cell++){
			if (gamBord[row][cell] == null){
				empies.push([row,cell])
			}
		}

	}
	console.log(empies)
	if(empies.length>0){
		let sel = Math.floor(Math.random() * empies.length);
		console.log(sel)
		let val = Math.floor(Math.random() * 2);
		if(val == 0){
			val = 2
		}
		else{
			val = 4
		}
		gamBord[empies[sel][0]][empies[sel][1]] = val;
	}
}
function updateBord(){
	let scor = permScore
	for (row = 0; row < dimension; row++){
		for (cell = 0; cell < dimension; cell++){
			
			inval = gamBord[row][cell]
			scor = scor+inval
			if(inval > 2048){
				permScore += inval
				inval = null
				gamBord[row][cell] = null
				
			}
				if(inval == null){
					inval = ""
				}
			

			document.getElementById("cell"+(row+1)+(cell+1)).innerHTML = "" + inval
			document.getElementById("cell"+(row+1)+(cell+1)).className = "cell" + inval
			

		}

	}
	document.getElementById("score").textContent="score = "+scor
	console.log(gamBord)

}
function floorBord(){
	for (row = 0; row < dimension; row++){
		for (cell = 0; cell < dimension; cell++){
			
			inval = gamBord[row][cell]
				if(Array.isArray(inval)){
					gamBord[row][cell] = inval[0]
				}

		}

	}
}
	//Pick a random number in the allowed values
	//Pick a random row and column value
	//While the cell picked is not empty
	//	Pick again
	//Current_board[row][column] = value



function right_click() {
	for (possUp = 0; possUp < 4; possUp++){
		for (row = 0; row < dimension; row++){
			for (cell = dimension-2; cell >= 0; cell--){
				curCel = gamBord[row][cell]
				console.log(curCel)
				if (curCel != null && cell<dimension){
					abvCel = gamBord[row][cell+1]
					if(abvCel == null){
						gamBord[row][cell+1] = curCel
						gamBord[row][cell] = null
					}
					if(abvCel == curCel){
						gamBord[row][cell+1] = [abvCel+curCel,0]
						gamBord[row][cell] = null
					}
				}
			}

		}
	}
	floorBord()
	add_value()
	updateBord()

}
	// logic to move the values around
	//Add_value
	//Update_color
	//test_if_win/end

function up_click() {
	for (possUp = 0; possUp < 4; possUp++){
		for (row = 1; row < dimension; row++){
			for (cell = 0; cell < dimension; cell++){
				curCel = gamBord[row][cell]
				if (curCel != null && row>0){
					abvCel = gamBord[row-1][cell]
					if(abvCel == null){
						gamBord[row-1][cell] = curCel
						gamBord[row][cell] = null
					}
					if(abvCel == curCel){
						gamBord[row-1][cell] = [abvCel+curCel,0]
						gamBord[row][cell] = null
					}
				}
			}

		}
	}
	floorBord()
	add_value()
	updateBord()

}

// logic to move the values around

	//	Add_value

//	Update_color
//       test_if_win/end

function down_click() {
	for (possUp = 0; possUp < 4; possUp++){
		for (row = dimension-2; row >= 0; row--){
			for (cell = 0; cell < dimension; cell++){
				curCel = gamBord[row][cell]
				if (curCel != null && row<3){
					blwCel = gamBord[row+1][cell]
					if(blwCel == null){
						gamBord[row+1][cell] = curCel
						gamBord[row][cell] = null
					}
					if(blwCel == curCel){
						gamBord[row+1][cell] = [blwCel+curCel,0]
						gamBord[row][cell] = null
					}
				}
			}

		}
	}
	floorBord()
	add_value()
	updateBord()

}
	// logic to move the values around
//	Add_value
//	Update_color
//	test_if_win/end

function left_click() {
	for (possUp = 0; possUp < 4; possUp++){
		for (row = 0; row < dimension; row++){
			for (cell = 1; cell < dimension; cell++){
				curCel = gamBord[row][cell]
				if (curCel != null && cell>0){
					abvCel = gamBord[row][cell-1]
					if(abvCel == null){
						gamBord[row][cell-1] = curCel
						gamBord[row][cell] = null
					}
					if(abvCel == curCel){
						gamBord[row][cell-1] = [abvCel+curCel,0]
						gamBord[row][cell] = null
					}
				}
			}

		}
	}
	floorBord()
	add_value()
	updateBord()

	
}
	// logic to move the values around
//	Add_value
//	Update_color
//	test_if_win/end

//test_if_win/end
//	For all values, if final value exists, do something
//	Else if no more moves, then game ended and do something
	
	

function checkLose(){
	let prevBord = JSON.parse(JSON.stringify(gamBord));
	left_click()
	if (JSON.stringify(prevBord) != JSON.stringify(gamBord)){
		gamBord = prevBord
		updateBord()
		return true
	}
	up_click()
	if (JSON.stringify(prevBord) != JSON.stringify(gamBord)){
		gamBord = prevBord
		updateBord()
		return true
	}
	right_click()
	if (JSON.stringify(prevBord) != JSON.stringify(gamBord)){
		gamBord = prevBord
		updateBord()
		return true
	}
	down_click()
	if (JSON.stringify(prevBord) != JSON.stringify(gamBord)){
		gamBord = prevBord
		updateBord()
		return true
	}
	return false
}

function triggerEvent(key) {
    const event = new KeyboardEvent('keydown', { key: key });
    document.dispatchEvent(event);
}

let bombUsed = false;

function activateBomb() {
    if (bombUsed) {
        alert("Bomb already used!");
        return;
    }
	document.getElementById("bombButton").classList.add('disabled');
    document.getElementById("bombButton").disabled = true;
    bombUsed = true;
	document.body.style.backgroundColor = "red";
    document.querySelector('h3').textContent = "Select a bomb point";

    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', bombHandler);
    });
	
	document.querySelectorAll('.cell2').forEach(cell => {
        cell.addEventListener('click', bombHandler);
    });

	document.querySelectorAll('.cell4').forEach(cell => {
        cell.addEventListener('click', bombHandler);
    });

	document.querySelectorAll('.cell8').forEach(cell => {
        cell.addEventListener('click', bombHandler);
    });

	document.querySelectorAll('.cell16').forEach(cell => {
        cell.addEventListener('click', bombHandler);
    });

	document.querySelectorAll('.cell32').forEach(cell => {
        cell.addEventListener('click', bombHandler);
    });

	document.querySelectorAll('.cell64').forEach(cell => {
        cell.addEventListener('click', bombHandler);
    });

	document.querySelectorAll('.cell128').forEach(cell => {
        cell.addEventListener('click', bombHandler);
    });

	document.querySelectorAll('.cell256').forEach(cell => {
        cell.addEventListener('click', bombHandler);
    });

	document.querySelectorAll('.cell512').forEach(cell => {
        cell.addEventListener('click', bombHandler);
    });

	document.querySelectorAll('.cell1024').forEach(cell => {
        cell.addEventListener('click', bombHandler);
    });

	document.querySelectorAll('.cell2048').forEach(cell => {
        cell.addEventListener('click', bombHandler);
    });
}

function bombHandler(event) {
    const cellId = event.target.id;
    const row = parseInt(cellId[4]) - 1;
    const col = parseInt(cellId[5]) - 1;

    removePlus(row, col);

	document.body.style.backgroundColor = "";
	document.querySelector('h3').textContent = "Hello and welcome to 2048: Bomb's Away";
    
    document.querySelectorAll('.cell').forEach(cell => {
        cell.removeEventListener('click', bombHandler);
    });
	
	document.querySelectorAll('.cell2').forEach(cell => {
        cell.removeEventListener('click', bombHandler);
    });

	document.querySelectorAll('.cell4').forEach(cell => {
        cell.removeEventListener('click', bombHandler);
    });

	document.querySelectorAll('.cell8').forEach(cell => {
        cell.removeEventListener('click', bombHandler);
    });

	document.querySelectorAll('.cell16').forEach(cell => {
        cell.removeEventListener('click', bombHandler);
    });

	document.querySelectorAll('.cell32').forEach(cell => {
        cell.removeEventListener('click', bombHandler);
    });

	document.querySelectorAll('.cell64').forEach(cell => {
        cell.removeEventListener('click', bombHandler);
    });

	document.querySelectorAll('.cell128').forEach(cell => {
        cell.removeEventListener('click', bombHandler);
    });

	document.querySelectorAll('.cell256').forEach(cell => {
        cell.removeEventListener('click', bombHandler);
    });

	document.querySelectorAll('.cell512').forEach(cell => {
        cell.removeEventListener('click', bombHandler);
    });

	document.querySelectorAll('.cell1024').forEach(cell => {
        cell.removeEventListener('click', bombHandler);
    });

	document.querySelectorAll('.cell2048').forEach(cell => {
        cell.removeEventListener('click', bombHandler);
    });

    updateBord();
}

function removePlus(row, col) {
    const positions = [
        [row, col],
        [row - 1, col],
        [row + 1, col],
        [row, col - 1],
        [row, col + 1]
    ];

    positions.forEach(([r, c]) => {
        if (r >= 0 && r < dimension && c >= 0 && c < dimension) {
            gamBord[r][c] = null;
        }
    });
}