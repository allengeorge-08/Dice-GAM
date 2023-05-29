
var name1 =prompt("Player Name 1")
var name2 =prompt("Player Name 2")

document.querySelector(".dice1 p").innerHTML= name1
document.querySelector(".dice2 p").innerHTML= name2
let R = Math.floor ( ((Math.random()*6)+1))
let Z = Math.floor ( ((Math.random()*6)+1))
var hehe;


if (R==Z){
    hehe= "Its a Draw"
}
else if(Z>R){
    hehe= name2 +" Wins"
}
else if(R>Z){
    hehe=  name1 +" Wins"
}
else{}

document.querySelector("h1").innerHTML =  hehe;

if (R==1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png")
}
else if(R==2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png")
}
else if(R==3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png")
}
else if(R==4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png")
}
else if(R==5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png")
}
else if(R==6){
    document.querySelector(".img1").setAttribute("src","./images/dice6.png")
}
else {

}



if (Z==1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png")
}
else if(Z==2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png")
}
else if(Z==3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png")
}
else if(Z==4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png")
}
else if(Z==5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png")
}
else if(Z==6){
    document.querySelector(".img2").setAttribute("src","./images/dice6.png")
}
else {

}

