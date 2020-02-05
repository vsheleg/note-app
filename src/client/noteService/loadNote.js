import apiService from "./apiService/index.js";
const locUrl = "http://localhost:3001/";

function loadNote(note) {
  return apiService.get.get(locUrl + "notes/" + note + "/read");
}

export default { loadNote };
