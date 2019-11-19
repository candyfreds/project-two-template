// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!
  

  $('.e-string').click(function() {
  	$('.e-string').attr('fill', 'purple')

  	})

  	$('.g-string').click(function() {
  	$('.g-string').attr('fill', 'red')

  	})

  	$('.d-string').click(function() {
  	$('.d-string').attr('fill', 'green')

  	})

  	$('.a-string').click(function() {
  	$('.a-string').attr('fill', 'blue')

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