const months = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

let currentDate = new Date();

function updateCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  document.getElementById("month-year").textContent = `${months[month]} ${year}`;

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

  let calendarBody = document.getElementById("calendar-body");
  calendarBody.innerHTML = "";

  let dayCounter = 1;
  let totalRows = Math.ceil((firstDayOfMonth + lastDateOfMonth) / 7);

  for (let i = 0; i < totalRows; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 7; j++) {
      let cell = document.createElement("td");

      if (i === 0 && j < firstDayOfMonth || dayCounter > lastDateOfMonth) {
        row.appendChild(cell);
      } else {
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `day-${dayCounter}`;
        checkbox.classList.add("day-checkbox");

        // Load the saved state from localStorage (if exists)
        const savedState = localStorage.getItem(`day-${dayCounter}`);
        if (savedState === "true") {
          checkbox.checked = true;
        } else {
          checkbox.checked = false;
        }

        // Save the state when the checkbox is clicked
        checkbox.addEventListener("change", function() {
          localStorage.setItem(`day-${dayCounter}`, checkbox.checked);
        });

        cell.appendChild(checkbox);
        cell.innerHTML += ` ${dayCounter}`;
        row.appendChild(cell);
        dayCounter++;
      }
    }

    calendarBody.appendChild(row);
  }
}

function changeMonth(direction) {
  currentDate.setMonth(currentDate.getMonth() + direction);
  updateCalendar();
}

// Set up event listeners for month change
document.getElementById("prev-btn").addEventListener("click", () => changeMonth(-1));
document.getElementById("next-btn").addEventListener("click", () => changeMonth(1));

// Export the checkbox states to a JSON file
document.getElementById("export-btn").addEventListener("click", () => {
  const data = {};

  // Loop through all the checkboxes and get their states
  const checkboxes = document.querySelectorAll(".day-checkbox");
  checkboxes.forEach(checkbox => {
    data[checkbox.id] = checkbox.checked;
  });

  // Convert data to JSON
  const jsonData = JSON.stringify(data);

  // Create a blob from the JSON data
  const blob = new Blob([jsonData], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "calendar-data.json";
  link.click();
});

// Import the checkbox states from a JSON file
document.getElementById("import-btn").addEventListener("click", () => {
  document.getElementById("import-file").click();
});

document.getElementById("import-file").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const importedData = JSON.parse(e.target.result);

      // Update the checkbox states from the imported data
      for (let [id, checked] of Object.entries(importedData)) {
        const checkbox = document.getElementById(id);
        if (checkbox) {
          checkbox.checked = checked;
          // Optionally update localStorage as well
          localStorage.setItem(id, checked);
        }
      }
    };
    reader.readAsText(file);
  }
});

// Initialize the calendar on page load
updateCalendar();