const app = document.getElementById("app");
app.innerHTML = `
  <h1>JavaScript DOM</h1>
`;

document.addEventListener("keydown", (event) => {
  console.log(event);
  console.log(event.key, event.code);
});

document.addEventListener("keyup", (event) => {
  console.log(event);
  console.log(event.key, event.code);
});
