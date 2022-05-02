// TASK 1 LOGIC

// plan:
// rock vs rock = draw
// rock vs paper = paper wins
// rock vs scissors = rock wins

// paper vs paper = draw
// paper vs rock = paper wins
// paper vs scissors = scissors win

// scissors vs scissors = draw
// scissors vs rock = rock wins
// scissors vs paper = scissors wins

// //VARIABLES
// let playerMove = "rock";
// let computerMove = "paper";

//CODE:
//
// //ROCK
// if (playerMove == "rock" && computerMove == "rock") {
//   console.log("It is a draw");
// } else if (playerMove == "rock" && computerMove == "paper") {
//   console.log("Paper wins");
// } else if (playerMove == "rock" && computerMove == "scissors") {
//   console.log("Rock wins");
// }

// //PAPER
// if (playerMove == "paper" && computerMove == "paper") {
//   console.log("It is a draw");
// } else if (playerMove == "paper" && computerMove == "rock") {
//   console.log("Paper wins");
// } else if (playerMove == "paper" && computerMove == "scissors") {
//   console.log("Scissors wins");
// }

// // //SCISSORS
// if (playerMove == "scissors" && computerMove == "scissors") {
//   console.log("It is a draw");
// } else if (playerMove == "scissors" && computerMove == "rock") {
//   console.log("Rock wins");
// } else if (playerMove == "scissors" && computerMove == "paper") {
//   console.log("Scissors wins");
// }

// // TASK 2 FUNCTIONS
// //VARIABLES
// let playerMove = "rock";
// let computerMove = "paper";
//
// CODE
//
// function getWinner(player1, player2) {
//   //ROCK
//   if (player1 == "rock" && player2 == "rock") {
//     return 0;
//   } else if (player1 == "rock" && player2 == "paper") {
//     return -1;
//   } else if (player1 == "rock" && player2 == "scissors") {
//     return 1;
//   }

//   //PAPER
//   else if (player1 == "paper" && player2 == "paper") {
//     return 0;
//   } else if (player1 == "paper" && player2 == "rock") {
//     return 1;
//   } else if (player1 == "paper" && player2 == "scissors") {
//     return -1;
//   }

//   // //SCISSORS
//   else if (player1 == "scissors" && player2 == "scissors") {
//     return 0;
//   } else if (player1 == "scissors" && player2 == "rock") {
//     return -1;
//   } else if (player1 == "scissors" && player2 == "paper") {
//     return 1;
//   }
// }

// let result = getWinner("rock", "paper");
// console.log(result);

// // // TASK 3 USER INPUT
//CODE:
//
// function getWinner(player1, player2) {
//   //ROCK
//   if (player1 == "rock" && player2 == "rock") {
//     return 0;
//   } else if (player1 == "rock" && player2 == "paper") {
//     return -1;
//   } else if (player1 == "rock" && player2 == "scissors") {
//     return 1;
//   }

//   //PAPER
//   else if (player1 == "paper" && player2 == "paper") {
//     return 0;
//   } else if (player1 == "paper" && player2 == "rock") {
//     return 1;
//   } else if (player1 == "paper" && player2 == "scissors") {
//     return -1;
//   }

//   // //SCISSORS
//   else if (player1 == "scissors" && player2 == "scissors") {
//     return 0;
//   } else if (player1 == "scissors" && player2 == "rock") {
//     return -1;
//   } else if (player1 == "scissors" && player2 == "paper") {
//     return 1;
//   }
// }

// let playerMove = prompt("Please enter your move (rock, paper or scissors:) ");
// let computerMove = "paper";

// let result = getWinner(playerMove, computerMove);
// alert(result);

// // TASK 4 COMPUTER PLAYER
// CODE
//
// function getWinner(player1, player2) {
//   //ROCK
//   if (player1 == "rock" && player2 == "rock") {
//     return 0;
//   } else if (player1 == "rock" && player2 == "paper") {
//     return -1;
//   } else if (player1 == "rock" && player2 == "scissors") {
//     return 1;
//   }

//   //PAPER
//   else if (player1 == "paper" && player2 == "paper") {
//     return 0;
//   } else if (player1 == "paper" && player2 == "rock") {
//     return 1;
//   } else if (player1 == "paper" && player2 == "scissors") {
//     return -1;
//   }

//   // //SCISSORS
//   else if (player1 == "scissors" && player2 == "scissors") {
//     return 0;
//   } else if (player1 == "scissors" && player2 == "rock") {
//     return -1;
//   } else if (player1 == "scissors" && player2 == "paper") {
//     return 1;
//   }
// }

// function getComputerMove(param1) {
//   if (param1 == 0) {
//     return "rock";
//   } else if (param1 == 1) {
//     return "paper";
//   } else {
//     return "scissors";
//   }
// }

// let playerMove = prompt("Please enter your move (rock, paper or scissors:) ");

// let randomMove = Math.floor(Math.random() * 3);
// let computerMove = getComputerMove(randomMove);
// console.log(computerMove);

// let result = getWinner(playerMove, computerMove);
// alert(result);

// // TASK 5 GAME LOOP
// PLAN
//
// The game should start by asking if the user would like to Play
// if the user states yes then the game should start
// the start is when the user is asked for their move
// the end is when the result is revealed
//   the user should be asked if they want to play again every time the result is revealed

// if the user states no then no game should play and the loop should be broken

// wanna play

// ok

// whats your move
// my move is paper
// the computers move is paper
// you both draw

// wanna play

// ok

// ok whats your move
// my move is paper
// the computers move is paper
// you both draw

// wanna play

// no

// -

//CODE:
//
// while (true) {
//   let playing = confirm("would you like to play");

//   if (playing == true) {
//     function getWinner(player1, player2) {
//       //ROCK
//       if (player1 == "rock" && player2 == "rock") {
//         return 0;
//       } else if (player1 == "rock" && player2 == "paper") {
//         return -1;
//       } else if (player1 == "rock" && player2 == "scissors") {
//         return 1;
//       }

//       //PAPER
//       else if (player1 == "paper" && player2 == "paper") {
//         return 0;
//       } else if (player1 == "paper" && player2 == "rock") {
//         return 1;
//       } else if (player1 == "paper" && player2 == "scissors") {
//         return -1;
//       }

//       // //SCISSORS
//       else if (player1 == "scissors" && player2 == "scissors") {
//         return 0;
//       } else if (player1 == "scissors" && player2 == "rock") {
//         return -1;
//       } else if (player1 == "scissors" && player2 == "paper") {
//         return 1;
//       }
//     }

//     function getComputerMove(param1) {
//       if (param1 == 0) {
//         return "rock";
//       } else if (param1 == 1) {
//         return "paper";
//       } else {
//         return "scissors";
//       }
//     }

//     let playerMove = prompt(
//       "Please enter your move (rock, paper or scissors:) "
//     );

//     let randomMove = Math.floor(Math.random() * 3);
//     let computerMove = getComputerMove(randomMove);
//     console.log(computerMove);

//     let result = getWinner(playerMove, computerMove);
//     alert(result);
//   } else {
//     break;
//   }
// }

// // TASK 6 SCORES
// PLAN
//
// keep track of how many games have been played
// - create a variable called gamesPlayed
// - increment by +1

// keep track of how many wins, losses and draws
// -create variables with those names
// -increment by +1 if the score is such and such, this code has already been written just add increment operators for corresponding variable names to the code
//
//
//CODE:
//
// let gamesPlayed = 0;
// let wins = 0;
// let losses = 0;
// let draws = 0;

// while (true) {
//   let playing = confirm("would you like to play");

//   if (playing == true) {
//     function getWinner(player1, player2) {
//       //ROCK
//       if (player1 == "rock" && player2 == "rock") {
//         draws++;
//         return 0;
//       } else if (player1 == "rock" && player2 == "paper") {
//         losses++;
//         return -1;
//       } else if (player1 == "rock" && player2 == "scissors") {
//         wins++;
//         return 1;
//       }

//       //PAPER
//       else if (player1 == "paper" && player2 == "paper") {
//         draws++;
//         return 0;
//       } else if (player1 == "paper" && player2 == "rock") {
//         wins++;
//         return 1;
//       } else if (player1 == "paper" && player2 == "scissors") {
//         losses++;
//         return -1;
//       }

//       // //SCISSORS
//       else if (player1 == "scissors" && player2 == "scissors") {
//         draws++;
//         return 0;
//       } else if (player1 == "scissors" && player2 == "rock") {
//         losses++;
//         return -1;
//       } else if (player1 == "scissors" && player2 == "paper") {
//         wins++;
//         return 1;
//       }
//     }

//     function getComputerMove(param1) {
//       if (param1 == 0) {
//         return "rock";
//       } else if (param1 == 1) {
//         return "paper";
//       } else {
//         return "scissors";
//       }
//     }

//     let playerMove = prompt(
//       "Please enter your move (rock, paper or scissors:) "
//     );

//     let randomMove = Math.floor(Math.random() * 3);
//     let computerMove = getComputerMove(randomMove);

//     let result = getWinner(playerMove, computerMove);
//     alert(result);

//     gamesPlayed++;
//     console.log("Games played: ", gamesPlayed);
//     console.log("PlayerMove: ", playerMove, " Computer move: ", computerMove);
//     console.log("wins: ", wins, " losses: ", losses, " draws: ", draws);
//   } else {
//     break;
//   }
// }
//
// // TASK 7 GET THE PLAYERS NAME USING PROMPT
// PLAN
//
// allow user to create their own username from prompt
// -have this be the first question to ask a user
// change next quesoin to include the users name
//
// //CODE:
//
// let gamesPlayed = 0;
// let wins = 0;
// let losses = 0;
// let draws = 0;

// let userName = prompt("Please enter your user name: ");

// while (true) {
//   let playing = confirm(`${userName}, are you reaady to play: `);

//   if (playing == true) {
//     function getWinner(player1, player2) {
//       //ROCK
//       if (player1 == "rock" && player2 == "rock") {
//         draws++;
//         return 0;
//       } else if (player1 == "rock" && player2 == "paper") {
//         losses++;
//         return -1;
//       } else if (player1 == "rock" && player2 == "scissors") {
//         wins++;
//         return 1;
//       }

//       //PAPER
//       else if (player1 == "paper" && player2 == "paper") {
//         draws++;
//         return 0;
//       } else if (player1 == "paper" && player2 == "rock") {
//         wins++;
//         return 1;
//       } else if (player1 == "paper" && player2 == "scissors") {
//         losses++;
//         return -1;
//       }

//       // //SCISSORS
//       else if (player1 == "scissors" && player2 == "scissors") {
//         draws++;
//         return 0;
//       } else if (player1 == "scissors" && player2 == "rock") {
//         losses++;
//         return -1;
//       } else if (player1 == "scissors" && player2 == "paper") {
//         wins++;
//         return 1;
//       }
//     }

//     function getComputerMove(param1) {
//       if (param1 == 0) {
//         return "rock";
//       } else if (param1 == 1) {
//         return "paper";
//       } else {
//         return "scissors";
//       }
//     }

//     let playerMove = prompt(
//       "Please enter your move (rock, paper or scissors:) "
//     );

//     let randomMove = Math.floor(Math.random() * 3);
//     let computerMove = getComputerMove(randomMove);

//     let result = getWinner(playerMove, computerMove);
//     alert(result);

//     gamesPlayed++;
//     console.log("Games played: ", gamesPlayed);
//     console.log("PlayerMove: ", playerMove, " Computer move: ", computerMove);
//     console.log("wins: ", wins, " losses: ", losses, " draws: ", draws);
//   } else {
//     break;
//   }
// }
//
// TASK 7 RESTRICT NAME LENGTH TO 10 CHARACTERS
// PLAN
//
// ask the user to enter their name
// if the name is less than 10 characters ask them to enter their name and tell them it must be more than 10 characters Long
// else accept the username and ask them including their name in the queston if they would like to play the game now

// - i understood the queston wrong. the username must not be greater than 10 characters but can be equalt to 10. change condition to reflect this.

//
// //CODE:
//
// let gamesPlayed = 0;
// let wins = 0;
// let losses = 0;
// let draws = 0;

// while (true) {
//   userName = prompt("Please enter your user name: ");

//   if (userName.length > 10) {
//     alert("Please enter username less than 10 characters long: ");
//   } else {
//     break;
//   }
// }

// while (true) {
//   let playing = confirm(`${userName}, are you reaady to play? `);

//   if (playing == true) {
//     function getWinner(player1, player2) {
//       //ROCK
//       if (player1 == "rock" && player2 == "rock") {
//         draws++;
//         return 0;
//       } else if (player1 == "rock" && player2 == "paper") {
//         losses++;
//         return -1;
//       } else if (player1 == "rock" && player2 == "scissors") {
//         wins++;
//         return 1;
//       }

//       //PAPER
//       else if (player1 == "paper" && player2 == "paper") {
//         draws++;
//         return 0;
//       } else if (player1 == "paper" && player2 == "rock") {
//         wins++;
//         return 1;
//       } else if (player1 == "paper" && player2 == "scissors") {
//         losses++;
//         return -1;
//       }

//       // //SCISSORS
//       else if (player1 == "scissors" && player2 == "scissors") {
//         draws++;
//         return 0;
//       } else if (player1 == "scissors" && player2 == "rock") {
//         losses++;
//         return -1;
//       } else if (player1 == "scissors" && player2 == "paper") {
//         wins++;
//         return 1;
//       }
//     }

//     function getComputerMove(param1) {
//       if (param1 == 0) {
//         return "rock";
//       } else if (param1 == 1) {
//         return "paper";
//       } else {
//         return "scissors";
//       }
//     }

//     let playerMove = prompt(
//       "Please enter your move (rock, paper or scissors:) "
//     );

//     let randomMove = Math.floor(Math.random() * 3);
//     let computerMove = getComputerMove(randomMove);

//     let result = getWinner(playerMove, computerMove);
//     alert(result);

//     gamesPlayed++;
//     console.log("Games played: ", gamesPlayed, "\n");
//     console.log("PlayerMove: ", playerMove, "\nComputer move: ", computerMove);
//     console.log("wins: ", wins, " losses: ", losses, " draws: ", draws);
//   } else {
//     break;
//   }
// }

// TASK 7 BONUS STRING ONLY TO START USERNAME
// PLAN

// the username should only start with string data type
// to get the first character we will have to slice the username up and target the first character
// once we have the position of the first chracter we should check that it is type of string
// if it is not type of string and alert should inform the user that there username should start with a letter
// make sure the first letter of the userName is of .toUpperCase() when addressing the user

//CODE:
//
let gamesPlayed = 0;
let wins = 0;
let losses = 0;
let draws = 0;

while (true) {
  userName = prompt("Please enter your user name: ");

  let capital = userName.slice(0, 1);

  if (
    userName.length > 10 ||
    (capital !== "a" &&
      capital !== "A" &&
      capital !== "b" &&
      capital !== "B" &&
      capital !== "c" &&
      capital !== "C" &&
      capital !== "d" &&
      capital !== "D" &&
      capital !== "e" &&
      capital !== "E" &&
      capital !== "f" &&
      capital !== "F" &&
      capital !== "g" &&
      capital !== "G" &&
      capital !== "h" &&
      capital !== "H" &&
      capital !== "i" &&
      capital !== "I" &&
      capital !== "j" &&
      capital !== "J" &&
      capital !== "k" &&
      capital !== "K" &&
      capital !== "l" &&
      capital !== "L" &&
      capital !== "m" &&
      capital !== "M" &&
      capital !== "n" &&
      capital !== "N" &&
      capital !== "o" &&
      capital !== "O" &&
      capital !== "p" &&
      capital !== "P" &&
      capital !== "q" &&
      capital !== "Q" &&
      capital !== "r" &&
      capital !== "R" &&
      capital !== "s" &&
      capital !== "S" &&
      capital !== "t" &&
      capital !== "T" &&
      capital !== "u" &&
      capital !== "U" &&
      capital !== "v" &&
      capital !== "V" &&
      capital !== "w" &&
      capital !== "W" &&
      capital !== "x" &&
      capital !== "X" &&
      capital !== "y" &&
      capital !== "Y" &&
      capital !== "z" &&
      capital !== "Z")
  ) {
    alert(
      "Please enter username that start with a letter and is less than 10 characters long: "
    );
  } else {
    break;
  }
}

while (true) {
  let capital = userName.slice(0, 1).toUpperCase();

  let lowerCase = userName.slice(1, userName.length);

  let wholeName = capital + lowerCase;

  userName = wholeName;

  let playing = confirm(`${userName}, are you reaady to play? `);

  if (playing == true) {
    function getWinner(player1, player2) {
      //ROCK
      if (player1 == "rock" && player2 == "rock") {
        draws++;
        return 0;
      } else if (player1 == "rock" && player2 == "paper") {
        losses++;
        return -1;
      } else if (player1 == "rock" && player2 == "scissors") {
        wins++;
        return 1;
      }

      //PAPER
      else if (player1 == "paper" && player2 == "paper") {
        draws++;
        return 0;
      } else if (player1 == "paper" && player2 == "rock") {
        wins++;
        return 1;
      } else if (player1 == "paper" && player2 == "scissors") {
        losses++;
        return -1;
      }

      // //SCISSORS
      else if (player1 == "scissors" && player2 == "scissors") {
        draws++;
        return 0;
      } else if (player1 == "scissors" && player2 == "rock") {
        losses++;
        return -1;
      } else if (player1 == "scissors" && player2 == "paper") {
        wins++;
        return 1;
      }
    }

    function getComputerMove(param1) {
      if (param1 == 0) {
        return "rock";
      } else if (param1 == 1) {
        return "paper";
      } else {
        return "scissors";
      }
    }

    let playerMove = prompt(
      "Please enter your move (rock, paper or scissors:) "
    );

    let randomMove = Math.floor(Math.random() * 3);
    let computerMove = getComputerMove(randomMove);

    let result = getWinner(playerMove, computerMove);
    console.log(result);
    // console.log("Games played: ", gamesPlayed, "\n");
    // console.log("PlayerMove: ", playerMove, "\nComputer move: ", computerMove);
    // console.log("wins: ", wins, " losses: ", losses, " draws: ", draws);

    gamesPlayed++;
    alert(
      `Games played: ${gamesPlayed}\n\nMoves were:\nPlayer Move: ${playerMove}\nComputer Move: ${computerMove}\n\n\nWins: ${wins}\nLosses: ${losses}\nDraws: ${draws}`
    );
  } else {
    break;
  }
}
