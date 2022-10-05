( function( $ ) {
    var CMSSwiperHandler = function( $scope, $ ) {
        var breakpoints_size = elementorFrontend.config.breakpoints,
            carousel = $scope.find(".cms-swiper-container"),
            carousel_thumb = $scope.find(".cms-swiper-container.cms-swiper-thumb");
        if(carousel.length == 0){
            return false;
        }
        var $screen_sm = breakpoints_size['sm'],
            $screen_md = breakpoints_size['md'],  // 767
            $screen_lg = breakpoints_size['lg'], // 1025
            $screen_xl = breakpoints_size['xl'], // 1440
            $screen_xxl = breakpoints_size['xxl']; // 1600

        var data = carousel.data(), 
            settings = data.settings,
            custom_dots = data.customdot,
            custom_dotshtml = data.customdothtml;
            carousel_settings = {
                direction: settings['slide_direction'],
                effect: settings['slide_mode'],
                wrapperClass : 'cms-swiper-wrapper',
                slideClass: 'cms-swiper-slide',
                slidesPerView: settings['slides_to_show_mobile'],
                slidesPerGroup: settings['slides_to_scroll_mobile'],
                slidesPerColumn: settings['slide_percolumn'],
                spaceBetween: settings['slides_gutter'],
                autoHeight: false, 
                navigation: {
                    nextEl: ".cms-swiper-arrow-next",
                    prevEl: ".cms-swiper-arrow-prev",
                },
                speed: settings['speed'],
                watchSlidesProgress: true,
                watchSlidesVisibility: true,
                breakpoints: {
                  768 : {
                    slidesPerView: settings['slides_to_show_tablet'],
                    slidesPerGroup: settings['slides_to_scroll_tablet'],
                  },
                  1025 : {
                    slidesPerView: settings['slides_to_show_laptop'],
                    slidesPerGroup: settings['slides_to_scroll_laptop'],
                  },
                  1280 : {
                    slidesPerView: settings['slides_to_show'],
                    slidesPerGroup: settings['slides_to_scroll'],
                  },
                  1440 : {
                    slidesPerView: settings['slides_to_show'],
                    slidesPerGroup: settings['slides_to_scroll'],
                  },
                  1600 : {
                    slidesPerView: settings['slides_to_show_widescreen'],
                    slidesPerGroup: settings['slides_to_scroll_widescreen'],
                  }
                }
            };
            // loop
            if(settings['loop'] === 'true'){
                carousel_settings['loop'] = true;
            }
            // auto play
            if(settings['autoplay'] === 'true'){
                carousel_settings['autoplay'] = {
                    delay : settings['delay'],
                    disableOnInteraction : settings['pause_on_interaction']
                };
            } else {
                carousel_settings['autoplay'] = false;
            }
            // custom dots style
            if(settings['dots_style'] === 'number'){
                carousel_settings['pagination'] = {
                    el: '.cms-swiper-dots',
                    clickable : true,
                    modifierClass: 'cms-swiper-pagination-',
                    bulletClass : 'cms-swiper-pagination-number',
                    bulletActiveClass: 'active',
                    renderBullet:  function (index, className) {
                        number = index + 1;
                        if(number < 10 ) number = '0'+number;
                        return '<span class="' + className + '">' + number + "</span>";
                    }
                }
            } else if(settings['dots_style'] === 'html'){
                var dots = custom_dotshtml.split(",");
                carousel_settings['pagination'] = {
                    el: '.cms-swiper-dots',
                    clickable : true,
                    modifierClass: 'cms-swiper-pagination-',
                    bulletClass : 'cms-swiper-pagination-html',
                    bulletActiveClass: 'active',
                    renderBullet:  function (index, className) {
                        return '<span class="' + className + '">' + dots[index] + "</span>";
                    }
                }
            } else if(settings['dots_style'] === 'divider'){
                carousel_settings['pagination'] = {
                    type: 'bullets',
                    el: '.cms-swiper-dots',
                    clickable : true,
                    modifierClass: 'cms-swiper-pagination-',
                    bulletClass : 'cms-swiper-pagination-divider',
                    bulletActiveClass: 'active'
                }
            } else if(settings['dots_style'] === 'circle'){
                carousel_settings['pagination'] = {
                    //type: 'bullets',
                    el: '.cms-swiper-dots',
                    clickable : true,
                    modifierClass: 'cms-swiper-pagination-',
                    bulletClass : 'cms-swiper-pagination-circle',
                    bulletActiveClass: 'active'
                }
            } else {
                carousel_settings['pagination'] = {
                    type: settings['dots_style'],
                    el: '.cms-swiper-dots',
                    clickable : true,
                    modifierClass: 'cms-swiper-pagination-',
                    bulletClass : 'cms-swiper-pagination-divider',
                    bulletActiveClass: 'active'
                }
            }
            // Effect
            if(settings['slide_mode'] === 'cube'){
                carousel_settings['cubeEffect'] = {
                  shadow: false,
                  slideShadows: false,
                  shadowOffset: 0,
                  shadowScale: 0, //0.94,
                };
            }
            if(settings['slide_mode'] === 'coverflow'){
                carousel_settings['centeredSlides'] = true;
                carousel_settings['coverflowEffect'] = {
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                };
            }
        carousel.each(function(index, element) {
            var swiper = new Swiper(carousel, carousel_settings);
            if(settings['autoplay'] === 'true' && settings['pause_on_hover'] === 'true'){
                $(this).on({
                  mouseenter: function mouseenter() {
                    this.swiper.autoplay.stop();
                  },
                  mouseleave: function mouseleave() {
                    this.swiper.autoplay.start();
                  }
                });
            }
        });  
    };
    var CMSSliderHandler = function( $scope, $ ) {
        var breakpoints = elementorFrontend.config.breakpoints,
            carousel = $scope.find(".cms-slider-container");
        if(carousel.length == 0){
            return false;
        }
        var data            = carousel.data(), 
            settings        = data.settings,
            custom_dots     = data.customdot,
            custom_dotshtml = data.customdothtml;
            
            settings['pause_on_hover'] === 'true';
            carousel_settings = {
                direction: settings['slide_direction'],
                effect: settings['slide_mode'],
                wrapperClass : 'cms-swiper-slider',
                slideClass: 'cms-slider-item',
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerColumn: 1,
                spaceBetween: 0,
                navigation: {
                  nextEl: ".cms-swiper-arrow-next",
                  prevEl: ".cms-swiper-arrow-prev",
                },
                speed: settings['speed'],
                on: {
                    init : function (swiper){
                        var activeIndex = this.activeIndex;
                        var current = this.slides.eq(activeIndex);
                        $('.swiper-slide .cms-animate').each(function(){
                            var data = $(this).data('settings');
                            $(this).removeClass('animated '+data['animation']).addClass('cms-invisible');
                        });
                        current.find('.cms-animate').each(function(){
                            var  $item = $(this), 
                                 data = $item.data('settings');
                            setTimeout(function () {
                                $item.removeClass('cms-invisible').removeClass('elementor-invisible').addClass('animated ' + data['animation']);
                            }, data['animation_delay']);
                        });  
                    },
                    slideChangeTransitionStart : function (swiper){
                        var activeIndex = this.activeIndex;
                        var current = this.slides.eq(activeIndex);
                        $('.swiper-slide .cms-animate').each(function(){
                            var data = $(this).data('settings');
                            $(this).removeClass('animated '+data['animation']).addClass('cms-invisible');
                        });
                        current.find('.cms-animate').each(function(){
                            var  $item = $(this), 
                                 data = $item.data('settings');
                            setTimeout(function () {
                                $item.removeClass('cms-invisible').removeClass('elementor-invisible').addClass('animated ' + data['animation']);
                            }, data['animation_delay']);
                        });
                    },
                    slideChange: function (swiper) {
                        var activeIndex = this.activeIndex;
                        var current = this.slides.eq(activeIndex);
                        $('.swiper-slide .cms-animate').each(function(){
                            var data = $(this).data('settings');

                            $(this).removeClass('animated '+data['animation']).addClass('cms-invisible');
                        });
                        current.find('.cms-animate').each(function(){
                            var  $item = $(this), 
                                 data = $item.data('settings');
                            setTimeout(function () {
                                $item.removeClass('cms-invisible').removeClass('elementor-invisible').addClass('animated ' + data['animation']);
                            }, data['animation_delay']);
                        });
                    }
                },
                autoHeight: false
            };
            // loop
            if(settings['loop'] === 'true'){
                carousel_settings['loop'] = true;
            }
            // auto play
            if(settings['autoplay'] === 'true'){
                carousel_settings['autoplay'] = {
                    delay : settings['delay'],
                    disableOnInteraction : settings['pause_on_interaction']
                };
            } else {
                carousel_settings['autoplay'] = false;
            }
            // custom dots style
            if(settings['dots_style'] === 'number'){
                carousel_settings['pagination'] = {
                    el: '.cms-swiper-dots',
                    clickable : true,
                    modifierClass: 'cms-swiper-pagination-',
                    bulletClass : 'cms-swiper-pagination-number',
                    bulletActiveClass: 'active',
                    renderBullet:  function (index, className) {
                        number = index + 1;
                        if(number < 10 ) number = '0'+number;
                        return '<span class="' + className + '">' + number + "</span>";
                    }
                }
            } else if(settings['dots_style'] === 'html'){
                var dots = custom_dotshtml.split(",");
                carousel_settings['pagination'] = {
                    el: '.cms-swiper-dots',
                    clickable : true,
                    modifierClass: 'cms-swiper-pagination-',
                    bulletClass : 'cms-swiper-pagination-html',
                    bulletActiveClass: 'active',
                    renderBullet:  function (index, className) {
                        return '<span class="' + className + '">' + dots[index] + "</span>";
                    }
                }
            } else if(settings['dots_style'] === 'divider'){
                carousel_settings['pagination'] = {
                    type: 'bullets',
                    el: '.cms-swiper-dots',
                    clickable : true,
                    modifierClass: 'cms-swiper-pagination-',
                    bulletClass : 'cms-swiper-pagination-divider',
                    bulletActiveClass: 'active'
                }
            } else if(settings['dots_style'] === 'circle'){
                carousel_settings['pagination'] = {
                    //type: 'bullets',
                    el: '.cms-swiper-dots',
                    clickable : true,
                    modifierClass: 'cms-swiper-pagination-',
                    bulletClass : 'cms-swiper-pagination-circle',
                    bulletActiveClass: 'active'
                }
            } else {
                carousel_settings['pagination'] = {
                    type: settings['dots_style'],
                    el: '.cms-swiper-dots',
                    clickable : true,
                    modifierClass: 'cms-swiper-pagination-',
                    bulletClass : 'cms-swiper-pagination-divider',
                    bulletActiveClass: 'active'
                }
            }
            // Effect
            if(settings['slide_mode'] === 'cube'){
                carousel_settings['cubeEffect'] = {
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                };
            }
        carousel.each(function(index, element) {
            var swiper = new Swiper(carousel, carousel_settings);
            if(settings['autoplay'] === 'true' && settings['pause_on_hover'] === 'true'){
                $(this).on({
                  mouseenter: function mouseenter() {
                    this.swiper.autoplay.stop();
                  },
                  mouseleave: function mouseleave() {
                    this.swiper.autoplay.start();
                  }
                });
            }
        });     
    };
    // Make sure you run this code under Elementor.
    $( window ).on( 'elementor/frontend/init', function() {
        // Swipers
        elementorFrontend.hooks.addAction( 'frontend/element_ready/cms_counter.default', CMSSwiperHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/cms_post_carousel.default', CMSSwiperHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/cms_testimonial.default', CMSSwiperHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/cms_fancy_box.default', CMSSwiperHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/cms_clients.default', CMSSwiperHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/cms_teams.default', CMSSwiperHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/cms_howitwork.default', CMSSwiperHandler );
        // Sliders
        elementorFrontend.hooks.addAction( 'frontend/element_ready/cms_slider.default', CMSSliderHandler );
    } );
} )( jQuery );