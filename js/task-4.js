// Доставка товару

function getShippingCost(country) {
  let price;
  let delivery = `Shipping to ${country} will cost ${price} credits`;
  switch (country) {
    case "China":
      price = 100;
      return delivery;
      break;
    case "Chile":
      price = 250;
      return delivery;
      break;
    case "Australia":
      price = 170;
      return delivery;
      break;
    case "Jamaica":
      price = 120;
      return delivery;
      break;
    default:
      return `Sorry, there is no delivery to your country`;
  }
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));
