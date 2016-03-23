var marg = 0;

function identifyById() {
  console.log($('#para1'));
}

function identifyByClass() {
  console.log($('.class1'));
}

function byTag() {
  console.log($('p'));
}

function changeBackground() {
  $('#block1').css('background', 'blue');
}

function increaseFont() {
  $('#block2').css('font-size', '4em');
}

function changeFontColor() {
  $('#block3').css('color', 'green');
}

function revertColor() {
  $('#block3').css('color', 'black');
}

function hide() {
  $('#block4').hide();
}

function changeBackColor(color, className) {

  $('.' + className).each(function() {
    $(this).css('background', color);
  });
}

function numbersOnly(e) {
  if (e.which < 48 || e.which > 57) {
    event.preventDefault();
  }
}

function addAdjacent() {
  $('#para2').after("<p>I got generated on the fly...</p>");
}

function removePara() {
  $('#para4').remove();
}

function myMove() {
  var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  $('#box5').css('background', color);
}

function myFunction() {
  $("#fname").val($('#fname').val().toUpperCase());
}

function changeOn() {
  // body...
  $("#fname1").val($('#fname').val().toUpperCase());
}

function preferedBrowser() {
  // body...
  alert($("#browsers").val());
}

function color() {
  // body...
  $("input[name='fname3']").css('background', 'red');
}



function confirmInput() {

}

function message() {
  alert("Reset");
}

function keydown(n) {
  var elem = n;
  var color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
  elem.style.background = color;
}

$(document).ready(function() {
  $('#input2').keypress(function(e) {
    $('#keycode').html(e.which);
  });

  $('#hello').select(function() {
    $('#demo').html('You selected some text');
  });

  //single listener, without onclick attribute in HTML
  $('#parent2').on("click", function(e) {
    if (e.target !== e.currentTarget) {
      $('#' + e.target.id).toggleClass('red');
    }
    e.stopPropagation();
  });


});


function keyup() {
  $("#fname2").val($('#fname2').val().toUpperCase());
}

function writeMessage() {
  $("input[name='mySecondInput']").val($("input[name='myInput']").val());
}



//using hasClass, addClass, removeClass
function changeColor(e) {

  $(e).hasClass('red') ? $(e).removeClass('red') : $(e).addClass('red');

}

//using toggleClass
function changeColor1(e) {
  $(e).toggleClass('red');
}

//adding Click Listener only to parent and not to child
function changeColorOne(e) {
  console.log(e.currentTarget);
  if (e.target !== e.currentTarget) {
    $('#' + e.target.id).toggleClass('red');
  }
  e.stopPropagation();
}


//code for tic tac toe

var isX = false;
var x = 'x';
var o = 'o';
var rows = new Array(3).fill(0).map(row => new Array(3).fill(0));
var cols = new Array(3).fill(0).map(row => new Array(3).fill(0));
var result;

$(document).ready(function() {

  $('.tile').click(function(e) {

    var rowid = e.target.id.split("").map(Number)[0];
    var colid = e.target.id.split("").map(Number)[1];

    if (this.innerHTML === x || this.innerHTML === o) {
      $(this).fadeOut('slow');
      $(this).fadeIn('slow');
    } else {

      if (isX) {
        makeChanges(this, x);
        result = checkResult(rowid, colid, o);
      } else {
        makeChanges(this, o);
        result = checkResult(rowid, colid, x);
      }
      isX = !isX;
    }

    if (result) {
      alert("Game Over");
      gameOver();
    }

    //insert x or o into the div, add classes and update array
    function makeChanges(elem, value) {
      elem.innerHTML = value;
      $(elem).addClass(value);
      rows[rowid][colid] = value;
      cols[colid][rowid] = value;
    }

  });

});



//Check if row, column or diagnol wins
function checkResult(rowid, colid, val) {

  //check rows
  if (rows[rowid].indexOf(val) == -1 && rows[rowid].indexOf(0) == -1) {
    return true;
  }

  //check col
  if (cols[colid].indexOf(val) == -1 && cols[colid].indexOf(0) == -1) {
    return true;
  }

  //check diagnol
  if (rows[1][1] !== 0) {
    //left to right
    if (rows[0][0] === rows[1][1] && rows[1][1] === rows[2][2]) {
      return true;
    }
    //right to left
    if (rows[0][2] === rows[1][1] && rows[1][1] === rows[2][0]) {
      return true;
    }
  }

  return false;
}


function gameOver() {

  $.each($('.tile'), function() {
    $(this).html("");
    $(this).removeClass('x');
    $(this).removeClass('o');
  });

}