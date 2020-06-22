
function random(){
   var a,c,y;
   var b = [];
   a = new Date();
   c= ((a.valueOf())%10);
   b.push(c);
   for(var i=0; i<7; i++)
   {
       c= c+1;
      if(c<10) 
     { b.push(c);}
      else
     { b.push(c-10);}
   }
   y=b.join("");
  document.getElementById('z').innerHTML=y
}