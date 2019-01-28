function calculateSize() { 
	var window_height = window.innerHeight;         // 944 when maximized
	var window_width  = window.innerWidth;          // 1680 when maximized

	var default_font_size = 14;
	var minimum_font_size = 8;
	var font_size         = window_width*(default_font_size/1680);
	if (font_size < minimum_font_size) { 
		font_size = minimum_font_size;
	}
	var font_size_str = "" + font_size + "px";

	var allCodes = document.getElementsByClassName("codesnippet");
    for (var i = 0; i < allCodes.length; i++) {
        allCodes[i].style.fontSize = font_size_str;
    }
}
				
calculateSize();
//window.onload   = calculateSize;
window.onresize = calculateSize;

