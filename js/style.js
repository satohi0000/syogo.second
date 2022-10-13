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

$(function () {
  // #で始まるa要素をクリックした場合に処理（"#"←ダブルクォーテンションで囲むのを忘れずに。忘れるとjQueryのバージョンによっては動かない。。）
  $('a[href^="#"]').click(function () {
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    var adjust = 0;
    // スクロールの速度（ミリ秒）
    var speed = 1000;
    // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
    var href = $(this).attr("href");
    // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
    var target = $(href == "#" || href == "" ? "html" : href);
    // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
    var position = target.offset().top + adjust;
    // スムーススクロール linear（等速） or swing（変速）
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
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
  $("#form input,#form textarea").on("change", function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $("#form #privacyCheck").prop("checked") === true
    ) {
      $submitBtn.prop("disabled", false);
    } else {
      $submitBtn.prop("disabled", true);
    }
  });
});
