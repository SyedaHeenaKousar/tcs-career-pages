function toggleAccordion(button) {
  const content = button.nextElementSibling;
  const isOpen = content.style.display === 'block';
  
  document.querySelectorAll('.accordion-content').forEach(item => item.style.display = 'none');
  
  if (!isOpen) {
      content.style.display = 'block';
  }
}
// script.js
document.querySelector(".left-arrow").addEventListener("click", () => {
  document.querySelector(".card-container").scrollBy({
    left: -300,
    behavior: "smooth",
  });
});

document.querySelector(".right-arrow").addEventListener("click", () => {
  document.querySelector(".card-container").scrollBy({
    left: 300,
    behavior: "smooth",
  });
});
