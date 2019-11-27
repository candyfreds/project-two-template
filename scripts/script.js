// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!





    $('.ding').mouseover(function() {
        $('audio#key')[0].play()

    })

    $('.ding').mouseleave(function() {
        $('audio#key')[0].currentTime = 0

    })

    

    $('.dingb').mouseover(function() {
        $('audio#keyb')[0].play()

    })

    $('.dingb').mouseleave(function() {
        $('audio#keyb')[0].currentTime = 0

    })

    


    $('.dingc').mouseover(function() {
        $('audio#keyc')[0].play()

    })

   	$('.dingc').mouseleave(function() {
        $('audio#keyc')[0].currentTime = 0

    })




     $('.dingd').mouseover(function() {
        $('audio#keyd')[0].play()

    })

   	$('.dingd').mouseleave(function() {
        $('audio#keyd')[0].currentTime = 0

    })




     $('.dinge').mouseover(function() {
        $('audio#keye')[0].play()

    })

   	$('.dinge').mouseleave(function() {
        $('audio#keye')[0].currentTime = 0

    })




     $('.dingf').mouseover(function() {
        $('audio#keyf')[0].play()

    })

   	$('.dingf').mouseleave(function() {
        $('audio#keyf')[0].currentTime = 0

    })



/*
  Slidemenu
*/
$(function() {
	var $body = document.body
	, $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

	if ( typeof $menu_trigger !== 'undefined' ) {
		$menu_trigger.addEventListener('click', function() {
			$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
		});
	}
}).call(this);
















// End of Your Code . Don't delete that line below!!
});