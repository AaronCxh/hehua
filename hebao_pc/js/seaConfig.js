seajs.config({
	base: "./assets/js/",
	alias: {
		"jquery": "jquery/jquery/1.10.1/jquery.js",
		"db":"application/rotateRolling",
		"swiper":"application/swiper-3.3.1.jquery.min",
		"raphael":"application/raphael-min",
		"maps":"application/maps",
		"chinaMap":"application/chinaMapConfig",
		"Chart":"application/Chart.min"
	},
	preload:['jquery','application/common']
})