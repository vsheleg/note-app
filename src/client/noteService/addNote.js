import apiService from "./apiService/index";
const locUrl = "http://localhost:3001/notes";

function addNote(note) {
  apiService.post.post(locUrl + "/addFile", note);
}
export default { addNote };
