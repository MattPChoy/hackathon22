const express = require('express')
const router = express.Router()
const test_router = express.Router()
const {v4: uuid} = require("uuid");

cafes = {}

test_router.get('/', (req, res) => {
    res.json(cafes)
})

router.get('/:cafeId', (req, res) => {
    const cafeId = req.params.cafeId
    const cafe = cafes[cafeId]
    res.send(cafe)
})

//Expects the name of the café to be given as a query ?name={name}, all other information is given as body JSON data
router.post('/create', (req, res) => {
    const name = req.query.name
    const cafeId = uuid()
    //TODO enforce structures after discussion with team
    const menu = req.body.menu ?? 'No menu provided'
    const geoCoords = req.body.geoCoords ?? 'No geographic coordinates provided'
    const streetAddress = req.body.streetAddress ?? 'No street address provided'
    const accessibility = req.body.accessibility ?? 'No accessibility information provided'
    const reviews = req.body.reviews ?? 'No review information provided'
    cafes[cafeId] = {
        name,
        cafeId,
        menu,
        geoCoords,
        streetAddress,
        accessibility,
        reviews
    }
    res.json(
        {
            cafeId,
            message: 'Cafe successfully created'
        }
    )

})

module.exports = { cafe: router, cafe_test_router: test_router }