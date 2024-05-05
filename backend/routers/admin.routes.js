const express = require('express');
const router = express.Router();

const {addWorkshop, getAllWorkshops, getWorkshop} = require('../controllers/workshops');
router.post("/addWorkshop", addWorkshop);
router.get('/getAllWorkshops', getAllWorkshops);
router.get('/getWorkshop/:name', getWorkshop);


const { addWorker, getAllWorkers } = require('../controllers/workers');
router.post("/addWorker", addWorker);
router.post("/getAllWorkers", getAllWorkers);


module.exports = router;