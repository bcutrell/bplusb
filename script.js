/* Make something awesome! */
$(document).ready(function() {
	$(function() {
		var wall = new freewall("#pictureGallery");
		
		wall.reset({
		  selector: '.item',
		  animate: true,
		  cellW: 150,
		  cellH: 'auto',
		  gutterY: 0,
		  gutterX: 0,
	  	  onResize: function() {
				wall.fitZone();
			}
		});
		wall.fitZone();
		// wall.fillHoles()
		// wall.fitZone();

	});

	
	var randomColor = function() {
		var colors = ['red', 'green', 'blue', 'orange', 'yellow', 'black',
		'pink'];
		return colors[Math.floor(Math.random() * colors.length)];
	}

	$('.p1').css('background', randomColor());
	$('.p2').css('background', randomColor());
	$('.p3').css('background', randomColor());
	$('.p4').css('background', randomColor());
	$('.p5').css('background', randomColor());
	$('.p6').css('background', randomColor());

})

			// var temp = "<div class='brick' style='width:{width}px;'><img src='i/photo/{index}.jpg' width='100%'></div>";
			// var w = 1, h = 1, html = '', limitItem = 49;
			// for (var i = 0; i < limitItem; ++i) {
			// 	w = 1 + 3 * Math.random() << 0;
			// 	html += temp.replace(/\{width\}/g, w*150).replace("{index}", i + 1);
			// }
			// $("#freewall").html(html);
			
			// var wall = new freewall("#freewall");
			// wall.reset({
			// 	selector: '.brick',
			// 	animate: true,
			// 	cellW: 150,
			// 	cellH: 'auto',
			// 	onResize: function() {
			// 		wall.fitWidth();
			// 	}
			// });

			// var images = wall.container.find('.brick');
			// images.find('img').load(function() {
			// 	wall.fitWidth();
			// });
