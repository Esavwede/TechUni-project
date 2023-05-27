


const logger = require('../../system/logger/index') 
const { signinUser } = require('../../services/user/user.service') 


const getSigninPage = function(req, res, next)
    {
        try 
        {
            logger.info(' Getting Signin Page ') 
            const errMsg = null 
            return res.render("login",{ errMsg })
        }
        catch(e)
        {
            logger.error(e,' Error occured while getting Signin Page ')
            return res.render("error") 
        }
    }


const signin = async function(req, res, next)
    {
        try 
        {
            logger.info(' Signin Controller ') 
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
                        logger.error(e,' SIGNIN_ERROR  ') 
                        return res.render("error") 

                case 400: 
                        logger.error(e,'SIGNIN_ERROR: => INVALID_USER_INPUT: 400')
                        return res.render("login",{ errMsg: "Incorrect Login Details "}) 

                default: 
                          logger.error(e,' Unknown Response Error Code ') 
                          return res.render("error") 

            }
           
        }
    }





module.exports = { signin, getSigninPage } 