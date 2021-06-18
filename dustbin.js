class Dustbin {
   constructor(x,y,width,height){
       var options={
           isStatic:true
       }
       this.body=Bodies.rectangle(x,y,width,height,options);
       this.width=width;
       this.height=height;
       World.add(world,this.body);
       console.log(this.body);
   }
display(){
   fill("green")
   rect(this.body.position.x,this.body.position.y,this.width,this.height);
}
   
}