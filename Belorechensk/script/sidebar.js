var sidebar = document.querySelector('.sidebar');
var content = document.querySelector('.content-page');
var floatSidebar = FloatSidebar({
    sidebar: sidebar,
    relative: content,
    topSpacing: 80,
    bottomSpacing: 42
});