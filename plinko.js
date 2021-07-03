class Plinko
{
    constructor(x,y)
    {
        var option = {
            'restitution' : 0,
            "isStatic": true,
            'friction': 0,
        }

        this.r = 13;
        this.body=Bodies.circle(x,y,this.r,option);
        World.add(world,this.body);
        

        // this.image = loadImage("images/stone.png");
    }
    
    display()
    {
        var pos=this.body.position;
        var angle = this.body.angle;


        push();
        // translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(rgb(153, 255, 255));
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r/2, this.r/2);  
        // imageMode(CENTER);
        // image(this.image, pos.x, pos.y, this.r*2, this.r*2);
        pop();
    }

}