export default function () {
  const app = document.getElementById("app");

  const div = document.createElement("div");
  const text = document.createTextNode("DOM!!!");
  const comment = document.createComment("Some Comments");

  div.append(comment);
  div.append(text);
  app.append(div);
}
