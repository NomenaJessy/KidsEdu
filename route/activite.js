const express = require('express');
const activite = require('../model/activite');
const router = new express.Router();

router.get('/Activite', async (req,res)=>{
    try {
        await activite.find({}).then(resultat=>{
            res.status(200).send({status: 200,data: resultat});
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/Activite', async (req, res)=>{
    try {
        await activite.find({intitule: req.body.intitule}).then(resultat=>{
            if(resultat.length === 0){
                const activites = new activite(req.body);
                activites.save(async function(){
                    await activite.find({}).then(result=>{
                        res.status(200).send({status : 200, data: result});
                    })
                });
            }else{
                res.status(500).send("Cette activite existe deja");
            }
        })
    } catch (error) {
        res.status(500).send(error)
    }
});

module.exports = router;