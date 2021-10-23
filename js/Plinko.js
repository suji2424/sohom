class Plinko
{
    constructor(x,y,r)
    {
        var options = {
            isStatic: true
        }
    this.r = 10;
    this.body = Bodies.circle(x,y,this.r,options);

    World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("black");
        ellipse(pos.x,pos.y,this.r);
    }
}