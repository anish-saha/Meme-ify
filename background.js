// Chrome extension Memeify
// author: Anish Saha 


function memeify() {
	console.log('test');
	var imgs = document.getElementsByTagName('img');
	for (var n = 0; n < imgs.length; n++) {
		// collection of random memes		
		var memes = Array("http://i1.kym-cdn.com/photos/images/original/001/015/724/10d.jpg", 
		"https://img.ifcdn.com/images/e023501fbc9f4f78d9325e9be9693efdd60d4752b06f393349773400396a7b64_1.jpg",
		"https://img.ifcdn.com/images/dfcc0ca6d3721393fdd108a0e6f3a39d835397c47a45d81d33da9a8cf857c1a1_1.jpg", 
		"https://img.ifcdn.com/images/d35db4674292004cecc1039dd6cf799677646b069f25ea7376cd53b5c6a7cc94_1.jpg", 
		"https://img.ifcdn.com/images/0377ef28af559dfc88050aa42dfa4559e084caf3d9a20e4cedea672f5e1a6100_1.jpg",
		"https://img.ifcdn.com/images/7005058f1c821e697b3ad015b370e2d5e012e7e17cb6e789a7633dc67702b7d9_1.jpg",
		"https://thechive.files.wordpress.com/2016/07/5cac62b3c3b07cc981cc080d1364adc0.jpg",
		"https://s-media-cache-ak0.pinimg.com/736x/85/d0/b8/85d0b8e8adce58168df0b4c313e644bc.jpg",
		"https://pbs.twimg.com/profile_images/378800000848537568/164b936b01b7f48b32b731792ed627e9_400x400.jpeg",
		"http://b-i.forbesimg.com/cherylsnappconner/files/2013/07/Disapproval-248x300.png",
		"http://weknowmemes.com/wp-content/uploads/2012/04/anthony-davis-unibrow-meme.jpg",
		"https://thechive.files.wordpress.com/2016/11/dank-memes-that-will-make-you-slightly-exhale-while-staring-at-your-screen-35-photos-235.jpg",
		"http://ww4.hdnux.com/photos/45/70/31/9930343/3/920x920.jpg",
		"https://s-media-cache-ak0.pinimg.com/736x/ec/c9/fd/ecc9fda4f9abd2fb79ec69f15eef974f.jpg",
		"https://i.reddituploads.com/2a27c5007e634cef82e4af6be2ab5698?fit=max&h=1536&w=1536&s=1470afe105c91f881f6c9290d73f6123",
		"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcROa0KfISPQMF_SUhfOmJtZMrMLo-H5x8Gc6Atx0xlOBi4grSOd",
		"http://i1.kym-cdn.com/photos/images/newsfeed/001/112/704/8a8.jpg",
		"http://weknowmemes.com/generator/uploads/generated/g1379215178396460888.jpg",
		"https://68.media.tumblr.com/edb917eaaa7846f1e24aadce43b0fc14/tumblr_nqf2n549HN1uycsrro1_1280.jpg",
		"https://s-media-cache-ak0.pinimg.com/564x/a6/7b/05/a67b059e2e13d6ba3187ce9b7e08abe7.jpg",
		"https://s-media-cache-ak0.pinimg.com/564x/a6/7b/05/a67b059e2e13d6ba3187ce9b7e08abe7.jpg",
		"https://i.ytimg.com/vi/cVj_8ugbCfc/maxresdefault.jpg", "http://itsfunny.org/wp-content/uploads/2012/11/Spongebob-meme.jpg",
		"http://cdn.smosh.com/sites/default/files/2016/06/caveman-spongebob-memes-pick-partner.jpg",
		"https://img.ifcdn.com/images/2b231a8b158f14aa15a7b4bd2fc01bb3b5e4fce299b01c3ade4fdb433c4a6fd8_1.jpg",
		"http://cdn.smosh.com/sites/default/files/2015/10/spongebob-lyrics-funny-drake2.jpg");
		imgs[n].src = memes[Math.floor(Math.random() * memes.length)];
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

