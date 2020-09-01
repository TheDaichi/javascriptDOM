const app = document.getElementById("app");
app.innerHTML = `
  <ul id="list">
    <li>Earth</li>
    <li>Water</li>
  </ul>
`;

const list = document.querySelector("#list");
const queryChildren = list.querySelectorAll("li");

console.log(queryChildren);

// .children: HTMLCollection
console.log(list.children);

// .childNodes: NodeList (Avoid) gives textnodes, commentsnodes ...
console.log(list.childNodes);

// .firstChild: NodeList
console.log(list.firstChild);

console.log(list.firstElementChild);
