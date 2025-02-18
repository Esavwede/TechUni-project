

const pino = require('pino') 
const prodLogger = pino(
    {
        transport: 
        {
            target: 'pino/file',
            options: { destination: `${ __dirname }/logs/prod/logs.txt`}
        },
        level: process.env.APPLICATION_LOG_LEVEL || 'info', 
        timestamp: pino.stdTimeFunctions.isoTime 
    }
) 

module.exports =  prodLogger 