class Iron {
    
    constructor(x,y,width,height){
    
        var options = {
            restitution: 0.001,
            density: 5,
            frict: 1
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
    
        this.width = width;
        this.height = height;
    }

    display(){

        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);
    
    }

};