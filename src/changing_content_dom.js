export default function () {
  const app = document.getElementById("app");

  const h1 = document.createElement("h1");
  h1.innerText = "Hi!!, DOM";
  app.append(h1);

  console.log(app.innerHTML);
  // Visible part
  console.log(app.innerText); // elements
  // whole part
  console.log(app.textContent); // Nodes
}
