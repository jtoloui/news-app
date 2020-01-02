import axios from "axios";
import config from "../ROUTES";

export default axios.create({
	baseURL: config.HomeNews
});
