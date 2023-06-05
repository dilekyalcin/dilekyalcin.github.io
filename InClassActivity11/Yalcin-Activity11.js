$(document).ready(function () {
  $("#nav_list a").click(function (event) {
    event.preventDefault();

    var file = $(this).attr("title");
    var Url = "./json_files/" + file + ".json";

    $("main").empty();

    $.getJSON(Url, function (data) {
      var speakers = data.speakers;
      speakers.map((item) => {
        var title = $("<h1>").text(item.title);
        var month = $("<h2>").text(item.month);
        var name = $("<h2>").text(item.speaker);
        var image = $("<img>").attr("src", item.image);
        var text = $("<p>").text(item.text);
        
        $("main").append(
          title,
          month,
          name,
          image,
          text
        );
      });
    }).fail(function () {
      console.log("Error: Cannot fetch data from " + Url);
    });
  });
}); // end ready
