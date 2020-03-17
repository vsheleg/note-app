const noteRepository = require("../repositories/note.repository");
const userRepository = require("../repositories/user.repository");

function editNote(body, noteId, user) {
  return noteRepository.editNote(body, noteId, user);
}

function deleteNote(noteId, user) {
  return noteRepository.deleteNote(noteId, user);
}

async function addNote(body, user) {
  if (user) {
    const authorNote = await userRepository.findUser(user);
    if (body.privacy === "personal") {
      return await noteRepository.addPersonalNote(body, authorNote.user_id);
    }
  }
  return await noteRepository.addCommonNote(body);
}
function readNote(noteId, user) {
  return noteRepository.readNote(noteId, user);
}
async function getNotes(user) {
  const commonNotes = await noteRepository.getNotes();
  if (user) {
    const authorNote = await userRepository.findUser(user);
    const personalNotes = await noteRepository.getPersonalNotes(
      authorNote.user_id
    );
    return { commonNotes, personalNotes };
  }
  return { commonNotes };
}

module.exports = { editNote, deleteNote, addNote, readNote, getNotes };
