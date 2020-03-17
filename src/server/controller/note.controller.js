const service = require("../services/note.service");

async function addNote(req, res) {
  const result = await service.addNote(req.body, req.user);
  res.send({ note: result });
}

async function deleteNote(req, res) {
  const { noteId } = req.params;
  const result = await service.deleteNote(noteId, req.user);
  res.send({ note: result });
}

async function editNote(req, res) {
  const { noteId } = req.params;
  const result = await service.editNote(req.body, noteId, req.user);
  res.send({ note: result });
}

async function getNotes(req, res) {
  let notes = await service.getNotes(req.user);
  let commonNotes = notes.commonNotes.map(note => {
    return note.id;
  });
  if (notes.personalNotes) {
    let personalNotes = notes.personalNotes.map(note => {
      return note.id;
    });
    res.end(JSON.stringify({ common: commonNotes, personal: personalNotes }));
  } else {
    res.end(JSON.stringify({ common: commonNotes }));
  }
}
async function readNote(req, res) {
  const { noteId } = req.params;
  let note = await service.readNote(noteId, req.user);
  res.end(JSON.stringify({ content: note.note_content, title: note.title }));
}

module.exports = { getNotes, readNote, addNote, deleteNote, editNote };
