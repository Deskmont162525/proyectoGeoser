const { Email } = require("../db.js");
const nodemailer = require("nodemailer");

const postSalidas = async (req, res, next) => {
    try {
        const { asunto, destinatario, mensaje } = req.body;
        let estado = "salida";

        const newEmail = await Email.create({
            asunto,
            destinatario,
            mensaje,
            estado,
        });

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'dreyco2525@gmail.com',
                pass: 'kathryn162525'
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const options = {
            from: '"AntonioForonda" pruebasgeosercomunicaciones@gmail.com',
            to: destinatario,
            subject: `${asunto}`,
            html: `${mensaje}`
        }

        await transporter.sendMail(options, (err, info) => {
            if (err) {
                return res.status(500).send(err.message);
            }
            
            return res.status(200).json(info.message)
        });



    } catch (e) {
        console.log(e)
        res.status(500).send("Algo salio mal :( ");
    }
}

module.exports = postSalidas;