const mongoose = require("mongoose")
const {v4: uuid} = require('uuid')

let cafes = {}

let MenuModel = undefined
let CafeModel = undefined

class Menu {
    constructor(
        coffees,
        milkVariants
    ) {
        this.coffees = coffees
        this.milkVariants = milkVariants
    }

    toModel = () => {
        return {
            coffees: this.coffees,
            milkVariants: this.milkVariants
        }
    }
}

class Cafe {
    constructor(
        name,
        menu,
        geoCoords,
        streetAddress,
        reviews,
        supports
    ) {
        this.name = name
        this.id = uuid()
        this.menu = menu
        this.geoCoords = geoCoords
        this.streetAdress = streetAddress
        this.reviews = reviews
        this.supports = supports
        cafes[this.id] = this
    }

    static getCafeById = (id) => {
        return cafes[id]
    }

    sync = async() => {
        CafeModel.findOneAndReplace(
            {cafeId: this.id},
            {
                name: this.name,
                cafeId: this.id,
                menu: this.menu.toModel(),
                geoCoords: this.geoCoords,
                streetAddress: this.streetAdress,
                reviews: this.reviews,
                supports: this.supports
            },
            {upsert: true, new: true, setDefaultsOnInsert: true}
        ).exec()
    }
}


const initialize = () => {
    const Schema = mongoose.Schema

    const MenuSchema = new Schema({
        coffees: [{
            name: {type: String, unique: true},
            variants: [
                {
                    name: String,
                    price: Number
                }
            ]
        }],
        milkVariants: [
            {
                name: {type: String, unique: true},
                price: Number
            }
        ]
    })
    MenuModel = mongoose.model('Menu', MenuSchema)

    const CafeSchema = new Schema({
        name: String,
        cafeId: {type: String, unique: true},
        menu: MenuSchema,
        geoCoords: {
            longitude: Number,
            latitude: Number
        },
        streetAddress: String,
        reviews: {
            averageStars: Number,
            ratings: [Number]
        },
        supports: {
            wheelchairAccessibility: Boolean,
            vegan: Boolean,
            vegetarian: Boolean,
            seating: Boolean,
            takeaway: Boolean,
            preorder: Boolean,
            liveMusic: Boolean
        }
    })
    CafeModel = mongoose.model('Cafe', CafeSchema)

    return { Menu, Cafe, cafes }
}

module.exports = initialize