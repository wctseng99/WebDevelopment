$("h1").css("color", "red");

$("h1").addClass("big-title");

$("h1").removeClass("big-title");

$("h1").text("Bye");

$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function() {
    $("h1").css("color", "purple");
});

$("button").on("mouseover", function () {
    // $("h1").fadeToggle()
    // $("h1").slideToggle()
    // $("h1").animate({opacity: 0.5});
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});

$("input").keypress(function (event) {
    $("h1").text(event.key);
});