img = "";

function preload()
{
    img = loadImage('bag.jpg');
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
    text("hand bag",110 ,100);
    noFill();
    stroke("#FF0000");
    rect(100, 75, 300, 340);
}