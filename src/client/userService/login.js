import post from "./apiService/post";
const locUrl = "http://localhost:3002/";

export default function login(user) {
  console.log(user);
  let endpoint = "login";
  return post(locUrl, endpoint, user);
}
