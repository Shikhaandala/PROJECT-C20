var bg;
var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3

function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    //cat Animations
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");


    
    //mouse Animations
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    //cat
    cat = createSprite(700,600);
    cat.addAnimation("cat_sitting", catImg1);
    cat.scale = 0.1;

    //mouse
    mouse = createSprite(200,650);
    mouse.addAnimation("mouse_standing", mouseImg1);
    mouse.scale = 0.1;
    

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if (cat.x - mouse.x < mouse.width/2 + cat.width/2 
        && mouse.x - cat.x < mouse.width/2 + cat.width/2
        && cat.y - mouse.y < mouse.height/2 + cat.height/2
        && mouse.y - cat.y < mouse.height/2 + cat.height/2 ){


            cat.velocityX = 0;
            cat.velocityY = 0;
            cat.addAnimation("cat_caught",catImg3);
            cat.changeAnimation("cat_caught");
            mouse.addAnimation("mouse_caught",mouseImg3);
            mouse.changeAnimation("mouse_caught");

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouse_teasing", mouseImg2);
      mouse.frameDelay = 30;
      mouse.changeAnimation("mouse_teasing");

      cat.velocityX = -5;
      cat.addAnimation("cat_running",catImg2);
      cat.frameDelay = 30;
      cat.changeAnimation("cat_running");

  }


}
