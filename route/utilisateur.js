const express = require('express');
const utilisateur = require("../model/utilisateur");
const router = new express.Router();
const sha1 = require('sha1');

router.get('/Utilisateur', async (req,res)=>{
    try {
        await utilisateur.find({}).then(resultat=>{
            res.status(200).send({status: 200, data: resultat});
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post('/Connexion', async (req,res)=>{
    try{
        req.body.MotDePasse = sha1(req.body.MotDePasse);
        await utilisateur.findOne({Mail: req.body.Mail,MotDePasse : req.body.MotDePasse}).then(resultat=>{
            const token = resultat['_id'];
            res.status(200).send({status : 200,data: resultat,token: token});
        });
    }catch(error){
        res.status(500).send({status : 500,message: "Verifiez votre adresse mail et/ou mot de passe"});
    } 
});

router.post('/Inscription',async (req,res)=>{
    try{
        req.body.MotDePasse = sha1(req.body.MotDePasse);
        await utilisateur.find({Mail : req.body.Mail}).then(async resultat =>{
            if(resultat.length === 0){
                const user = new utilisateur(req.body);
                await user.save(async function(){
                    await utilisateur.findOne({Mail: req.body.Mail,MotDePasse : req.body.MotDePasse}).then(resultat=>{
                        const token = resultat['_id'];
                        res.status(200).send({status : 200,data: resultat,token: token});
                    });
                });
            }else{
                res.status(400).send("Cet utilisateur existe deja");
            }
        });
    }catch(error){
        console.log(error);
    }
});

module.exports = router;