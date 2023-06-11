$(document).ready(function () {
  var url = "https://jsonplaceholder.typicode.com/users";
  // Make a request to the specified URL to fetch JSON data
  $.getJSON(url, function (data) {
    // Iterate through the data
    data.forEach((user, index) => {
      index += 1;
      // Insert the name and email of each user into the corresponding HTML elements
      $(`#user${index} .name`).text(user.name);
      $(`#user${index} .text`).text(user.email);
    });
  }).fail(function () {
    // If there is an error fetching the data, log an error message to the console
    console.log("Error: Cannot fetch data from " + url);
  });
});
