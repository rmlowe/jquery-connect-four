var playerOne = prompt("Player One: Enter Your Name , you will be Blue");
var playerTwo = prompt("Player Two: Enter Your Name, you will be Red");

var isTwo = false;

function color() {
  return isTwo ? "red" : "blue";
}

function player() {
  return isTwo ? playerTwo : playerOne;
}

function updateHeader() {
  $('h3').text(player() + ": it is your turn, please pick a column to drop your " + color() + " chip.");
}

function getCell(row, col) {
  return $("tr").eq(row).find("td div").eq(col);
}

function detectWin(color) {
  // Horizontal line
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (getCell(row, col).hasClass(color)
          && getCell(row, col + 1).hasClass(color)
          && getCell(row, col + 2).hasClass(color)
          && getCell(row, col + 3).hasClass(color)) {
            return true;
          }
    }
  }

  // Vertical line
  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 7; col++) {
      if (getCell(row, col).hasClass(color)
          && getCell(row + 1, col).hasClass(color)
          && getCell(row + 2, col).hasClass(color)
          && getCell(row + 3, col).hasClass(color)) {
            return true;
          }
    }
  }

  // Diagonal
  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 4; col++) {
      if (getCell(row, col).hasClass(color)
          && getCell(row + 1, col + 1).hasClass(color)
          && getCell(row + 2, col + 2).hasClass(color)
          && getCell(row + 3, col + 3).hasClass(color)) {
            return true;
          }
    }
  }

  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 4; col++) {
      if (getCell(row, col + 3).hasClass(color)
          && getCell(row + 1, col + 2).hasClass(color)
          && getCell(row + 2, col + 1).hasClass(color)
          && getCell(row + 3, col).hasClass(color)) {
            return true;
          }
    }
  }

  return false;
}

$(document).ready(function() {
  $('td').click(function() {
    var columnIndex = $(this).index();

    for (var i = 5; i >= 0; i--) {
      var pos = getCell(i, columnIndex);

      if (pos.hasClass('empty')) {
        pos.addClass(color());
        pos.removeClass('empty');
        break;
      }
    }

    if (detectWin(color())) {
      $('h1').text(player() + " has won! Refresh your browser to play again!");
    }

    isTwo = !isTwo;
    updateHeader();
  });

  updateHeader();
});
