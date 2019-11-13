'use strict';

let osc;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100, 100, 0);

  osc = new p5.Oscillator();
  //osc.setType('sine');

  osc.amp(.2);

}

function draw() {
    fill(0, 100, 200);
    stroke(0, 100, 200);
    rect(windowWidth / 3, windowHeight / 10, windowWidth / 12, windowHeight / 3, 50);
    ellipse(windowWidth / 2, windowHeight /2, windowWidth / 2, windowHeight / 2);
    fill(0);
    stroke(0);
    ellipse(windowWidth / 3, windowHeight / 2, windowHeight / 10, windowHeight / 10);
    ellipse(2 * windowWidth / 5, 2 * windowHeight / 5, windowHeight / 10, windowHeight / 10);
    ellipse(2 * windowWidth / 5, 3 * windowHeight / 5, windowHeight / 10, windowHeight / 10);
    ellipse(7 * windowWidth / 15, windowHeight / 2, windowHeight / 10, windowHeight / 10);
    ellipse(8 * windowWidth / 15, 13 * windowHeight / 30, windowHeight / 10, windowHeight / 10);
    ellipse(9 * windowWidth / 15, windowHeight / 2, windowHeight / 10, windowHeight / 10);
    ellipse(10 * windowWidth / 15, 7 * windowHeight / 15, windowHeight / 10, windowHeight / 10);
}

function mousePressed() {
  if(dist(mouseX, mouseY, windowWidth / 3, windowHeight / 2) <= windowHeight / 20) {
    osc.freq(440);
    osc.start();
  }
  if(dist(mouseX, mouseY, 2 * windowWidth / 5, 2 * windowHeight / 5) <= windowHeight / 20) {
    osc.freq(740);
    osc.start();
  }
  if(dist(mouseX, mouseY, 2 * windowWidth / 5, 3 * windowHeight / 5) <= windowHeight / 20) {
    osc.freq(540);
    osc.start();
  }
  if(dist(mouseX, mouseY, 7 * windowWidth / 15, windowHeight / 2) <= windowHeight / 20) {
    osc.freq(340);
    osc.start();
  }
  if(dist(mouseX, mouseY, 8 * windowWidth / 15, 13 * windowHeight / 30) <= windowHeight / 20) {
    osc.freq(140);
    osc.start();
  }
  if(dist(mouseX, mouseY, 9 * windowWidth / 15, windowHeight / 2) <= windowHeight / 20) {
    osc.freq(640);
    osc.start();
  }
  if(dist(mouseX, mouseY, 10 * windowWidth / 15, 7 * windowHeight / 15) <= windowHeight / 20) {
    osc.freq(940);
    osc.start();
  }
}

function mouseReleased() {
  osc.stop();
}
