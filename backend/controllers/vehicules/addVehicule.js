const Vehicle = require("../../models/Vehicle");
const User = require("../../models/User");

module.exports = async (req, res) => {
    try{
        const vehicule = new Vehicle({
            marque: req.body.marque,
            modele: req.body.modele,
            annee: req.body.annee,
            couleur: req.body.couleur,
            matricule: req.body.matricule
        });
        const user = await User.findById(req.user._id);
        user.vehicles.push(vehicule._id);
        await vehicule.save();
        await user.save();
        res.status(200).send("Vehicule added successfully");
    }catch(error){
        res.status(400).json({message: error});
    } 
}