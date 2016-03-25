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
	$('.square')
		.outerWidth(squareWidth, true).outerHeight(squareHeight, true)
		.hover(function() {
			$(this).animate({backgroundColor: '#CD3333'}, 'fast');
		}, function() {
			$(this).animate({backgroundColor: 'white'}, 'fast');
		});
}

function clearGrid() {
	$('.row').remove();
}
