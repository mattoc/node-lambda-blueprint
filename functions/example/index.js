'use strict';

const fs = require('fs');
try {
  const env = fs.statSync('.env');
  require('dotenv').config();
} catch(error) {
  throw new Error('A local .env file is required, see sample.env');
}

const aws = require('aws-sdk');


module.exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: 'Success!',
    message: event.message
  });
};

