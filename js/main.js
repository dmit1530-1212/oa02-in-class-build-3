// Find and assign your constant.
const clickButton = document.querySelector('.toggle-btn');

// Create a click event for it that toggles a CSS class. 
clickButton.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('show-nav');
});