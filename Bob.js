class Bob {
    constructor (x , y, radius){
        var options ={
            isStatic :false ,
            restitution :1,
            friction : 0.1,
            density : 1
        }
    this.body = Bodies.circle(x , y, radius , options);
    this.radius=radius;
    this.image = loadImage("bob.png")
    World.add(world , this.body);
    
    }
    display(){
        push();
        //imageMode(CENTER)
        strokeWeight(2);
        stroke("white")
        fill('#B2AEAB');
        circle(this.body.position.x,this.body.position.y,2*this.radius );
        pop();
        
    }
    }