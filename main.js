function preload() {
}
 
function setup() {
  canvas = createCanvas(600, 450);
  canvas.position(110, 250);
  video = createCapture(VIDEO);
  video.hide();
 

}
 
function draw() {
  image(video, 180, 130, 250, 200);
}
 
function take_snapshot(){    
  save('student_name.png');
}