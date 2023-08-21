const express=require("express");

const app=express();

app.use(express.json());


app.get("/api/info/:param",(req,res) =>{
    
    const queryParam= req.query.q;
    const pathParam=req.params.param;

    const data={
        queryParam,
        pathParam,
        info:"Paramaters recieved successfully"
    };

    res.json(data);
})
app.post("/api/data",(req,res) =>{
    const jsonData=req.body;
    const dataArray=[];

    dataArray.push(...jsonData);
    res.json(dataArray);
})

app.listen(3000,()=>{
    console.log("server listening at port 3000")
});

