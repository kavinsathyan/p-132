img = "";

function preload()
{
    img = loadImage('mobile.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img,0,0,640,420);
    fill("#FF0000");
    text("mobile",175 ,30);
    noFill();
    stroke("#FF0000");
    rect(170, 7, 200, 300);
}