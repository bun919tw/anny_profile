window.onload = function() {
  var init_height = $(window).scrollTop();
  if (init_height < 800) {
    $("#section1_brick").addClass("brick");
    $("#section2_brick").removeClass("brick");
    $("#section3_brick").removeClass("brick");
  } else if (init_height >= 800 && init_height < 1600) {
    $("#section1_brick").removeClass("brick");
    $("#section2_brick").addClass("brick");
    $("#section3_brick").removeClass("brick");
  } else if (init_height >= 1600) {
    $("#section1_brick").removeClass("brick");
    $("#section2_brick").removeClass("brick");
    $("#section3_brick").addClass("brick");
  }
  window.onscroll = function() {
    var height = $(window).scrollTop();
    if (height < 800) {
      $("#section1_brick").addClass("brick");
      $("#section2_brick").removeClass("brick");
      $("#section3_brick").removeClass("brick");
    } else if (height >= 800 && height < 1600) {
      $("#section1_brick").removeClass("brick");
      $("#section2_brick").addClass("brick");
      $("#section3_brick").removeClass("brick");
    } else if (height >= 1600) {
      $("#section1_brick").removeClass("brick");
      $("#section2_brick").removeClass("brick");
      $("#section3_brick").addClass("brick");
    }
  }
}
