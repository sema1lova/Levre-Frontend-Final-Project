//our bestsellers slider
$('.our-bestseller').slick({
    dots: false,
    infinite: true,
    speed: 800,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll:1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });


//blog slider
$('.blogs').slick({
    dots: false,
    infinite: true,
    speed: 800,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll:1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });



// navbar scroll color change

$(function () {
    $(document).scroll(function () {
        var $nav = $(".head");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });

//filter by price slider range
//-----JS for Price Range slider-----

$(function() {
	$( "#slider-range" ).slider({
	  range: true,
	  min: 10,
	  max: 100,
	  values: [ 10, 100 ],
	  slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	  }
	});
	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});

//accordion

$(".btn-toggle-show").click(toggleText(".inner-content"));

function toggleText(element) {
  return function(e){
    $(this).parent().find(element).slideToggle(300);  
    $(this).parent().find(element).toggleClass("para-hide");
    $(this).find("i").toggleClass("rotate");
  }
} 