import apiService from "./apiService/index";
const locUrl = "http://localhost:3002/";

function loadAllNotes() {
  return apiService.get.get(locUrl, "/readAll");
}

export default { loadAllNotes };
