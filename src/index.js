import "../assets/css/style.css";
import create_dom_element from "./create_dom_element";
import changing_content_dom from "./changing_content_dom";
import versus from "./innerHTML_vs_createElement";

const app = document.getElementById("app");
app.innerHTML = `<h1>JavaScript DOM!!</h1>`;

// document.addEventListener("DOMContentLoaded", () => alert("DOMContentLoaded"));

// window.addEventListener("load", () => alert("Load"));

create_dom_element();
changing_content_dom();

const inputFromDom = versus.createInputDOM({ label: "Name" });
app.append(inputFromDom);

// Perferred Way
const inputFromTemplate = versus.createInputTemplate({
  label: "Email",
  type: "email",
});

app.innerHTML += inputFromTemplate;

// console.log(document.body instanceof HTMLBodyElement);
// console.log(document.body instanceof HTMLElement);
// console.log(document.body instanceof Element);
// console.log(document.body instanceof EventTarget);
// console.log(document.body instanceof Node);

/*
  - Node Types
   1 Element
   2 Attribute
   3 Text
   4 CDATASection
   5 EntityReference
   6 Entity
   7 ProcessingInstruction
   8 Comment
   9 Document
   10 DocumentType
   11 DocumentFragment
   12 Notation
*/

// console.log(document.body.nodeType);
// console.log(document.nodeType);

// // nodeName for any Node types
// console.log(document.nodeName);
// // tagName for any Element types
// console.log(document.tagName);
