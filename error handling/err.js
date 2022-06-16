//without try...catch block
   /*console.log("line-1");
   console.log("line-2");
   console.log("line-3");
   console.log("line-4");
   throw new Error("Error Has Been Occured");   //program will be terminated and rest program will not be executed
   console.log("line-5");
   console.log("line-6");
   console.log("line-7");
   console.log("line-8");*/

//with try...cathc block
try{
   console.log("line-1");
   console.log("line-2");
   console.log("line-3");
   console.log("line-4");
   throw new Error("Error Has Been Occured");     //program control will be passed to nearest catch block and execution after try block will be continued
   console.log("line-5");
   console.log("line-6");
   console.log("line-7");
   console.log("line-8");
}catch(err)
{
   console.log("error occured");
   console.log("details: "+err);
}
console.log("after try...catch block");
