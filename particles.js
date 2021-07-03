class Particles
{
    constructor(x,y)
    {
        var option = {
            "restitution":0.4,
            "isStatic": false,
            "density" : 1.0   
        }

        this.r = 7;
        this.body=Bodies.circle(x,y,this.r,option);
        World.add(world,this.body);

        this.color=color(random(0, 255), random(0, 255), random(0, 255));
        

        // this.image = loadImage("images/stone.png");
    }

display()
{
    var pos = this.body.position;
    var angle = this.body.angle;
    push(); translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.r,this.r);
    pop();
}

}



