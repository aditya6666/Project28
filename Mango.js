class Mango {
    constructor(x,y,r){
        var options = {
            isStatic: true,
            restitution:0,
            friction:1,
        };
        this.mangoImage = loadImage("mango.png");
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }
    display(){

        var mangoposition = this.body.position;
        push();
        image(this.mangoImage,mangoposition.x,mangoposition.y,50,50);
        translate(mangoposition.x,mangoposition.y);
        rectMode(CENTER);
        strokeWeight(3);
        pop();
    }


}