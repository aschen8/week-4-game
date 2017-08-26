var a= 10000;
var b=100
console.log(a);
console.log(a*b);

$(document).ready(function(){

//random number generator
//# bw 19 and 120
var randomNumberGenerator= Math.floor(Math.random() *101 + 19);



//get randomNumber ID in html and append the randomNumberGenerator 
//(from line 5) to it
$('#randomNumber').text(randomNumberGenerator);

//append random numbers for each crystal bw 1 and 12
//aka random number generator for each crystal
var crys1num=Math.floor(Math.random() *11 + 1)
var crys2num=Math.floor(Math.random() *11 + 1)
var crys3num=Math.floor(Math.random() *11 + 1)
var crys4num=Math.floor(Math.random() *11 + 1)

//score counter variables
//var total score ->userTotalScore, var userLosses->numberLosses
//var userWins->numberWins
var totalScore=0;
var userLosses = 0;
var userWins = 0;

//assign variables to the ID in html
$('#numberWins').text(userWins);
$('#numberLosses').text(userLosses);


//resetting the game
function reset(){

randomNumberGenerator= Math.floor(Math.random() *101) + 19;
console.log(randomNumberGenerator);
$('#randomNumber').text(randomNumberGenerator);
crys1num=Math.floor(Math.random() *11 + 1);
crys2num=Math.floor(Math.random() *11 + 1);
crys3num=Math.floor(Math.random() *11 + 1);
crys4num=Math.floor(Math.random() *11 + 1);

totalScore=0;
$('#finalTotal').text(totalScore);

}

//adding wins from previous game to the userWins counter
function youwin(){
	alert("You Won!!!");
	userWins++;
	$('#userWins').text(userWins);
	reset();
}
//adding losses from previous game to userLosses counter
function youlose(){
	alert ("you lose!!!");
	userLosses++;
	$('#userLosses').text(userLosses);
	reset();
}

//linking the jewel clicking to the scores counting
$("#crystal1").on('click', function(){
	totalScore = totalScore+ crys1num;
	$('#userTotalScore').text(totalScore);
	if(totalScore==randomNumberGenerator){
		youwin();
    }else if(totalScore>randomNumberGenerator){
		youlose();}
})
	
$("#crystal2").on('click',function(){
	totalScore= totalScore + crys2num;
	$('#userTotalScore').text(totalScore);
	if(totalScore==randomNumberGenerator){
		youwin();
	}else if(totalScore>randomNumberGenerator){
		youlose();}
})

$("#crystal3").on('click',function(){
	totalScore = totalScore + crys3num;
	$('#userTotalScore').text(totalScore);
	if(totalScore==randomNumberGenerator){
		youwin();
	}else if(totalScore>randomNumberGenerator){
		youlose();}
})

$("#crystal4").on('click',function(){
	totalScore = totalScore + crys4num;
	$('#userTotalScore').text(totalScore);
	if(totalScore==randomNumberGenerator){
		youwin();
	}else if(totalScore>randomNumberGenerator){
		youlose();}
});
})



