!function($){Drupal.behaviors.stickyButtons={attach:function(i,o){function t(){$('div[id*="edit-actions"]').each(function(i){a=$(this),n=a.offset().top,s=$(window).height(),c=a.width(),d=a.height(),a.width(c),a.css("position","static")})}var n,s,c,d,e,l,a;$(window).load(t),$(window).resize(t),$(document).bind("DOMNodeInserted",t),$(window).on("load resize scroll",function(){$("html").find('div[id*="edit-actions"]').each(function(){e=$(window).scrollTop(),l=e+s,console.log(n),console.log(l-d),console.log(n-(l-d)),n>l-d?a.css({position:"fixed",top:"initial",bottom:0,width:c,"box-sizing":"content-box"}):0>n-e?a.css({position:"fixed",top:"65px",bottom:"initial",width:c,"box-sizing":"content-box"}):a.css({position:"static",width:c,"box-sizing":"content-box"})})})}}}(jQuery);