!function($){Drupal.behaviors.stickyButtons={attach:function(i,o){function t(){$('div[id*="edit-actions"]').each(function(i){l=$(this),n=l.offset().top,s=$(window).height(),c=l.width(),e=l.height(),l.width(c),l.height(e),l.css("position","static")})}var n,s,c,e,d,h,l;$(window).load(t),$(window).resize(t),$(window).on("load resize scroll",function(){$("html").find('div[id*="edit-actions"]').each(function(){d=$(window).scrollTop(),h=d+s,console.log(n),console.log(h-e),console.log(n-(h-e)),n>h-e?l.css({position:"fixed",top:"initial",bottom:0,width:c,"box-sizing":"content-box"}):0>n-d?l.css({position:"fixed",top:"65px",bottom:"initial",width:c,"box-sizing":"content-box"}):l.css({position:"static",width:c,"box-sizing":"content-box"})})})}}}(jQuery);