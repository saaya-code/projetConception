const User = require("../../models/User");

module.exports = async (req, res) => {
    try{
        const user = await User.findById(req.user._id).populate('vehicles').exec();
        const vehicules = user.vehicles;
        res.status(200).json(vehicules);
    }catch(error){
        res.status(400).json({message: error});
    }
};