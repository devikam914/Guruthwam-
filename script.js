let progress = 0;

function updatePointerPosition() {
    const pointer = document.getElementById("progress-pointer");
    pointer.style.left = progress + "%";
  }

function increaseProgress() {
  if (progress < 100) {
    progress += Math.floor(Math.random() * 10);
    document.getElementById("progress-bar").style.width = progress + "%";
    updatePointerPosition();
    //document.getElementById("progress-bar").innerText = progress + "%";
  }
}

function decreaseProgress(){
    if (progress >= 0) {
        progress -= Math.floor(Math.random() * 10);
        document.getElementById("progress-bar").style.width = progress + "%";
        updatePointerPosition();
        //document.getElementById("progress-bar").innerText = progress + "%";
      }
}

function randomProgressChange() {
    // Randomly choose to increase or decrease progress
    if (Math.random() < 0.5) {
      increaseProgress();
    } else {
      decreaseProgress();
    }
  }
