import axios from "axios";
import config from '../config';
const KEY = config;

export default axios.create({
	baseURL: `https://newsapi.org/v2/top-headlines?apiKey=${KEY}&pageSize=40&sources=techcrunch, techradar, hacker-news, the-verge, wired`,
});
