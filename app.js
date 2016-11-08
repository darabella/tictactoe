//
// Build a series of divs in HTML
// Check to see if HTML is Fully loaded
// Each div is controlled by javascript to display an X or O
// Is the square blank? If it is, then add an x or o
// X or O is displayed by even or odd clicks on each div
// once placed an X or O can only be displayed once
// See if x or o won


$(document).ready(function() {

    var turn = "X";

    //Set up click events on each space of the tictactoe board
    $(document).on("click", ".game-space", function() {
        //Make sure spot is empty before continuing
        if ($(this).html() === "") {
            //Change inner HTML of element we just clicked on
            $(this).html(turn);

            //Change turn based on state of "turn" variable
            if (turn === "X") {
                turn = "O";
                // Change the background color orange
                // .addClass("orange-bg");
            } else {
                turn = "X";
                // Change the background color green
                // .addClass("green-bg");
            }
        }
    });

});

// $(document).ready(function() {

// This identifies the div classes as variables
  // var mySquares = $(".col-sm-4");

// If the variable is clicked, change the HTML within the box

  // if {mySquares.on("click", function() {
  //   $(this).html("<h2> X </h2>");
  // });


// }
//   else {
//     $(this).html("<h2> O </h2>")
//   }
//
//   $("#change-red").on("click", function() {
//   $("#red-bg").css("background-color", "red");
// });

// $(document).on("click", ".my-divs", function() {
//     $(this).addClass("animate");
// });

// });
