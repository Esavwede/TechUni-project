

const mongoose = require('mongoose')
const Schema = mongoose.Schema 




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



const Job = mongoose.model('job', JobSchema,'jobs')
module.exports = Job 
