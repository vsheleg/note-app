let model = require("../db/index");

async function deleteNote(noteId) {
  await model.Notes.destroy({
    where: {
      id: noteId
    }
  });
}
async function editNote(body, noteId) {
  await model.Notes.update(
    { note_content: body.value },
    { where: { id: noteId } }
  );
}
async function addNote(body) {
  await model.Notes.create({
    note_content: body
  });
}
async function getNotes() {
  return await model.Notes.findAll({ raw: true });
}
async function readNote(noteId) {
  return await model.Notes.findOne({ where: { id: noteId } });
}

module.exports = { getNotes, readNote, addNote, deleteNote, editNote };
