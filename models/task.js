'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Task extends Model{
    static associate(models){
      Task.belongsTo(models.Project)
      Task.belongsTo(models.Category)
    }
  }
  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    ProjectId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, 
  {
    sequelize
  })

  return Task;
};