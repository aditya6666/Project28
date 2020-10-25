class Tree {
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
            restitution:0,
            friction:1,
            density:1.5
        };
        this.treeImage = loadImage("tree.png");
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){

        var treeposition = this.body.position;
        push();
        image(this.treeImage,treeposition.x,treeposition.y,this.width,this.height);
        translate(treeposition.x,treeposition.y);
        rectMode(CENTER);
        strokeWeight(3);
        pop();
    }


}