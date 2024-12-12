const Workshop = require('../models/Workshop');

// Yeni bir atolye oluşturur.
const createWorkshop = async (req, res) => {
    try {
        const {
            title,
            description, 
            date,
            location,
            capacity,
            price,
            images,
            instructor,
            instructorId,
            registeredUsers,
            category
        } = req.body;
        if(!title || !description || !location || !capacity){
            return res.status(400).json({error:"Please fill all the mandatory fields."});
        }
        const newWorkshop = new Workshop({
            title,
            description, 
            date,
            location,
            capacity,
            price,
            images,
            instructor,
            instructorId,
            registeredUsers,
            category
        });
        await newWorkshop.save();
        res.status(201).json(newWorkshop);
    } catch (error) {
        res.status(500).json({error: "New workshop creation is failed."});
    }
};

// Tüm atölyeleri getirir.
const getAllWorkshops = async (req, res) => {
    try {
        const workshops = await Workshop.find();
        if(workshops.length === 0){
            return res.status(200).json({error:"No workshop found.", workshops:[]});
        }
        res.status(200).json(workshops);
    } catch (error) {
        res.status(500).json({error: "Workshoplar bulunamadı."});
    }
};

// Tğm aktif atölyeleri getirir.
const getAllActiveWorkshops = async (req, res) => {
    try {
        const today = new Date();
        const workshops = await Workshop.find({
            date: {$gte: today} // gte: greater than or equal to 
        });
        if(workshops.length === 0){
            return res.status(404).json({message:"Active Workshops not founded."});
        }
        res.status(200).json(workshops);
    } catch (error) {
        res.status(500).json({error: "Aktif workshoplar bulunamadı"});
    }
};

//Belrili atölyeyi getirir.
const getWorkshopById = async (req, res) => {
    try {
        const workshop = await Workshop.findById(req.params.id);
        if(!workshop){
            return res.status(404).json({error:"Workshop didnt find."});
        }
        res.status(200).json(workshop);
        
    } catch (error) {
        res.status(500).json({error: "Workshop bulunamadı"});
    }
};

// Belirli bir atölyeyi günceller.
const updateWorkshop = async (req, res) => {
    try {
        const updatedWorkshop = await Workshop.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true, runValidators:true}
        );
        if(!updatedWorkshop){
            return res.status(404).json({message:"Workshop couldnt updated"})
        }
        res.status(200).json(updatedWorkshop);
        
    } catch (error) {
        res.status(500).json({error: "Workshop güncellenemedi."});
    }
};

// Atölyeyi siler.
const deleteWorkshop = async (req, res) => {
    try {
        const deletedWorkshop = await Workshop.findByIdAndDelete(req.params.id);
        if(!deletedWorkshop){
            return res.status(404).json({message:"Workshop not found."});
        }
        res.status(200).json({message:"Workshop is deleted successfully."});
    } catch (error) {
        res.status(500).json({error: "Workshop silinemedi."});
    }
};

//Belirli bir sanatçıya ait atölyeleri getirir.
const getWorkshopsByInstructor = async (req, res) => {
    try {
        const instructorId = req.params.instructorId;
        const workshops = await Workshop.find({instructorId});
        if(workshops.length === 0){
            return res.status(404).json({message:"Instructor workshops didnt find."});
        }
        res.status(200).json(workshops);
    } catch (error) {
        res.status(500).json({error: "Sanatçının workshopları bulunamadı."});
    }
};
// Kullanıcının Workshop a kaydolamasını sağlar.
const registerWorkshop = async (req, res) => {
    try {
        const { userId } = req.body ;
        const workshop = await getWorkshopById(req.params.id);
        // Workshop kapasitesini kontrol et.
        if(workshop.registeredUsers.length >= workshop.length){
            return res.status(400).json({error: "Workshop capacity is full"});
        }
        // Kullanıcıyı workshopa ekle.
        workshop.registeredUsers.push(userId);
        await workshop.save();

        res.status(200).json({message:"Kullanıcı başarıyla wokshopa kaydedildi."});

    } catch (error) {
        res.status(500).json({error:"Kayıt yapılamadı."})
    }
};


module.exports = { createWorkshop, getAllWorkshops, getAllActiveWorkshops, getWorkshopById, updateWorkshop, deleteWorkshop, getWorkshopsByInstructor, registerWorkshop };