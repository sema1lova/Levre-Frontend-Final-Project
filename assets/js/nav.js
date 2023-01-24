// navbar scroll color change

$(function () {
    $(document).scroll(function () {
        var $nav = $(".head");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
  });

  // mobile scroll color change
  $(function () {
    $(document).scroll(function () {
        var $mobile = $(".mobile");
        $mobile.toggleClass('scrolled', $(this).scrollTop() > $mobile.height());
      });
  });