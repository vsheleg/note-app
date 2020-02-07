import apiService from "./apiService/index";
const locUrl = "http://localhost:3002/";

function addNote(note) {
  let endPoint = "add";
  apiService.post.post(locUrl, "", note, endPoint);
}
export default { addNote };
