

require('dotenv').config() 
const logger = require('../../system/logger/index') 
const User = require('../../model/User.model') 
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken') 


const signinUser = function( userData )
        {
            return new Promise( async(resolve, reject)=>{
                try 
                {
                    logger.info('Posted User Login Data ')
                    logger.info( userData )
                    const user = await User.findOne({ email: userData.email })

                    console.log(' Found User => ')
                    console.log( user ) 

                    
                    if( !user )
                    {
                        const userInputError = new Error("USER_INPUT_ERROR: Check Input ")
                        userInputError.statusCode = 400 
                        reject(userInputError) 
                    }


                   const passwordValid = await bcrypt.compare( userData.password, user.password )
                   

                    if( !passwordValid )
                    {
                        console.log(' Bcrypt Error ')
                        const userInputError = new Error("USER_INPUT_ERROR: Check Input ")
                        userInputError.statusCode = 400 
                        reject(userInputError) 
                    }


                    const { _id, firstname, email } = user 
                    const tokenData = { _id, firstname, email } 
                    const token = jwt.sign( tokenData, process.env.JWT_SECRET,{ expiresIn: '60m' } )

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