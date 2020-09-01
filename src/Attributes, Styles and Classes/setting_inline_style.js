const app = document.getElementById("app");
app.innerHTML = `
  <input type="text">
`;

const input = document.querySelector("input");

// CSSStyleDeclaration
console.log(input.style);

// Inline Styles
input.style.cssText = "padding: 25px; margin: 10px;";
input.style.fontSize = "22px";

console.log(input.style.fontSize);
