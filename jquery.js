var playing = false;
var score;
var trialsLeft;
var step;
var action; //set interval function
var fruits = ['banana','cherry','orange','peach','Pineapple','watermelon'];

$(function(){
    
//click on start reset button
$("#startreset").click(function(){

  //we are playing
    if(playing == true){
       //reload page
        location.reload();
       }else{

          //we are not playing
           playing = true; //game initiated

           // set score to 0
           score = 0; //set score to 0
           $("#scorevalue").html(score);

           //show trials left
           $("#trialsLeft").show();
           trialsLeft = 3;
          addHearts();

           //hide game over box
           $("#gameover").hide();

           //change button text to reset game
           $("#startreset").html("Reset Game");

                //start sending fruits
           startAction();
       }
});

$("#fruit1").mouseover(function(){
   score++;
    $("#scorevalue").html(score);//updateing score
    
    $("#slicesound")[0].play();//play sound
    
    //stop fruit 
    clearInterval(action);
//    
    //hide fruit
    $("#fruit1").hide("explode", 500);//slice fruit
//    
    //send a new fruit
    setTimeout(startAction, 500);
});

//slice fruit
    //play sound
    //explode fruit




//functions

function addHearts(){
    $("#trialsLeft").empty();
   for(i = 0; i < trialsLeft; i++){ 
       $("#trialsLeft").append('<img src="images/hearts.png" class="life">');
   }
}

//start sending fruits


function startAction(){
    
    //generate a fruit
    $("#fruit1").show();
    
    chooseFruit();//chose a random fruit
    $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top':-50});
    //random position
    
    //to generate a random step
    step = 1+ Math.round(5*Math.random()); //changing the step
    
    // Move fruit down one step every 10ms
    action = setInterval(function(){
        
        //move fruit by one step
        $("#fruit1").css('top', $("#fruit1").position().top + step); 
        
        
        //check if fruit is too low
        if($("#fruit1").position().top> $("#fruitContainer").height()){
              //check if we have any trials left
            if(trialsLeft > 1){
               //generate a fruit
    $("#fruit1").show();
    
    chooseFruit();//chose a random fruit
    $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top':-50});
    //random position
    
    //to generate a random step
    step = 1+ Math.round(5*Math.random()); //changing the step
                  
                   //reduce trials by 1
                   trialsLeft --;
                   
                   //populate trialsLeft box
                   addHearts();
               }else{ // game over
                   playing = false; // we are not playing anymore
                   
                   $("#startreset").html("Start Game"); //change button to start Game
                   
                   $("#gameover").show();
                   $("#gameover").html('<p>Game Over!</p><p>Your score is '+ score +'</p>');
                    $("#trialsLeft").hide(); 
                   stopAction();
               }
           }
    }, 10);
    
}

//generate a random fruit

function chooseFruit(){
    $("#fruit1").attr('src', 'images/' + fruits[Math.round(5*Math.random())] +'.png');
}

//Stop dropping fruits
function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}
    
    });