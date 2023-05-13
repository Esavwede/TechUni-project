

require('dotenv').config() 
const logger = require('../../system/logger/index') 
const User = require('../../model/User.model') 
const bcrypt = require('bcrypt') 
const jwt = require('jsonwebtoken') 



const signinUser = function( user )
        {
            return new Promise( async(resolve, reject)=>{
                try 
                {
                    const user = await User.findOne({ email: user.email })

                    const passwordValid = await bcrypt.compare( password, user.password )

                    if( !passwordValid )
                    {
                        const userInputError = new Error("USER_INPUT_ERROR: Check Input ")
                        userInputError.statusCode = 400 
                        reject(userInputError) 
                    }


                    const { _id, firstname, email } = user 
                    const userData = { _id, firstname, email } 
                    const token = jwt.sign(userData, process.env.JWT_SECRET,{ expiresIn: '30m' } )

                    resolve(token) 

                }
                catch(e)
                {
                    logger.error(e,'USER_SERVICE_ERROR: Could not Signin User ') 
                    e.statusCode = 500 
                    reject(e) 
                }
            })
        }


module.exports = { signinUser } 