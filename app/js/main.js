$ (function(){
  

  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="4.969" height="9.97" viewBox="0 0 4.969 9.97"><defs><style>.cls-1 {fill: #8d8d8d;fill-rule: evenodd;}</style></defs><path class="cls-1" d="M973.64,3013.16a0.745,0.745,0,0,1,.178-0.49l3.741-4.28a0.548,0.548,0,0,1,.863,0,0.762,0.762,0,0,1,0,.98l-3.311,3.79,3.31,3.79a0.776,0.776,0,0,1,0,.99,0.56,0.56,0,0,1-.862,0l-3.741-4.28a0 772,0.772,0,0,1-.178-0.5h0Zm0,0" transform="translate(-973.625 -3008.19)"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="5" height="10" viewBox="0 0 5 10"><defs><style>.cls-1 {fill: #8d8d8d; fill-rule: evenodd;}</style></defs><path id="angle_right" class="cls-1" d="M1347,3013.18a0.816,0.816,0,0,0-.17-0.5l-3.77-4.29a0.556,0.556,0,0,0-.87,0,0.771,0.771,0,0,0,0,.99l3.33,3.8-3.33,3.8a0.771,0.771,0,0,0,0,.99,0.568,0.568,0,0,0,.87,0l3.77-4.3a0.715,0.715,0,0,0,.17-0.49h0Zm0,0" transform="translate(-1342 -3008.19)"/></svg></button>',
    infinite: false,
    

    
  });


  $('.shop-content__filter-btn').on('click', function (){

    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  })

  $('.shop-content__filter-btn--list').on('click', function() {
    $('.product-item').addClass('product-item--list')
  });

  $('.shop-content__filter-btn--grid').on('click', function() {
    $('.product-item').removeClass('product-item--list')
  });

  $('.select-style, .product-filter__num').styler(); 

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
        
    },
    onChange: function (data) {
        $('.filter-price__from').text(data.from);
        $('.filter-price__to').text(data.to);
        
    },
  });


  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  




  


  $('.top-slider__inner').slick({

    dots:true,
    arrows: false,
    fade:true,
    autoplay:true,
    autoplaySpeed: 3000,


  });
  
  $('.product-slide__thumb').slick({
      asNavFor: '.product-slide__big',
      slidesToShow: 4,
      slidesToScroll: 1,
      focusOnSelect: true,
      vertical: true,
      draggable: false,

  });
  
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true,
  });
  
  
  $(".star,.product-one__star, .comments__content-star").rateYo({
    rating: 4,
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19px" height="17px" viewBox="0 0 19 17 version="1.1"><g id="surface1"><path style="fill-opacity: 1;"d="M 12.574219 4.992188 L 17.3125 5.695312 C 17.707031 5.75 18.035156 6.03125 18.164062 6.410156 C 18.289062 6.796875 18.183594 7.214844 17.902344 7.5 L 14.464844 10.894531 L 15.277344 15.761719 C 15.34375 16.160156 15.179688 16.566406 14.851562 16.800781 C 14.523438 17.035156 14.089844 17.066406 13.738281 16.878906 L 9.503906 14.601562 L 5.269531 16.878906 C 4.914062 17.066406 4.484375 17.035156 4.15625 16.800781 C 3.828125 16.566406 3.664062 16.160156 3.734375 15.761719 L 4.546875 10.894531 L 1.109375 7.5 C 0.824219 7.214844 0.722656 6.796875 0.847656 6.410156 C 0.972656 6.03125 1.300781 5.75 1.695312 5.695312 L 6.433594 4.992188 L 8.554688 0.597656 C 8.730469 0.230469 9.101562 0 9.503906 0 C 9.910156 0 10.277344 0.230469 10.453125 0.597656 Z M 12.574219 4.992188 "/></g></svg>'
  });


  

  function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.querySelector('.promo__clock');
  const daysSpan = clock.querySelector('.promo__days');
  const hoursSpan = clock.querySelector('.promo__hours');
  const minutesSpan = clock.querySelector('.promo__minutes');
  const secondsSpan = clock.querySelector('.promo__seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = $('.promo__clock').attr('data-time');
initializeClock('promo__clock', deadline);  

let map;



});

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.715548133368465 , lng: -74.00756739017349 },
    zoom: 10,
    styles: [
    {
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "color": "#f49f53"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "color": "#f9ddc5"
            },
            {
                "lightness": -7
            }
        ]
    },
    {
        "featureType": "road",
        "stylers": [
            {
                "color": "#813033"
            },
            {
                "lightness": 43
            }
        ]
    },
    {
        "featureType": "poi.business",
        "stylers": [
            {
                "color": "#645c20"
            },
            {
                "lightness": 38
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#1994bf"
            },
            {
                "saturation": -69
            },
            {
                "gamma": 0.99
            },
            {
                "lightness": 43
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f19f53"
            },
            {
                "weight": 1.3
            },
            {
                "visibility": "on"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi.business"
    },
    {
        "featureType": "poi.park",
        "stylers": [
            {
                "color": "#645c20"
            },
            {
                "lightness": 39
            }
        ]
    },
    {
        "featureType": "poi.school",
        "stylers": [
            {
                "color": "#a95521"
            },
            {
                "lightness": 35
            }
        ]
    },
    {},
    {
        "featureType": "poi.medical",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#813033"
            },
            {
                "lightness": 38
            },
            {
                "visibility": "off"
            }
        ]
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {
        "elementType": "labels"
    },
    {
        "featureType": "poi.sports_complex",
        "stylers": [
            {
                "color": "#9e5916"
            },
            {
                "lightness": 32
            }
        ]
    },
    {},
    {
        "featureType": "poi.government",
        "stylers": [
            {
                "color": "#9e5916"
            },
            {
                "lightness": 46
            }
        ]
    },
    {
        "featureType": "transit.station",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit.line",
        "stylers": [
            {
                "color": "#813033"
            },
            {
                "lightness": 22
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "lightness": 38
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#f19f53"
            },
            {
                "lightness": -10
            }
        ]
    },
    {},
    {},
    {}
]
  });
  }

  window.initMap = initMap;