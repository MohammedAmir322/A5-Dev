function showAlert() {
    alert("Board update Successfully");
}


const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", () => {
    document.body.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16); 
});


document.getElementById("discover-button").addEventListener("click", function () {
    window.location.href = "question.html"; 
});





document.addEventListener("DOMContentLoaded", function () {
    let taskCount = document.getElementById("taskCount");
    let completedCount = document.getElementById("completedCount");
    let completedButtons = document.querySelectorAll(".completed-btn");
    let activityLog = document.getElementById("activityLog");
    let clearHistoryBtn = document.getElementById("clearHistory");

    completedButtons.forEach(button => {
        button.addEventListener("click", function () {
            let taskNumber = parseInt(taskCount.textContent);
            let completedNumber = parseInt(completedCount.textContent);

            if (taskNumber > 0) {
                taskCount.textContent = taskNumber - 1;
                completedCount.textContent = completedNumber + 1;

                this.disabled = true;
                this.style.opacity = "0.5";
                let taskCard = this.closest(".task-card");
                let taskName = taskCard.querySelector(".task-title").textContent;
                let deadline = taskCard.querySelector(".task-deadline").textContent;
                let timestamp = new Date().toLocaleString();
                let logEntry = document.createElement("p");
                logEntry.innerHTML = `<strong>${taskName}</strong> completed! (Deadline: ${deadline}, Time: ${timestamp})`;
                logEntry.classList.add("text-gray-700", "border-b", "py-2");

                activityLog.appendChild(logEntry);
            }
        });
    });
    clearHistoryBtn.addEventListener("click", function () {
        activityLog.innerHTML = "";
    });
});



