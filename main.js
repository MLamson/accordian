
// $( "p.boxOnePara" ).toggle();
// $( "p.boxTwoPara" ).hide();
// $( "p.boxThreePara").hide();

$( 'p.boxOnePara').show("slow");
	$( 'p.boxTwoPara').hide("slow");
	$( 'p.boxThreePara').hide("slow");

$('div.boxOneTop').on("click", function(){


	$( 'p.boxOnePara').show("slow");
	$( 'p.boxTwoPara').hide("slow");
	$( 'p.boxThreePara').hide("slow");

});

$('div.boxTwoTop').on("click", function(){


	$( 'p.boxOnePara').hide("slow");
	$( 'p.boxTwoPara').show("slow");
	$( 'p.boxThreePara').hide("slow");

});

$('div.boxThreeTop').on("click", function(){


	$( 'p.boxOnePara').hide("slow");
	$( 'p.boxTwoPara').hide("slow");
	$( 'p.boxThreePara').show("slow");

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