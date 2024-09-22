function greetUser() {
  const name = document.getElementById("nameInput").value;

  if (name) {
    const greetingMessage = `Merhaba, ${name}!`;
    document.getElementById("greeting").innerText = greetingMessage;
  }

  updateTime();
  setInterval(updateTime, 1000);
}

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  const dayString = now.toLocaleDateString("tr-TR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  document.getElementById(
    "date"
  ).innerText = `Bugün: ${dayString}, Saat: ${timeString}`;
}
