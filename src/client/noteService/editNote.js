import apiService from "./apiService/index";
const locUrl = "http://localhost:3001/notes/";

function editNote(elem, file) {
  apiService.post.post(locUrl + file + "/edit", elem);
}

export default { editNote };
