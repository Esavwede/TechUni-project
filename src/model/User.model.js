

const mongoose = require('mongoose')
const Schema = mongoose.Schema 


const UserSchema = new Schema 
    (
        {
           firstname: 
           {
            type: String, 
            required: true 
           },
           lastname: 
           {
            type: String, 
            required: true 
           },
           email: 
           {
            type: String, 
            required: true 
           }, 
           password: 
           {
            type: String, 
            required: true 
           },
           emailVerificationLink: 
           {
            type: String, 
            required: true 
           }, 
           emailVerified: 
           {
            type: String, 
            required: true 
           },
           isAdmin: 
           {
            type: String, 
            required: true 
           }
        },
        {
            timestamps: true 
        }
    )


const User = mongoose.model('job', UserSchema )
module.exports = User  