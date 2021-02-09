class Rubber {
    
    constructor(x,y,radius){
    
        var options = {
            restitution: 0.9,
            density: 0.5,
            frict: 2,
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
    
    }

    display(){

        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("green");
        ellipse(pos.x,pos.y,this.radius*2);
    
    }

};