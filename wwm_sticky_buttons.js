(function ($) {
	Drupal.behaviors.stickyButtons = {
    attach: function (context, settings) {

        if (!!$('.my-sticky-element').offset()) { // make sure ".sticky" element exists

            var $this = $('.my-sticky-element');
            var stickyTop = $this.offset().top; // returns number 
            var windowHeight = $(window).height();    // measures the window height
            var buttonWidth = $this.width(); // gets the width of our button
            var buttonHeight = $this.height();        // gets the height of our button
            var windowTop;
            var currentPosition;
         
            $(window).scroll(function(){ // scroll event     
              windowTop = $(window).scrollTop(); // returns number
              currentPosition = windowTop + windowHeight;    // tells how far our target element is from where our screen is currently

              // if (stickyTop < windowTop){
              //   $('.my-sticky-element').css({ position: 'fixed', top: 0 });
              // }
              // else {
              //   $('.my-sticky-element').css('position','static');
              // }

                if (stickyTop > (currentPosition - (buttonHeight))) {    // if target element goes below the screen
                  $this.css({ position: 'fixed', top: 'initial', bottom: 0, width: buttonWidth });   // stick it to the bottom
                }
                else if ((stickyTop - windowTop) < 0) {   // if target element goes above the screen
                  $this.css({ position: 'fixed', top: '65px', bottom: 'initial', width: buttonWidth });   //stick it at the top
                }
                else {
                  $this.css({ position: 'static', width: buttonWidth });
                }     
            });     
        }











      //   if ($(window).width() > 480) {
    		// var stickyTop;
      //       var windowHeight;
      //       var buttonWidth;
      //       var buttonHeight;
      //       var windowTop;
      //       var currentPosition;
      //       var $this = $('.my-sticky-element');
    
      //       function reset() {
      //           $this.css('position','static');
                
      //           stickyTop = $this.offset().top;       // tells how far our target element is from the top of the page
      //           windowHeight = $(window).height();    // measures the window height
      //           buttonWidth = $this.width(); // gets the width of our button
      //           buttonHeight = $this.height();        // gets the height of our button

      //           $this.width( buttonWidth );
      //       }

      //       //$(window).on("load resize", reset);
    
      //       $(window).on("load resize scroll", function() {

      //       	$(document).bind('DOMNodeInserted', reset);	// reset when new elements are inserted

      //           $this.css('position','static');
                
      //           stickyTop = $this.offset().top;       // tells how far our target element is from the top of the page
      //           windowHeight = $(window).height();    // measures the window height
      //           buttonWidth = $this.width(); // gets the width of our button
      //           buttonHeight = $this.height();        // gets the height of our button

      //           $this.width( buttonWidth );
    
      //           windowTop = $(window).scrollTop();    // tells how far our screen is currently from the top of the page
      //           currentPosition = windowTop + windowHeight;    // tells how far our target element is from where our screen is currently 
    
      //           console.log(stickyTop);
      //           console.log(currentPosition - buttonHeight);
      //           console.log(stickyTop - (currentPosition - (buttonHeight)));
    
      //           if (stickyTop > (currentPosition - (buttonHeight))) {    // if target element goes below the screen
      //             $this.css({ position: 'fixed', top: 'initial', bottom: 0, width: buttonWidth, 'box-sizing': 'content-box' });   // stick it to the bottom
      //           }
      //           else if ((stickyTop - windowTop) < 0) {   // if target element goes above the screen
      //             $this.css({ position: 'fixed', top: '65px', bottom: 'initial', width: buttonWidth, 'box-sizing': 'content-box' });   //stick it at the top
      //           }
      //           else {
      //             $this.css({ position: 'static', width: buttonWidth, 'box-sizing': 'content-box' });
      //           }
      //       }); 
      //   }
    }
  };
}(jQuery));