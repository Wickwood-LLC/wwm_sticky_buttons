(function ($) {
    Drupal.behaviors.stickyButtons = {
    attach: function (context, settings) {

        if (($(window).width() > 480) && (!!$('.my-sticky-element').offset())) {
            var stickyTop;
            var windowHeight;
            var buttonWidth;
            var buttonHeight;
            var windowTop;
            var currentPosition;
            var $this = $('.my-sticky-element');
    
            function reset() {
                $this.css({position: 'static', width: 'initial'});
                
                stickyTop = $this.offset().top;       // tells how far our target element is from the top of the page
                windowHeight = $(window).height();    // measures the window height
                buttonWidth = $this.outerWidth(); // gets the width of our button
                buttonHeight = $this.height();        // gets the height of our button

                console.log(buttonWidth);

                $this.innerWidth( buttonWidth );
            }

            // $(window).off("load resize");
            $(window).once("load resize", reset);
    
            $(window).once("load resize scroll", function() {
    
                windowTop = $(window).scrollTop();    // tells how far our screen is currently from the top of the page
                currentPosition = windowTop + windowHeight;    // tells how far our target element is from where our screen is currently 
    
                // console.log(stickyTop);
                // console.log(currentPosition - buttonHeight);
                // console.log(stickyTop - (currentPosition - (buttonHeight)));
    
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

            $(document).bind('DOMNodeInserted', reset); // reset when new elements are inserted
        }
    }
  };
}(jQuery));