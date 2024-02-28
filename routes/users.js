var express = require('express')
var router = express.Router()
const { client } = require('../config/prismicConfig')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  // const document = await prismicClient.client.getFirst()

  res.render('pages/users', { title: "USER"})
  


})

module.exports = router
