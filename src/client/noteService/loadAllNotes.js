import apiService from "./apiService/index";
const locUrl = "http://localhost:3001/";

function loadAllNotes() {
  return apiService.get.get(locUrl);
}

export default { loadAllNotes };
