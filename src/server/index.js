
var cors = require('cors');
const express = require('express');
const os = require('os');
const axios = require('axios');
const JSON = require('circular-json');
var cron = require('node-cron');
const bodyParser = require('body-parser');
var AuthNodeService = require('./services/authentication/AuthNodeService.js')
const publicIp = require('public-ip');
const app = express();
var path = require("path");
let cookieParser = require('cookie-parser'); 
app.use(cookieParser());
const winston = require('winston');
// App settings
const { sillyLogConfig } = require('../helper/logger.js').winston;
// Create the logger
const logger = winston.createLogger(sillyLogConfig);
//const bodyParser = require('body-parser')
/* app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); */
app.use(cors());
app.use(express.static('dist'));
app.use(bodyParser.json({limit: '50mb' }));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }));


if(process.env.NODE_ENV==='development'){
    require('dotenv').config();
}else if(process.env.NODE_ENV==='preprod'){
    require('dotenv').config({path:__dirname+'/./../../.env.preproduction'});
}else if(process.env.NODE_ENV==='production'){
    require('dotenv').config({path:__dirname+'/./../../.env.production'});
}

console.log('process.env is---'+process.env.environment);
console.log('process.env.NODE_ENV is---'+process.env.NODE_ENV);

app.get('*', function response(req, res) {
    logger.info('get----------'+JSON.stringify(req.originalUrl));
    logger.info('index js Host is----------'+JSON.stringify(req.headers.host));
    logger.info('index js refer is-----'+JSON.stringify(req.headers.referer));
    res.sendFile(path.join(__dirname,'../../dist/index.html'));
  });

  app.post (process.env.contextpath+'/api/logger', function( req, res, next ) {
    console.log('entered logger--'+JSON.stringify(req));
    req.body.logs.map((item, key) => {
  logger.log(item.level || 'error',item.format);
  })

  return res.send( 'OK' );

});



app.get(
    '/api/getUsername', 
    (req, res) => res.send({ username: os.userInfo().username })
);

 app.post(process.env.contextpath+'/api/getPublicIp', (req, res) =>{
  console.log('/api/getPublicIp')
  publicIp.v4().then(ip => {
    console.log("your public ip address", ip);
    res.json({ ip_address: ip });
  }).catch((error) => {
    assert.isNotOk(error,'Promise error');
  });
     
  });


app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));


