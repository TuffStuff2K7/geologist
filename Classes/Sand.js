class Sand {
    
    constructor(x,y){
    
        var options = {
            restitution: 0.001,
        }

        this.body = Bodies.rectangle(x,y,5,5,options);
        World.add(world, this.body);
    
    }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill("#e1bc91");
        rect(pos.x,pos.y,5,5);
    
    }

};