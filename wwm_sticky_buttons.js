(function ($) {
	Drupal.behaviors.stickyButtons = {
    attach: function (context, settings) {
      $("#edit-actions").pin();
    }
  };
}(jQuery));