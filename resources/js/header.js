$(".navbar-nav .nav-item .nav-link").on("click", function() {
   $(".navbar-nav .nav-item").find(".active").removeClass("active");
   $(this).addClass("active");
});

$('.dropdown-toggle').click(function() {
	$(".dropdown-menu").toggle();
	window.location = $(this).attr('href');
});

// if ($(this).hasClass("active")) {
// 	$(".dropdown-toggle")
// }
// else {
// 	console.log("not active");
// }
