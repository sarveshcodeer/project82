canvas = document.getElementById("mc");
ctx = canvas.getContext("2d");
mouseevent = "empty"
var lpx,lpy ; 
canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e){

mouseevent = "mouseDown" ; 

}

canvas.addEventListener("mouseup" , my_mouseup)
function my_mouseup(e) {

mouseevent = "mouseUp" ; 

}

canvas.addEventListener("mouseleave" , my_mouseleave)
function my_mouseleave(e){

mouseevent = "mouseLeave" ; 

}

canvas.addEventListener("mousemove" , my_mousemove )
function my_mousemove(e) {
    cpx=e.clientX - canvas.offsetLeft; 
    cpy=e.clientY -canvas.offsetTop; 
    if(mouseevent== "mouseDown"){

        ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "teal";
ctx.arc(lpx , lpy , 20 , 0 , 2*Math.PI);
ctx.stroke();

    }
    lpx = cpx ; 
lpy = cpy ;
}



