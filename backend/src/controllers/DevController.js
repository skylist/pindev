const axios = require('axios')
const Dev = require('../models/Dev')

module.exports = {
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body

        let dev = await Dev.findOne({ github_username })

        if (!dev) {
            const github_response = await axios.get(`https://api.github.com/users/${github_username}`)

            const { name = login, avatar_url, bio } = github_response.data

            const techsArr = techs.split(',').map(tech => tech.trim())

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
    }
}