

const pino = require('pino') 

const prodLogger = pino(
        {
            transport:
            {
               targets: 
               [
                 { 
                    target: 'pino-pretty'
                 }
               //   {
               //      target: 'pino/file', 
               //      options: { destination: `${ __dirname }/logs/dev/logs.txt`}
               //   }
               ]
            },
            level: process.env.APPLICATION_LOG_LEVEL || 'info', 
            timestamp: pino.stdTimeFunctions.isoTime 
        }
    ) 

module.exports =  prodLogger 