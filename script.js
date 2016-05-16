 var clickedTime;
 var createdTime;
 var reactionTime;
   
   // function to get a random color
   function getRandomColor(){
   var letters= '0123456789ABCDEF'.split('');
   var color= '#';
   for(i=0; i<6; i++){
		color+=letters[Math.round(Math.random()*15)];
   }   
       return color;
   }
   
   // Function to make box
   function makeBox(){

   var time= Math.floor(Math.random()*3000);
   var leftPosition= Math.floor(Math.random()*1000);
   var topPosition= Math.floor(Math.random()*360);
   
   setTimeout(function(){
    // Change the position randomly
   document.getElementById("box").style.left=leftPosition+'px';
   document.getElementById("box").style.top=topPosition+'px';
  
    // Change the shape randomly
   if(Math.random() > 0.5){
     document.getElementById("box").style.borderRadius="100px";
   }else{
     document.getElementById("box").style.borderRadius="0";
   }
   
   // Change the color randomly
   document.getElementById("box").style.backgroundColor=getRandomColor();
   
   document.getElementById("box").style.display="block";
   createdTime= Date.now();
   },time);
   }
   
   // The box dissappears and reappear again after a click on it
   document.getElementById("box").onclick=function(){
   clickedTime=Date.now();
   reactionTime= (clickedTime-createdTime)/1000;
   document.getElementById("time").innerHTML=reactionTime;
   this.style.display="none";
   makeBox();
   }
   
   // Create a box on page load
  makeBox();