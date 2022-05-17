const express = require('express');
const cours = require('../model/cours');
const router = new express.Router();

router.get('/Cours',async (req,res)=>{
    try {
        await cours.find({}).then(resultat=>{
            res.status(200).send({status: 200, data: resultat});
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/CoursByCategorie',async (req,res)=>{
    try {
        await cours.find({Categorie: req.body.Categorie}).then(resultat=>{
            res.status(200).send({status: 200, data: resultat});
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/Cours', async (req,res)=>{
    try {
        await cours.find({Categorie: req.body.Categorie,Description: req.body.Description}).then(resultat=>{
            if(resultat.length ===0){
                const course = new cours(req.body);
                course.save(async function(){
                    await cours.find({}).then(result=>{
                        res.status(200).send({status: 200,data: result});
                    });
                });
            }else{
                res.status(500).send("Ce cours existe deja");
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;