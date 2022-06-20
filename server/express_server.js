const express=require('express');
const bodyParser=require('body-parser');

const app=express();
const db=[{id:1,name:'user1',age:19},{id:2,name:'user2',age:31},{id:3,name:'user3',age:29},{id:4,name:'user4',age:25}];
const nums=[10,20,30];
app.get('/',(req,res)=>{
    res.send('default response.');
})

app.get('/users',(req,res)=>{
    res.json(db);
})
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.delete('/users',jsonParser,(req,res)=>{
    const id=req.body.id;
    const resp=db.find(data=>data.id===id);
    if(resp===undefined)
    {
        res.send('user doesn\'t exist with provided id!!');
    }
    else{
        const index=db.indexOf(resp);
        db.splice(index,1);
        res.json(db);
    }
})

app.get('/users:id',(req,res)=>{
    const resp=db.find(data=>data.id===req.params.id);
    if(resp===undefined)
    {
        res.send('user doesn\'t exist with provided id!!');
    }
    else{
        res.json(resp);
    }
})


app.post('/users',jsonParser,(req,res)=>{
  const user = req.body
  if(db.some(person=>person.id==user.id))
  {
    res.send("user already exists!!");
  }
  else{
    db.push(user);
    res.json(db);
  }
})

app.post('/update/',jsonParser,(req,res)=>{
    const id=req.body.id;
    const resp=db.find(data=>data.id===id);
    if(resp===undefined)
    {
        res.send('user doesn\'t exist with provided id!!');
    }
    else{
        const index=db.indexOf(resp);
        // db.splice(index,1);
        db[index]=req.body;
        res.json(db);
    }
})

app.get('/nums',(req,res)=>{ 
    res.json(nums);
})


app.listen(8000,()=>{
    console.log("server on http://localhost:8000");
})