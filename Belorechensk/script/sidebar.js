var sidebar = document.querySelector('.sidebar');
var content = document.querySelector('.sidebar__content');
var floatSidebar = FloatSidebar({
    sidebar: sidebar,
    relative: content,
    topSpacing: 80,
    bottomSpacing: 42
});