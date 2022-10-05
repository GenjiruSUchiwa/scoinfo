( function( $ ) {
    /**
     * @param $scope The Widget wrapper element as a jQuery element
     * @param $ The jQuery alias
     */
    var WidgetCMSTabsHandler = function( $scope, $ ) {
        $scope.find(".cms-tab-title").on("click", function(e){
            e.preventDefault();
            var target = $(this).data("target");
            var parent = $(this).parents(".cms-tabs");
            parent.find(".cms-tab-content").hide().removeClass('active');
            parent.find(".cms-tab-title").removeClass('active');
            $(this).addClass("active");
            $(target).show().addClass('active');
            $(target).find('.cms-tab-title[data-target="'+target+'"]').addClass('active');
            $('html,body').animate({scrollTop: parent.offset().top - 100}, 30);
        });
    };

    // Make sure you run this code under Elementor.
    $( window ).on( 'elementor/frontend/init', function() {
        elementorFrontend.hooks.addAction( 'frontend/element_ready/cms_tabs.default', WidgetCMSTabsHandler );
        elementorFrontend.hooks.addAction( 'frontend/element_ready/cms_tabs_anything.default', WidgetCMSTabsHandler );
    } );
} )( jQuery );