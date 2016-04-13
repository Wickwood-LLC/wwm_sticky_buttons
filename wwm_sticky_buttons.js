(function ($) {
	Drupal.behaviors.stickyButtons = {
    attach: function (context, settings) {
      $("#edit-actions").stick_in_parent({parent: 'body'});
    }
  };
}(jQuery));