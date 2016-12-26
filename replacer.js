// Replaces the images.

function memify() {
	var imgs = document.getElementsByTagName('img');
	for (var n = 0; n < imgs.length; n++) {
		// var img = r[n];
		// var img_width = img.width;
		// var img_height = img.height;
		imgs[n].src = "http://i1.kym-cdn.com/photos/images/original/001/015/724/10d.jpg";
		// img.width = img_width;
		// img.height = img_height;
	}
}