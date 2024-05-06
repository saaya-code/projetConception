const Vehicle = require("../../models/Vehicle");
const User = require("../../models/User");

module.exports = async (req, res) => {
    try{
        const user = await User.findById(req.user._id);
        const vehicule = user.vehicles.find(vehicule => vehicule._id == req.params.id);
        if(vehicule){
            const newOwner = await User.findById(req.body.newOwnerId);
            if(!newOwner) return res.status(404).json({message: "New owner not found"});
            newOwner.vehicles.push(vehicule._id);
            user.vehicles = user.vehicles.filter(vehicule => vehicule._id != req.params.id);
            await user.save();
            await newOwner.save();
            res.status(200).send("Vehicule ownership updated successfully");
        }
    }catch(error){
        res.status(500).json({message: error});
    }
}