const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("todo-list-container");
const toast = new bootstrap.Toast(document.getElementById("liveToast"));
const toastMessage = document.getElementById("toastMessage");

// Toast Display Function
function showToast(message, type) {
  toastMessage.textContent = message;
  toastMessage.className = `toast-body fw-bold text-dark bg-${type}`;
  toast.show();
}

// task addition func
function addTask() {
  const taskValue = inputBox.value.trim();
  if (taskValue === "") {
    showToast("Please enter a task!", "warning");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    showToast("Task added!", "success");
    saveData();
  }
  inputBox.value = "";
}

// add task when enter key is pressed
inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

listContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      if (event.target.classList.toggle("checked")) {
        showToast("Task is marked as completed!", "primary");
        saveData();
      } else {
        saveData();
        showToast("Task mark removed!", "secondary");
      }
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      showToast("Task deleted!", "danger");
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
