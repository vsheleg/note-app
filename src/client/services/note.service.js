import request from "./apiService/index";
const ROUTER_PREFIX = "notes";
const ROUTES = {
  READ: "/read",
  LOADAll: "/readAll",
  EDIT: "/edit",
  DELETE: "/delete",
  ADD: "/add"
};

function addNote(note) {
  request.post(ROUTER_PREFIX, "", note, ROUTES.ADD);
}

function loadAllNotes() {
  return request.get(ROUTER_PREFIX, ROUTES.LOADAll);
}
function loadNote(title) {
  return request.get(ROUTER_PREFIX, "/" + title + ROUTES.READ);
}
function editNote(content, title) {
  request.post(ROUTER_PREFIX, "/" + title, content, ROUTES.EDIT);
}

function deleteNote(title) {
  request.deleteData(ROUTER_PREFIX, "/" + title, ROUTES.DELETE);
}

export default { addNote, deleteNote, editNote, loadNote, loadAllNotes };
