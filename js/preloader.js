$(window).load(function () {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");


  setTimeout(function () {
    $("#cookieConsent").fadeIn(200);
  }, 500);

  $("#closeCookieConsent, .cookieConsentOK").click(function () {
    $("#cookieConsent2").fadeOut(1);
    $("#cookieConsent").fadeOut(200);
  });

  $("#closeCookieConsent, .cookieConsentNOT").click(function () {
    $("#cookieConsent").fadeOut(10);
  });
});
