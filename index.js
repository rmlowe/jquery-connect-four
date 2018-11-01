var playerOne = prompt("Player One: Enter Your Name , you will be Blue");
var playerTwo = prompt("Player Two: Enter Your Name, you will be Red");

var isTwo = false;

function color() {
  return isTwo ? "red" : "blue";
}

function updateHeader() {
  $('h3').text((isTwo ? playerTwo : playerOne) + ": it is your turn, please pick a column to drop your " + color() + " chip.");
}

$(document).ready(function() {
  $('td').click(function() {
    var columnIndex = $(this).index();

    for (var i = 5; i >= 0; i--) {
      var pos = $('tr').eq(i).find('td div').eq(columnIndex);

      if (pos.hasClass('empty')) {
        pos.addClass(color());
        pos.removeClass('empty');
        break;
      }
    }

    //console.log(columnIndex);
    isTwo = !isTwo;
    updateHeader();
  });

  updateHeader();
});
