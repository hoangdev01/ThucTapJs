var lastType = "VND";
var price;
function getResults(price, from, to) {
  if (to == "USD") {
    if (from == "VND") {
      price /= USD_TO_VND;
    } else if (from == "YEN") {
      price /= USD_TO_YEN;
    }
    $("#result").html(
      "Kết quả: " +
        new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "USD",
        }).format(price)
    );
  } else if (to == "VND") {
    if (from == "USD") {
      price *= USD_TO_VND;
    } else if (from == "YEN") {
      price *= USD_TO_VND / USD_TO_YEN;
    }
    $("#result").html(
      "Kết quả: " +
        new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(price)
    );
  } else if (to == "YEN") {
    if (from == "VND") {
      price /= USD_TO_VND / USD_TO_YEN;
    } else if (from == "USD") {
      price *= USD_TO_YEN;
    }
    $("#result").html(
      "Kết quả: " +
        new Intl.NumberFormat("ja-JP", {
          style: "currency",
          currency: "JPY",
        }).format(price)
    );
  }
}
$("input[name=price]").change(function () {
  getResults(
    parseFloat($("#input-price")[0].value || "0"),
    $("#select-from").val(),
    $("#select-to").val()
  );
});
$("select").change(function () {
  getResults(
    parseFloat($("#input-price")[0].value || "0"),
    $("#select-from").val(),
    $("#select-to").val()
  );
});
