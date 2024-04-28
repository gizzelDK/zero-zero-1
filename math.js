 const math = {}
 
math.lerp=(a,b,t)=>{
   return a+(b-a)*t;
}

math.invLerp=(a,b,v)=>{
   return (v-a)/(b-a);
}