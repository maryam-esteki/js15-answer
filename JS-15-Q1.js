// ? Question-1:follow these steps:
// todo-1:Select the body tag and apply this color to the background "#0a122d"
// todo-2:select image and set margin "4rem 0"
// todo-3:Apply a rounded border to the image and set its size to "1 rem"
// todo-4:Select h1 and h5 tags and place them in the appropriate position according to the image.(you can check help folder)
// !Answer:
document.body.style.backgroundColor = "#0a122d"
const image = document.querySelector("#strangeFish")
image.style.margin = "4rem 0"
image.style.borderRadius = "1rem"
const heading1 = document.querySelector(".hero__title")
const heading2 = document.querySelector(".hero__subtitle")
heading1.style.position = "absolute"
heading1.style.top= "70px"
heading1.left = "20px"
heading2.style.position="absolute"
heading2.style.top = "100px"
heading2.style.left="10px"



