//cat tie is called if win on the last move.
//show current user piece
//create game reset

$(document).ready(() => {
  $('.gameboard-square').click(function() {
    gameboard.addUserSelection($(this));
  });
});

const gameboard = {
  addUserSelection(boardSquare) {
    $(boardSquare).text(this.currentUserPiece);
    this.updateCurrentGamePositions(boardSquare.attr('id'));
    this.changeUserPiece();
    this.checkWinner();
    this.checkCatsTie();
  },
  currentUserPiece: 'X',
  changeUserPiece() {
    if (this.currentUserPiece === 'X') {
      this.currentUserPiece = 'O';
    } else {
      this.currentUserPiece = 'X';
    }
  },
  currentGamePositions: ['', '', '', '', '', '', '', '', ''],
  updateCurrentGamePositions(boardSquare) {
    const elementPosition = boardSquare.slice(6) - 1;
    this.currentGamePositions[elementPosition] = this.currentUserPiece;
  },
  getRow1() {
    return this.currentGamePositions.slice(0, 3);
  },
  getRow2() {
    return this.currentGamePositions.slice(3, 6);
  },
  getRow3() {
    return this.currentGamePositions.slice(6, 9);
  },
  getColumn1() {
    return [
      this.currentGamePositions[0],
      this.currentGamePositions[3],
      this.currentGamePositions[6],
    ];
  },
  getColumn2() {
    return [
      this.currentGamePositions[1],
      this.currentGamePositions[4],
      this.currentGamePositions[7],
    ];
  },
  getColumn3() {
    return [
      this.currentGamePositions[2],
      this.currentGamePositions[5],
      this.currentGamePositions[8],
    ];
  },
  getDiagonal1() {
    return [
      this.currentGamePositions[0],
      this.currentGamePositions[4],
      this.currentGamePositions[8],
    ];
  },
  getDiagonal2() {
    return [
      this.currentGamePositions[2],
      this.currentGamePositions[4],
      this.currentGamePositions[6],
    ];
  },
  checkWinner() {
    const directionsToTest = this.getDirectionsToTest();
    for (let i = 0; i < directionsToTest.length; i++) {
      console.log(directionsToTest[i]);
      if (
        directionsToTest[i][0] !== '' &&
        directionsToTest[i][0] === directionsToTest[i][1] &&
        directionsToTest[i][1] === directionsToTest[i][2]
      ) {
        alert(`gameOver! ${directionsToTest[i][0]} wins!`)
        location.reload();
      }
    }
  },
  getDirectionsToTest(){
    return [
      this.getRow1(),
      this.getRow2(),
      this.getRow3(),
      this.getColumn1(),
      this.getColumn2(),
      this.getColumn3(),
      this.getDiagonal1(),
      this.getDiagonal2(),
    ];
  },
  checkCatsTie(){
    let emptyStringCount = 0;
    for (const el of this.currentGamePositions){
      if (el === '') {
        emptyStringCount++;
      }
    }
    if (emptyStringCount === 0) {
      alert("gameOver!  Cats Tie!")
      location.reload();
    }
  }

};



// directionsToTest.forEach((directions) => {
//   console.log(directions);
//   if (directions[0] !== '') {
//     directions.every((el) => {
//       el === directions[0]
//     });
//   }
// });
