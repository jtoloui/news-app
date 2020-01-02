const TechEndpoint = `https://newsapi.org/v2/top-headlines?category=technology&country=gb&country=us&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=40`;
const HomeNews = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=40&sources=techcrunch, techradar, hacker-news, the-verge, wired, the-next-web`;
const techcrunch = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=40&sources=techcrunch`;
const techradar = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=40&sources=techradar`;
const NextWeb = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=40&sources=the-next-web`;
const EveryThing = `https://newsapi.org/v2/everything?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=40&q=`;
const backUp = `https://newsapi.org/v2/top-headlines?apiKey=${process.env.REACT_APP_API_KEY}&pageSize=40&sources=techcrunch, techradar, hacker-news, the-verge, wired`;
module.exports = {
	TechEndpoint,
	HomeNews,
	techcrunch,
	techradar,
	backUp,
	NextWeb,
	EveryThing
};
