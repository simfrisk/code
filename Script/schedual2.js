// Get a reference to the table element
var mainTable = document.getElementById("mainTable");

// Create a new row element
var main = document.createElement("tr");
var sub = document.createElement("tr");
var addMain = document.createElement("tr");
var addSub = document.createElement("tr");

// Create cell elements for each column in the row
var toggle = document.createElement("td");
var stat = document.createElement("td");
var time = document.createElement("td");
var duration = document.createElement("td");
var scene = document.createElement("td");
var options = document.createElement("td");

toggle.className = "toggle";
stat.className = "stat";
time.className = "time";
duration.className = "duration";
scene.className = "scene";
options.className = "options";

//Content Main
toggle.textContent = "▶";
options.textContent = "⋯";

// Create select element for stat
var statSelect = document.createElement("select");

// Create option elements for the select menu
var option1 = document.createElement("option");
option1.text = "";
var option2 = document.createElement("option");
option2.text = "✓";
var option3 = document.createElement("option");
option3.text = "✗";

// Create input element for time
var timeInput = document.createElement("input");
timeInput.type = "time";


// Append the input element to the time cell
time.appendChild(timeInput);

// Create input element for duration
var durationInput = document.createElement("input");
durationInput.type = "number";
// Append the input element to the duration cell
duration.appendChild(durationInput);

// Set colspan for Main scene
scene.colSpan = 2;

// Append option elements to the select menu
statSelect.add(option1);
statSelect.add(option2);
statSelect.add(option3);

// Append the select menu to the stat1 cell
stat.appendChild(statSelect);

// Create input element for Subcells
var sceneInput = document.createElement("input");
sceneInput.type = "text";
scene.appendChild(sceneInput);

//Append to Main
main.appendChild(toggle);
main.appendChild(stat);
main.appendChild(time);
main.appendChild(duration);
main.appendChild(scene);
main.appendChild(options);

//Create TD for Sub
var subCell1 = document.createElement("td");
var subCell2 = document.createElement("td");
var subOptions = document.createElement("td");

// Set colspan for Sub Cell1 and Cell2
subCell1.colSpan = 3;
subCell2.colSpan = 3;
subOptions.colSpan = 1;

// Create input element for Subcells
var subInput1 = document.createElement("input");
var subInput2 = document.createElement("input");
subInput1.type = "text";
subInput2.type = "text";
subCell1.appendChild(subInput1);
subCell2.appendChild(subInput2);
subOptions.textContent = "⋯";

//Append to Sub
sub.appendChild(subCell1);
sub.appendChild(subCell2);
sub.appendChild(subOptions);

subCell1.className = "subCell1";
subCell2.className = "subCell2";
subOptions.className = "subOptions";

//Hides the Sub rows
sub.style.display = "none";

//Create TD for addSub
var addSubCell1 = document.createElement("td");

//Content addSub
addSubCell1.textContent = "+ New";

// Set colspan for AddSubCell1 add
addSubCell1.colSpan = 7;

//Append to addSub
addSub.appendChild(addSubCell1);

//AddSubcell Class
addSubCell1.className = "addSubCell1Class";

//Hides the Sub rows
addSub.style.display = "none";

//Create TD for addMain
var addMainCell1 = document.createElement("td");

//Content addMain
addMainCell1.textContent = "+ New";

// Set colspan for AddMainCell1 add
addMainCell1.colSpan = 7;

//Append to addMain
addMain.appendChild(addMainCell1);

//Classes
main.className = "mainClass";
sub.className = "subClass";
addMain.className = "addMainClass";
addSub.className = "addSubClass";

//Id sequneces
var mainCounter = 0;
var subCounter = 0;

var addSubClone;

for (let i = 0; i < 3; i++) {
  const mainClone = main.cloneNode(true); // Create a deep copy of the main row
  mainCounter++; // Increment the highest ID number
  const mainId = "main_" + mainCounter; // Generate a unique ID for the main row

  mainClone.id = mainId; // Set the unique ID as the id attribute of the main row
  mainTable.appendChild(mainClone); // Append the cloned main row with the unique ID

  for (let j = 0; j < 3; j++) {
    const subClone = sub.cloneNode(true); // Create a deep copy of the sub row
    subCounter++;
    const subId = "main_" + mainCounter + "_Sub_" + subCounter; // Generate a unique ID for the sub row

    subClone.id = subId; // Set the unique ID as the id attribute of the sub row
    mainTable.appendChild(subClone); // Append the cloned sub row

    // Check if this is the last sub element in the loop
    if (j === 2) {
      addSubClone = addSub.cloneNode(true); // Create a deep copy of addSub
      mainTable.appendChild(addSubClone); // Append addSub after the last sub element
    }
  }
}

mainTable.appendChild(addMain);

//Lock and Unlock Function
var lock = document.getElementById("lock");

lock.addEventListener("click", function () {
  // Toggle the display property of newSubRow
  if (addMain.style.display === "none") {
    addMain.style.display = "table-row";
    lock.textContent = "🔓";
    lock.style.backgroundColor = "black";
    // Enable text input fields
    enableTextInputs();
  } else {
    addMain.style.display = "none";
    lock.textContent = "🔒";
    lock.style.backgroundColor = "darkred";
    // Disable text input fields
    disableTextInputs();
  }
});

function enableTextInputs() {
  // Enable only text input fields
  var textInputs = document.querySelectorAll("input[type='text']");
  textInputs.forEach(function (input) {
    input.disabled = false;
  });
}

function disableTextInputs() {
  // Disable only text input fields
  var textInputs = document.querySelectorAll("input[type='text']");
  textInputs.forEach(function (input) {
    input.disabled = true;
  });
}

// Event listener for toggle buttons to toggle the visibility of their corresponding sub-rows
mainTable.addEventListener("click", function (event) {
  // Check if the clicked element is a toggle button
  if (event.target.classList.contains("toggle")) {
    // Get the parent row of the clicked toggle button
    var parentRow = event.target.closest("tr");

    // Get the sub-row associated with the parent row
    var subRow = parentRow.nextElementSibling;

    // Toggle the display property of the sub-row
    if (subRow.style.display === "none") {
      subRow.style.display = "table-row";
      event.target.textContent = "▼";
    } else {
      subRow.style.display = "none";
      event.target.textContent = "▶";
    }

    // Toggle all sub-rows before the next main row
    var nextRow = subRow.nextElementSibling; // Start from the next row after subRow
    while (nextRow && !nextRow.classList.contains("mainClass")) {
      if (
        nextRow.classList.contains("subClass") ||
        nextRow.classList.contains("addSubClass")
      ) {
        // Code to execute if either condition is true
        if (nextRow.style.display === "none") {
          nextRow.style.display = "table-row";
        } else {
          nextRow.style.display = "none";
        }
      }
      nextRow = nextRow.nextElementSibling;
    }
  }
});

//adds new Main Row
addMain.addEventListener("click", function () {
  for (let i = 0; i < 1; i++) {
    const mainClone = main.cloneNode(true); // Create a deep copy of the main row
    mainCounter++; // Increment the highest ID number
    const mainId = "main_" + mainCounter; // Generate a unique ID for the main row

    mainClone.id = mainId; // Set the unique ID as the id attribute of the main row
    mainTable.appendChild(mainClone); // Append the cloned main row with the unique ID

    for (let j = 0; j < 3; j++) {
      const subClone = sub.cloneNode(true); // Create a deep copy of the sub row
      subCounter++;
      const subId = "main_" + mainCounter + "_Sub_" + subCounter; // Generate a unique ID for the sub row

      subClone.id = subId; // Set the unique ID as the id attribute of the sub row
      mainTable.appendChild(subClone); // Append the cloned sub row

      // Check if this is the last sub element in the loop
      if (j === 2) {
        const addSubClone = addSub.cloneNode(true); // Create a deep copy of addSub
        mainTable.appendChild(addSubClone); // Append addSub after the last sub element
      }
    }
  }

  mainTable.appendChild(addMain);
});

// Delete current row and subsequent rows until the next main row
mainTable.addEventListener("click", function (event) {
  // Check if the clicked element is an "options" or "subOptions" button
  if (event.target.classList.contains("options") || event.target.classList.contains("subOptions")) {
    // Get the parent row of the clicked button
    var deleteParentRow = event.target.closest("tr");

    // Delete rows until the next main row
    var nextRow = deleteParentRow.nextElementSibling;
    while (nextRow && !nextRow.classList.contains("mainClass")) {
      var currentRow = nextRow;
      nextRow = nextRow.nextElementSibling;
      currentRow.remove();
    }

    // Delete the target row
    deleteParentRow.remove();
  }
});

//Delete current row
mainTable.addEventListener("click", function (event) {
  // Check if the clicked element is a toggle button
  if (event.target.classList.contains("subOptions")) {
    // Get the parent row of the clicked toggle button
    var deleteParentRow = event.target.closest("tr");
    deleteParentRow.remove(); // Corrected line to delete the row
  }
});

// Get a reference to the toggleAll element
var toggleAll = document.getElementById("toggleAll");
// Initialize a variable to track the state
var isHidden = true;
// Event listener for toggleAll to toggle all sub-rows and addSub-rows
toggleAll.addEventListener("click", function () {
  // Get all sub-rows and addSub-rows
  var subRows = document.querySelectorAll(".subClass");
  var addSubRows = document.querySelectorAll(".addSubClass");
  // Toggle the display property of sub-rows
  subRows.forEach(function (row) {
    row.style.display = isHidden ? "table-row" : "none";
  });
  // Toggle the display property of addSub-rows
  addSubRows.forEach(function (row) {
    row.style.display = isHidden ? "table-row" : "none";
  });
  // Update the state
  isHidden = !isHidden;
});




// Change the event listener to target a specific cell within the row
mainTable.addEventListener("click", function (event) {
  // Check if the clicked element has the class "addSubClass"
  if (event.target.classList.contains("addSubCell1Class")) {
    subClone = sub.cloneNode(true); // Create a deep copy of the sub row
    mainTable.insertBefore(subClone, event.target.parentNode.parentNode); // Insert the cloned sub row before the target row
  }
});

// Function to add minutes to a given time
function addMinutesToTime(time, minutes) {
    var [hours, mins] = time.split(":").map(Number);
    var totalMins = hours * 60 + mins + minutes;
    var newHours = Math.floor(totalMins / 60);
    var newMins = totalMins % 60;
    return `${String(newHours).padStart(2, '0')}:${String(newMins).padStart(2, '0')}`;
}

// Function to update time fields based on duration changes
function updateTimeFromDuration() {
    var mainRows = document.querySelectorAll('.mainClass');
    mainRows.forEach(function(row, index) {
        var timeInput = row.querySelector('.time input[type="time"]');
        var durationInput = row.querySelector('.duration input[type="number"]');
        if (timeInput && durationInput) {
            var nextRow = mainRows[index + 1];
            if (nextRow) {
                var nextTimeInput = nextRow.querySelector('.time input[type="time"]');
                if (nextTimeInput) {
                    var duration = parseInt(durationInput.value) || 0;
                    var currentTime = timeInput.value;
                    var newTime = addMinutesToTime(currentTime, duration);
                    nextTimeInput.value = newTime;
                }
            }
        }
    });
}

// Event listeners for duration inputs
var durationInputs = document.querySelectorAll('.duration input[type="number"]');
durationInputs.forEach(function(input) {
    input.addEventListener('input', updateTimeFromDuration);
});



// Function to add minutes to a given time
function addMinutesToTime(time, minutes) {
  var [hours, mins] = time.split(":").map(Number);
  var totalMins = hours * 60 + mins + minutes;
  var newHours = Math.floor(totalMins / 60);
  var newMins = totalMins % 60;
  return `${String(newHours).padStart(2, '0')}:${String(newMins).padStart(2, '0')}`;
}

// Function to update time fields based on duration changes
function updateTimeFromDuration() {
  var mainRows = document.querySelectorAll('.mainClass');
  mainRows.forEach(function(row, index) {
      var timeInput = row.querySelector('.time input[type="time"]');
      var durationInput = row.querySelector('.duration input[type="number"]');
      if (timeInput && durationInput) {
          var nextRow = mainRows[index + 1];
          if (nextRow) {
              var nextTimeInput = nextRow.querySelector('.time input[type="time"]');
              if (nextTimeInput) {
                  var duration = parseInt(durationInput.value) || 0;
                  var currentTime = timeInput.value;
                  var newTime = addMinutesToTime(currentTime, duration);
                  nextTimeInput.value = newTime;
              }
          }
      }
  });
}

// Event listeners for duration inputs
var durationInputs = document.querySelectorAll('.duration input[type="number"]');
durationInputs.forEach(function(input) {
  input.addEventListener('input', updateTimeFromDuration);
});




