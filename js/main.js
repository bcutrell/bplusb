$(document).ready(function() {
		var temp = "<div class='brick' style='width:{width}px;'><img src='img/{index}.jpg' width='100%'></div>";
			// limitItem is the number of images in the img folder
			var w = 1, h = 1, html = '', limitItem = 8;
			for (var i = 0; i < limitItem; ++i) {
				w = 1 + 3 * Math.random() << 0;
				html += temp.replace(/\{width\}/g, w*150).replace("{index}", i );
			}

		$("#pictureGallery").html(html);

		var wall = new freewall("#pictureGallery");
		
		wall.reset({
		  selector: '.brick',
		  animate: true,
		  cellW: 150,
		  cellH: 'auto',
		  gutterY: 0,
		  gutterX: 0,
	  	  onResize: function() {
				wall.fitWidth();
			}
		});
		var images = wall.container.find('.brick');
			images.find('img').load(function() {
				wall.fitWidth();
			});

});
