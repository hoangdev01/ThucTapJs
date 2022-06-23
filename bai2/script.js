var result = document.getElementById("result");
var smallResult = document.getElementById("smallResult");
var cal = false;
var val_1 = false;
var val_2 = false;
var oper = "+";
var operPressed = false;
var tot = 0;
var cal_done = false;
var currentStatus = 0;
var o;
function num(val) {
  val = val.toString();
  if (cal_done) cls();
  if (!operPressed) {
    if (!val_1) val_1 = 0;
    val_1 = val_1 + val;
    val_1 = lengthFix(val_1);
    result.innerHTML = val_1;
    smallResult.innerHTML = val_1;
  }
  if (operPressed) {
    if (!val_2) val_2 = 0;
    val_2 = val_2 + val;
    val_2 = lengthFix(val_2);
    result.innerHTML = val_2;
    smallResult.innerHTML = val_1 + oper + val_2;
  }
}
function calc(val) {
  if (val_1 && val_2) {
    operPressed = true;
    total();
    oper = val;
  }
  if (cal_done) {
    var x = (val_1 = tot);
    cls();
    val_1 = x;
    val_1 = lengthFix(val_1);
    result.innerHTML = val;
    smallResult.innerHTML = +x + val;
    oper = val;
    operPressed = true;
  }
  if (!val_1 || operPressed) {
    return false;
  }
  if (val_1 && !val_2) {
    result.innerHTML = val;
    var a = smallResult.innerHTML.toString();
    smallResult.innerHTML = a + val;
    oper = val;
    operPressed = true;
  }
}

function total() {
  if (!val_1) return false;
  if (!val_2 && operPressed) {
    tot = magic(val_1, val_1, oper);
    tot = lengthFix(tot);
  }
  if (val_1 && val_2) {
    tot = magic(val_1, val_2, oper);
    tot = lengthFix(tot);
  }
  tot = tot.toString();
  var noDec = tot.indexOf(".") == -1;
  if (!noDec) tot = parseFloat(tot).toFixed(3);
  result.innerHTML = tot;
}

function magic(a, b, oper) {
  switch (oper) {
    case "+":
      tot = +a + +b;
      cal_done = true;
      break;
    case "-":
      tot = +a - +b;
      cal_done = true;
      break;
    case "/":
      tot = +a / +b;
      cal_done = true;
      break;
    case "*":
      tot = +a * +b;
      cal_done = true;
      break;
    default:
      return false;
  }
  return tot;
}

function cls() {
  smallResult.innerHTML = "";
  result.innerHTML = 0;
  val_1 = false;
  val_2 = false;
  oper = "+";
  tot = 0;
  cal_done = false;
  operPressed = false;
}

function lengthFix(o) {
  o = o.toString();
  if (o != 0 || o != "0") {
    if (o.charAt(0) == 0) o = o.slice(1);
  }
  if (o.toString().length > 12) o = o.substring(0, 12);
  return o;
}

document.onkeyup = function (event) {
  if (event.which == 110 || event.which == 190) num(".");
  if (event.which == 96 || event.which == 48) num("0");
  if (event.which == 97 || event.which == 49) num("1");
  if (event.which == 98 || event.which == 50) num("2");
  if (event.which == 99 || event.which == 51) num("3");
  if (event.which == 100 || event.which == 52) num("4");
  if (event.which == 101 || event.which == 53) num("5");
  if (event.which == 102 || event.which == 54) num("6");
  if (event.which == 103 || event.which == 55) num("7");
  if (event.which == 104 || event.which == 56) num("8");
  if (event.which == 105 || event.which == 57) num("9");
  if (event.which == 111) calc("/");
  if (event.which == 106) calc("*");
  if (event.which == 107) calc("+");
  if (event.which == 109) calc("-");
  if (event.which == 13) total();
  if (event.which == 8 || event.which == 46) cls();
  if (event.which == 27) cls();
};
