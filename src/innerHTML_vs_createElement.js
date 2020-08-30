export default {
  createInputDOM: function ({ label, type = "text" }) {
    const labelEl = document.createElement("label");
    const inputEl = document.createElement("input");

    inputEl.type = type;
    labelEl.innerText = label;
    labelEl.append(inputEl);

    return labelEl;
  },

  createInputTemplate: function ({ label, type = "text" }) {
    return `
    <label>
      ${label}
      <input type="${type}">
    </label>
  `;
  },
};
