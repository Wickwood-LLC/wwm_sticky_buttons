!function($){Drupal.behaviors.stickyButtons={attach:function(i,o){function t(){$('div[id*="edit-actions"]').each(function(i){h=$(this),h.css("position","static"),n=h.offset().top,s=$(window).height(),c=h.width(),d=h.height(),h.width(c)})}if($(window).width()>480){var n,s,c,d,e,w,h;$(window).load(t),$(window).resize(t),$(window).on("load resize scroll",function(){$("html").find('div[id*="edit-actions"]').each(function(){e=$(window).scrollTop(),w=e+s,console.log(n),console.log(w-d),console.log(n-(w-d)),n>w-d?h.css({position:"fixed",top:"initial",bottom:0,width:c}):0>n-e?h.css({position:"fixed",top:"65px",bottom:"initial",width:c}):h.css({position:"static",width:c})})})}}}}(jQuery);