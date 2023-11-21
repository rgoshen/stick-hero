// Game state
let phase = 'waiting'; // waiting | stretching | turning | walking | transitioning | falling
let lastTimestamp;
let heroX;
let heroY;
let screenOffest;
let platforms = [];
let sticks = [];
let score = 0;

// Configuration

// Getting the canvas element
const canvas = document.getElementById('game');

// Getting the drawing element
const ctx = canvas.getContext('2d');

// Further UI elements
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart');

// Start game
resetGame();

// Resets game state and layout
function resetGame() {
  draw();
}

function draw() {}

window.addEventListener('mousedown', (e) => {});
window.addEventListener('mouseup', (e) => {});

function animate(timeStamp) {}
