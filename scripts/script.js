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

    $('.a-string').click(function() {
    $('.a-string').attr('fill', 'yellow')

    })

    $('.tom3').click(function() {
    $('.tom3').attr('fill', 'yellow')

    })

    $('.tom2').click(function() {
    $('.tom2').attr('fill', 'yellow')

    })

    $('.tom1').click(function() {
    $('.tom1').attr('fill', 'yellow')

    })

    $('.snaire').click(function() {
    $('.snaire').attr('fill', 'yellow')

    })

    $('.hihat').click(function() {
    $('.hihat').attr('fill', 'yellow')

    })

    $('.bass').click(function() {
    $('.bass').attr('fill', 'yellow')

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