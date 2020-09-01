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

// getElementById: HTMLElement
const ulFromId = document.getElementById("list");
ulFromId.append(fragment);

// getElementsByClassName: HTMLCollection
// only contains element nodes
const listItemFromClassName = ulFromId.getElementsByClassName("list-item");

// getElementsByTagName: HTMLCollection
const listItem = ulFromId.getElementsByTagName("li");
