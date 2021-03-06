(function ($) {
    Drupal.behaviors.stickyButtons = {
    attach: function (context, settings) {

        var $this = $('.my-sticky-element');
        var stickyTop;
        var windowHeight;
        var buttonWidth;
        var buttonHeight;
        var windowTop;
        var currentPosition;

        function scrollSticky() {
            $this.css({position: 'static', width: 'initial'});
            
            stickyTop = $this.offset().top;       // tells how far our target element is from the top of the page
            windowHeight = $(window).height();    // measures the window height
            buttonWidth = $this.width(); // gets the width of our button
            buttonHeight = $this.height();        // gets the height of our button

            // console.log(buttonWidth);

            $this.width( buttonWidth );

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
        }

        if (($(window).width() > 480) && (!!$('.my-sticky-element').offset()) && (!$("body").hasClass("page-admin-structure-views"))) {
            $(window).on("load resize", scrollSticky);    
            $(window).scroll(scrollSticky);
            $(document).load(function(){
                $(this).bind('DOMNodeInserted', scrollSticky); // reset when new elements are inserted
            });
        }
    }
  };
}(jQuery));