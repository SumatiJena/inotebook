const mongoose=require('mongoose');
mongoURI="mongodb://localhost:27017";
const  connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connect to sucessfully");
    })
}
module.exports=connectToMongo