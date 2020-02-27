const service = require("../services/note.service");

async function addNote(req, res) {
  const result = await service.addNote(req.body);
  res.send({ note: result });
}

async function deleteNote(req, res) {
  const { noteId } = req.params;
  const result = await service.deleteNote(noteId);
  res.send({ note: result });
}

async function editNote(req, res) {
  const { noteId } = req.params;
  const result = await service.editNote(req.body, noteId);
  res.send({ note: result });
}

async function getNotes(req, res) {
  let notes = await service.getNotes();
  notes = notes.map(note => {
    return note.id;
  });
  res.end(JSON.stringify(notes));
}
async function readNote(req, res) {
  const { noteId } = req.params;
  let note = await service.readNote(noteId);
  res.end(JSON.stringify([note.note_content]));
}

module.exports = { getNotes, readNote, addNote, deleteNote, editNote };
