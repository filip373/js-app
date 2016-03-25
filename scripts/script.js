var colors;

$(document).ready(function() {
	
	createGrid(6);

	$('#create-button').click(function() {
		var side = prompt('Specify the side size');
		clearGrid();
		createGrid(side);
	});

});

function createGrid(side) {
	var width = $('#container').css('width');
	var height = $('#container').css('height');
	if (width !== height) {
		alert('Width must be the same as height');
	}

	for (var i = 0; i < side; i++) {
		$('#container').append("<div class='row'></div>");
		for (var j = 0; j < side; j++) {
			$('.row:nth-of-type(' + (i + 1) + ')').append("<div class='square'></div>");
		}
	}

	var squareWidth = width.substring(0, width.length - 2) / side;
	var squareHeight = height.substring(0, height.length - 2) / side;

	colors = new Array(side * side);
	for (var i = 0; i < colors.length; i++) {
		colors[i] = 0;
	}
	$('.square')
		.outerWidth(squareWidth, true).outerHeight(squareHeight, true)
		.mouseenter(function() {
			mouseEntered($(this));
		});
}

function mouseEntered(square) {
	var index = square.index('.square');
	if (colors[index] === 0) {			// white -> set random color
		colors[index] = 10;
		square.animate({backgroundColor: randomColor()}, 'fast');
	} else {
		colors[index] = colors[index] - 1; // else -> decrease color
		square.fadeTo('fast', colors[index] / 10);
	}	
}

function clearGrid() {
	$('.row').remove();
}

function randomColor() {
	var color = '';
	for (var i = 0; i < 3; i++) {
		color += randomTo256().toString(16);
	}
	return '#' + color;
}

function randomTo256() {
	return Math.floor(Math.random() * 256);
}
