const models =  require('../models');

const eventControllers ={}

eventControllers.fetchAll = async (req, res) => {
    try {
        const events = await models.event.findAll();
        res.json({ events });
    } catch (error) {
        res.json({error});
    }
}

module.exports = eventControllers;