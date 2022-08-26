const express = require('express')
const router = express.Router()

const { group } = require('./group')

router.use('/group', group)

module.exports = router