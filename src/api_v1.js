const express = require('express')
const router = express.Router()

const { group } = require('./group')
const { cafe } = require('./cafe')

router.use('/group', group)
router.use('/cafe', cafe)

module.exports = router