// Game state
let phase = 'waiting'; // waiting | stretching | turning | walking | transitioning | falling
let lastTimestamp;
let heroX;
let heroY;
let screenOffset;
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
  // Reset game state
  phase = 'waiting';
  lastTimestamp = undefined;

  // The first platform in always the same
  platforms = [{ x: 50, w: 50 }];
  generatePlatform();
  generatePlatform();
  generatePlatform();
  generatePlatform();

  //Initialize the hero position
  heroX = platforms[0].x + platforms[0].w - 30; // Hero stands a bit before the edge
  heroY = 0;

  // By how much should we shift the screen back
  screenOffset = 0;

  // There's always a stick, even if it appears to be invisible
  sticks = [{ x: platforms[0].x + platforms[0].w, length: 0, rotation: 0 }];

  // Score
  score = 0;

  // Reset the UI
  restartButton.style.display = none;
  scoreElement.innerText = score;

  draw();
}

function draw() {}

window.addEventListener('mousedown', (e) => {});
window.addEventListener('mouseup', (e) => {});

function animate(timeStamp) {}

function generatePlatform() {
  const minimumGap = 40;
  const maximumGap = 200;
  const minimumWidth = 20;
  const maximumWidth = 100;

  // X coordinate of the right edge of the furthest platform
  const lastPlatform = platforms[platforms.length - 1];
  let furthestX = lastPlatform.x + lastPlatform.w;

  const x =
    furthestX +
    minimumGap +
    Math.floor(Math.random() * (maximumGap - minimumGap));
  const w =
    maximumWidth + Math.floor(Math.random() * (maximumWidth - minimumWidth));

  platforms.push({ x, w });
}
