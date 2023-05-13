


const logger = require('../../system/logger/index') 
const { signinUser } = require('../../services/user/user.service') 



const signin = async function(req, res, next)
    {
        try 
        {
            const user = req.body
            const token = await signinUser(user)

            res.cookie('AUTH_TOKEN', token )

            // redirect to page 
            return res.send(token) 
        }
        catch(e)
        {
            const statusCode = e.statusCode 


            switch( statusCode )
            {
                case 500: 
                        logger.error(' SIGNIN_ERROR  ') 
                        return res.send(' Server Encountered Signin Error ') 

                case 400: 
                        logger.error('SIGNIN_ERROR: => INVALID_USER_INPUT: 400')
                        return res.send(' Invalid Login Details ') 

                default: 
                          logger.error(' Unknown Response Error Code ') 
                          return res.send(' Server Error: Could not find response ') 

            }
           
        }
    }





module.exports = { signin } 