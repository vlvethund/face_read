$("document").ready(function () {
  $(".result_btn").click(function () {
    $(".showing").css("display", "none");
    $(".main_wrapper").append(
      "<div class='image_wrapper'><img class='image_android' src='android.jpg'></img></div>"
    );
  });
});
