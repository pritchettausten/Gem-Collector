
// var targetNum = 62;
// var userCount = 0;
// var wins = 0;
// var losses = 0;

// var number1 = [12];
// var number2 = [8];
// var number3 = [7];
// var number4 = [5];
// var number5 = [2];

// $(document).ready(function(){
// $("number1 number2 number3 number4 number5").text(targetNum);
// for (var i = 0; i < number1.length; i++){
// 	var imageCrystal1 = $("<img>");

// 	imageCrystal1.attr("data-num", number1[i]);
// 	imageCrystal1.attr("src", "../assets/images/gemBlue.png");
// 	imageCrystal1.addClass("gemImage");
// 	$(".gems").append(imageCrystal1);
// };
$( document ).ready(function() {
    var numberToGuess = (Math.floor(Math.random() * 101 + 19));
    var counter = 0;
    var number1 = [Math.floor(Math.random() * 12 + 1)]; 
    var number2 = [Math.floor(Math.random() * 12 + 1)];
    var number3 = [Math.floor(Math.random() * 12 + 1)];
    var number4 = [Math.floor(Math.random() * 12 + 1)];
	var number5 = [Math.floor(Math.random() * 12 + 1)];
    var wins = 1;
    var losses = 1;
    $('.targetBody').text(numberToGuess);
    for (var i = 0; i < number1.length; i++){
      var imageCrystal1 = $('<img>');
      
      imageCrystal1.attr('data-num', number1[i]);
      imageCrystal1.attr('src', 'assets/images/gemBlue.png');
      imageCrystal1.addClass('gemImage blueGem');
      $('.gems').append(imageCrystal1);
    }

    for (var i=0; i< number2.length; i++){
      var imageCrystal2 = $('<img>');
      
      imageCrystal2.attr('data-num', number2[i]);
      imageCrystal2.attr('src', 'assets/images/gemGreen.png');
      imageCrystal2.addClass('gemImage greenGem');
      $('.gems').append(imageCrystal2);
    }

    for (var i=0; i< number3.length; i++){
      var imageCrystal3 = $('<img>');
      
      imageCrystal3.attr('data-num', number3[i]);
      imageCrystal3.attr('src', 'assets/images/gemOrange.png');
      imageCrystal3.addClass('gemImage orangeGem');
      $('.gems').append(imageCrystal3);
    }

    for (var i=0; i< number4.length; i++){
      var imageCrystal4 = $('<img>');
      
      imageCrystal4.attr('data-num', number4[i]);
      imageCrystal4.attr('src', 'assets/images/gemPink.png');
      imageCrystal4.addClass('gemImage pinkGem');
      $('.gems').append(imageCrystal4);
    }

    for (var i=0; i< number5.length; i++){
      var imageCrystal5 = $('<img>');
      
      imageCrystal5.attr('data-num', number5[i]);
      imageCrystal5.attr('src', 'assets/images/gemPurple.png');
      imageCrystal5.addClass('gemImage purpleGem');
      $('.gems').append(imageCrystal5);
    }

    function reset(){
      console.log("made it");
      numberToGuess = Math.floor(Math.random() * 100 + 20);
      counter = 0;      
      $('.userBody').text(counter);

      imageCrystal1.attr('data-num',(Math.floor(Math.random() * 12 + 1)));
      imageCrystal2.attr('data-num',(Math.floor(Math.random() * 12 + 1)));
      imageCrystal3.attr('data-num',(Math.floor(Math.random() * 12 + 1)));
      imageCrystal4.attr('data-num',(Math.floor(Math.random() * 12 + 1)));
      imageCrystal5.attr('data-num',(Math.floor(Math.random() * 12 + 1)));
      $('.targetBody').text(numberToGuess);
      console.log('Is it working');
    };

    $('.gemImage').on('click', function(){
      counter = counter + parseInt($(this).data('num'));
     
      $('.userBody').text(counter);
      if (counter === numberToGuess){
         $('#message').text("You Won!")
        reset();
        console.log("try it");
        $("#wins").text(wins++);
      }else if( counter > numberToGuess){
       $('#message').text("You Lost!")
        reset();
        $("#losses").text(losses++);
      }
    });
  
  });
