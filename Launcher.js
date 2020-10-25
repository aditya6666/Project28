class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:0
        };
      
    
    this.pointB = pointB;
    this.launcher = Constraint.create(options);
    World.add(world,this.launcher);
    }
    attach(body){
        this.launcher.bodyA = body;
    }
    fly(){
        this.launcher.bodyA = null;
    }
    display(){
        
        if(this.launcher.bodyA!=null){
        push();
        line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,this.pointB.x,this.pointB.y);
        strokeWeight(5);
        fill("black");
        pop();
        }
    }
}