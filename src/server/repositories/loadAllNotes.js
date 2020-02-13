const Sequelize = require("sequelize");
const sequelize = new Sequelize("notes", "postgres", "1111", {
  dialect: "postgres"
});

module.exports = function loadAllNotes() {
  const Notes = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: true
    },
    note_content: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });

  sequelize.sync().then(() => {});

  return Notes.findAll({ raw: true });
};
