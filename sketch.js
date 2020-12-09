var dog,dogimg, happyDog, database, foodS, foodStock




function preload()
{
  dogimg=loadImage("images/dogimg.png")
  happyDog=loadImage("images/dogimg1.png")
}

function setup() {

	createCanvas(500, 500);
  database = firebase.database();
dog=createSprite(200, 100, 20,20);
dog.addImage(dogimg)
dog.scale=0.2

  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
	

	

  
}


function draw() {

  background(46,139,87);
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(happyDog)
 }
  
  
  drawSprites();
  fill (255,255,254)
  stroke ("black")
  text("foodRemaining :"+foodS,150,200)
  textSize(10)
  text ("press up arrow key to feed the dog a milk",130,10,300,30)
 
}
 function readStock(data){
   foodS=data.val()
   
 }

 function writeStock(x){
if(x<=0){
  x=0
}else{
  x=x-1
}
database.ref("/").update({
  Food:x
})
 }