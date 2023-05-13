


const logger = require('../../system/logger/index') 
const { signinUser } = require('../../services/user/user.service') 


const getSigninPage = function(req, res, next)
    {
        try 
        {
            const errMsg = null 
            return res.render("login",{ errMsg })
        }
        catch(e)
        {
            console.log(' Server Encountered error while getting login page ')
            return res.render("error") 
        }
    }


const signin = async function(req, res, next)
    {
        try 
        {
            const user = req.body
            const token = await signinUser(user)

            res.cookie('AUTH_TOKEN', token )

            // redirect to page 
            return res.render("compose") 
        }
        catch(e)
        {
            const statusCode = e.statusCode 


            switch( statusCode )
            {
                case 500: 
                        logger.error(' SIGNIN_ERROR  ') 
                        return res.render("error",e) 

                case 400: 
                        logger.error('SIGNIN_ERROR: => INVALID_USER_INPUT: 400')
                        return res.render("login",{ errMsg: "Incorrect Login Details "}) 

                default: 
                          logger.error(' Unknown Response Error Code ') 
                          return res.render("error") 

            }
           
        }
    }





module.exports = { signin, getSigninPage } 