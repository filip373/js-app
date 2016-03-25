$(document).ready(function() {
	for (var i = 0; i < 4; i++) {
		$('#container').append("<div class='row'></div>");
		for (var j = 0; j < 4; j++) {
			$('.row:nth-of-type(' + (i + 1) + ')').append("<div class='square'></div>");
		}
	}
});

// $(document).ready(function() {
// 	$(container).append('<table></table>');
// 	for (var i = 0; i < 4; i++) {
// 		$('table').append("<tr></tr>");
// 		for (var j = 0; j < 4; j++) {
// 			$('tr:nth-of-type(' + (i + 1) + ')').append("<td class='square'></td>");
// 		}
// 	}
// });
