!function($){Drupal.behaviors.stickyButtons={attach:function(o,i){function t(){l.css("position","static"),n=l.offset().top,s=$(window).height(),e=l.outerWidth(),c=l.outerHeight(),l.width(e)}if($(window).width()>480){var n,s,e,c,d,w,l=$(".my-sticky-element");$(window).load(t),$(window).resize(t),$(window).scroll(function(){$(document).bind("DOMNodeInserted",t),$("html").find('div[id*="edit-actions"]').each(function(){d=$(window).scrollTop(),w=d+s,console.log(n),console.log(w-c),console.log(n-(w-c)),n>w-c?l.css({position:"fixed",top:"initial",bottom:0,width:e,"box-sizing":"content-box"}):0>n-d?l.css({position:"fixed",top:"65px",bottom:"initial",width:e,"box-sizing":"content-box"}):l.css({position:"static",width:e,"box-sizing":"content-box"})})})}}}}(jQuery);