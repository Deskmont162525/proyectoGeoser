const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('email', {
    asunto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destinatario: {
      type: DataTypes.STRING,
      allowNull: false
    },
    favoritos: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    estado: {
      type: DataTypes.STRING
    },
    mensaje: {
      type: DataTypes.STRING
    },
  });
};
