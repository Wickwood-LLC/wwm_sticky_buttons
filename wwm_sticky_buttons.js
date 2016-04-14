(function ($) {
	Drupal.behaviors.stickyButtons = {
    attach: function (context, settings) {

        if (!!$this.offset()) {  // make sure ".my-sticky-element" element exists

            $(window).on("load resize",function() {           // fire the script on load and resize
              $this.css('position','static');  // this is to reset the position of the element whenever the page is updated with AJAX.
              $this.css('width', '100%');      // reset button width

              var stickyTop = $this.offset().top;
              var windowHeight = $(window).height();
              var buttonWidth = $this.width();
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