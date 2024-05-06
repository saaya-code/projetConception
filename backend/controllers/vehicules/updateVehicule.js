const User = require("../../models/User");
const Vehicule = require("../../models/Vehicle");

module.exports = async (req, res) => {
    try{
        const vehicule = await Vehicule.findOne({ _id: req.params.id});
        if(!vehicule) return res.status(404).json({message: "Vehicule not found"});
        // update the vehicule if it belongs to the user
        const user = await User.findById(req.user._id);
        if(!user.vehicles.includes(vehicule._id)) return res.status(401).json({message: "Unauthorized"});
        //only update the fields that are includes 
        if(req.body.marque) vehicule.marque = req.body.marque;
        if(req.body.modele) vehicule.modele = req.body.modele;
        if(req.body.annee) vehicule.annee = req.body.annee;
        if(req.body.couleur) vehicule.couleur = req.body.couleur;
        if(req.body.matricule) vehicule.matricule = req.body.matricule;
        await vehicule.save();
        res.status(200).json(vehicule);
    }catch(error){
        res.status(400).json({message: error});
    }
}