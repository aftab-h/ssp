

// var audio1 = new Audio('audio/Future - Life Is Good (Official Music Video) ft. Drake.mp3');
// var audio2 = new Audio('audio/Future - Life Is Good (Official Music Video) ft. Drake.mp3');


var numberOfButtons = document.querySelectorAll(".buttons").length;

for (var i = 0; i < numberOfButtons; i++) {
  
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    
    var buttonInnerHTML = this.innerHTML;
      
    switch (buttonInnerHTML) {
          
        case "Play Song 1":
          var song1 = new Audio('audio/Future - Life Is Good (Official Music Video) ft. Drake.mp3');
          song1.play();
          break;
          
        case "Play Song 2":
          var song2 = new Audio('audio/Lil-Wayne-Believe-Me-Feat.-Drake.mp3');
          song2.play();
          break;
        
        default:
          console.log(buttonInnerHTML);
    }
  });
}


// document.querySelector(".buttons").addEventListener("click", function(){
//   audio1.play();
// });

