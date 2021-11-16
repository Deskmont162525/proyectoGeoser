const router = require('express').Router();

const deleteEmails = require('../controllers/deletEmails');
const getAllEmails = require('../controllers/getAllEmails');
const postEntradas = require('../controllers/postEntradas');
const postSalidas = require('../controllers/postSalidas');
const addFavoritos = require('../controllers/putAddfavoritos');

router.get('/emails/all', getAllEmails);

router.post('/entradas', postEntradas);
router.post('/salidas', postSalidas);

router.put('/favoritos/:id', addFavoritos);
router.put('/eliminar', deleteEmails)


module.exports = router;