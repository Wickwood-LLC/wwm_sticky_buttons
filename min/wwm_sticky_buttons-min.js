!function($){Drupal.behaviors.stickyButtons={attach:function(o,t){function i(){e=s.offset().top,c=$(window).height(),d=s.width(),l=s.height(),s.width(d)}function n(){a=$(window).scrollTop(),w=a+c,console.log(e),console.log(w-l),console.log(e-(w-l)),e>w-l?s.css({position:"fixed",top:"initial",bottom:0,width:d,"box-sizing":"content-box"}):e-a<0?s.css({position:"fixed",top:"65px",bottom:"initial",width:d,"box-sizing":"content-box"}):s.css({position:"static",top:"initial",bottom:"initial",width:d,"box-sizing":"content-box"})}var s=$(".my-sticky-element"),e,c,d,l,a,w;$(window).width()>480&&$(".my-sticky-element").offset()&&!$("body").hasClass("page-admin-structure-views")&&($(window).on("load resize scroll",n),$(document).bind("DOMNodeInserted",i))}}}(jQuery);