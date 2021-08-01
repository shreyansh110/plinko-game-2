class Ground{
    constructor(x,y,width,height){
    var options={
    'restitution':0.5,
    'friction':0.8,
    'density':1.2,
    isStatic:true
    
    }
    
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.height=height;
    this.width=width;
    World.add(world,this.body);
    
    
    
    }
    
    display(){
    var tc=this.body.position
    
    push();
  
    translate(tc.x,tc.y);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    
    }
    
    
    
    
    }