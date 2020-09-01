const app = document.getElementById("app");
app.innerHTML = `
  <input type="text">
`;

const input = document.querySelector("input");
// setting element properties in JS DOM value
input.value = 2;
// setting HTML attribute in DOM
input.setAttribute("value", 2);

console.log(input.attributes);
