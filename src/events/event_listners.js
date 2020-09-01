const app = document.getElementById('app');
app.innerHTML = `
  <button>
    Click Me!!
  </button>
  <form name="order">
    <label>
      Sign-up Email
      <input type="email" name="email">
    </label>
    <label>
      I agree to the terms
      <input type="checkbox">
    </label>
    <label>
      <select name="pizza">
        <option value="pepperoni">Pepperoni</option>
        <option value="meaty">Meaty</option>
        <option value="cheesy">Cheesy</option>
      </select>
    </label>
  </form>
`;

const button = document.querySelector('button');

function handleClick(event) {
  console.log(event.defaultPrevented);
  // event.preventDefault();
  // event.stopPropagation();
  // event.stopImmediatePropagation();
  // console.log(event.target);
  if (!checkbox.checked) {
    event.preventDefault();
    return;
  }
  console.log(email.value, checkbox.checked);
}

/**
 * HTMLElementEventMap
 * ElementEventMap
 * GlobalEventHandlersEventMap
 * DocumentAndElementEventHandlersEventMap
 */
button.addEventListener('click', handleClick, { capture: true });
button.addEventListener('click', handleClick, { once: true });

const form = document.querySelector('form');
const email = form.querySelector('input[type="email"]');
const checkbox = form.querySelector('input[type="checkbox"]');

form.addEventListener('submit', handleClick);

// forms
const forms = document.forms;
console.log(forms);

const orderFrom = forms.order;
const orderFromEmail = orderFrom.elements.email; // by name attribute
console.log(orderFromEmail);

function handleInput(event) {
  console.log(event.target.value);
}

function handleSubmit(event) {
  event.preventDefault();
  // [["key", "value"]]
  console.log([...new FormData(event.target)]);
  // Emit event formdata
  console.log(new FormData(event.target));
}

function handleFormData(event) {
  console.log(event.formData); // FormData
  console.log([...event.formData]); // [[]]
  console.log([...event.formData.values()]); // []
  console.log(event.formData.entries()); // Iterator [[]]
}

orderFromEmail.addEventListener('input', handleInput);
orderFrom.addEventListener('submit', handleSubmit);
orderFrom.addEventListener('formdata', handleFormData);

// Transforming FormData for the Server
function handleSubmit2(event) {
  event.preventDefault();
  // query String
  // Content-type: application/x-www-form-urlencoded
  const formData = new FormData(event.target);
  const data = [...formData.entries()];
  const asString = data
    .map((x) => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
    .join('&');
  console.log(asString);
}

orderFrom.addEventListener('submit', handleSubmit2);
