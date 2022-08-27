const mongoose = require("mongoose")
const {v4: uuid} = require('uuid')

let UserModel = undefined
let GroupModel = undefined
const groups = {}

class User {
    constructor(name) {
        this.name = name
        this.id = uuid()
    }

    toModel = () => {
        return new UserModel(
            {
                username: this.name,
                userId: this.id
            }
        )
    }

    static getUserById(groupId, userId) {
        return Group.getGroupById(groupId).users[userId]
    }
}

class Group {
    constructor(
        groupName,
        users,
        admin
    ) {
        this.groupName = groupName
        this.users = users
        this.admin = admin
        this.groupId = uuid()
        groups[this.groupId] = this
    }

    addUser = (user) => {
        this.users[user.id] = user
    }

    removeUser = (userId) => {
        delete this.users[userId]
    }

    getUser = (userId) => {
        return this.users[userId]
    }

    sync = async () => {
        GroupModel.findOneAndReplace(
            { groupId: this.groupId },
            {
                groupId: this.groupId,
                groupName: this.groupName,
                admin: this.admin,
                users: Object.keys(this.users).map((userId, _i, users) =>
                    User.getUserById(this.groupId, userId).toModel()
                )
            },
            {upsert: true, new: true, setDefaultsOnInsert: true}
        ).exec()
    }

    static getGroupById = (groupId) => {
        return groups[groupId]
    }
}

const initialize = () => {
    const Schema = mongoose.Schema

    const UserSchema = new Schema({
        username: String,
        userId: { type: String, index: true }
    })
    UserModel = mongoose.model('User', UserSchema)

    const GroupSchema = new Schema({
        groupId: { type: String, index: true } ,
        groupName: String,
        admin: String,
        users: [UserSchema]
    })
    GroupModel = mongoose.model('Group', GroupSchema)

    return { User, Group, groups }
}

module.exports = initialize