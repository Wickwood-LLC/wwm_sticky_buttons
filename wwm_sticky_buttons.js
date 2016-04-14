(function ($) {
	Drupal.behaviors.stickyButtons = {
    attach: function (context, settings) {

<<<<<<< HEAD
        var $this = $('.my-sticky-element');

        if (!!$this.offset()) {  // make sure ".my-sticky-element" element exists

            $(window).on("load resize",function() {           // fire the script on load and resize
              $this.css('position','static');  // this is to reset the position of the element whenever the page is updated with AJAX.

              var stickyTop = $this.offset().top;
              var windowHeight = $(window).height();
              var buttonWidth = $this.width();
              var windowTop = $(window).scrollTop(); // returns number  
              var currentPosition = windowTop + windowHeight;
=======
        if ($(window).width() > 480) {
    		var stickyTop;
            var windowHeight;
            var buttonWidth;
            var buttonHeight;
            var windowTop;
            var currentPosition;
            var $this = $('.my-sticky-element');
    
            function reset() {
                $this.css('position','static');
                
                stickyTop = $this.offset().top;       // tells how far our target element is from the top of the page
                windowHeight = $(window).height();    // measures the window height
                buttonWidth = $this.width(); // gets the width of our button
                buttonHeight = $this.height();        // gets the height of our button

                $this.width( buttonWidth );
            }
>>>>>>> eed984c... Added sticky buttons class and improve module based on sticky edit actions

              console.log(buttonWidth);

              // $this.css('width', buttonWidth);      // reset button width

              // if (stickyTop > currentPosition) {
              //   $this.css({ position: 'fixed', top: 'initial', bottom: 0, width: buttonWidth });
              // }
              // else if ((stickyTop - windowTop) < 0) {
              //   $this.css({ position: 'fixed', top: 0, bottom: 'initial', width: buttonWidth });
              // }
              // else {
              //   $this.css('position','static');
              // }
        
              $(window).scroll(function(){ // scroll event 
                var windowTop = $(window).scrollTop(); // returns number  
                var currentPosition = windowTop + windowHeight;
        
                if (stickyTop > currentPosition) {
                  $this.css({ position: 'fixed', top: 'initial', bottom: 0, width: buttonWidth });
                }
                else if ((stickyTop - windowTop) < 0) {
                  $this.css({ position: 'fixed', top: 0, bottom: 'initial', width: buttonWidth });
                }
                else {
                  $this.css('position','static');
                }
              });
            });
        }
    }
  };
}(jQuery));