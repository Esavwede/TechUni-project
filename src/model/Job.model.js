

const mongoose = require('mongoose')
const Schema = mongoose.Schema 


<<<<<<< HEAD
const JobSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
   
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
=======
const JobSchema = new Schema 
    (
        {
            title:
            {
                type: String, 
                required: true 
            },
            role: 
            {
                type: String, 
                required: true 
            },
            location: {
                 type: String,
                 required: true,
            },
            salary:
            {
                type: String, 
                required: true 
            },
           
            content: 
            {
                type: String, 
                required: true 
            },
            link:
            {
                type: String, 
                required: true 
            },
            
        },
        {
            timestamps: true 
        }
    )
>>>>>>> 81dfce916c5b44c9ee063b30a7a651c2815d7700


const Job = mongoose.model('job', JobSchema,'jobs')
module.exports = Job 
