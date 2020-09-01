const app = document.getElementById("app");
app.innerHTML = `
  <div class="container"></div>
  <ul id="list">
    <li>Earth</li>
    <li>Water</li>
  </ul>
`;

const container = document.querySelector(".container");
console.log(container.parentElement); // app
console.log(container.parentElement.parentElement); // body

const list = document.querySelector("#list");
const queryChildren = list.querySelectorAll("li");

console.log(queryChildren.parentElement); // ul

// find close div with id app
console.log(queryChildren.closest("#app"));

console.log();
