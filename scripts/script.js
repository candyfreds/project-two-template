// your script file for adding your own jquery
$(function() {
// Your Code from here on down. Don't delete that line above!















    $('.ding').click(function() {
        $('audio#key')[0].play()

    })

    $('.ding').click(function() {
        $('audio#key')[0].play()

    })



    

    $('.dingb').mouseover(function() {
        $('audio#keyb')[0].play()

    })

    $('.dingb').click(function() {
        $('audio#keyb')[0].play()

    })



    


    $('.dingc').mouseover(function() {
        $('audio#keyc')[0].play()

    })

    $('.dingc').click(function() {
        $('audio#keyc')[0].play()

    })





     $('.dingd').mouseover(function() {
        $('audio#keyd')[0].play()

    })

    $('.dingd').click(function() {
        $('audio#keyd')[0].play()

    })






     $('.dinge').mouseover(function() {
        $('audio#keye')[0].play()

    })

    $('.dinge').click(function() {
        $('audio#keye')[0].play()

    })





     $('.dingf').mouseover(function() {
        $('audio#keyf')[0].play()

    })

    $('.dingf').click(function() {
        $('audio#keyf')[0].play()

    })



    $('.string1').click(function() {
        $('audio#string1')[0].play()

    })


    $('.string2').click(function() {
        $('audio#string2')[0].play()

    })

    $('.string3').click(function() {
        $('audio#string3')[0].play()

    })

    $('.string4').click(function() {
        $('audio#string4')[0].play()

    })

    $('.string5').click(function() {
        $('audio#string5')[0].play()

    })

    $('.string6').click(function() {
        $('audio#string6')[0].play()

    })



  $("#hide").click(function(){
    $('#soundwaves').hide();
  });

$("#show").click(function(){
    $('#soundwaves').show();
  });












    $('.e-string').click(function() {
        $('audio#bassa')[0].play()

    })


    $('.g-string').click(function() {
        $('audio#bassb')[0].play()

    })

    $('.a-string').click(function() {
        $('audio#bassc')[0].play()

    })

    $('.d-string').click(function() {
        $('audio#bassd')[0].play()

    })



    $('.tom1').click(function() {
        $('audio#tom1')[0].play()

    })


    $('.tom2').click(function() {
        $('audio#tom2')[0].play()

    })

    $('.tom3').click(function() {
        $('audio#tom3')[0].play()

    })

    $('.snaire').click(function() {
        $('audio#snaire')[0].play()

    })

    $('.hihat').click(function() {
        $('audio#hihat')[0].play()

    })



$(document).ready(function () {
    $('.flexslider').flexslider({
        animation: 'fade',
        controlsContainer: '.flexslider'
    });
});



    



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