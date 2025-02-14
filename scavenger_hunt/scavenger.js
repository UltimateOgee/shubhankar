const riddles = [
    { question: "I dance without moving, yet the world within me turns.<br>I devour what is heavy and return it light.<br>I drink deeply but never thirst.<br>Fire does not touch me, yet I carry its breath.<br>In the end, all that remains is the ghost of the storm.<br>What am I?", code: "A9B2" },
    { question: "I bring relief, yet I’m born of cold,<br>I’m never seen until you’re hurt or bruised.<br>I comfort, though I never speak,<br>A quiet companion, soothing the ache.<br>Melt me, and I vanish from view,<br>Yet my purpose remains clear, tried, and true.<br>What am I?", code: "X3L2" },
    { question: "I wear a gown of snow and dance upon glass,<br>Where love finds a mirror in my endless path.<br>Once I choose, I do not stray,<br>Bound by a vow that will not fade away.<br>A quiet heart, a graceful flight,<br>A symbol of love, both strong and light.<br>What am I?", code: "R4L5" },
    { question: "Ah, so you’re looking for something, are you? Alright, listen close. You’ll find it near where the water flows, but not where it disappears. It’s somewhere close to where you prepare yourself to face the world—where bottles stand like silent sentinels. Now, don’t go reaching for just any one. Find the one that makes things smooth, not the one that scrubs. And don’t just grab it—look beneath. That’s where your prize waits.", code: "L3Q7" },
    { question: "The answer won’t be found in the usual places—no drawers to open, no objects to lift. Instead, seek the one <b>where</b> knowledge lingers but is never seen. She <b>is</b> always listening, yet only responds when called. Many have sought her wisdom, but only those who ask the right question will uncover <b>my</b> secret. She holds truths both vast and small, but only those who search deep enough will find what remains <b>hidden</b>. If you are wise enough to wonder, then perhaps you will know to ask for a <b>clue</b>.", code: "F9D2" },
    { question: "I spin in place yet travel far,<br>Silent roads where no cars are.<br>Mountains climb, but never rise,<br>Miles pass beneath still skies.<br>I chase the wind but feel it not,<br>A journey taken, yet left forgot.<br>What am I?", code: "J5P1" },
    { question: "I bear your weight but do not tire,<br>A quiet healer, a pressure squire.<br>I break the knots that time has spun,<br>Yet have no hands, nor work undone.<br>I roll with pain, yet bring release,<br>A cycle of struggle that ends in peace.<br>What am I?", code: "W3T5" },
    { question: "I sit in stillness, soft yet firm,<br>Waiting for warmth to help me squirm.<br>I spread with ease, but not too far,<br>A little too much, and I leave a scar.<br>I melt in heat, but never burn,<br>A golden touch at every turn.<br>What am I?", code: "" },
    { question: "You win!!! No code needed. Come find me for your final surprise! ❤️ (Show me this screen to prove you finished.)", code: "" }
];

let currentStep = 0;

const progressText = document.getElementById("progress");
const riddleText = document.getElementById("riddle");
const codeInput = document.getElementById("code-input");
const submitBtn = document.getElementById("submit-btn");
const startBtn = document.getElementById("start-btn");
const fireworksContainer = document.getElementById("fireworks-container");
const fireworkSound = document.getElementById("firework-sound");

startBtn.addEventListener("click", startHunt);
submitBtn.addEventListener("click", checkCode);

function startHunt() {
    startBtn.style.display = "none";  
    loadRiddle();
    codeInput.disabled = false;
    submitBtn.disabled = false;
}

function loadRiddle() {
    riddleText.innerHTML = riddles[currentStep].question;
    progressText.innerText = `Progress: ${currentStep} / ${riddles.length - 1}`;

    if (riddles[currentStep].code === "") {
        codeInput.style.display = "none";
        submitBtn.style.display = "none";
    } else {
        codeInput.style.display = "inline-block";
        submitBtn.style.display = "inline-block";
        codeInput.value = ""; 
    }
}

function checkCode() {
    const enteredCode = codeInput.value.trim().toUpperCase();
    if (enteredCode === riddles[currentStep].code) {
        triggerCelebration(); // 🎇 Fireworks + Confetti!
        currentStep++;
        if (currentStep < riddles.length) {
            setTimeout(loadRiddle, 1000); // Wait 1 second before next riddle
        }
    } else {
        alert("Oops! Try again.");
    }
}

function triggerCelebration() {
    fireworkSound.play();

    for (let i = 0; i < 20; i++) {  // More fireworks!
        setTimeout(() => {
            const firework = document.createElement("div");
            firework.classList.add("firework");

            // Random position
            firework.style.left = `${Math.random() * 100}vw`;
            firework.style.top = `${Math.random() * 100}vh`;

            fireworksContainer.appendChild(firework);

            // Remove firework after animation
            setTimeout(() => firework.remove(), 3000);
        }, i * 100);
    }

    for (let i = 0; i < 10; i++) {  // More hearts!
        setTimeout(() => {
            const heart = document.createElement("div");
            heart.classList.add("heart");

            // Random position
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.top = `${Math.random() * 100}vh`;

            fireworksContainer.appendChild(heart);

            // Remove heart after animation
            setTimeout(() => heart.remove(), 3000);
        }, i * 150);
    }

    // Special final explosion effect
    if (currentStep === riddles.length - 1) {
        for (let i = 0; i < 30; i++) {  // Even BIGGER fireworks for the final clue!
            setTimeout(() => {
                const bigFirework = document.createElement("div");
                bigFirework.classList.add("firework");
                bigFirework.style.transform = "scale(6)";  // Super big explosions!
                bigFirework.style.left = `${Math.random() * 100}vw`;
                bigFirework.style.top = `${Math.random() * 100}vh`;
                fireworksContainer.appendChild(bigFirework);
                setTimeout(() => bigFirework.remove(), 4000);
            }, i * 100);
        }
    }
}
