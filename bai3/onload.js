const api = "https://api.exchangerate-api.com/v4/latest/USD";
var USD_TO_VND;
var USD_TO_YEN;
window.onload = () => {
  fetch(`${api}`)
    .then((currency) => {
      return currency.json();
    })
    .then((data) => {
      USD_TO_VND = data.rates.VND;
      USD_TO_YEN = data.rates.JPY;
    });
};
