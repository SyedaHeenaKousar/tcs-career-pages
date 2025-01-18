// Example: Highlight the active menu item dynamically
const menuItems = document.querySelectorAll('.navbar-menu li');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.navbar-menu li.active').classList.remove('active');
    item.classList.add('active');
  });
});
document.querySelectorAll('.toggle-button').forEach(button => {
  button.addEventListener('click', () => {
    button.textContent = button.textContent === '+' ? '-' : '+';
  });
});
document.querySelectorAll('.toggle-button').forEach(button => {
  button.addEventListener('click', () => {
    const parent = button.closest('.location-item');
    let details = parent.querySelector('.details');

    if (!details) {
      details = document.createElement('div');
      details.className = 'details';
      details.textContent = 'More details about ' + parent.querySelector('h2').textContent.trim();
      parent.appendChild(details);
    } else {
      details.remove();
    }

    button.textContent = button.textContent === '+' ? '-' : '+';
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtns = document.querySelectorAll('.toggle-btn');
  
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const content = this.closest('.locations').querySelector('.content');
      if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        this.textContent = '-';
      } else {
        content.style.display = 'none';
        this.textContent = '+';
      }
    });
  });
});


document.querySelector('.apply-button').addEventListener('click', function () {
  alert('Redirecting to the application form...');
})
document.querySelector('.apply-btn').addEventListener('mouseover', function() {
  this.style.transform = 'scale(1.1)';
});

document.querySelector('.apply-btn').addEventListener('mouseout', function() {
  this.style.transform = 'scale(1)';
});

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
