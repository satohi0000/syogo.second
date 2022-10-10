new Splide(".splide", {
  autoplay: true,
  interval: 5000,
  speed: 2000,
  pauseOnFocus: false,
  fixedWidth: "33%",
  gap: "6%",
  padding: "11%",
  type: "loop",
  width: "100%",
  height: "400px",
}).mount();

$('a[href^="#"]').click(function () {
  var elmHash = $(this).attr("href"); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top + 150 * px; //idの上部の距離を取得
  $("body,html").animate({ scrollTop: pos }, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});

$(".p-article__table-dt1").on("click", function () {
  $(".p-article__table-dt1").next().slideToggle(1000);
  return false;
});
$(".p-article__table-dt2").on("click", function () {
  $(this).next().slideToggle(1000);
  return false;
});
$(".p-article__table-dt3").on("click", function () {
  $(this).next().slideToggle(1000);
  return false;
});

$(document).ready(function () {
  const $submitBtn = $("#js-submit");
  $("#contact input,#contact mail,#contact textarea").on("change", function () {
    if (
      $('#contact input[type="text"]').val() !== "" &&
      $('#contact input[type="mail"]').val() !== "" &&
      $('#contact textarea[type="message"]').val() !== "" &&
      $("#form #privacycheck").prop("checked") === true
    ) {
      $submitBtn.prop("disabled", false);
    } else {
      $submitBtn.prop("disabled", true);
    }
  });
});
