var express = require('express')
var router = express.Router()
const { client } = require('../config/prismicConfig')

const getReverseSortedArrayByDate = (arr) => {
  return arr.reverse().map((p, index) => ({ ...p, index: index + 1 })).reverse()
}

/* GET home page. */
router.get('/', async function (req, res, next) {
  const experiences = await client.getAllByType('experiences')
  let pro = []
  let portfolio = []

  experiences
    .sort((a, b) => new Date(b.data.start_date) - new Date(a.data.start_date))
    .forEach((ex) => {
      if (ex.data.type === 'pro') {
        pro.push(ex)
      } else {
        portfolio.push(ex)
      }
    })
  pro = getReverseSortedArrayByDate(pro)
  portfolio = getReverseSortedArrayByDate(portfolio)

  res.render('pages/home', {
    experiences: [...pro, ...portfolio, ...pro, ...portfolio]
  })
  // res.render('pages/home', { experiences: [pro[0], pro[1]] })
})

module.exports = router
