const newYearDate = new Date("Jan 1, 2025 00:00:00").getTime();

const countdownInterval = setInterval(function () {
  const now = new Date().getTime();
  const remainingTime = newYearDate - now;

  const days = Math.max(Math.floor(remainingTime / (1000 * 60 * 60 * 24)), 0);
  const hours = Math.max(
    Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    0
  );
  const minutes = Math.max(
    Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)),
    0
  );
  const seconds = Math.max(Math.floor((remainingTime % (1000 * 60)) / 1000), 0);

  document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
  document.getElementById("hours").innerHTML = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerHTML = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerHTML = seconds
    .toString()
    .padStart(2, "0");

  if (remainingTime <= 0) {
    clearInterval(countdownInterval);

    document.getElementById("countdown").classList.add("fade-out");
    document.querySelector(".lead").classList.add("fade-out");

    const newYearMessage = document.getElementById("new-year-message");
    newYearMessage.style.opacity = 1;
    newYearMessage.style.transform = "translateY(0)";

    const countdownTitle = document.getElementById("countdown-title");
    countdownTitle.classList.add("fade-out");

    const labels = document.querySelectorAll(".countdown-label");
    labels.forEach((label) => {
      label.classList.add("fade-out");
    });

    const fireworks = document.querySelectorAll(".firework");
    fireworks.forEach((firework) => {
      firework.style.display = "block";
    });

    showNewYearMessage();
  }
}, 1000);

function showNewYearMessage() {
  const message = document.querySelector(".new-year-message");
  const canvas = document.querySelector("canvas");

  message.classList.add("visible");
  canvas.style.display = "block";
}

function hideNewYearMessage() {
  const message = document.querySelector(".new-year-message");
  const canvas = document.querySelector("canvas");
  message.classList.remove("visible");
}
