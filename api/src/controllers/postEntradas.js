const { Email } = require("../db.js");

const postEntradas = async (req, res, next) => {
    try { 
        const {asunto,destinatario,mensaje } = req.body;
        let estado = "entrada";
        console.log("entra y recibe ", asunto,destinatario,mensaje)
        
        const newEmail = await Email.create({
			asunto,
			destinatario,
			mensaje,
			estado,			
		});
        var existEmail = await Email.findAll({});
       
        res.json(existEmail)

    } catch (e) {
        console.log(e)
        res.status(500).send("Algo salio mal :( ");
    } 
}

module.exports = postEntradas;