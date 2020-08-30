export default {
  insertToDOM: function () {
    const div = document.createElement("div");
    const span = document.createElement("span");
    const p = document.createElement("p");
    const i = document.createElement("i");
    const b = document.createElement("b");

    div.append(span);
    div.prepend(p);
    span.before(i);

    // Before:
    i.parentNode.insertBefore(b, i);
    // After:
    i.parentNode.insertBefore(b, i.nextSibling);
  },
};
