const Workshop = require("../../models/Workshop")

module.exports = async (req, res) => {

    try {
        //await Workshop.syncIndexes();
        console.log(req.user._id);
        const workshops = await Workshop.findOne({admin: req.user._id}).populate("admin").populate("region").populate("services").exec();
        res.json(workshops);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error });
    }

}