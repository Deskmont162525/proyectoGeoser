const { Email } = require('../db.js')

const addFavoritos = async (req, res, next) => {
	const { id } = req.params;
	const {favoritos } = req.body;
    
	try {
		const addFavorito = await Email.update({favoritos: favoritos}, 
			{ where: { id } }
		)
		var existEmail = await Email.findAll({});
       
        res.json(existEmail)
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = addFavoritos;