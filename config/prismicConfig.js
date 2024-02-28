require('dotenv').config();
var fetch = require('node-fetch')
var prismic = require('@prismicio/client')

// The `routes` property is your route resolver. It defines how you will
// structure URLs in your project. Update the types to match the Custom
// Types in your project, and edit the paths to match the routing in your
// project.
const routes = [
  {
    type: 'experiences',
    path: '/'
  }
]

const client = prismic.createClient(process.env.REPO_NAME, {
  fetch,
  accessToken: process.env.ACCESS_TOKEN,
  routes
})

module.exports = { client }
