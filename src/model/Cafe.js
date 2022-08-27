const mongoose = require("mongoose")
const {v4: uuid} = require('uuid')

cafes = {}

let MenuModel = undefined
let CafeModel = undefined

class Menu {

}

class Cafe {
    constructor() {

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
        cafeId: String,
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

    return { User, Group, cafes }
}