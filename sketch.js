'use strict';

let osc;
let noteSize;
let ocarinaNoteA;
let ocarinaNoteB;
let ocarinaNoteD;
let ocarinaNoteD2;
let ocarinaNoteF;
var env;
let hole1;
let hole2;
let hole3;
let hole4;
let hole5;
let hole6;
let hole7;

function preload() {
  soundFormats('wav');
  ocarinaNoteA = loadSound('assets/oot_notes_ocarina_a_med.wav');
  ocarinaNoteB = loadSound('assets/oot_notes_ocarina_b_med.wav');
  ocarinaNoteD = loadSound('assets/oot_notes_ocarina_d_med.wav');
  ocarinaNoteD2 = loadSound('assets/oot_notes_ocarina_d2_med.wav');
  ocarinaNoteF = loadSound('assets/oot_notes_ocarina_f_med.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100, 100, 0);

  if(windowWidth < windowHeight) {
    noteSize = windowWidth;
  }
  else {
    noteSize = windowHeight;
  }

  env = new p5.Env();
  env.setADSR(0.5, 0.5, 0.5, 0.1);
  env.setRange(0.8, 0);

  osc = new p5.Oscillator();
  //osc.setType('sine');

  //osc.amp(env);
  osc.amp(0.1);
}

function draw() {
    fill(0, 100, 200);
    stroke(0, 100, 200);
    rect(windowWidth / 3, windowHeight / 10, windowWidth / 12, windowHeight / 3, 50);

    ellipse(windowWidth / 2, windowHeight /2, windowWidth / 2, windowHeight / 2);
    fill(0);
    stroke(0);
    hole1 = ellipse(windowWidth / 3, windowHeight / 2, noteSize / 10, noteSize / 10);
    hole2 = ellipse(2 * windowWidth / 5, 2 * windowHeight / 5, noteSize / 10, noteSize / 10);
    hole3 = ellipse(2 * windowWidth / 5, 3 * windowHeight / 5, noteSize / 10, noteSize / 10);
    hole4 = ellipse(7 * windowWidth / 15, windowHeight / 2, noteSize / 10, noteSize / 10);
    hole5 = ellipse(8 * windowWidth / 15, 13 * windowHeight / 30, noteSize / 10, noteSize / 10);
    hole6 = ellipse(9 * windowWidth / 15, windowHeight / 2, noteSize / 10, noteSize / 10);
    hole7 = ellipse(10 * windowWidth / 15, 7 * windowHeight / 15, noteSize / 10, noteSize / 10);
    //osc.freq(987.77);
    //hole1.mousePressed(playEnv);
}

function mousePressed() {
  if(dist(mouseX, mouseY, windowWidth / 3, windowHeight / 2) <= windowHeight / 20) {
    osc.amp(0.1);
    osc.freq(987.77);
    osc.start();
    //env.play();
    //ocarinaNoteB.setVolume(0.2);
    //ocarinaNoteB.play();
  }
  if(dist(mouseX, mouseY, 2 * windowWidth / 5, 2 * windowHeight / 5) <= windowHeight / 20) {
    osc.amp(0.2);
    osc.freq(1174.66);
    osc.start();
    //env.play();
    //ocarinaNoteD2.setVolume(0.2);
    //ocarinaNoteD2.play();
  }
  if(dist(mouseX, mouseY, 2 * windowWidth / 5, 3 * windowHeight / 5) <= windowHeight / 20) {
    osc.amp(0.1);
    osc.freq(698.46);
    osc.start();
    //env.play();
    //ocarinaNoteF.setVolume(0.2);
    //ocarinaNoteF.play();
  }
  if(dist(mouseX, mouseY, 7 * windowWidth / 15, windowHeight / 2) <= windowHeight / 20) {
    osc.amp(0.1);
    osc.freq(880.00);
    osc.start();
    //env.play();
    //ocarinaNoteA.setVolume(0.2);
    //ocarinaNoteA.play();
  }
  if(dist(mouseX, mouseY, 8 * windowWidth / 15, 13 * windowHeight / 30) <= windowHeight / 20) {
    osc.amp(0.5);
    osc.freq(587.33);
    osc.start();
    //env.play();
    //ocarinaNoteD.setVolume(2.0);
    //ocarinaNoteD.play();
  }
  if(dist(mouseX, mouseY, 9 * windowWidth / 15, windowHeight / 2) <= windowHeight / 20) {
    osc.amp(.5);
    osc.freq(523.25);
    osc.start();
    //delayTime(1.0);
    //osc.stop();
    //env.play();
  }
  if(dist(mouseX, mouseY, 10 * windowWidth / 15, 7 * windowHeight / 15) <= windowHeight / 20) {
    osc.amp(.2);
    osc.freq(659.25);
    osc.start();
    //delayTime(1.0);
    //osc.stop();
    //env.play();
  }
}

function playEnv() {
  env.play();
}

function mouseReleased() {
  osc.stop();
}

function keyTyped(){
  if(key == 'a') {
    osc.amp(0.1);
    osc.freq(987.77);
    osc.start()
  }
  else if(key == 'w') {
    osc.amp(0.2);
    osc.freq(1174.66);
    osc.start();
  }
  else if(key == 'z') {
    osc.amp(0.1);
    osc.freq(698.46);
    osc.start();
  }
  else if(key == 's') {
    osc.amp(0.1);
    osc.freq(880.00);
    osc.start();
  }
  else if(key == 'd') {
    osc.amp(0.5);
    osc.freq(587.33);
    osc.start();
  }
  else if(key == 'f') {
    osc.amp(.5);
    osc.freq(523.25);
    osc.start();
  }
  else if(key == 'g') {
    osc.amp(.2);
    osc.freq(659.25);
    osc.start();
  }
}

function keyReleased() {
  osc.stop();
}
