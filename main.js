
// $( "p.boxOnePara" ).toggle();
// $( "p.boxTwoPara" ).hide();
// $( "p.boxThreePara").hide();

$('div.boxOneTop').on("click", function(){


	$( 'p.boxOnePara').show();
	$( 'p.boxTwoPara').hide();
	$( 'p.boxThreePara').hide();

});

$('div.boxTwoTop').on("click", function(){


	$( 'p.boxOnePara').hide();
	$( 'p.boxTwoPara').show();
	$( 'p.boxThreePara').hide();

});

$('div.boxThreeTop').on("click", function(){


	$( 'p.boxOnePara').hide();
	$( 'p.boxTwoPara').hide();
	$( 'p.boxThreePara').show();

});// $('div.boxTwoTop').on("click", function(){

// // alert("hello");
// 	$('p.boxTwoPara').addClass('hide');


// });

// $('div.boxThreeTop').on("click", function(){

// // alert("hello");
// 	$('p.boxThreePara').addClass('hide');


// });



// $( "#clickme" ).click(function() {
//   $( "#book" ).toggle( "slow", function() {
//     // Animation complete.
//   });
// });