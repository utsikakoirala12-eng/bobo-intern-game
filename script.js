// Game state
let currentDay = 0;

// Scenes data
const scenes = {
  0: {
    text: "Welcome, Bobo. Click start to begin your first day.",
    choices: [
      { label: "Start Day 1", nextDay: 1 }
    ]
  },
  1: {
    text: "Day 1 – Git Disaster. You accidentally deleted the main branch.",
    choices: [
      { label: "Try to fix with git commands", nextDay: 2 },
      { label: "Pretend nothing happened", nextDay: "fired" }
    ]
  },
  2: {
    text: "Day 2 – Coffee Catastrophe. You spilled coffee near the server.",
    choices: [
      { label: "Run diagnostics (Bash)", nextDay: 3 },
      { label: "Blame the office cat", nextDay: 3 }
    ]
  },
  3: {
    text: "Day 3 – HTML Horror. Your page is a mess.",
    choices: [
      { label: "Fix semantic HTML", nextDay: 4 },
      { label: "Use more <div> everywhere", nextDay: "fired" }
    ]
  },
  4: {
    text: "Day 4 – JavaScript Chaos. A dancing banana appears.",
    choices: [
      { label: "Debug the script", nextDay: 5 },
      { label: "Ignore it", nextDay: "fired" }
    ]
  },
  5: {
    text: "Day 5 – CEO Review. Time to present your work.",
    choices: [
      { label: "Present confidently", nextDay: "hired" },
      { label: "Admit you copied everything", nextDay: "fired" }
    ]
  },
  fired: {
    text: "You got fired. The office plant has replaced you.",
    choices: [
      { label: "Restart game", nextDay: 0 }
    ]
  },
  hired: {
    text: "You survived the week! You are now a full-time developer.",
    choices: [
      { label: "Play again", nextDay: 0 }
    ]
  }
};

const storyTextEl = document.getElementById("story-text");
const choicesEl = document.getElementById("choices");

function saveProgress(day) {
  localStorage.setItem("bobo-current-day", day);
}

function loadProgress() {
  const saved = localStorage.getItem("bobo-current-day");
  if (saved && scenes[saved]) {
    return saved;
  }
  return 0;
}

// Render a scene
function renderScene(day) {
  const scene = scenes[day];
  currentDay = day;
//save progress
  saveProgress(day);


  storyTextEl.textContent = scene.text;

  // Add shake effect if fired
  if (day === "fired") {
    storyTextEl.classList.add("shake");
    setTimeout(() => storyTextEl.classList.remove("shake"), 500);
  }

  choicesEl.innerHTML = "";

  scene.choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.label;
    btn.addEventListener("click", () => {
      renderScene(choice.nextDay);
    });
    choicesEl.appendChild(btn);
  });
}


// Start game from saved progress
renderScene(loadProgress());
