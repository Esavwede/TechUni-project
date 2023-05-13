
require('dotenv').config() 

const logger = require('../../system/logger/index') 
const jwt = require('jsonwebtoken') 


module.exports = function(req, res, next)
        {
            try 
            {

                logger.info(' Validating user access token ')
              
                const { AUTH_TOKEN } = req.cookies 

                jwt.verify( AUTH_TOKEN,  process.env.JWT_SECRET ,(e, user )=>{

                    if(e)
                    {
                        return res.send(' Could Not decode token ') 
                    }

                    req.user = user 
                    next() 
                })

            }
            catch(e)
            {
                logger.error(e,' Could not validate signin token ')
                return res.send(' Could not validate token ') 
            }
        }