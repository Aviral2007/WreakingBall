class Chain {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1.2,
      length: 200
    };

    this.pointB = pointB;
    this.chain = Constraint.create(options);
    World.add(world, this.chain);
  }
 

  display() {
    if (this.chain.bodyA) {
      var pointA = this.chain.bodyA.position;
      var pointB = this.pointB;
      push();

      stroke("purple");
      strokeWeight(3);

      line(pointB.x, pointB.y, pointA.x, pointA.y);

      pop();
    }
  }
}