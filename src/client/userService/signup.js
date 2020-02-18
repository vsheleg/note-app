import post from "./apiService/post";
const locUrl = "http://localhost:3002/";

export default function signup(user) {
  let endpoint = "signup";
  return post(locUrl, endpoint, user);
}
