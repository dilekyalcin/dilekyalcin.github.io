$(document).ready(function () {
  // Initialize the datepicker on the element with id "date"
  $("#date").datepicker();
  // Attach a click event handler to the element with id "sendBtn"
  $("#sendBtn").click(function () {
    // Retrieve the values of various form inputs
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var message = document.getElementById("message").value;
    // Check if any of the form fields are empty
    if (name === "" || email === "" || date === "" || message === "") {
      // Display an error toastr notification if any field is empty
      toastr.error("Form Submitted not Successfully!");
    } else {
      // Display a success toastr notification if all fields are filled
      toastr.success("Form Submitted Successfully!");
    }
  });
});
