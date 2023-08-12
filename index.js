var buttonColor=["red","blue","green","yellow"];

var userClickPattern=[];

var gamePattern=[];



var start=false;
var lev=0;
var klick=0;
$(document).keydown(function(){
    if(start == false)
    {
        $("h1").html("level "+lev);
        start = true;
        nextSequence();
        
    }

});


$(".container .row .btn").on("click",function(event){
    playSound(event.target.id);
    animatePress(event.target.id);

    
    userClickPattern.push(event.target.id);  



    
    if(gamePattern[klick] == userClickPattern[klick])
    {
      if(klick == gamePattern.length -1)
      {
        klick=0;
        userClickPattern=[];

      
        setTimeout(function(){
          nextSequence();
        },1000)
        // nextSequence()
      }
      else{
        klick++;
      }
      

    }
    else{
      userClickPattern=[];
      gamePattern=[];
      start = false;
      klick =0;
      lev =0;

      //gamereover code
      playSound("wrong");

      $("body").addClass("red");
      setTimeout(function () {
        $("body").removeClass("red");
      }, 200);

      $("h1").html("Game Over, Pressed any Key to Start the Game");

    }
    // console.log(event.target.id);
 
     
});







function nextSequence(){

 
  lev++;
  $("h1").html("level "+lev);
  var randomNumber=Math.floor(Math.random()*4);


  var randomChoosenColor=buttonColor[randomNumber];

  gamePattern.push(randomChoosenColor);



  $(  "#"+randomChoosenColor).fadeOut(100).fadeIn(100);
  // console.log(randomChoosenColor);
     
    

    

}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
  
  function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }





