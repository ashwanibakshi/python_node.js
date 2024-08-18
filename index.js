const express = require("express");
const axios   = require("axios");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false})); 

app.get('/showdata',(req,res)=>{
    try {
        axios.get('http://127.0.0.1:5000/showdata')
        .then((dataa)=>{
            // console.log(response);
            res.json(dataa.data);
        })
        .catch((err)=>{
            res.send(err);
        })
    } catch (error) {
        res.send(error);
    }
}); 

app.post('/adddata',(req,res)=>{
   try {
    const data={
        name:req.body.name
    }
      axios.post('http://127.0.0.1:5000/adddata',data)
      .then((dataa)=>{
        res.send(dataa.data);
      })
   } catch (error) {
       res.send(error);
   }
});

app.delete('/removedata',(req,res)=>{
 try {
    const data ={name:req.body.name}
    axios.delete('http://127.0.0.1:5000/removedata/'+req.body.name)
    .then((dataa)=>{
        res.send(dataa.data);  
    })
    .catch((err)=>{
        res.send(err);
    })
 } catch (error) {
    res.send(error);
 }
});

app.get('/editdata/:name',(req,res)=>{
   try {
      axios.get('http://127.0.0.1:5000/editdata/'+req.params.name)
      .then((dataa)=>{
        res.send(dataa.data);
      })
      .catch((err)=>{
         res.send(err);
      })
   } catch (error) {
    res.send(error);
   }
});

app.put('/updatedata',(req,res)=>{
 try {
    const data={
        index:req.body.index,
        name:req.body.name
    }
    axios.put('http://127.0.0.1:5000/updatedata',data)
    .then((dataa)=>{
        res.send(dataa.data)
    })
    .catch((err)=>{
        res.send(err)
    })
 } catch (error) {
    res.send(error);
 }
});

app.listen(3000,()=>{console.log(`server run at port 3000`)});