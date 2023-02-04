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

//Mobile sideBar

// let bar = document.querySelector('.mobile-bar');

// bar.onclick = function Bars() {  
// if (document.getElementById('sideBar').className == 'side-bar') {
//    document.getElementById('sideBar').className = 'open-side-bar'
// }else{
//    document.getElementById('sideBar').className = 'side-bar'
// }

// }

function Open(){
  var sidebar = document.getElementById('sideBar');
  sidebar.style.transform = 'translateX(0%)';
}

function Close(){
  var sidebar = document.getElementById('sideBar');
  sidebar.style.transform = 'translateX(100%)'
}
// Cart Side Bar

// function OpenCart(){
//   var sidebar = document.getElementById('sideBar');
//   sidebar.style.transform = 'translateX(0%)';
// }

// function CloseCart(){
//   var sidebar = document.getElementById('sideBar');
//   sidebar.style.transform = 'translateX(100%)'
// }

// //tab js
// let tabs = document.querySelectorAll('.opencity');

// tabs.forEach(item => {
//     item.addEventListener( 'click', function(e){
//         let cityname = item.getAttribute('data-city');
//         openCity(e,cityname);
//     });
// });

// function openCity(event, cityName) {
//     var i, tabcontent, tablinks;
  
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//       tabcontent[i].style.display = "none";
//     }
  
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//       tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }
  
//     document.getElementById(cityName).style.display = "block";
//     event.currentTarget.className += " active";
// }