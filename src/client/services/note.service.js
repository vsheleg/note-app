import request from "./apiService/index";
const ROUTER_PREFIX = "notes";

function addNote(content) {
  return request.post(ROUTER_PREFIX, content);
}

function loadAllNotes() {
  return request.get(ROUTER_PREFIX);
}
function loadNote(title) {
  return request.get(ROUTER_PREFIX + "/" + title);
}
function editNote(content, title) {
  return request.put(ROUTER_PREFIX + "/" + title, content);
}

function deleteNote(title) {
  return request.deleteData(ROUTER_PREFIX + "/" + title);
}

export default { addNote, deleteNote, editNote, loadNote, loadAllNotes };
