var lang = {
  golang: "30%",
  javascript: "80%",
  php: "75%",
  python: "47%",
  express: "85%",
  laravel: "70%",
  flask: "50%",
  bootstrap: "95%",
  react: "65%",
  sql: "70%",
  nosql: "80%"
};

var multiply = 4;

$.each(lang, function(language, pourcent) {
  var delay = 700;

  setTimeout(function() {
    $("#" + language + "-pourcent").html(pourcent);
  }, delay * multiply);

  multiply++;
});
