const Visit = require("../../models/Visit");
const Workshop = require("../../models/Workshop");

module.exports = async (req, res) => {
    const visit = await Visit.findById(req.params.id).populate("workshop").exec();
    if(visit){
        if(visit.status === "confirmed") return res.status(400).json({message: "Visit already confirmed"});
        if(visit.status === "cancelled") return res.status(400).json({message: "Visit already cancelled"});
        if(visit.status === "completed") return res.status(400).json({message: "Visit already completed"});
        const workshop = await Workshop.findById(visit.workshop._id).exec();
        if(!workshop) return res.status(404).json({message: "Workshop not found"});
        const workers = Workers.find({workshop: workshop._id, available:true}).limit(visit.services.length).exec();
        if(workers.length < visit.services.length) return res.status(400).json({message: "Not enough workers available"});
        visit.status = "confirmed";
        await visit.save();
        res.status(200).json({message: "Visit confirmed successfully", visit});
    }
}