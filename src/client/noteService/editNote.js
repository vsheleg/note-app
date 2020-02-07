import apiService from "./apiService/index";
const locUrl = "http://localhost:3002/";

function editNote(elem, file) {
  let endPoint = "/edit";
  apiService.post.post(locUrl, file, elem, endPoint);
}

export default { editNote };
