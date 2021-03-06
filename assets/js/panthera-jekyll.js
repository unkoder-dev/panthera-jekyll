jQuery(document).ready(function () {

  (function () {
    jQuery('.pan-layout').on('click', '.pan-layout-header__menutoggle', function (e) {
      var $layout = jQuery(e.delegateTarget);
      $layout.toggleClass('pan-menu-open');
    });

    jQuery('.pan-layout').on('click', '.pan-layout-overlay', function (e) {
      var $layout = jQuery(e.delegateTarget);
      $layout.removeClass('pan-menu-open');
    });
    
    $(".pan-layout-left__menu li").on("click", function(){
      //alert($(this).text());
    });

    jQuery('.pan-layout').on('click', '.pan-layout-left__close', function (e) {
      var $layout = jQuery(e.delegateTarget);
      $layout.removeClass('pan-menu-open');
    });
  })();

  (function () {
    var arr = (document.location.href).split("/");
    var $path = "/" + arr[arr.length-1];
    jQuery('[data-menu-link]').removeClass('active');
    jQuery('[data-menu-link="' + $path + '"]').addClass('pan-layout-left__menu_active');
  })();
  
});


jQuery(document).on('pageinit', function () {

  (function () {
    jQuery('.pan-layout').on('swipeleft', function (e) {
      var $layout = jQuery(e.currentTarget);
      $layout.removeClass('pan-menu-open');
    });
  })();

});
