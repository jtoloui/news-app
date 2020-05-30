import axios from "axios";

export default axios.create({
	baseURL: "https://newsapi.org/v2",
	headers: {
		"x-api-key": process.env.REACT_APP_API_KEY
	}
});
