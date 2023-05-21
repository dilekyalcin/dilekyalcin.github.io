$(document).ready(function () {
  $("#date").datepicker();
  $("#sendBtn").click(function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var date = document.getElementById("date").value;
    var message = document.getElementById("message").value;
    if(name === "" || email === "" || date === "" || message === ""){
      toastr.error("Form Submitted not Successfully!");
    }else{
      toastr.success("Form Submitted Successfully!");
    }
  });
});

