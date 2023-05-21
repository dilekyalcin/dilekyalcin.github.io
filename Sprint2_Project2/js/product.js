$(document).ready(function () {
  $(".btn").click(function () {
    $.magnificPopup.open({
      items: {
        src: "#product-popup",
        type: "inline",
      },
    });
  });
  $(".btn1").click(function () {
    $.magnificPopup.open({
      items: {
        src: "#product-popup1",
        type: "inline",
      },
    });
  });
  $(".btn2").click(function () {
    $.magnificPopup.open({
      items: {
        src: "#product-popup2",
        type: "inline",
      },
    });
  });
  $(".btn3").click(function () {
    $.magnificPopup.open({
      items: {
        src: "#product-popup3",
        type: "inline",
      },
    });
  });
  $(".btn4").click(function () {
    $.magnificPopup.open({
      items: {
        src: "#product-popup4",
        type: "inline",
      },
    });
  });
  $("#submit").click(function () {
    var number= document.getElementById("cc-number").value;
    var name = document.getElementById("card-holder").value;
    var exp = document.getElementById("cc-exp").value;
    var cvv= document.getElementById("cc-cvv").value;
    if(number=== "" || name === "" || exp === "" || cvv === ""){
      toastr.error("Payment failed!");
    }else{
      toastr.success("Your order has been successfully received!");
      $.magnificPopup.close({
        items: {
          src: "#product-popup",
          type: "inline",
        },
      });
    }
  });
  $("#submit1").click(function () {
    var number= document.getElementById("cc-number").value;
    var name = document.getElementById("card-holder").value;
    var exp = document.getElementById("cc-exp").value;
    var cvv= document.getElementById("cc-cvv").value;
    if(number=== "" || name === "" || exp === "" || cvv === ""){
      toastr.error("Payment failed!");
    }else{
      toastr.success("Your order has been successfully received!");
      $.magnificPopup.close({
        items: {
          src: "#product-popup1",
          type: "inline",
        },
      });
    }
  });
  $("#submit2").click(function () {
    var number= document.getElementById("cc-number").value;
    var name = document.getElementById("card-holder").value;
    var exp = document.getElementById("cc-exp").value;
    var cvv= document.getElementById("cc-cvv").value;
    if(number=== "" || name === "" || exp === "" || cvv === ""){
      toastr.error("Payment failed!");
    }else{
      toastr.success("Your order has been successfully received!");
      $.magnificPopup.close({
        items: {
          src: "#product-popup2",
          type: "inline",
        },
      });
    }
  });
  $("#submit3").click(function () {
    var number= document.getElementById("cc-number").value;
    var name = document.getElementById("card-holder").value;
    var exp = document.getElementById("cc-exp").value;
    var cvv= document.getElementById("cc-cvv").value;
    if(number=== "" || name === "" || exp === "" || cvv === ""){
      toastr.error("Payment failed!");
    }else{
      toastr.success("Your order has been successfully received!");
      $.magnificPopup.close({
        items: {
          src: "#product-popup3",
          type: "inline",
        },
      });
    }
  });
  $("#submit4").click(function () {
    var number= document.getElementById("cc-number").value;
    var name = document.getElementById("card-holder").value;
    var exp = document.getElementById("cc-exp").value;
    var cvv= document.getElementById("cc-cvv").value;
    if(number=== "" || name === "" || exp === "" || cvv === ""){
      toastr.error("Payment failed!");
    }else{
      toastr.success("Your order has been successfully received!");
      $.magnificPopup.close({
        items: {
          src: "#product-popup4",
          type: "inline",
        },
      });
    }
  });

  $(".cc-number").payment("formatCardNumber");
  $(".cc-exp").payment("formatCardExpiry");
  $(".cc-cvv").payment("formatCardCVC");
});
