function playSound(keyCode) {
  // Select audio and button elements based on key code
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const button = document.querySelector(`.sound-button[data-key="${keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  button.classList.add("playing");
  setTimeout(() => button.classList.remove("playing"), 100);
}

// Add click event listener to each drum button
document.querySelectorAll(".sound-button").forEach((button) => {
  button.addEventListener("click", function () {
    playSound(this.getAttribute("data-key")); // Play sound on click
  });
});

// Add keydown event listener for playing sound via keyboard
window.addEventListener("keydown", function (e) {
  playSound(e.key.toUpperCase());
});
