document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
      const content = button.parentElement.nextElementSibling;
      const isVisible = content.style.display === 'block';

      // Toggle the content visibility
      content.style.display = isVisible ? 'none' : 'block';

      // Change the button symbol
      button.textContent = isVisible ? '+' : '−';
  });
});
function showContent(tab) {
  // Hide all tab contents
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.style.display = 'none');

  // Show the selected tab content
  document.getElementById(tab).style.display = 'block';

  // Update active tab button
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(button => button.classList.remove('active'));

  event.target.classList.add('active');
}
 