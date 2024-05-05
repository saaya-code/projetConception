const Workshop = require("../../models/Workshop")


module.exports = async (req, res) => {
    //the admin should be authenticated
    try {
        const workshop = new Workshop({
            name: req.body.name,
            address: req.body.address,
            region: req.body.region,    
            services: req.body.services,
            maxCapacity: req.body.maxCapacity,
            admin: req.user._id
        });
        await workshop.save();
        res.json({ message: "Workshop added successfully" });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}