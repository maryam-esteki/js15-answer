// ?Question-3:follow these steps:
// todo-1:select "ul" element with "navbar" class.
// todo-2:add the items of the navbarItem array to the "ul" element by appending them as <li> elements.
// todo-3:Add the class "item" to each <li> element.
// todo-4:Edit the <li> tags according to the image.(You can check the help folder or use the following style for each <li> element)
/**
  {
    margin: 0 1rem;
    cursor: pointer;
  }
*/
// !Answer:
const navbarItem = ["Home", "Products", "Blog", "Contact us"];
const ul = document.querySelector(".navbar")
navbarItem.forEach((items)=>{
const li = document.createElement("li")
li.textContent = items
ul.appendChild(li)
})

const li = document.querySelectorAll("li")
li.forEach(item => {
  item.classList.add('item');
  item.style.fontSize = '16px';
  item.style.color = 'white';
  item.style.padding = '10px 15px';
  item.style.margin = '0 1rem';
  item.style.border = '1px solid #ccc';
  item.style.borderRadius = '4px';
  item.style.cursor ="pointer"
});