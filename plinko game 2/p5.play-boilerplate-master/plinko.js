class Plinko{
constructor(x,y,radius){

var options={
'restitution':3,
'friction':3,
'density':5,
'isStatic':true




}

this.body=Bodies.circle(x,y,radius,options);
this.radius=radius;

World.add(world,this.body);




}


display(){
var pc=this.body.position


ellipseMode(RADIUS);
ellipse(pc.x,pc.y,this.radius,this.radius);


}









}