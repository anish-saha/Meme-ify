// Chrome extension Memeify
// author: Anish Saha 


function memeify() {
	console.log('test');
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

document.onload = memeify();

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('meme');
    // onClick's logic below:
    link.addEventListener('click', function() {
        memeify();
    });
});

// chrome.browserAction.onClicked.addListener(function(tab) {
// 	// var i = parseInt(Math.random() * 100) + 1; 
// 	// $("#memes").attr("src", "img/meme" + i + ".png");
// 		chrome.tabs.executeScript(null, {
// 	    	file: "replacer.js"
// 	    });
// 	});
