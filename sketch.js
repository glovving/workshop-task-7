//copied, pasted and edited siennas code for a bg with their hole punches
class bg {
  constructor(){
    this.holecount = random(0, 100); 
  }

  display() {
    fill(2165, 229, 228 ); 
    noStroke();
    rect(0, 0, windowWidth, windowHeight); 

    for (let holepunch = 0; holepunch < this.holecount; holepunch++) {
      let holesize = floor(random(windowWidth / 100, windowWidth / 10)); 
      let rand_x = floor(random(0, windowWidth)); 
      let rand_y = floor(random(0, windowHeight)); 
      fill(255);  
      circle(rand_x, rand_y, holesize); 
    }
  }
}

//walkers array
let walkers = [];

//walker class
class walker{
  constructor(x, y){
    this.x = x;
    this.y = y;
    //random rgb value generated
    this.colour = color(random(0, 255), random(0, 255), random(0, 255));
    this.size = windowWidth/100;

  }
  step(){
    this.x += random(-2, 2);
    this.y += random(-2, 2);}

  show(){
    noStroke();
    fill(this.colour);
    circle(this.x, this.y, this.size);
  }  
}



let my_bg;

function setup() {
  createCanvas(windowWidth, windowHeight);
  my_bg = new bg(); 
  my_bg.display();

  //random number of walkers from 1 to 20 are generated and added to walkers[] array
  let random_walkers = random(1, 20);
  for(let x = 0; x<random_walkers; x++){
    let rand_x = random(0, windowWidth);
    let rand_y = random(0, windowHeight);
    walkers[x] = new walker(rand_x, rand_y);  
  }

  
}

function draw(){ 
//text to be displayed at top of screen
  textSize(windowWidth/20);
  fill('black');
  textAlign(CORNER);
  text('click to stop a walker', windowWidth/6, windowHeight - ((windowHeight/7)*6))

  // walkers in walker array begin walking
  for(let x = 0; x<walkers.length; x++){
    walkers[x].step();
    walkers[x].show();
  }

  
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);  
}

function mousePressed(){
  //walkers are removed from array when mouse is pressed
  if(walkers.length > 0){
    walkers.splice(walkers.length-1, 1);
     //each time a walker 'dies' =, 'walker down' text is shown.
  textSize(windowWidth/40);
  fill('black');
  text('walker down!', random(0, windowWidth - windowWidth/6), random(0, windowHeight - windowHeight/6))
  }
 
}
