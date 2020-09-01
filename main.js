$(document).ready(function(){
	let sideNav=$('.sideNav')
	$('.menuBtn').on('click',function(){
		if (sideNav.css('right')==='-250px'){
			sideNav.css('right','0');
		}
		else{
			sideNav.css('right','-250px')
		}
	})
$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
        window.location.hash = target;
    });
});
});