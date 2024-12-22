// ? Question-2:Select all spans  with the 'circle' class and write a code to change classes that have 'blue' with 'purple' and vice versa

// !Answer:
const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  circle.addEventListener('click', () => {
    if (circle.classList.contains('blue')) {
      circle.classList.replace('blue', 'purple');
    } else if (circle.classList.contains('purple')) {
      circle.classList.replace('purple', 'blue');
    }
  });
});
