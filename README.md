# Node Lambda Blueprint

Provides a simple blueprint for a project using multiple AWS Lambda functions.

 * Uses Node4.3 
 * Uses `node-lambda` for local development, packaging, build and deploy

Simply clone and follow these instructions:
 1. copy the `example` bundle in the the `functions/` directory
 2. `npm install`
 3. duplicate the `sample.env` file and save as `.env`
 4. fill in your AWS Credentials and configuration (such as the ARN for the Lambda user)

All `node-lambda` commands will work, such as `node-lambda run` or `node-lambda package && node-lambda deploy`.
