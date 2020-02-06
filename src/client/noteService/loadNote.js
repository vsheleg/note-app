import apiService from "./apiService/index.js";
const locUrl = "http://localhost:3001/";

function loadNote(note) {
  console.log(locUrl, note + "/read");
  return apiService.get.get(locUrl, "/" + note + "/read");
}

export default { loadNote };
