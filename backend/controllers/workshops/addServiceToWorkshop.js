const Workshop = require('../../models/Workshop');

module.exports = async (req, res) => {
    try {
        const adminWorkshop = await Workshop.findOne({ admin: req.user._id }).populate('services').exec();
        adminWorkshop.services.push(...req.body.services);
        await adminWorkshop.save();
        res.json({ message: "Services added successfully", services: adminWorkshop.services });
    }catch(error){
        res.status(400).json({message: error});
    }
}