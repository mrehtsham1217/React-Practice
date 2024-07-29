// DOM -->Document Object Modulation
/*
    1.Window--> Document--> Html -->
    1.Head -->Title(text Node) -->Meta tags(Attributes)
    2.Body -->Div -->Attributes --> h1-h6 -->paragraph


    InnerText --->Will show Only Visible text if display None is applied It will not Show
    InnerContent -->It shows all the text display None is applied or not
    InnerHtml -->It will show the inner Html also

*/

// const parent = document.querySelector(".parent");
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerHTML);

// for (let i = 0; i < parent.children.length; i++) {
//   console.log(parent.children[i].innerHTML);
// }

// parent.children[1].style.backgroundColor = "green";

// console.log(parent.firstElementChild);
// console.log(parent.firstElementChild.innerHTML);

// console.log(parent.childNodes);
/*
myDiv = document.createElement("div");
myDiv.className = "main";
myDiv.id = Math.floor(Math.random() * 10);
myDiv.setAttribute("title", "generated Title");
myDiv.style.backgroundColor = "green";
myDiv.style.padding = "20px";
// myDiv.innerText = "Ehtsham khaliq";
const text = (document.createTextNode = "My Journey for React js");

myDiv.append(text);
document.body.appendChild(myDiv);
console.log(myDiv);

function addLanguage(language) {
  const li = document.createElement("li");
  li.innerHTML = `${language}`;
  document.querySelector(".languages").appendChild(li);
}

//this is the most efficient way to create elements
function addLanguage2(language) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(language));
  document.querySelector(".languages").appendChild(li);
}
addLanguage("Python");
addLanguage("Node js");
addLanguage("Express js");
addLanguage2("golang");

function replaceElement(elements, text) {
  const secondlang = document.querySelector(elements);
  // secondlang.innerHTML = "Mojo";-->not best way
  const newli = document.createElement("li");
  newli.textContent = text;
  secondlang.replaceWith(newli);
}

replaceElement("li:nth-child(2)", "Mojo");
replaceElement("li:nth-child(4)", "Next js");
replaceElement("li:nth-child(1)", "React js");

const lastEle = document.querySelector("li:last-child");
lastEle.remove();


function addElement(element, text) {
  const elemment = document.querySelector(".list");
  
  new_li = document.createElement(element);
  new_li.textContent = text;
  
  elemment.appendChild(new_li);
}

addElement("li", "Javascript");
addElement("li", "Golang");
addElement("li", "Django");
addElement("li", "FastAPI");
addElement("li", "Flask");
*/
