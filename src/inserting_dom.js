export default {
  insertingDom: function () {
    /**
     * insertAdjacentHTML
     * - afterend
     * - beforeend
     * - afterbegin
     * - beforebegin
     * */
  },

  replacingDomElements: function () {
    const app = document.getElementById("app");
    app.innerHTML = `
      <div>
        I am a div
      </div>
    `;

    const div = document.querySelector("div");
    const anotherDiv = document.createElement("div");
    anotherDiv.innerText = "I replace You";
    // Newer API
    div.replaceWith(anotherDiv);
    // Old API
    div.parentNode.replaceChild(anotherDiv, div);
  },
};
