// inspired by: https://codepen.io/akm2/pen/AxGzJb?editors=0010
import { createNoise3D } from "simplex-noise";

let canvas;
let ctx;
let screenWidth;
let screenHeight;
let centerX;
let centerY;
let particles = [];
const hueBase = 200;
const hueRange = 20;
let hue = hueBase;
let simplexNoise;
let zoff = 0;
let t = 0;

// Configs
const Configs = {
  light: '#ffffff',
  dark: '#000000',
  particleNum: 1000,
  step: 5,
  base: 1000,
  zInc: 0.001
};

// Initialize
function initializeCanvas(darkMode = false) {
  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener('resize', onWindowResize, false);
  onWindowResize(null);
  
  particles = [];

  for (let i = 0, len = Configs.particleNum; i < len; i++) {
    initParticle((particles[i] = new Particle()));
  }

  simplexNoise = new createNoise3D();

  ctx.fillStyle = darkMode ? Configs.dark : Configs.light;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  update();
}

// Event listeners
function onWindowResize(e) {
  screenWidth = canvas.width = window.innerWidth;
  screenHeight = canvas.height = window.innerHeight;

  centerX = screenWidth / 2;
  centerY = screenHeight / 2;

  ctx = canvas.getContext('2d');
  ctx.lineCap = ctx.lineJoin = 'round';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Functions
function getNoise(x, y, z) {
  const octaves = 4;
  const fallout = 0.5;
  let amp = 1;
  let f = 1;
  let sum = 0;

  for (let i = 0; i < octaves; ++i) {
    amp *= fallout;
    sum += amp * (simplexNoise(x * f, y * f, z * f) + 1) * 0.5;
    f *= 2;
  }

  return sum;
}

function initParticle(p) {
  p.x = p.pastX = screenWidth * Math.random();
  p.y = p.pastY = screenHeight * Math.random();
  p.color.h = hue + (Math.atan2(centerY - p.y, centerX - p.x) * 45) / Math.PI;
  p.color.s = 1;
  p.color.l = 0.5;
  p.color.a = 0;
}

// Update
function update() {
  const step = Configs.step;
  const base = Configs.base;

  // ctx.fillStyle = Configs.backgroundColor;
  // ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0, len = particles.length; i < len; i++) {
    const p = particles[i];

    p.pastX = p.x;
    p.pastY = p.y;

    const angle = Math.PI * 6 * getNoise(p.x / base * 1.75, p.y / base * 1.75, zoff);
    p.x += Math.cos(angle) * step;
    p.y += Math.sin(angle) * step;

    if (p.color.a < 1) p.color.a += 0.003;

    ctx.lineWidth = 0.3;
    ctx.beginPath();
    ctx.strokeStyle = p.color.toString();
    ctx.moveTo(p.pastX, p.pastY);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();

    if (p.x < 0 || p.x > screenWidth || p.y < 0 || p.y > screenHeight) {
      initParticle(p);
    }
  }

  hue = hueBase + hueRange * Math.sin(t);
  t += 0.01;
  zoff += Configs.zInc;

  requestAnimationFrame(update);
}

// HSLA
function HSLA(h, s, l, a) {
  this.h = h || 0;
  this.s = s || 0;
  this.l = l || 0.5;
  this.a = a || 0;
}

HSLA.prototype.toString = function () {
  return 'hsla(' + this.h + ',' + this.s * 100 + '%,' + this.l * 100 + '%,' + this.a + ')';
};

// Particle
function Particle(x, y, color) {
  this.x = x || 0;
  this.y = y || 0;
  this.color = color || new HSLA();
  this.pastX = this.x;
  this.pastY = this.y;
}

export default initializeCanvas;
