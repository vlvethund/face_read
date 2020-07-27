sentence_arr = [
  "<p>도대체 무슨 인생을 살아온겁니까 휴먼 </p><p class='dots'>.</p><p class='dots'>.</p><p class='dots'>?</p>",
  "<p>얼굴 데이터 분석 중 </p><p class='dots'>.</p><p class='dots'>.</p><p class='dots'>.</p>",
  "<p>빅데이터가 당신의 얼굴을 분석 중입니다 </p><p class='dots'>.</p><p class='dots'>.</p><p class='dots'>.</p>",
  "<p>얼굴 이미지 분석 중입니다 </p><p class='dots'>.</p><p class='dots'>.</p><p class='dots'>.</p>",
  "<p>얼굴 이미지 분석 중입니다 </p><p class='dots'>.</p><p class='dots'>.</p><p class='dots'>.</p>"
];

$("document").ready(function () {
  $(".result_btn").click(function () {
    let i = Math.floor(Math.random() * sentence_arr.length);
    $(".showing").css("display", "none");
    $(".main_wrapper").append(
      "<div class='image_wrapper'><div class='lds-spinner'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>" +
        "<img class='image_android' src='android.jpg'></img></div>" +
        "<div class='random_sentence'>" +
        sentence_arr[i] +
        "</div>"
    );
  });
});
