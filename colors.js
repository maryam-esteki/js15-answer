/*
? You have to write a code that changes the color of rectangles upon clicking each color.

- First, look at color-palette1.png . You should create a similar page.
- There are seven colored circles, and upon clicking each circle, the rectangles will change their color. You can find the color codes for the circles below.
- The color chosen will be applied to the first rectangle, and subsequent rectangles will be assigned colors from its spectrum.
- hint: you can modify the alpha (a) of the rgba color to create the spectrum color 
- For example, you can refer to photo color-palette2.png 2, it is for the time when the green color is clicked.

rgba(31, 127, 102, 1)
rgba(255, 200, 0, 1)
rgba(255, 123, 0, 1)
rgba(216, 1, 1, 1)
rgba(223, 4, 70, 1)
rgba(127, 31, 85, 1) 
rgba(93, 18, 199, 1)
rgba(93, 18, 199, 1)
*/
document.body.style.backgroundColor = "gainsboro";
const image = document.querySelector("img");
image.style.width = "250px";
image.style.height = "200px";
image.style.position = "absolute";
image.style.top = "250px";
image.style.right = "50px";

const section = document.querySelector("section");
section.style.display = "flex";
section.style.flexDirection = "column";
section.style.alignItems = "center";
section.style.gap = "20px";
section.style.border = "20px solid #696979";
section.style.width = "1200px";
section.style.height = "500px";
section.style.backgroundColor = "white";
section.style.borderRadius = "30px";
section.style.position = "absolute";
section.style.left = "150px";
section.style.top = "100px";

const div = document.querySelector(".pink");
div.style.border = "1px solid";
div.style.borderRadius = "100px";
div.style.width = "30px";
div.style.height = "30px";
div.style.backgroundColor = "rgba(223, 4, 70, 1)";

const div2 = document.querySelector(".red");
div2.style.border = "1px solid";
div2.style.borderRadius = "100px";
div2.style.width = "30px";
div2.style.height = "30px";
div2.style.backgroundColor = "rgba(216, 1, 1, 1)";

const div3 = document.querySelector(".yellow");
div3.style.border = "1px solid";
div3.style.borderRadius = "100px";
div3.style.width = "30px";
div3.style.height = "30px";
div3.style.backgroundColor = "rgba(255, 200, 0, 1)";

const div4 = document.querySelector(".blue");
div4.style.border = "1px solid";
div4.style.borderRadius = "100px";
div4.style.width = "30px";
div4.style.height = "30px";
div4.style.backgroundColor = "rgba(93, 18, 199, 1)";

const div5 = document.querySelector(".purple");
div5.style.border = "1px solid";
div5.style.borderRadius = "100px";
div5.style.width = "30px";
div5.style.height = "30px";
div5.style.backgroundColor = "rgba(127, 31, 85, 1)";

const div6 = document.querySelector(".green");
div6.style.border = "1px solid";
div6.style.borderRadius = "100px";
div6.style.width = "30px";
div6.style.height = "30px";
div6.style.backgroundColor = "rgba(31, 127, 102, 1)";

const div7 = document.querySelector(".orange");
div7.style.border = "1px solid";
div7.style.borderRadius = "100px";
div7.style.width = "30px";
div7.style.height = "30px";
div7.style.backgroundColor = "rgba(255, 123, 0, 1)";

const division = document.querySelector("div");
division.style.display = "flex";
division.style.flexDirection = "row";
division.style.justifyContent = "center";
division.style.gap = "30px";
division.style.padding = "5rem";

const cont = document.querySelector("#rectangle");
// cont.style.position = "absolute";
cont.style.display = "flex";
cont.style.flexDirection = "row";
cont.style.justifyContent = "center";
cont.style.padding = "10rem";
cont.style.gap = "50px";

const rectangle1 = document.querySelector(".rectangle1");
rectangle1.style.width = "35px";
rectangle1.style.height = "50px";
rectangle1.style.border = "1px solid";

const rectangle2 = document.querySelector(".rectangle2");
rectangle2.style.width = "35px";
rectangle2.style.height = "50px";
rectangle2.style.border = "1px solid";

const rectangle3 = document.querySelector(".rectangle3");
rectangle3.style.width = "35px";
rectangle3.style.height = "50px";
rectangle3.style.border = "1px solid";

div.addEventListener("click", () => {
  rectangle1.style.backgroundColor = "rgba(223, 4, 70, 1)";
  rectangle2.style.backgroundColor = "rgba(223, 4, 70, 0.7)";
  rectangle3.style.backgroundColor = "rgba(223, 4, 70, 0.4)";
});

div2.addEventListener("click", () => {
  rectangle1.style.backgroundColor = "rgba(216, 1, 1, 1)";
  rectangle2.style.backgroundColor = "rgba(216, 1, 1, 0.7)";
  rectangle3.style.backgroundColor = "rgba(216, 1, 1, 0.4)";
});

div3.addEventListener("click", () => {
  rectangle1.style.backgroundColor = "rgba(255, 200, 0, 1)";
  rectangle2.style.backgroundColor = "rgba(255, 200, 0, 0.7)";
  rectangle3.style.backgroundColor = "rgba(255, 200, 0, 0.4)";
});

div6.addEventListener("click", () => {
  rectangle1.style.backgroundColor = "rgba(31, 127, 102, 1)";
  rectangle2.style.backgroundColor = "rgba(31, 127, 102, 0.7)";
  rectangle3.style.backgroundColor = "rgba(31, 127, 102, 0.4)";
});

div4.addEventListener("click", () => {
  rectangle1.style.backgroundColor = "rgba(93, 18, 199, 1)";
  rectangle2.style.backgroundColor = "rgba(93, 18, 199, 0.7)";
  rectangle3.style.backgroundColor = "rgba(93, 18, 199, 0.4)";
});

div5.addEventListener("click", () => {
  rectangle1.style.backgroundColor = "rgba(127, 31, 85, 1)";
  rectangle2.style.backgroundColor = "rgba(127, 31, 85, 0.7)";
  rectangle3.style.backgroundColor = "rgba(127, 31, 85, 0.4)";
});

div7.addEventListener("click", () => {
  rectangle1.style.backgroundColor = "rgba(255, 123, 0, 1)";
  rectangle2.style.backgroundColor = "rgba(255, 123, 0, 0.7)";
  rectangle3.style.backgroundColor = "rgba(255, 123, 0, 0.4)";
});
