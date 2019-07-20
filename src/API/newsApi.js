import axios from "axios";
const KEY = <YourAPIKEY>;

export default axios.create({
	baseURL: `https://newsapi.org/v2/top-headlines?category=technology&country=gb&country=us&apiKey=${KEY}&pageSize=40`,
});
