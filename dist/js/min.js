$(document).ready(function(){$(".slider").slick({dots:!0,infinite:!1,arrows:!1,fade:!0,adaptiveHeight:!0}),$(".slider-logo").slick({slidesToShow:5,slidesToScroll:1,infinite:!0,dots:!1,arrows:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),$(".slider-projects").slick({dots:!0,infinite:!1,arrows:!1,fade:!0,slidesToShow:1,adaptiveHeight:!0}),$(".slider-testimonials").slick({dots:!0,infinite:!1,arrows:!1,fade:!0,adaptiveHeight:!0}),$(".button-apply").on("click",function(i){i.preventDefault(),$(this).parent().parent().parent().find(".slide-toggle").slideToggle()})});