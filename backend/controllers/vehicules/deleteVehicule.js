const Vehicle = require("../../models/Vehicle");
const User = require("../../models/User");

module.exports = async (req, res) => {
    try{
        const user = await User.findById(req.user._id);
        const vehicule = user.vehicles.find(vehicule => vehicule._id == req.params.id);
        if(vehicule){
            await Vehicle.findByIdAndDelete(req.params.id);
            user.vehicles = user.vehicles.filter(vehicule => vehicule._id != req.params.id);
            await user.save();
            res.status(200).send("Vehicule deleted successfully");
        }else{
            res.status(404).json({message: "Vehicule not found"});
        }
    }catch(error){
        res.status(500).json({message: error});
    }
}