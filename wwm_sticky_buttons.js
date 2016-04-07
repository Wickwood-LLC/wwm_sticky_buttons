(function ($) {
	Drupal.behaviors.stickyButtons = {
    attach: function (context, settings) {

      // if ($('div[id*="edit-actions"]').length) {        // if element exists

        var stickyTop;
        var windowHeight;
        var buttonWidth;
        var buttonHeight;
        var windowTop;
        var currentPosition;
        var $this;

        function reset() {
          $('div[id*="edit-actions"]').each(function (e) {
            $this = $(this);
            
            stickyTop = $this.offset().top;       // tells how far our target element is from the top of the page
            windowHeight = $(window).height();    // measures the window height
            buttonWidth = $this.width(); // gets the width of our button
            buttonHeight = $this.height();        // gets the height of our button

            $this.width( buttonWidth );
            $this.css('position','static');
          });
        }
        $(window).load(reset);
        $(window).resize(reset);

        $(window).on("load resize scroll", function() {
        	
        	$(document).bind('DOMNodeInserted', reset);	// reset when new elements are inserted

          $('html').find('div[id*="edit-actions"]').each(function() {
            windowTop = $(window).scrollTop();    // tells how far our screen is currently from the top of the page
            currentPosition = windowTop + windowHeight;    // tells how far our target element is from where our screen is currently 

            console.log(stickyTop);
            console.log(currentPosition - buttonHeight);
            console.log(stickyTop - (currentPosition - (buttonHeight)));

            if (stickyTop > (currentPosition - (buttonHeight))) {    // if target element goes below the screen
              $this.css({ position: 'fixed', top: 'initial', bottom: 0, width: buttonWidth, 'box-sizing': 'content-box' });   // stick it to the bottom
            }
            else if ((stickyTop - windowTop) < 0) {   // if target element goes above the screen
              $this.css({ position: 'fixed', top: '65px', bottom: 'initial', width: buttonWidth, 'box-sizing': 'content-box' });   //stick it at the top
            }
            else {
              $this.css({ position: 'static', width: buttonWidth, 'box-sizing': 'content-box' });
            }
          }); 
        }); 
    }
  };
}(jQuery));