class Chain{
    constructor(firstbody,secondbody){
        var options={
            bodyA: firstbody,
            bodyB: secondbody,
            length: 40
        }
      this.body=Matter.Constraint.create(options);
      World.add(world,this.body);
      this.bodyA=firstbody;
      this.bodyB=secondbody;
    }
    display(){
        line(this.bodyA.position.x,this.bodyA.position.y,this.bodyB.position.x,this.bodyB.position.y);
    }
}