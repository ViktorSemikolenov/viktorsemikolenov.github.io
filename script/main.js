$(".search_header input").focus(function(){$(".search_header").addClass("search_header_open")}),$(".search_header input").blur(function(){$(".search_header").removeClass("search_header_open")}),$(".icon_close_search").click(function(){$(".search_header").removeClass("search_header_open")}),$(window).scroll(function(){50<$(window).scrollTop()?$(".navigation").addClass("navigation-fixed"):$(".navigation").removeClass("navigation-fixed")}),$(document).ready(function(){$(".main-slider").owlCarousel({nav:!0,margin:70,center:!1,autoHeight:!0,loop:!0,autoplay:!0,autoplayTimeout:5e3,responsive:{0:{items:1},600:{items:1},1e3:{items:1}}})}),$(".load_more").click(function(){$(this).parents(".load_section").addClass("load_section_open"),$(".load_section_open .hidden").removeClass("hidden"),$(this).css("display","none")}),$(".services .hidden").slice(0,5).removeClass("hidden"),$(".faq .hidden").slice(0,5).removeClass("hidden"),$(document).ready(function(){$(".slider").owlCarousel({nav:!0,navText:['<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.828 7.00005H16V9.00005H3.828L9.192 14.364L7.778 15.778L0 8.00005L7.778 0.222046L9.192 1.63605L3.828 7.00005Z" fill="#8D9FBB"/></svg>','<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.172 7.00005L6.808 1.63605L8.222 0.222046L16 8.00005L8.222 15.778L6.808 14.364L12.172 9.00005H0V7.00005H12.172Z" fill="#8D9FBB"/></svg>'],margin:24,center:!1,autoHeight:!0,loop:!0,responsive:{0:{items:1},760:{items:2},980:{items:3},1200:{items:4}}})}),$(document).ready(function(){$(".slider-anim").owlCarousel({nav:!1,navText:['<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.828 7.00005H16V9.00005H3.828L9.192 14.364L7.778 15.778L0 8.00005L7.778 0.222046L9.192 1.63605L3.828 7.00005Z" fill="#8D9FBB"/></svg>','<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.172 7.00005L6.808 1.63605L8.222 0.222046L16 8.00005L8.222 15.778L6.808 14.364L12.172 9.00005H0V7.00005H12.172Z" fill="#8D9FBB"/></svg>'],margin:24,center:!1,autoHeight:!1,autoplay:!1,autoplayTimeout:5e3,loop:!0,responsive:{0:{items:1},760:{items:2},980:{items:3},1200:{items:4}}})}),$(".faq_item").click(function(){$(this).toggleClass("faq_item_open")}),$(".btn_submit").click(function(){$(".input").addClass("input_eror")}),$(document).ready(function(){$("img.lazy").lazyload({effect:"fadeIn"})});