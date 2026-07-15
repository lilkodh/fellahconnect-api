module.exports = (sequelize, DataTypes) => {
  const Market = sequelize.define("Market", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Market;
};