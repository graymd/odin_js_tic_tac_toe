$(document).ready(function(){
  $('.gameboard-square').click(function(){
    console.log($(this).attr("id"))
    gameboard.addUserSelection($(this));
  })
})

const gameboard = {
  addUserSelection(boardSquare){
    $(boardSquare).text("X");
  }
}
