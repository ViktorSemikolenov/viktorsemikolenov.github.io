
// jQuery(document).ready(function() {
//     jQuery('.product-filter, .section-product-filter__col').theiaStickySidebar({
//     // Settings
//     additionalMarginTop: 80,
//     additionalMarginBottom: 20,
//     });
// });


var sidebar = document.querySelector('.product-filter');
var content = document.querySelector('.section-product-filter__col');
var floatSidebar = FloatSidebar({
    sidebar: sidebar,
    relative: content,
    topSpacing: 80,
    bottomSpacing: 30
});