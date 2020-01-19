const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringToArray = require('../utils/parseStringToArray')

module.exports = {

    async index(request, response) {
        const devs = await Dev.find()
        return response.json(devs)
    },

    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body

        let dev = await Dev.findOne({ github_username })

        if (!dev) {
            const github_response = await axios.get(`https://api.github.com/users/${github_username}`)

            const { name = login, avatar_url, bio } = github_response.data

            const techsArr = parseStringToArray(techs)

            const location = {
                type: 'Point',
                coordinates: [
                    longitude,
                    latitude
                ]
            }

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArr,
                location
            })
        }
        return response.json(dev)
    },

    async update(request, response) {
    },

    async destroy(request, response) {
    }
}