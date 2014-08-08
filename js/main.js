$(document).ready(function() {
	startPictureGallery();
	addImageGrayScale();
});

function startPictureGallery() {
	var temp = "<div class='brick' style='width:{width}px;'><img src='img/{index}.jpg' width='100%'></div>";
		// limitItem is the number of images in the img folder
		var w = 1, h = 1, html = '', limitItem = 5;
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
	}

function addImageGrayScale() {
	// Fade in images so there isn't a color "pop" document load and then on window load
	$(".brick img").fadeIn(500);
	
	// clone image
	$('.brick img').each(function(){
		var el = $(this);
		el.css({"position":"absolute"}).wrap("<div class='img_wrapper' style='display: inline-block'>").clone().addClass('img_grayscale').css({"position":"absolute","z-index":"998","opacity":"0"}).insertBefore(el).queue(function(){
			var el = $(this);
			el.parent().css({"width":this.width,"height":this.height});
			el.dequeue();
		});
		this.src = grayscale(this.src);
	});
	
	// Fade image 
	$('.brick img').mouseover(function(){
		$(this).parent().find('img:first').stop().animate({opacity:1}, 1000);
	})
	$('.img_grayscale').mouseout(function(){
		$(this).stop().animate({opacity:0}, 1000);
	});		
};

// Grayscale w canvas method
function grayscale(src){
	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');
	var imgObj = new Image();
	imgObj.src = src;
	canvas.width = imgObj.width;
	canvas.height = imgObj.height; 
	ctx.drawImage(imgObj, 0, 0); 
	var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
	for(var y = 0; y < imgPixels.height; y++){
		for(var x = 0; x < imgPixels.width; x++){
			var i = (y * 4) * imgPixels.width + x * 4;
			var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
			imgPixels.data[i] = avg; 
			imgPixels.data[i + 1] = avg; 
			imgPixels.data[i + 2] = avg;
		}
	}
	ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
	return canvas.toDataURL();
}