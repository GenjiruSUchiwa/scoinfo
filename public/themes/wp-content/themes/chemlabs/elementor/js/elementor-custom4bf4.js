(function($) {
    "use strict";

    $( window ).on( 'elementor/frontend/init', function() {
    	var _elementor = typeof elementor != 'undefined' ? elementor : elementorFrontend;

    	/**
	     * Check right to left
	    */
	    function chemlabs_is_rtl(){
	    	'use strict';
	        var rtl = $('html[dir="rtl"]'),
	            is_rtl = rtl.length ? true : false;
	        return is_rtl;
	    }
    	// Custom Section Class
		_elementor.hooks.addFilter( 'etc-custom-section-classes', function( settings ) {
			let custom_classes = ['cms-chemlabs-test-custom-E-container-class'];
			if(typeof settings.custom_style != 'undefined' && settings.custom_style != ''){
				custom_classes.push('style-' + settings.custom_style);
			}
        	return custom_classes;
		} );
		// Custom Column Class
		_elementor.hooks.addFilter( 'etc-custom-column-classes', function( settings ) {
			let custom_classes = [];
			if(typeof settings.custom_style != 'undefined' && settings.custom_style != ''){
				custom_classes.push('style-' + settings.custom_style);
			}
        	return custom_classes;
		} );


    } );
}(jQuery));