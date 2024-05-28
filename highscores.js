const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Sort high scores from highest to lowest
highScores.sort((a, b) => b.score - a.score);

highScoresList.innerHTML = highScores
  .map((score, index) => {
    return `<li class="high-score">${index + 1}. ${score.name} - ${score.score}/100</li>`;
  })
  .join("");

// Get a reference to the clear data button
const clearDataBtn = document.getElementById('clearDataBtn');

// Add event listener to the clear data button
clearDataBtn.addEventListener('click', function() {
    // Ask for PIN confirmation
    const enteredPIN = prompt('Enter PIN to clear data:');
    const correctPIN = '0327'; // Change this to your desired PIN
    
    // Check if the entered PIN is correct
    if (enteredPIN === correctPIN) {
        // Ask for confirmation
        const isConfirmed = confirm('Are you sure you want to clear the data?');
        
        // If user confirms, clear the data
        if (isConfirmed) {
            // Remove the saved data record from local storage
            localStorage.removeItem('highScores');
            // Reload the page
            window.location.reload();
            // Optionally, you can also clear any other data records here if needed
            // localStorage.removeItem('otherDataKey');
            
            // Optional: Display a confirmation message to the user
            alert('Data has been cleared!');
        } else {
            // Display a message if the user cancels the data clearing
            alert('Data will not be cleared.');
        }
    } else {
        // Display an error message if the PIN is incorrect
        alert('Incorrect PIN. Data will not be cleared.');
    }
});