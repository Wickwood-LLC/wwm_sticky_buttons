!function($){Drupal.behaviors.stickyButtons={attach:function(i,t){function o(){s.css({position:"static",width:"initial"}),e=s.offset().top,c=$(window).height(),d=s.width(),l=s.height(),console.log(d),s.width(d)}function n(){w=$(window).scrollTop(),h=w+c,e>h-l?s.css({position:"fixed",top:"initial",bottom:0,width:d,"box-sizing":"content-box"}):0>e-w?s.css({position:"fixed",top:"65px",bottom:"initial",width:d,"box-sizing":"content-box"}):s.css({position:"static",width:d,"box-sizing":"content-box"})}var s=$(".my-sticky-element"),e,c,d,l,w,h;d=$(".my-sticky-element").css("width","inherit"),console.log(d),$(window).width()>480&&$(".my-sticky-element").offset()&&($(window).on("load resize",o),$(window).on("load resize scroll",n),$(document).load(function(){$(this).bind("DOMNodeInserted",o)}))}}}(jQuery);