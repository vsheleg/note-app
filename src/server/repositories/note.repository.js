let model = require("../db/index");

async function deleteNote(noteId) {
  return await model.Notes.destroy({
    where: {
      id: noteId
    }
  });
}
async function editNote(body, noteId) {
  return await model.Notes.update(
    { note_content: body.val },
    { where: { id: noteId } }
  );
}
async function addPersonalNote(body, user_id) {
  return await model.Notes.create({
    note_content: body.value,
    title: body.title,
    privacy: true,
    author: user_id
  });
}
async function addCommonNote(body) {
  return await model.Notes.create({
    note_content: body.value,
    title: body.title,
    privacy: false
  });
}

async function getNotes() {
  return await model.Notes.findAll({ where: { privacy: false } });
}
async function getPersonalNotes(user_id) {
  return await model.Notes.findAll({
    where: {
      author: user_id
    }
  });
}
async function readNote(noteId) {
  return await model.Notes.findOne({ where: { id: noteId } });
}

module.exports = {
  getNotes,
  readNote,
  deleteNote,
  editNote,
  getPersonalNotes,
  addCommonNote,
  addPersonalNote
};
