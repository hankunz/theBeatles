$(document).ready(function(){
	$('#nav').localScroll(800);
	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#intro').parallax("50%", 0.1);
	$('#second').parallax("50%", 0.1);
	$('#img1').parallax("50%", 0.6);
	$('#img2').parallax("50%", 0.4);
	$('#third').parallax("50%", 0.3);
})

$(document).ready(function() {
	
	redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
		redrawDotNav();
    });
    
    
    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h2').show();
		},
		function () {
			$(this).prev('h2').hide();
		}
    );
    
});



/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#second').offset().top - (($('#third').offset().top - $('#second').offset().top) / 2);
	var section3Top =  $('#third').offset().top - (($('#fifth').offset().top - $('#third').offset().top) / 2);
	var section4Top =  $('#fifth').offset().top - (($(document).height() - $('#fifth').offset().top) * 5);;
	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.intro').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.second').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.third').addClass('active');
	} else if ($(document).scrollTop() >= section4Top){
		$('nav#primary a.fifth').addClass('active');
	}
	
}


$(function() {
				/**
				* for each menu element, on mouseenter, 
				* we enlarge the image, and show both sdt_active span and 
				* sdt_wrap span. If the element has a sub menu (sdt_box),
				* then we slide it - if the element is the last one in the menu
				* we slide it to the left, otherwise to the right
				*/
                $('#sdt_menu > li').bind('mouseenter',function(){
					var $elem = $(this);
					$elem.find('img')
						 .stop(true)
						 .animate({
							'width':'200px',
							'height':'170px',
							'left':'0px'
						 },400,'easeOutBack')
						 .andSelf()
						 .find('.sdt_wrap')
					     .stop(true)
						 .animate({'top':'140px'},500,'easeOutBack')
						 .andSelf()
						 .find('.sdt_active')
					     .stop(true)
						 .animate({'height':'170px'},300,function(){
						var $sub_menu = $elem.find('.sdt_box');
						if($sub_menu.length){
							var left = '200px';
							if($elem.parent().children().length == $elem.index()+1)
								left = '-200px';
							$sub_menu.show().animate({'left':left},200);
						}	
					});
				}).bind('mouseleave',function(){
					var $elem = $(this);
					var $sub_menu = $elem.find('.sdt_box');
					if($sub_menu.length)
						$sub_menu.hide().css('left','0px');
					
					$elem.find('.sdt_active')
						 .stop(true)
						 .animate({'height':'0px'},300)
						 .andSelf().find('img')
						 .stop(true)
						 .animate({
							'width':'0px',
							'height':'0px',
							'left':'85px'},400)
						 .andSelf()
						 .find('.sdt_wrap')
						 .stop(true)
						 .animate({'top':'25px'},500);
				});
            });