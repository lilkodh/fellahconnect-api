module.exports = (sequelize, DataTypes) => {
  const Market = sequelize.define(
    "Market",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },

      city: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },

      region: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      tableName: "markets",
      timestamps: true,
    }
  );


  return Market;
};