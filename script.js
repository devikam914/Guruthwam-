
let progress = 0;

function increaseProgress() {
  const progressBar = document.getElementById("progress-bar");
  const progressIcon = document.getElementById("progress-icon");

  const increment = Math.floor(Math.random() * 70) + 1;
  if (progress < 100) {
    progress += increment; // Increment progress by 10% on each click
    if (progress > 100) progress = 100;
    
    // Update the width of the progress bar
    progressBar.style.width = progress + "%";

    const containerWidth = progressContainer.offsetWidth;
    const iconOffset = containerWidth * (progress / 100) - progressIcon.offsetWidth / 2;
    
    // Move the icon to the end of the current progress
    progressIcon.style.left = iconOffset + "px";
  }
}
increaseProgress();

// Optionally, set an interval to update the progress bar periodically
setInterval(increaseProgress(), 1000); 
