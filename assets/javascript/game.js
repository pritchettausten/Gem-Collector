$(document).ready(function() {

	var number1 = 0;
    var number2 = 0;
    var number3 = 0;
    var number4 = 0;
	var number5 = 0;
	var wins = 1;
    var losses = 1;
    var counter = 0;
    var numberToGuess = (Math.floor(Math.random() * 101 + 19));
    
    startGame();

function resetNum() {

	number1 = randNumber();
	number2 = randNumber();
	number3 = randNumber();
	number4 = randNumber();
	number5 = randNumber();
}

function randNumber(){
	
	return Math.floor(Math.random() * 12) + 1;
}


function startGame(){
    
    resetNum();

    $('.targetBody').text(numberToGuess);
    
	var imageCrystal1 = $('<img>');
	  
	    imageCrystal1.attr('data-num', number1);
	    imageCrystal1.attr('src', 'assets/images/gemBlue.png');
	    imageCrystal1.addClass('gemImage blueGem');
	    $('.gems').append(imageCrystal1);
	    
	var imageCrystal2 = $('<img>');
	  
	    imageCrystal2.attr('data-num', number2);
	    imageCrystal2.attr('src', 'assets/images/gemGreen.png');
	    imageCrystal2.addClass('gemImage greenGem');
	    $('.gems').append(imageCrystal2);

	var imageCrystal3 = $('<img>');
	  
	    imageCrystal3.attr('data-num', number3);
	    imageCrystal3.attr('src', 'assets/images/gemOrange.png');
	    imageCrystal3.addClass('gemImage orangeGem');
	    $('.gems').append(imageCrystal3);

	var imageCrystal4 = $('<img>');
	  
	    imageCrystal4.attr('data-num', number4);
	    imageCrystal4.attr('src', 'assets/images/gemPink.png');
	    imageCrystal4.addClass('gemImage pinkGem');
	    $('.gems').append(imageCrystal4);

	var imageCrystal5 = $('<img>');
	  
	    imageCrystal5.attr('data-num', number5);
	    imageCrystal5.attr('src', 'assets/images/gemPurple.png');
	    imageCrystal5.addClass('gemImage purpleGem');
	    $('.gems').append(imageCrystal5);
    
	function reset(){
      
	    numberToGuess = Math.floor(Math.random() * 100 + 20);
	    counter = 0;      
	      
	    $('.userBody').text(counter);

	    imageCrystal1.attr('data-num', number1);
	    imageCrystal2.attr('data-num', number2);
	    imageCrystal3.attr('data-num', number3);
	    imageCrystal4.attr('data-num', number4);
	    imageCrystal5.attr('data-num', number5);

	    $('.targetBody').text(numberToGuess);
	      
	};
		
	    $('.gemImage').on('click', function(){
	    	counter = counter + parseInt($(this).data('num'));
	     
		    $('.userBody').text(counter);

	    	if (counter === numberToGuess){
	        	$('#message').text("You Won!")
	        	$(".gems").empty();
	        	resetNum();
	        	startGame();
	        	reset();
	        	$("#wins").text(wins++);
	      
	      	}
	      	else if(counter > numberToGuess){
	       
	   			$('#message').text("You Lost!")
	       		$(".gems").empty();
	       		resetNum();
	       		startGame();
	       		reset();
	        	$("#losses").text(losses++);
      		}
	    });
}
});
