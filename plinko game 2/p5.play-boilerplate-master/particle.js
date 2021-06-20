class Particle{
constructor(x,y,radius){

var options={
'restitution':0.6,
'friction':0.5,
'density':1.2,
isStatic:false

}


this.body=Bodies.circle(x,y,radius,options);
this.radius=radius;
this.color=color(random(0,255),random(0,255),random(0,255));
World.add(world,this.body);

}

display(){
var pos=this.body.position
//var angle=this.body.angle

   
//translate(pos.x,pos.y);
//rotate(angle);
//noStroke();
fill(this.color);
//circleMode(RADIUS);
circle(pos.x,pos.y,this.radius);


}

}