!function($){Drupal.behaviors.stickyButtons={attach:function(i,t){function o(){s.css({position:"static",width:"initial"}),d=s.width("inherit"),e=s.offset().top,c=$(window).height(),d=s.width(),w=s.height(),console.log(d),s.width(d)}function n(){h=$(window).scrollTop(),l=h+c,e>l-w?s.css({position:"fixed",top:"initial",bottom:0,width:d,"box-sizing":"content-box"}):0>e-h?s.css({position:"fixed",top:"65px",bottom:"initial",width:d,"box-sizing":"content-box"}):s.css({position:"static",width:d,"box-sizing":"content-box"})}var s=$(".my-sticky-element"),e,c,d,w,h,l;$(window).width()>480&&$(".my-sticky-element").offset()&&($(window).on("load resize",o),$(window).on("load resize scroll",n),$(document).load(function(){$(this).bind("DOMNodeInserted",o)}))}}}(jQuery);