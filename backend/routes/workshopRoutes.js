const express = require('express');
const router = express.Router();
const {
    createWorkshop,
    getAllWorkshops,
    getAllActiveWorkshops,
    getWorkshopById,
    updateWorkshop,
    deleteWorkshop,
    getWorkshopsByInstructor,
    registerWorkshop,
} = require('../controllers/workshopController');


// Atölye oluşturma
router.post('/', createWorkshop);
// Tüm atölyeleri alma
router.get('/', getAllWorkshops);
// Tüm aktif atölyeleri alma
router.get('/active', getAllActiveWorkshops);
// Belirli bir atölyeyi alma
router.get('/:id', getWorkshopById);
// Atölye güncelleme
router.put('/:id', updateWorkshop);
// Atölye silme
router.delete('/:id', deleteWorkshop);
// Belirli sanatçıya göre atölyeleri alma
router.get('/instuctor/:instructorId', getWorkshopsByInstructor);
// Workshopa kayıt işlemini gerçekleştirir.
router.post('/workshop/:id', registerWorkshop);

module.exports = router;