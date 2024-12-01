let countdownDurations = [
    3400, 9900, 34900, 9900, 14900, 
    9900, 9900, 9900, 9900, 9900, 
    4900, 54900, 9900
];


let timerInterval; // Declare timerInterval in a wider scope
let paused = false; // Track if the timer is paused
let remainingTime; // Store remaining time when paused

// Select the element where the timer will be displayed
const display = document.getElementById('display');
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("stopBtn"); // Pause button
const containerInstructions = document.getElementById("containerInstructions");

const steps = [];
for (let i = 1; i <= 13; i++) {
    steps.push(document.getElementById(`step${i}`));
}

let currentStep = 1; // Track the current step of the timer



// Define the countdown function
function startCountdown(duration, nextStepCallback) {
    clearInterval(timerInterval); // Clear any existing timer
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

// Attach the click event to start the countdown
startBtn.onclick = function() {
    

    
    clearInterval(timerInterval);
    display.style.opacity = "1";
    startBtn.textContent = "Stop";
    startBtn.style.backgroundColor = "red";
    
    

    startCountdown(countdownDurations[0], proceedToNextStep);
    currentStep = 1;
    paused = false; // Reset pause state when starting
};





// Function to update instructions and start the next countdown
function proceedToNextStep() {
    
    
    if (currentStep === 1) {

        // change the look and position of instructions
        containerInstructions.style.transition = "transform 0.7s ease";
        containerInstructions.style.transform = "translateY(-46px)";

        //Step 1
        step1.style.fontSize = "1.2rem";
        step1.style.opacity = ".5";
        // Step 2
        step2.style.fontSize = "2rem";
        step2.style.opacity = "1";

        // Step 3
        step3.style.fontSize = "1.2rem";
        step3.style.opacity = ".5"; 

        startCountdown(countdownDurations[1], proceedToNextStep);
        currentStep = 2;

    } else if (currentStep === 2) {

         // change the look and position of instructions
         containerInstructions.style.transition = "transform 0.7s ease";
         containerInstructions.style.transform = "translateY(-78px)";
        
        //Step 1
        step1.style.fontSize = "0.4rem";
        step1.style.opacity = "0";
        // Step 2
        step2.style.fontSize = "1.2rem";
        step2.style.opacity = ".5";
        // Step 3
        step3.style.fontSize = "2rem";
        step3.style.opacity = "1";
        // Step 4
        step4.style.fontSize = "1.2rem";
        step4.style.opacity = ".5"; 

        startCountdown(countdownDurations[2], proceedToNextStep); // Last step, no next step callback
        currentStep = 3;


    } else if (currentStep === 3) {

         // change the look and position of instructions
         containerInstructions.style.transition = "transform 0.7s ease";
         containerInstructions.style.transform = "translateY(-110px)";
        
        //Step 2
        step2.style.fontSize = "0.4rem";
        step2.style.opacity = "0";
        // Step 3
        step3.style.fontSize = "1.2rem";
        step3.style.opacity = ".5";
        // Step 4
        step4.style.fontSize = "2rem";
        step4.style.opacity = "1";
        // Step 5
        step5.style.fontSize = "1.2rem";
        step5.style.opacity = ".5";


        startCountdown(countdownDurations[3], proceedToNextStep); // Last step, no next step callback
        currentStep = 4;


    } else if (currentStep === 4) {

        // change the look and position of instructions
         containerInstructions.style.transition = "transform 0.7s ease";
         containerInstructions.style.transform = "translateY(-142px)";
        
       //Step 3
       step3.style.fontSize = "0.4rem";
       step3.style.opacity = "0";
       // Step 4
       step4.style.fontSize = "1.2rem";
       step4.style.opacity = ".5";
       // Step 5
       step5.style.fontSize = "2rem";
       step5.style.opacity = "1";
       // Step 6
       step6.style.fontSize = "1.2rem";
       step6.style.opacity = ".5"; 


        startCountdown(countdownDurations[4], proceedToNextStep); // Last step, no next step callback
        currentStep = 5;
        

    } else if (currentStep === 5) {

        // change the look and position of instructions
        containerInstructions.style.transition = "transform 0.7s ease";
        containerInstructions.style.transform = "translateY(-174px)";
       
        //Step 4
        step4.style.fontSize = "0.4rem";
        step4.style.opacity = "0";
        // Step 5
        step5.style.fontSize = "1.2rem";
        step5.style.opacity = ".5";
        // Step 6
        step6.style.fontSize = "2rem";
        step6.style.opacity = "1";
        // Step 7
        step7.style.fontSize = "1.2rem";
        step7.style.opacity = ".5"; 


        startCountdown(countdownDurations[5], proceedToNextStep); // Last step, no next step callback
        currentStep = 6;
    } else if (currentStep === 6) {

            // change the look and position of instructions
            containerInstructions.style.transition = "transform 0.7s ease";
            containerInstructions.style.transform = "translateY(-206px)";
           
            //Step 5
            step5.style.fontSize = "0.4rem";
            step5.style.opacity = "0";
            // Step 6
            step6.style.fontSize = "1.2rem";
            step6.style.opacity = ".5";
            // Step 7
            step7.style.fontSize = "2rem";
            step7.style.opacity = "1";
            // Step 8
            step8.style.fontSize = "1.2rem";
            step8.style.opacity = ".5"; 

        startCountdown(countdownDurations[6], proceedToNextStep); // Last step, no next step callback
        currentStep = 7;
    } else if (currentStep === 7) {

            // change the look and position of instructions
            containerInstructions.style.transition = "transform 0.7s ease";
            containerInstructions.style.transform = "translateY(-238px)";
            //Step 6
            step6.style.fontSize = "0.4rem";
            step6.style.opacity = "0";
            // Step 7
            step7.style.fontSize = "1.2rem";
            step7.style.opacity = ".5";
            // Step 8
            step8.style.fontSize = "2rem";
            step8.style.opacity = "1";
            // Step 9
            step9.style.fontSize = "1.2rem";
            step9.style.opacity = ".5"; 
            
        startCountdown(countdownDurations[7], proceedToNextStep); // Last step, no next step callback
        currentStep = 8;
    } else if (currentStep === 8) {

            // change the look and position of instructions
            containerInstructions.style.transition = "transform 0.7s ease";
            containerInstructions.style.transform = "translateY(-270px)";
           
            //Step 7
            step7.style.fontSize = "0.4rem";
            step7.style.opacity = "0";
            // Step 8
            step8.style.fontSize = "1.2rem";
            step8.style.opacity = ".5";
            // Step 9
            step9.style.fontSize = "2rem";
            step9.style.opacity = "1";
            // Step 10
            step10.style.fontSize = "1.2rem";
            step10.style.opacity = ".5"; 
            
        startCountdown(countdownDurations[8], proceedToNextStep); // Last step, no next step callback
        currentStep = 9;
    } else if (currentStep === 9) {

            // change the look and position of instructions
            containerInstructions.style.transition = "transform 0.7s ease";
            containerInstructions.style.transform = "translateY(-302px)";
           
            //Step 8
            step8.style.fontSize = "0.4rem";
            step8.style.opacity = "0";
            // Step 9
            step9.style.fontSize = "1.2rem";
            step9.style.opacity = ".5";
            // Step 10
            step10.style.fontSize = "2rem";
            step10.style.opacity = "1";
            // Step 11
            step11.style.fontSize = "1.2rem";
            step11.style.opacity = ".5"; 
            
        startCountdown(countdownDurations[9], proceedToNextStep); // Last step, no next step callback
        currentStep = 10;
    } else if (currentStep === 10) {

            // change the look and position of instructions
            containerInstructions.style.transition = "transform 0.7s ease";
            containerInstructions.style.transform = "translateY(-334px)";
           
            //Step 9
            step9.style.fontSize = "0.4rem";
            step9.style.opacity = "0";
            // Step 10
            step10.style.fontSize = "1.2rem";
            step10.style.opacity = ".5";
            // Step 11
            step11.style.fontSize = "2rem";
            step11.style.opacity = "1";
            // Step 12
            step12.style.fontSize = "1.2rem";
            step12.style.opacity = ".5"; 
            
        startCountdown(countdownDurations[10], proceedToNextStep); // Last step, no next step callback
        currentStep = 11;
    } else if (currentStep === 11) {

            // change the look and position of instructions
            containerInstructions.style.transition = "transform 0.7s ease";
            containerInstructions.style.transform = "translateY(-366px)";
           
            //Step 10
            step10.style.fontSize = "0.4rem";
            step10.style.opacity = "0";
            // Step 11
            step11.style.fontSize = "1.2rem";
            step11.style.opacity = ".5";
            // Step 12
            step12.style.fontSize = "2rem";
            step12.style.opacity = "1";
            // Step 13
            step13.style.fontSize = "1.2rem";
            step13.style.opacity = ".5"; 
            
        startCountdown(countdownDurations[11], proceedToNextStep); // Last step, no next step callback
        currentStep = 12;
    } else if (currentStep === 12) {

            // change the look and position of instructions
            containerInstructions.style.transition = "transform 0.7s ease";
            containerInstructions.style.transform = "translateY(-398px)";
           
            //Step 11
            step11.style.fontSize = "0.4rem";
            step11.style.opacity = "0";
            // Step 12
            step12.style.fontSize = "1.2rem";
            step12.style.opacity = "0";
            // Step 13
            step13.style.fontSize = "2rem";
            step13.style.opacity = "1";
    
            
        startCountdown(null); // Last step, no next step callback
        display.textContent = "Done";
        currentStep = 12;
    }
    
}


