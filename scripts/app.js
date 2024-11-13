let button1 = document.getElementById("button1");
let change1 = document.getElementById("change1");
button1.addEventListener("click", function(event)
{
    change1.innerText = "I got rolled!";
    change1.className = "barrelRoll";
});

let button2= document.getElementById("button2");
let change2= document.getElementById("change2");
button2.addEventListener("click", function(event)
{
    change2.innerText = "I'm blue!";
    change2.className = "colorChange";
});

let button3= document.getElementById("button3");
let change3= document.getElementById("change3");
button3.addEventListener("click", function(event)
{
    change3.innerText = "Changed!";
});

let button4= document.getElementById("button4");
let change4= document.getElementById("change4");
button4.addEventListener("click", function(event)
{
    change4.innerText = "I faded in!";
    change4.className = "fadeIn";
});

let button5= document.getElementById("button5");
let change5= document.getElementById("change5");
button5.addEventListener("click", function(event)
{
    change5.className = "backgroundChange";
});

let button6= document.getElementById("button6");
let change6= document.getElementById("change6");
button6.addEventListener("click", function(event)
{
    change6.innerText = "Spinning!";
    change6.className = "spinner";
});

let button7= document.getElementById("button7");
let change7= document.getElementById("change7");
button7.addEventListener("click", function(event)
{
    change7.innerText = "Runaway!";
    change7.className = "zoomerOut";
});

let button8= document.getElementById("button8");
let change8= document.getElementById("change8");
button8.addEventListener("click", function(event)
{
    change8.innerText = "wiggle";
    change8.className = "wiggle";
});

let button9= document.getElementById("button9");
let change9= document.getElementById("change9");
button9.addEventListener("click", function(event)
{
    change9.innerText = "Small";
    change9.className = "fontChange";
});

let button10= document.getElementById("button10");
let change10= document.getElementById("change10");
button10.addEventListener("click", function(event)
{
    change10.innerText = "Pulsing...";
    change10.className = "pulse";
});


