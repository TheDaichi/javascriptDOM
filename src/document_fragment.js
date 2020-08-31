export default {
  // Unperformant Way
  unperformant: function (app) {
    const data = ["Earth", "Fire", "Water", "Air"];
    data.forEach((name) => {
      const li = document.createElement("li");
      li.innerText = name;
      // Costs a lot for more li items
      app.append(li);
    });
  },

  // Document Fragment
  using_fragment: function (app) {
    const data = ["Earth", "Fire", "Water", "Air"];
    const fragment = new document.createDocumentFragment();
    data.forEach((name) => {
      const li = document.createElement("li");
      li.innerText = name;
      // doesn't effect actual DOM representation
      fragment.append(li);
    });
    app.append(fragment);
  },
};
