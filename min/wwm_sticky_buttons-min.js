!function($){Drupal.behaviors.stickyButtons={attach:function(i,t){function o(){h.css({position:"static",width:"initial"}),n=h.offset().top,s=$(window).height(),e=h.width(),c=h.height(),console.log(e),h.width(e)}if($(window).width()>480&&$(".my-sticky-element").offset()){var n,s,e,c,d,w,h=$(".my-sticky-element");$(window).resize(o),$(window).on("load reset scroll",function(){d=$(window).scrollTop(),w=d+s,n>w-c?h.css({position:"fixed",top:"initial",bottom:0,width:e,"box-sizing":"content-box"}):0>n-d?h.css({position:"fixed",top:"65px",bottom:"initial",width:e,"box-sizing":"content-box"}):h.css({position:"static",width:e,"box-sizing":"content-box"})}),$(document).bind("DOMNodeInserted",o)}}}}(jQuery);