const promoCode = document.getElementById("promotionCode");
const timerElement = document.createElement("span");
timerElement.style.color = "#ff5877";
timerElement.style.padding = "0px 0 0 12px";
promoCode.appendChild(timerElement);

// Add leading zero
function pad(num) {
  return num < 10 ? "0" + num : num;
}

// Set a global fixed end date (everyone sees same countdown)
const endTime = new Date("2025-11-22T23:59:00").getTime();

function updateTimer() {
  const now = Date.now();
  const remaining = endTime - now;

  if (remaining <= 0) {
    timerElement.textContent = "";
    clearInterval(timerInterval);
    return;
  }

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

  timerElement.textContent = `${pad(days)}: ${pad(hours)}: ${pad(
    minutes
  )}: ${pad(seconds)}`;
}

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();
