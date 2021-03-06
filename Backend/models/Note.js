import mongoose from 'mongoose';
const mongoose=require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
     title:{
         type:String,
         required:true
     },
     description:{
         type:string,
         required:true,
     },
     tag:{
         type:String,
         default:"General"
     },
     date:{
         type:Date,
         default:Date.now
     }
});
module.exports=mongoose.model("notes",NoteSchema)