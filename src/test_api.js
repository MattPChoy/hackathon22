const express = require('express')
const router = express.Router()

const {group_test_router: group } = require('./group')

router.use('/group', group)

module.exports = router