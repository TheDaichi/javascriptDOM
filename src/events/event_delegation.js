const app = document.getElementById("app");
app.innerHTML = `
  <ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>
`;

const list = document.querySelector("#list");
// Event Delegation: use event bubbling
list.addEventListener("click", function (event) {
  console.log(event);
});
