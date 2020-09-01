const app = document.getElementById("app");
app.innerHTML = `
  <ul id="list"></ul>
`;

const data = ["Earth", "Water"];
const fragment = document.createDocumentFragment();

data.forEach((item) => {
  const li = document.createElement("li");
  li.className = "list-item";
  li.innerText = item;
  fragment.append(li);
});

// HTMLCollection
const ulFromQuerySelector = document.querySelector("#list");
ulFromQuerySelector.append(fragment);

// NodeList
const listItemFromQuerySelectorAll = document.querySelectorAll("#list-item");

[...listItemFromQuerySelectorAll].forEach((item) => console.log(item));
Array.from(listItemFromQuerySelectorAll).forEach((item) => console.log(item));
