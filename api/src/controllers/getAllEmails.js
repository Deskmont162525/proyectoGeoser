const { Email } = require('../db');


const getAllEmails = async (req, res, next) => {
    
    try{

        const dbEmail = await Email.findAll({});       
        res.json(dbEmail);

    }catch (e) {
        console.log(e);
        res.status(500).send("Algo salio mal :( ");
    }
}
 
module.exports = getAllEmails;

