const para = document.createElement("p");
const node = document.createTextNode("This is new paragraph.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);