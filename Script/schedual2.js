
var addSubClone;


for (let i = 0; i < 3; i++) {
const mainClone = main.cloneNode(true); // Create a deep copy of the main row
mainCounter++; // Increment the highest ID number
@@ -173,8 +174,23 @@ for (let i = 0; i < 3; i++) {
}



// Change the event listener to target a specific cell within the row
mainTable.addEventListener("click", function (event) {
  sub.style.display = "table-row";
  // Check if the clicked element has the class "addSubClass"
  if (event.target.classList.contains("addSubCell1Class")) {
    subClone = sub.cloneNode(true); // Create a deep copy of the sub row
    mainTable.insertBefore(subClone, event.target.parentNode);
    }
});




mainTable.appendChild(addMain);


//Lock and Unlock Function
var lock = document.getElementById("lock");

@@ -253,6 +269,7 @@ mainTable.addEventListener("click", function (event) {

//adds new Main Row
addMain.addEventListener("click", function () {
  sub.style.display = "none";
for (let i = 0; i < 1; i++) {
const mainClone = main.cloneNode(true); // Create a deep copy of the main row
mainCounter++; // Increment the highest ID number
@@ -333,51 +350,6 @@ toggleAll.addEventListener("click", function () {



//Add New Sub workaround. I addad new Sub elements.

//Add TR for Sub
var sub = document.createElement("tr");
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
sub.className = "subClass";
// Change the event listener to target a specific cell within the row
mainTable.addEventListener("click", function (event) {
  // Check if the clicked element has the class "addSubClass"
  if (event.target.classList.contains("addSubCell1Class")) {
    subClone = sub.cloneNode(true); // Create a deep copy of the sub row
    mainTable.insertBefore(subClone, event.target.parentNode);
    }
});










// Function to add minutes to a given time
function addMinutesToTime(time, minutes) {
@@ -465,7 +437,4 @@ function disableTimeInputs() {
});
}

// // Change the event listener to target a specific cell within the row
// addSubClone.addEventListener("click", function () {
//   console.log('You clicked:', event.target);
// });
