const Visit = require("../../models/Visit");


module.exports = async (req, res) => {
    try {
        const visit = new Visit({
            date: req.body.date,
            time: req.body.time,
            vehicle: req.body.vehicle,
            workshop: req.body.workshop,
            user: req.user._id,
            status: "pending",
            services: req.body.services
        });
        res.status(200).json(visit);
    } catch (error) {
        res.status(400).json({ message: error });
    }
}