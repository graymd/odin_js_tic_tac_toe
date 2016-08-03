$(document).ready(function(){
  $('.gameboard-square').click(function(){
    gameboard.addUserSelection($(this));
  })
})

const gameboard = {
  addUserSelection(boardSquare){
    $(boardSquare).text(this.currentUserPiece);
    this.updateCurrentGamePositions(boardSquare.attr("id"));
    this.changeUserPiece();
    console.log(this.getRow1());

  },
  currentUserPiece: "X",
  changeUserPiece(){
    if (this.currentUserPiece === "X"){
      this.currentUserPiece = "O";
    } else {
      this.currentUserPiece = "X";
    }
 },
 currentGamePositions: ["", "", "", "", "", "", "", "", ""],
 updateCurrentGamePositions(boardSquare){
   elementPosition = boardSquare.slice(6) - 1;
   this.currentGamePositions[elementPosition] = this.currentUserPiece;
 },
 getRow1(){
    return this.currentGamePositions.slice(0, 3);
 },
 getRow2(){
   return this.currentGamePositions.slice(3, 6);
 },
 getRow3(){
   return this.currentGamePositions.slice(6, 9);
 },
 getColumn1(){
   return [this.currentGamePositions[0], this.currentGamePositions[3], this.currentGamePositions[6]];
 },
 getColumn2(){
   return [this.currentGamePositions[1], this.currentGamePositions[4], this.currentGamePositions[7]];
 },
 getColumn3(){
   return [this.currentGamePositions[2], this.currentGamePositions[5], this.currentGamePositions[8]];
 },
 getDiagonal1(){
   return [this.currentGamePositions[0], this.currentGamePositions[4], this.currentGamePositions[8]];
 },
 getDiagonal2(){
   return [this.currentGamePositions[2], this.currentGamePositions[4], this.currentGamePositions[6]];
 },


}
