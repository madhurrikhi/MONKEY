var monkey, monkey_animation;
var ground, ground_img;
var banana, banana_img;
var banana2, banana_img2;
var banana3, banana_img3;
var banana4, banana_img4;
var rand;
var stone, stone_img;
var stone2, stone_img2;
var stone3, stone_img3;
var inviscible_ground;
var obstacle_group, banana1_group, banana2_group, banana3_group, banana4_group;

var score = 0;

function preload() {

  ground_img = loadImage("jungle.jpg");

  monkey_animation = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");

  banana_img = loadImage("banana.png");

  stone_img = loadImage("stone.png");
  stone_img2 = loadImage("stone.png");
  stone_img3 = loadImage("stone.png");


}

function setup() {
  createCanvas(800, 600);

  obstacle_group = new Group();
  banana_group = new Group();
  banana2_group = new Group();
  banana3_group = new Group();
  banana4_group = new Group();



  ground = createSprite(400, 300, 800, 600);
  ground.addImage(ground_img);


  monkey = createSprite(70, 550, 20, 50);
  monkey.addAnimation("monkey_Anime", monkey_animation);
  monkey.scale = 0.12;

  inviscible_ground = createSprite(400, 590, 800, 20);
  inviscible_ground.visible = false;


}

function draw() {
  background(220);

  monkey.collide(inviscible_ground);
  obstacle_group.collide(inviscible_ground);

  if (frameCount % 60 == 0) {
    spawn_banana();
  }

  if (frameCount % 100 == 0) {
    spawn_banana2();
  }

  if (frameCount % 140 == 0) {
    spawn_banana3();
  }

  if (frameCount % 180 == 0) {
    spawn_banana4();
  }

  if (frameCount % 80 == 0) {
    spawn_obstacle1();
  }

  if (keyDown("space") && monkey.y > 395) {
    monkey.velocityY = -20;
  }

  monkey.velocityY = monkey.velocityY + 0.7;

  if (monkey.isTouching(banana_group)) {
    score = score + 1;
    banana_group.destroyEach();
  }

  if (banana2_group.isTouching(monkey)) {
    score = score + 1;
    banana2_group.destroyEach();
  }

  if (banana3_group.isTouching(monkey)) {
    score = score + 1;
    banana3_group.destroyEach();
  }

  if (banana4_group.isTouching(monkey)) {
    score = score + 1;
    banana4_group.destroyEach();
  }

  if (obstacle_group.isTouching(monkey)) {
    // score = score + 1;
    // banana4_group.destroyEach();
    monkey.scale = 0.12;
  }

  switch (score) {
    case 10:
      monkey.scale = 0.2;
      break;
    case 20:
      monkey.scale = 0.3;
      break;
    case 30:
      monkey.scale = 0.4;
      break;
    case 40:
      monkey.scale = 0.5;
      break;
    case 50:
      monkey.scale = 0.6;

  }


  drawSprites();
  textSize(25);
  fill("red");
  textFont("comic sans ms");
  text("SCORE : " + score, 600, 50);
}

function spawn_banana() {
  banana = createSprite(800, 300, 20, 20);
  banana.y = random(500, 350);
  banana.addImage(banana_img);
  banana.scale = 0.085;
  banana.velocityX = -5;
  banana.lifetime = 160;
  banana_group.add(banana);
}

function spawn_banana2() {
  banana2 = createSprite(800, 300, 20, 20);
  banana2.y = random(500, 350);
  banana2.addImage(banana_img);
  banana2.scale = 0.085;
  banana2.velocityX = -5;
  banana2.lifetime = 160;
  banana2_group.add(banana2);
}

function spawn_banana3() {
  banana3 = createSprite(800, 300, 20, 20);
  banana3.y = random(500, 350);
  banana3.addImage(banana_img);
  banana3.scale = 0.085;
  banana3.velocityX = -5;
  banana3.lifetime = 160;
  banana3_group.add(banana3);
}

function spawn_banana4() {
  banana4 = createSprite(800, 300, 20, 20);
  banana4.y = random(500, 350);
  banana4.addImage(banana_img);
  banana4.scale = 0.085;
  banana4.velocityX = -5;
  banana4.lifetime = 160;
  banana4_group.add(banana4);
}

function spawn_obstacle1() {
  stone = createSprite(800, 550, 20, 20);
  stone.debug = true;
  stone.setCollider("rectangle", 0, 0, 150, 100);
  stone.addImage(stone_img);
  stone.scale = 0.3;
  stone.lifetime = 170;
  stone.velocityX = -5;
  obstacle_group.add(stone);
}