import request from "./apiService/index";
const ROUTER_PREFIX = "notes";
const ROUTES = {
  READ: "/read",
  LOADAll: "/readAll",
  EDIT: "/edit",
  DELETE: "/delete",
  ADD: "/add"
};

function addNote(content) {
  request.post(ROUTER_PREFIX + ROUTES.ADD, content);
}

function loadAllNotes() {
  return request.get(ROUTER_PREFIX + ROUTES.LOADAll);
}
function loadNote(title) {
  return request.get(ROUTER_PREFIX + ROUTES.READ + "/" + title);
}
function editNote(content, title) {
  return request.post(ROUTER_PREFIX + ROUTES.EDIT + "/" + title, content);
}

function deleteNote(title) {
  return request.deleteData(ROUTER_PREFIX + ROUTES.DELETE + "/" + title);
}

export default { addNote, deleteNote, editNote, loadNote, loadAllNotes };
