var fixFloat = 3;
function square(x, y, type) {
  if (!x || !y || !type || x <= 0 || y <= 0)
    return "<i style='color:red'>Invalid input!</i>";
  x = parseFloat(x);
  y = parseFloat(y);
  return type === "C" || type === "c"
    ? 2 * (x + y).toFixed(fixFloat)
    : type === "S" || type === "s"
    ? x * y.toFixed(fixFloat)
    : "<i style='color:red'>Invalid input!</i>";
}
function cicle(r, type) {
  if (!r || !type || r <= 0) return "<i style='color:red'>Invalid input!</i>";
  r = parseFloat(r);
  return type === "C" || type === "c"
    ? 2 * r * Math.PI.toFixed(fixFloat)
    : type === "S" || type === "s"
    ? Math.PI * Math.pow(r, 2).toFixed(fixFloat)
    : "<i style='color:red'>Invalid input!</i>";
}
function triangle(x, y, z, type) {
  if (!x || !y || !z || !type || x <= 0 || y <= 0 || z <= 0)
    return "<i style='color:red'>Invalid input!</i>";
  x = parseFloat(x);
  y = parseFloat(y);
  z = parseFloat(z);
  if (x > y + z && y > x + z && z > x + y)
    return "<i style='color:red'>Invalid input of triangle!</i>";
  let chuvi = x + y + z,
    q = chuvi / 2;
  return type === "C" || type === "c"
    ? chuvi.toFixed(fixFloat)
    : type === "S" || type === "s"
    ? Math.sqrt(q * (q - x) * (q - y) * (q - z)).toFixed(fixFloat)
    : "<i style='color:red'>Invalid option!</i>";
}
function trapezoid(daylon, daynho, canhben1, canhben2, h, type) {
  if (!daylon || !daynho || !type || daylon <= 0 || daynho <= 0)
    return "<i style='color:red'>Invalid input!</i>";
  if (
    (type == "c" || type == "C") &&
    (!canhben1 || !canhben2 || canhben1 <= 0 || canhben2 <= 0)
  )
    return "<i style='color:red'>Invalid input!</i>";
  else if ((type == "s" || type == "S") && (!h || h <= 0))
    return "<i style='color:red'>Invalid input!</i>";
  daylon = parseFloat(daylon || "");
  daynho = parseFloat(daynho || "");
  canhben1 = parseFloat(canhben1 || "");
  canhben2 = parseFloat(canhben2 || "");
  h = parseFloat(h || "");
  return type === "C" || type === "c"
    ? daylon + daynho + canhben1 + canhben2.toFixed(fixFloat)
    : type === "S" || type === "s"
    ? h * (daylon + daynho / 2).toFixed(fixFloat)
    : "<i style='color:red'>Invalid option!</i>";
}
function calSquare(event) {
  event.preventDefault();
  var a = document.getElementsByName("squareA")[0].value;
  var b = document.getElementsByName("squareB")[0].value;
  document.getElementById("sesult-square").innerHTML =
    "Chu vi: " + square(a, b, "c") + "<br>Diện tích: " + square(a, b, "s");
}
function calCicle(event) {
  event.preventDefault();
  var r = document.getElementsByName("cicleR")[0].value;
  document.getElementById("sesult-cicle").innerHTML =
    "Chu vi: " + cicle(r, "c") + "<br>Diện tích: " + cicle(r, "s");
}
function calTriangle(event) {
  event.preventDefault();
  var x = document.getElementsByName("triangleX")[0].value;
  var y = document.getElementsByName("triangleY")[0].value;
  var z = document.getElementsByName("triangleZ")[0].value;
  document.getElementById("sesult-triangle").innerHTML =
    "Chu vi: " +
    triangle(x, y, z, "c") +
    "<br>Diện tích: " +
    triangle(x, y, z, "s");
}
function calTrapezoid(event) {
  event.preventDefault();
  var daylon = document.getElementsByName("trapezoidAB")[0].value;
  var daynho = document.getElementsByName("trapezoidBC")[0].value;
  var canhben1 = document.getElementsByName("trapezoidCD")[0].value;
  var canhben2 = document.getElementsByName("trapezoidDA")[0].value;
  var h = document.getElementsByName("trapezoidH")[0].value;
  document.getElementById("sesult-trapezoid").innerHTML =
    "Chu vi: " +
    trapezoid(daylon, daynho, canhben1, canhben2, h, "c") +
    "<br>Diện tích: " +
    trapezoid(daylon, daynho, canhben1, canhben2, h, "s");
}
