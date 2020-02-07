import apiService from "./apiService/index";
const locUrl = "http://localhost:3002/";

function deleteNote(note) {
  apiService.deleteData.deleteData(locUrl, note, "/delete");
}

export default { deleteNote };
