window.onload = function() {
  var init_height = $(window).scrollTop();
  var section2_anchor = $(".section2").position().top;
  var section3_anchor = $(".section3").position().top;
  if (init_height < section2_anchor) {
    $("#section1_brick").addClass("show");
    $("#section2_brick").removeClass("show");
    $("#section3_brick").removeClass("show");
  } else if (init_height >= section2_anchor && init_height < section3_anchor) {
    $("#section1_brick").removeClass("show");
    $("#section2_brick").addClass("show");
    $("#section3_brick").removeClass("show");
  } else if (init_height >= section3_anchor) {
    $("#section1_brick").removeClass("show");
    $("#section2_brick").removeClass("show");
    $("#section3_brick").addClass("show");
  }
  window.onscroll = function() {
    var height = $(window).scrollTop();
    if (height < section2_anchor) {
      $("#section1_brick").addClass("show");
      $("#section2_brick").removeClass("show");
      $("#section3_brick").removeClass("show");
    } else if (height >= section2_anchor && height < section3_anchor) {
      $("#section1_brick").removeClass("show");
      $("#section2_brick").addClass("show");
      $("#section3_brick").removeClass("show");
    } else if (height >= section3_anchor) {
      $("#section1_brick").removeClass("show");
      $("#section2_brick").removeClass("show");
      $("#section3_brick").addClass("show");
    }
  }
}
