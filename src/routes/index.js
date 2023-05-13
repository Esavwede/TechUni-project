
const logger = require('../system/logger/index') 
const jobRoutes = require('./Jobs/Job.route') 
const userRoutes = require('./user/user.route.js') 
const indexRoutes = require('./index/index.route') 


module.exports = function buildRoutes(app)
        {
          try 
          {
            logger.info('Building Application Routes ')


            indexRoutes(app) 
            userRoutes(app) 
            jobRoutes(app)


            logger.info(' Application Routes Built ')
          }
          catch(e)
          {
            logger.error(e,"APPLICATION_ROUTES_BUILD_ERROR")
          }
        }