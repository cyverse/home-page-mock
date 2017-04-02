function onShowSideDrawer() {
    var isChecked = document
        .getElementById("SideDrawer_trigger")
        .checked;

    var siteWrap = document
        .getElementById("SiteWrap");

    siteWrap
        .style
        .right = isChecked ? 
            '80%' : '0px';
};
