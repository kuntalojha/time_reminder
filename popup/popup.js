document.getElementById('hamburger').addEventListener('click', () => {
  // Fetch the content of options.html
  fetch('../options/options.html')
    .then((response) => response.text())
    .then((data) => {
      // Insert the fetched HTML into the modal body
      document.getElementById('modal-body').innerHTML = data;
      // Display the modal
      document.getElementById('modal').style.display = 'block';
    })
    .catch((error) => console.error('Error loading options:', error));
});

// Close the modal
document.getElementById('close').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

// Close the modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
