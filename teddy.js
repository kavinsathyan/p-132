img = "";

function preload()
{
    img = loadImage('teddy.jpg');
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
    text("teddy bear",120,40);
    noFill();
    stroke("#FF0000");
    rect(100, 7, 520, 400);
}