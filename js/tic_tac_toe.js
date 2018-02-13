'use strict'

var player = 1;

function addMarker(){
    if(player % 2 === 0 && $(this).text()==='') {
        $(this).append('o').css({
            backgroundImage:'url(\'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Letter_o.svg/1200px-Letter_o.svg.png\')',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            backgroundColor:'red',
            color:'transparent'
        });
        player += 1;
        $('span').text('1')
    }

    if(player%2 !== 0 && $(this).text()===''){
        $(this).append('x').css({
            backgroundImage:'url(\'https://openclipart.org/image/2400px/svg_to_png/16155/milker-X-icon.png\')',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            backgroundColor:'black',
            color:'transparent'
        });
        player += 1;
        $('span').text('1')
    }
    winner();

}





var midLeft = $('#mid1');
var midMid = $('#mid2');
var midRight = $('#mid3');

var botLeft = $('#bot1');
var botMid = $('#bot2');
var botRight = $('#bot3');



function winner() {
    if ($('#sq1').text() === 'x'
        && $('#sq2').text() === 'x'
        && $('#sq3').text() === 'x') {
        alert('player 1 Wins!');
        reset();
    }

    if ($('#sq1').text() === 'x'
        && $('#sq5').text() === 'x'
        && $('#sq9').text() === 'x') {
        alert('Player 1 Wins!');
        reset();
    }

    if ($('#sq1').text() === 'x'
        && $('#sq4').text() === 'x'
        && $('#sq7').text() === 'x') {
        alert('Player 1 Wins!');
        reset();
    }

    if ($('#sq7').text() === 'x'
        && $('#sq8').text() === 'x'
        && $('#sq9').text() === 'x') {
        alert('Player 1 Wins!');
        reset();
    }

    if ($('#sq2').text() === 'x'
        && $('#sq5').text() === 'x'
        && $('#sq8').text() === 'x') {
        alert('Player 1 Wins!');
        reset();
    }

    if ($('#sq3').text() === 'x'
        && $('#sq6').text() === 'x'
        && $('#sq9').text() === 'x') {
        alert('Player 1 Wins!');
        reset();
    }

    if ($('#sq3').text() === 'x'
        && $('#sq4').text() === 'x'
        && $('#sq5').text() === 'x') {
        alert('Player 1 Wins!');
        reset();
    }

    if ($('#sq7').text() === 'x'
        && $('#sq8').text() === 'x'
        && $('#sq9').text() === 'x') {
        alert('Player 1 Wins!');
        reset();
    }
}

function reset(){
    $('.box').css({
        backgroundColor:'white',
        backgroundImage:''
    }).text('');
    $('span').text('1');
}



$('.box').on('click', addMarker);

$('#reset').on('click', reset)



