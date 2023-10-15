$(document).ready(function(){
    $('.wrap-320').append('<div class="window-width" style="position: fixed;z-index: 99999;bottom: 0;left: 50%;-webkit-transform: translateX(-50%);transform: translateX(-50%);background: rgba(0,0,0,.5);width: 100px;height: 40px;font-size: 19px;line-height: 40px;text-align: center;color: #fff;"><span></span>px</div>');
    $('.wrap_320').append('<div class="window-width" ><span></span>px</div>');
    
    function windowWidth(){
        $('.window-width span').text($(window).width());
    }
    $(window).on('load resize', windowWidth);
});