const { Email } = require('../db.js')

const deleteEmails = async (req, res, next) => {
	
	const {ids } = req.body;
    
	try {
		const deleteEmail = await Email.update({estado: "eliminado"}, 
			{ where: { id: ids } }
		)
		var existEmail = await Email.findAll({});
       
        res.json(existEmail)
	}
	catch (err) {
		next(err);
	}
}
 
module.exports = deleteEmails;




// let ids = [1,4];
// Your_model.update({ field1 : 'foo' },{ where : { id : ids }}); 