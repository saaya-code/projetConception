const Worker = require("../../models/Worker")
const Workshop = require("../../models/Workshop")
module.exports = async (req, res) => {

    try {
        //await Workshop.syncIndexes();
        const adminsWorkshop = await Workshop.findOne({ admin: req.user._id });

        //console.log(req.user._id);
        const workers = await Worker.find({workshop:adminsWorkshop._id }).populate("workshop").populate("services").exec();
        res.json(workers);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error });
    }

}