const express = require('express')
const router = express.Router()
const test_router = express.Router()
const {Menu, Cafe, cafes} = require('./model/Cafe')()

test_router.get('/', (req, res) => {
    res.json(cafes)
})

router.get('/:cafeId', (req, res) => {
    const cafeId = req.params.cafeId
    const cafe = Cafe.getCafeById(cafeId)
    res.send(cafe)
})

//Expects the name of the café to be given as a query ?name={name}, all other information is given as body JSON data
router.post('/create', (req, res) => {
    const name = req.query.name
    const coffees = req.body.menu.coffees ?? []
    const milkVariants = req.body.menu.milkVariants ?? []
    // By default set to point nemo since there is no cafe there
    const geoCoords = req.body.geoCoords ?? { longitude: 49.0273, latitude: 123.4345 }
    const streetAddress = req.body.streetAddress ?? 'No street address provided'
    const support = req.body.supports ?? {
        wheelchairAccessibility: false,
        vegan: false,
        vegetarian: false,
        seating: false,
        takeaway: false,
        preorder: false,
        liveMusic: false
    }
    const reviews = req.body.reviews ?? { averageStars: -1, ratings: [] }
    const cafe = new Cafe(
        name,
        new Menu(
            coffees,
            milkVariants
        ),
        geoCoords,
        streetAddress,
        reviews,
        support
    )
    cafe.sync().then(() => {
        res.json(
            {
                cafeId: cafe.id,
                message: 'Cafe successfully created'
            }
        )
    }).catch(() => {
        res.json({
            message: 'Cafe failed to be created'
        })
    })

})

module.exports = { cafe: router, cafe_test_router: test_router }