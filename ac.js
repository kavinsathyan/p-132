img = "";

function preload()
{
    img = loadImage('AC.jpg');
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
    text("Air Conditioner",150 ,100);
    noFill();
    stroke("#FF0000");
    rect(150, 75, 250, 100);
}