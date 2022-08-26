const express = require('express')
const router = express.Router()

const {group_test_router: group } = require('./group')
const { cafe_test_router } = require('./cafe')

router.use('/group', group)
router.use('/cafe', group)

module.exports = router