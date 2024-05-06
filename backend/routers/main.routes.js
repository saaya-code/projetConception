const express = require('express');
const router = express.Router();


const {addVehicule, getAllVehicules, getVehicule, updateVehicule, deleteVehicule, updateVehiculeOwnerShip} = require('../controllers/vehicles');

router.post("/addVehicle", addVehicule);
router.get('/getAllUserVehicles', getAllVehicules);
router.get('/getVehicle/:id', getVehicule);
router.put('/updateVehicle', updateVehicule);
router.delete('/deleteVehicle/:id', deleteVehicule);
router.patch('/updateVehiculeOwnerShip/:id', updateVehiculeOwnerShip);

const {scheduleVisit, confirmVisit} = require('../controllers/visit');

router.post("/scheduleVisit", scheduleVisit);
router.post("/confirmVisit/:id", confirmVisit);

module.exports = router;