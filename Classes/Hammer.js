class Hammer {
    
    constructor(){
    
        var options = {
            restitution: 0.5,
            frict: 1,
            density: 2
        }

        this.body = Bodies.rectangle(width/2,width/2,50,15,options);
        World.add(world, this.body);
    
    }

    display(){

        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;

        var angle = this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        rotate(angle);

        fill("grey");

        rectMode(CENTER);
        rect(0,0,50,15);
        pop();

    }

};