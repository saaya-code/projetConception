const User = require("../../models/User");

module.exports = async (req, res) => {
    try{
        const user = await User.findById(req.user._id).populate('vehicles').exec();
        const vehicule = user.vehicles.find(vehicule => vehicule._id == req.params.id);
        vehicule ? res.status(200).json(vehicule) : res.status(404).json({message: "Vehicule not found"});
    }catch(error){
        res.status(500).json({message: error});
    }
}