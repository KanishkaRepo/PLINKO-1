class Plinko{
    constructor(x,y,r){
        var options = {
            'restitution': 0.4
        }
        this.r = r;
        this.r = 10
        this.particle = Bodies.circle(x,y,this.r,options);
        World.add(world,this.particle);
    }

    display(){

        var pos = this.particle.position;
        var angle = this.particle.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        // fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r, this.r)
        pop();
    }
};