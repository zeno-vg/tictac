/*window.addEventListener("click",function(e){
	console.log("clicked at: "+e.x+", "+e.y);
});*/
//const magicSquare = [[8,1,6],[3,5,7],[4,9,2]];
var player1Symbol = 'X';
var player2Symbol = 'O';
var p1Turn = true;
var buttonGrid = {rows:3,columns:3};
var gameButtons = document.getElementById("gameButtons");
document.getElementById("resetButton").addEventListener("click",resetGame);
for(var r=0;r!=buttonGrid.rows;r++){
	var cDiv = document.createElement("div");
	for(var c=0;c!=buttonGrid.columns;c++){
		var nb = document.createElement("button");
		nb.style="vertical-align: top";
		//nb.value.test="test";
		//nb.value={row:"r",col:c};
		nb.id=r+","+c;
		nb.innerHTML="";
		//nb.appendChild(document.createTextNode(""));
		nb.style.height="50px";
		nb.style.width="70px";
		cDiv.appendChild(nb);
	}
	gameButtons.appendChild(cDiv);
}
gameButtons.addEventListener("click",function(e){
	var targetButton = e.target;
	if(targetButton.innerHTML!==player1Symbol&&targetButton.innerHTML!==player2Symbol){
		var currPlayerSymbol;
		if(p1Turn){
			currPlayerSymbol=player1Symbol;
		}else{
			currPlayerSymbol=player2Symbol;
		}
		targetButton.innerHTML=currPlayerSymbol;
		//targetButton.value=currPlayerSymbol;
		console.log(targetButton.value.test);
		//switches turns
		p1Turn=!p1Turn;
	}else{
		console.log("Invalid move, try again.");
	}
	if(checkWin(currPlayerSymbol)){
		console.log("A win has been detected");
	}
	//moves[targetButton.id.substring(0,markerPos)[targetButton.id.substring(markerPos+1)]]="X"
});
//console.log(buttonGrid.rows*buttonGrid.columns);
window.addEventListener("keypress",function(e){
	console.log(e.key);
});
//searches the parent element for child elements whose id is equal to search id, and filters out undefined elements that may vary 
//by browser
function searchChildForId(parent,searchId){
	for(var x=0;x!=parent.childNodes.length;++x){
		if(typeof parent.childNodes[x]!=='undefined'&&parent.childNodes[x].id==searchId){
			return x;
		}
	}
	return -1;
}
function resetGame(){
	var parent = gameButtons;
	for(var x=0;x!=parent.childNodes.length;++x){
		if(typeof parent.childNodes[x]!=='undefined'){
			for(var xi=0;xi!=parent.childNodes[x].childNodes.length;++xi){
				//parent.childNodes[x].childNodes[xi].value="";
				parent.childNodes[x].childNodes[xi].innerHTML = "";
			}
		}
	}
	p1Turn=true;
	console.log("Reseting the game");
}
function validIndex(parent,i){
	var counterValid=0;
	var counterReturn=0;
	while(counterValid!=i){
		if(typeof parent.childNodes[counterReturn]!=='undefined'){
			++counterValid;
		}
		++counterReturn;
		if(counterValid>parent.childNodes.length){
			return -1;
		}
	}
	return counterReturn;
}
function getValid(parent,i){
	validIndex(parent,i)
}
function checkWin(id,currPlayerSymbol,){
	//check rows
	var correctCount=0;
	var markerPos = Number(String(id).indexOf(','));
	var x =	Number(id.substring(0,markerPos));
	var y = Number(id.substring(markerPos+1));
	if((x==0||x==2)&&(y==0||y==2)){

	}
	for(var x=0;x!=buttonGrid.rows;x++){
		if(//parent.childNodes[validIndex(gameButtons.childNodes[x])]){

		}
		return true;
	}
	/*This version would work but having it only look at valid moves based upon where the last one was placed would be more efficent
	for(var x=0;x!=gameButtons.childNodes.length;x++){
		if(typeof gameButtons.childNodes[x]!=='undefined'){
			for(var xi=0;xi!=gameButtons.childNodes[x].length;++xi){
				if(typeof gameButtons.childNodes[x].childNodes[xi]!=='undefined'){
					if(gameButtons.childNodes[x].childNodes[xi].innerHTML==currPlayerSymbol){
						++correctCount;
					}	
				}
			}
			if(correctCount==3){
				return true;
			}else{
				correctCount=0;
			}
		}
	}
	for(var x=0;x!=)
	*/
	return false;
}