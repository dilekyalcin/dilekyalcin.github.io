$(document).ready(function () {
  // Retrieve JSON data from the specified URL
  var url = "../json_file/products.json";
  $.getJSON(url, function (data) {
    var products = data.products;
    // Map through the products and update corresponding HTML elements
    products.map((item, index) => {
      index += 1;
      $(`.main-container${index} .main-title`).text(item.title);
      $(`.main-container${index} .main-text`).text(item.text);
      $(`.main-container${index} .main-img img`).attr("src", item.image);
    });
  }).fail(function () {
    // Log an error message to the console if data fetching fails
    console.log("Error: Cannot fetch data from " + url);
  });
  // Open the product popup when buttons are clicked
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
  // Handle form submission for each product popup
  $("#submit").click(function () {
    // Retrieve form input values
    var number = document.getElementById("cc-number").value;
    var name = document.getElementById("card-holder").value;
    var exp = document.getElementById("cc-exp").value;
    var cvv = document.getElementById("cc-cvv").value;
    if (number === "" || name === "" || exp === "" || cvv === "") {
      // Display error toastr notification if any field is empty
      toastr.error("Payment failed!");
    } else {
      // Display success toastr notification and close the popup if all fields are filled
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
    var number = document.getElementById("cc-number").value;
    var name = document.getElementById("card-holder").value;
    var exp = document.getElementById("cc-exp").value;
    var cvv = document.getElementById("cc-cvv").value;
    if (number === "" || name === "" || exp === "" || cvv === "") {
      toastr.error("Payment failed!");
    } else {
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
    var number = document.getElementById("cc-number").value;
    var name = document.getElementById("card-holder").value;
    var exp = document.getElementById("cc-exp").value;
    var cvv = document.getElementById("cc-cvv").value;
    if (number === "" || name === "" || exp === "" || cvv === "") {
      toastr.error("Payment failed!");
    } else {
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
    var number = document.getElementById("cc-number").value;
    var name = document.getElementById("card-holder").value;
    var exp = document.getElementById("cc-exp").value;
    var cvv = document.getElementById("cc-cvv").value;
    if (number === "" || name === "" || exp === "" || cvv === "") {
      toastr.error("Payment failed!");
    } else {
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
    var number = document.getElementById("cc-number").value;
    var name = document.getElementById("card-holder").value;
    var exp = document.getElementById("cc-exp").value;
    var cvv = document.getElementById("cc-cvv").value;
    if (number === "" || name === "" || exp === "" || cvv === "") {
      toastr.error("Payment failed!");
    } else {
      toastr.success("Your order has been successfully received!");
      $.magnificPopup.close({
        items: {
          src: "#product-popup4",
          type: "inline",
        },
      });
    }
  });
  // Apply card number, expiry date, and CVV formatting
  $(".cc-number").payment("formatCardNumber");
  $(".cc-exp").payment("formatCardExpiry");
  $(".cc-cvv").payment("formatCardCVC");
});
