var nosex=0
var nosey=0
function setup(){
canvas=createCanvas(400,400)
canvas.center()
video=createCapture(VIDEO)
video.hide()
classifier=ml5.poseNet(video,modelloaded)
classifier.on('pose',gotposes)
}
function draw(){
image(video,0,0,400,400)
image(clownnose,nosex,nosey,70,50)
}
function preload(){
clownnose=loadImage("moustache.png")

}
function modelloaded(){
    console.log("model is loaded")
}
function gotposes(results){
console.log(results)
nosex=results[0].pose.nose.x-150
nosey=results[0].pose.nose.y-44
}
function TakeSnapshot(){
    save("Clownnose.png")
}