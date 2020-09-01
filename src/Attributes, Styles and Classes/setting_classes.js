const app = document.getElementById("app");
app.innerHTML = `
  <input type="text">
`;

const input = document.querySelector("input");

// DOMTokenList
console.log(input.classList);

// New way
input.classList.add("input");
input.classList.remove("input");
input.classList.toggle("input");
input.classList.replace("input", "input1");
