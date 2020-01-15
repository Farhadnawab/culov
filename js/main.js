$(document).ready(function ()  { 

    

    new WOW().init();



    $('.burger').click(function () {
        $(this).toggleClass('active');
        $('nav.mobile-nav').toggleClass('active');
    });

    $('nav.mobile-nav > ul > li.dropdown').click(function () {
        $('.drop-mobile').not($(this).find('.drop-mobile')).slideUp();
        $(this).find('.drop-mobile').slideToggle();
        $('.flourish').removeClass('active');
        $(this).find('.flourish').toggleClass('active');
    });

    $(".big-slider .thumbnails .thumb.thumb-1").click(function(e) {
      e.preventDefault();
      $(".big-slider .thumbnails .thumb").removeClass('active');
      $(this).addClass('active');
      $(".big-slider .item").removeClass('active');
      $(".big-slider .item.item-1").addClass('active');
    });
    $(".big-slider .thumbnails .thumb.thumb-2").click(function(e) {
      e.preventDefault();
      $(".big-slider .thumbnails .thumb").removeClass('active');
      $(this).addClass('active');
      $(".big-slider .item").removeClass('active');
      $(".big-slider .item.item-2").addClass('active');
    });
    $(".big-slider .thumbnails .thumb.thumb-3").click(function(e) {
      e.preventDefault();
      $(".big-slider .thumbnails .thumb").removeClass('active');
      $(this).addClass('active');
      $(".big-slider .item").removeClass('active');
      $(".big-slider .item.item-3").addClass('active');
    });
    $(".big-slider .thumbnails .thumb.thumb-4").click(function(e) {
      e.preventDefault();
      $(".big-slider .thumbnails .thumb").removeClass('active');
      $(this).addClass('active');
      $(".big-slider .item").removeClass('active');
      $(".big-slider .item.item-4").addClass('active');
    });
    $(".big-slider .thumbnails .thumb.thumb-5").click(function(e) {
      e.preventDefault();
      $(".big-slider .thumbnails .thumb").removeClass('active');
      $(this).addClass('active');
      $(".big-slider .item").removeClass('active');
      $(".big-slider .item.item-5").addClass('active');
    });
    $(".big-slider .thumbnails .thumb.thumb-6").click(function(e) {
      e.preventDefault();
      $(".big-slider .thumbnails .thumb").removeClass('active');
      $(this).addClass('active');
      $(".big-slider .item").removeClass('active');
      $(".big-slider .item.item-6").addClass('active');
    });




    $(".big-slider .slide-control.slide-control--left").click(function(e) {
      e.preventDefault();
      var currentSlide = $(this).parent('.big-slider').find('.item.active'),
          slideIndex = $('.item').index(currentSlide),
          currentThumb = $(this).parent('.big-slider').find('.thumb.active');

      console.log(slideIndex);
      
      if ( currentSlide.prev('.item').length ) {
        currentSlide.removeClass('active');
        currentSlide.prev('.item').addClass('active');
        currentThumb.removeClass('active');
        currentThumb.prev('.thumb').addClass('active');
      } else {
        currentSlide.removeClass('active');
        currentSlide.parent('.big-slider').find('.item').last().addClass('active');
        currentThumb.removeClass('active');
        currentThumb.parent('.thumbnails').find('.thumb').last().addClass('active');
      }

    });

    $(".big-slider .slide-control.slide-control--right").click(function(e) {
      e.preventDefault();
      var currentSlide = $(this).parent('.big-slider').find('.item.active'),
          slideIndex = $('.item').index(currentSlide),
          currentThumb = $(this).parent('.big-slider').find('.thumb.active');

      console.log(slideIndex);
      
      if ( currentSlide.next('.item').length ) {
        currentSlide.removeClass('active');
        currentSlide.next('.item').addClass('active');
        currentThumb.removeClass('active');
        currentThumb.next('.thumb').addClass('active');
      } else {
        currentSlide.removeClass('active');
        currentSlide.parent('.big-slider').find('.item').first().addClass('active');
        currentThumb.removeClass('active');
        currentThumb.parent('.thumbnails').find('.thumb').first().addClass('active');
      }

    });

    $('.popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });

    
    $('.stoneHouse-gallery-block').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      }
    });
    


    $('.video-tumb').on('click', function(e){
      e.preventDefault();
      var videoSource = $(this).data('src'),
          videoTitle = $(this).find('.title').text(),
          videoDescr = $(this).find('.descr').text();

      $(this).parents('.video-block').find('iframe').attr('src', videoSource);
      $(this).parents('.video-block').find('.video-title').text(videoTitle);
      $(this).parents('.video-block').find('.video-descr').text(videoDescr);
    });


    $('.team .big-slider .item .mobile-btn').on('click', function(){
      if ( $(this).hasClass('b-active') ) {
        $(this).removeClass('b-active');
        $(this).parents('.item').find('.mobile-text').slideUp();
      } else {
        $(this).addClass('b-active');
        $(this).parents('.item').find('.mobile-text').slideDown();
      }
      
    });

    $('.team .big-slider .item .mobile-text .close-btn').on('click', function(){
      $(this).parents('.item').find('.mobile-btn').removeClass('b-active');
      $(this).parents('.item').find('.mobile-text').slideUp();
    });

});

$(document).ready(function(){
  $('.investment-slider').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      items:1,
      dots:false,
      autoHeight: true,
      autoplay: true,
      autoplayTimeout: 10000

  });

  // $('.process-slider .slider').owlCarousel({
  //     loop:true,
  //     margin:10,
  //     nav:true,
  //     items:1,
  //     dots:false,
  //     autoHeight: false
  // });

  $('.contact-us-slider').owlCarousel({
      loop:true,
      nav:true,
      items:1,
      dots:false,
      autoHeight: false,
      autoplay: true,
      autoplayTimeout: 5000
  });

  $('.onboarding-process-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.peacock-slider'
  });

  $('.peacock-slider').on('init', function(){

    $(".peacock-slider").prepend($('.peacock-slider-clicker'));
    
    $('.peacock-slider-clicker .click-area').click(function(){

      var slide = $(this).data('slide');
      $('.peacock-slider').slick('slickGoTo', --slide);
    });

  });
  $('.peacock-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.onboarding-process-slider',
    fade: true,
    centerMode: true,
    arrows: false,
    cssEase: "linear",
    speed: 0
  });

});


