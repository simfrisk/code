let countdownDuration1 = 3900
let countdownDuration2 = 9900;
let countdownDuration3 = 34900;
let countdownDuration4 = 9900;
let countdownDuration5 = 9900;
let countdownDuration6 = 9900;
let countdownDuration7 = 9900;
let countdownDuration8 = 9900;
let countdownDuration9 = 9900;
let countdownDuration10 = 4900;
let countdownDuration11 = 54900;
let countdownDuration12 = 9900;

let timerInterval; // Declare timerInterval in a wider scope
let paused = false; // Track if the timer is paused
let remainingTime; // Store remaining time when paused

// Select the element where the timer will be displayed
const display = document.getElementById('display');
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("stopBtn"); // Pause button
const resetBtn = document.getElementById("resetBtn");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");

let currentStep = 1; // Track the current step of the timer

// Define the countdown function
function startCountdown(duration, nextStepCallback) {
    // If not paused, initialize remaining time
    if (!paused) {
        remainingTime = duration;
    }

    // Update the timer every 100 milliseconds
    timerInterval = setInterval(() => {
        // Calculate seconds and milliseconds (1 digit for ms)
        const seconds = Math.floor(remainingTime / 1000);
        const milliseconds = Math.floor((remainingTime % 1000) / 100); // 1 digit (tenths)

        // Display the remaining time in "seconds.m" format
        display.textContent = `${seconds}`;

        // Decrease the remaining time by 100 milliseconds
        remainingTime -= 100;

        // Check if the countdown has finished
        if (remainingTime < 0) {
            clearInterval(timerInterval); // Stop the countdown
            if (nextStepCallback) nextStepCallback(); // Proceed to the next step
        }

    }, 100);
}

// Function to update instructions and start the next countdown
function proceedToNextStep() {
    if (currentStep === 1) {
        step1.textContent = "Pour 50g of water";
        step2.textContent = "Gently Swirl and wait";
        startCountdown(countdownDuration2, proceedToNextStep);
        currentStep = 2;
    } else if (currentStep === 2) {
        step1.textContent = "Gently Swirl once and wait";
        step2.textContent = "Pour up to 100g total";
        startCountdown(countdownDuration3, proceedToNextStep); // Last step, no next step callback
        currentStep = 3;
    } else if (currentStep === 3) {
        step1.textContent = "Pour up to 100g total";
        step2.textContent = "Pause";
        startCountdown(countdownDuration3, proceedToNextStep); // Last step, no next step callback
        currentStep = 4;
    } else if (currentStep === 4) {
        step1.textContent = "Pause";
        step2.textContent = "Pour up to 150g total";
        startCountdown(countdownDuration4, proceedToNextStep); // Last step, no next step callback
        currentStep = 5;
    } else if (currentStep === 5) {
        step1.textContent = "Pour up to 150g total";
        step2.textContent = "Pause";
        startCountdown(countdownDuration5, proceedToNextStep); // Last step, no next step callback
        currentStep = 6;
    } else if (currentStep === 6) {
        step1.textContent = "Pause";
        step2.textContent = "Pour up to 200g total";
        startCountdown(countdownDuration6, proceedToNextStep); // Last step, no next step callback
        currentStep = 7;
    } else if (currentStep === 7) {
        step1.textContent = "Pour up to 200g total";
        step2.textContent = "Pause";
        startCountdown(countdownDuration7, proceedToNextStep); // Last step, no next step callback
        currentStep = 8;
    } else if (currentStep === 8) {
        step1.textContent = "Pause";
        step2.textContent = "Pour up to 250g total";
        startCountdown(countdownDuration8, proceedToNextStep); // Last step, no next step callback
        currentStep = 9;
    } else if (currentStep === 9) {
        step1.textContent = "Pour up to 250g total";
        step2.textContent = "Gently swirl";
        startCountdown(countdownDuration9, proceedToNextStep); // Last step, no next step callback
        currentStep = 9;
    } else if (currentStep === 10) {
        step1.textContent = "Gently swirl";
        step2.textContent = "finish around 3:00";
        startCountdown(countdownDuration10, proceedToNextStep); // Last step, no next step callback
        currentStep = 10;
    } else if (currentStep === 11) {
        step1.textContent = "finish around 3:00";
        step2.textContent = "Done";
        startCountdown(countdownDuration11, proceedToNextStep); // Last step, no next step callback
        currentStep = 11;
    } else if (currentStep === 12) {
        step1.textContent = "Enjoy Your Coffee";
        step2.textContent = "";
        startCountdown(null); // Last step, no next step callback
        currentStep = 12;
    }
}

// Attach the click event to start the countdown
startBtn.onclick = function() {
    clearInterval(timerInterval);
    step1.textContent = "Pre Timer";
    step2.textContent = "Pour 50g of water";
    startCountdown(countdownDuration1, proceedToNextStep);
    currentStep = 1;
    paused = false; // Reset pause state when starting
};

// Attach the click event to pause the countdown
pauseBtn.onclick = function() {
    clearInterval(timerInterval); // Stop the countdown
    paused = true; // Set the pause state to true
};

// Reset button logic
resetBtn.onclick = function () {
    clearInterval(timerInterval); // Stop the countdown if it's running
    display.textContent = "45"; // Reset the display to the initial time
    step1.textContent = "Start the timer!"; // Reset the instructions
    step2.textContent = "Pour 50g of water to bloom";
    currentStep = 1; // Reset to step 1
    paused = false; // Reset pause state
};
