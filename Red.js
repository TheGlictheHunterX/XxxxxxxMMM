function showTrollFace() {
    const terminalOutput = document.getElementById('terminal-output');
    const gifImage = document.getElementById('gifImage');

    // Show the gif inside the terminal
    gifImage.src = 'https://j.top4top.io/p_33424alqm1.gif'; // Your GIF URL
    gifImage.style.display = 'block'; // Make the GIF visible

    // Clear the terminal after 5 seconds
    setTimeout(() => {
        gifImage.style.display = 'none'; // Hide the GIF after 5 seconds
    }, 5000); // 5 seconds duration for showing the GIF
}

// Show the GIF every 3 seconds
setInterval(showTrollFace, 3000); // Show every 3 seconds
