class Roof {
    constructor(xPos, yPos, w,h){
        this.body =Bodies.rectangle(xPos, yPos, w, h, {isStatic:true});
        World.add(world,this.body);
        this.height = h;
        this.width = w;
    }
    display(){
        rectMode(CENTER);
        push();
        strokeWeight(10);
        stroke("yellow");
        fill("red");
        rect(this.body.position.x, this.body.position.y,this.width ,this.height  );
        pop();
    }
}