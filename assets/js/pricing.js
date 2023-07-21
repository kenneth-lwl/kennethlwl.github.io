jQuery.noConflict();
(function ($) {
  $(function () {
    var toggleSwitch = $("#js-pricing-switch input");

    (function () {
      $(toggleSwitch).change(function () {
        // Change prices for plans
        togglePriceContent();

        // Toggle monthly/yearly style
        $(".js-switch-label-monthly, .js-switch-label-yearly").toggleClass(
          "active"
        );
      });
    })();

    function togglePriceContent() {
      if ($(toggleSwitch).is(":checked") === true) {
        // if toggle is yearly
        $(".js-toggle-price-content").each(function () {
          $(this).html($(this).data("price-yearly"));
        });
      } else {
        // if toggle is monthly
        $(".js-toggle-price-content").each(function () {
          $(this).html($(this).data("price-monthly"));
        });
      }
    }
  });
})(jQuery);

window.odometerOptions = {
  duration: 400
};
