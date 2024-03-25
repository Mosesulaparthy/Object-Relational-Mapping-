// Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import our database connection from connection.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// Set up fields and rules for Product model
Product.init(
  {
    // Define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // 10 digits in total, with 2 decimal places
      allowNull: false,
      validate: {
        isDecimal: true // Ensure the price is a decimal
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10, // Default value for stock
      validate: {
        isNumeric: true // Ensure the stock is numeric
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Product' // Capitalize the model name to match conventional naming
  }
);

module.exports = Product;
