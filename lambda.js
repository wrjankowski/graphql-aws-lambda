'use strict'

/*
Lamba wrapper for express based graphql server
*/

const awsServerlessExpress = require('aws-serverless-express')
const app = require('./app')
const server = awsServerlessExpress.createServer(app)

exports.handler = (event, context) =>
awsServerlessExpress.proxy(server, event, context)
