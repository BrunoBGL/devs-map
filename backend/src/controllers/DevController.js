const axios = require('axios');

const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections } = require('../websocket');
const { sendMessage } = require('../websocket');

module.exports = {
  destroy() { },
  update() { },
  async index(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  },

  async store(req, res) {

    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    const techsArray = parseStringAsArray(techs);

    if (!dev) {

      const gitHubRes = await axios.get(`https://api.github.com/users/${github_username}`);

      const location = {
        type: 'Point',
        coordinates: [
          latitude,
          longitude,
        ],
      };

      const { name = login, avatar_url, bio } = gitHubRes.data;

      const dev = await Dev.create({
        name,
        github_username,
        bio,
        avatar_url,
        techs: techsArray,
        location,
      });

      const sendSocketMessageTo = findConnections(
        { latitude, longitude },
        techsArray,
      );

      console.log(sendSocketMessageTo);

      sendMessage(sendSocketMessageTo, 'new-user', dev);
    }

    return res.json(dev);
  }

};
