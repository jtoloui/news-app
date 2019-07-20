import axios from "axios";
const KEY = "4902b5f3a0f34f279787e3215f86183f";

export default axios.create({
	baseURL: `https://newsapi.org/v2/top-headlines?category=technology&country=gb&country=us&apiKey=${KEY}&pageSize=40`,
});
