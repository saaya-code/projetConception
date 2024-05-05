const Worker = require('../../models/Worker');
const Workshop = require('../../models/Workshop');

const addWorker = async (req, res) => {
    try {
        const adminsWorkshop = await Workshop.findOne({ admin: req.user._id });
        console.log(adminsWorkshop)
        const worker = new Worker({
            name: req.body.name,
            workshop: adminsWorkshop._id,
            services: req.body.services
        });
        await worker.save();
        res.status(200).send("Worker added successfully");
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = addWorker;