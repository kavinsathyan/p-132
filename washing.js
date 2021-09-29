img = "";

function preload()
{
    img = loadImage('washing machine.jpg');
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
    text("Washing Machine",250 ,100);
    noFill();
    stroke("#FF0000");
    rect(230, 70, 200, 300);
}