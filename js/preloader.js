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

  $("#closeCookieConsent, #cookieConsentnee").click(function () {
    $("#cookieConsent2").fadeOut(1);
    $("#cookieConsent").fadeOut(200);
  });

  //timer
  var countDownDate = new Date(new Date().getTime() + 7 * 60 * 60 * 1000);
  var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("timer").innerHTML = hours + "h "
      + minutes + "m " + seconds + "s ";

  }, 1000);
  //
});
