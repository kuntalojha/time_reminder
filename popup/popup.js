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

// Set the target date and time for the countdown
const targetDate = new Date('December 31, 2024 23:59:59').getTime(); // Change to your desired end date

// Function to update the countdown timer
function updateTimer() {
  const now = new Date().getTime(); // Get the current date and time
  const distance = targetDate - now; // Calculate the time remaining

  // Time calculations for days, hours, minutes, seconds, and milliseconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const milliseconds = Math.floor(distance % 1000)
    .toString()
    .padStart(3, '0');
  // Display the result in the HTML
  document.querySelector('.popup-timer').innerHTML = `
    <span style="padding-right: 40px;">${days} </span>
    <span style="padding-right: 70px;">${hours} </span>
    <span style="padding-right: 40px;">${minutes} </span>
    <span style="padding-right: 70px;">${seconds} </span>
    <span style="padding-right: 80px;">${milliseconds} </span>
`;

  document.querySelector('.popup-message').innerHTML = `
        <strong>DAYS HOURS MINUTES SECONDS MILLISECONDS</strong>
    `;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(timerInterval);
    document.querySelector('.popup p').innerHTML = 'Countdown finished!';
  }
}

// Update the timer every 10 milliseconds for more precision
const timerInterval = setInterval(updateTimer, 10);
