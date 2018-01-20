'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  API_HOST: process.env.API_HOST ? `"${process.env.API_HOST}"` : '"http://localhost:3000"'
})
