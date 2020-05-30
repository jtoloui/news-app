import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import Footer from "./Footer";
import NavBar from "./NavBar";
import axios from "axios";
import config from "../ROUTES";
import NewsApi from "../API/newsApi";

const useStyles = makeStyles(theme => ({
	progress: {
		position: "absolute",
		top: "45%",
		left: "45%",
		height: "50vh"
	},
	error: {
		position: "absolute",
		fontSize: "28px",
		top: "50%",
		left: "25%",
		right: "10%",
		fontFamily: "'Roboto', 'Helvetica', 'Arial', 'sans-serif'",
		[theme.breakpoints.up("sm")]: {
			top: "50%",
			left: "30%"
		}
	}
}));

const Table = lazy(() => import("./Table"));
const App = () => {
	const [data, setData] = useState([]);
	const [call, setCall] = React.useState(null);
	const [reloadState, setReloadState] = React.useState(true);
	const [isFetching, setisFetching] = React.useState(true);
	const [totalResults, setTotalResults] = React.useState(null);
	const [reloadCSS, setReloadCSS] = React.useState("disabled");
	const classes = useStyles();

	const reload = () => {
		axios.get(call).then(result => setData(result.data.articles));
	};

	useEffect(() => {
		NewsApi.get("/top-headlines", {
			params: {
				pageSize: 40,
				sources:
					"techcrunch, techradar, hacker-news, the-verge, wired, the-next-web"
			}
		}).then(result => setData(result.data.articles));
		setisFetching(false);
	}, []);

	const onTermSubmit = async term => {
		NewsApi.get("everything", {
			params: {
				q: term
			}
		}).then(
			result =>
				setData(result.data.articles) +
				setTotalResults(result.data.totalResults)
		);
		setCall(config.EveryThing + term);
		setReloadState(false);
		setReloadCSS("active");
	};

	const fetchSource = source => {
		switch (source) {
			case "Home":
				NewsApi.get("/top-headlines", {
					params: {
						pageSize: 40,
						sources:
							"techcrunch, techradar, hacker-news, the-verge, wired, the-next-web"
					}
				}).then(
					result =>
						setData(result.data.articles) +
						setTotalResults(result.data.totalResults)
				);
				setCall(config.HomeNews);
				setReloadState(false);
				setReloadCSS("active");
				break;
			case "Technology":
				NewsApi.get("/top-headlines", {
					params: {
						pagesize: 40,
						category: "technology",
						country: ["gb", "us"]
					}
				}).then(
					result =>
						setData(result.data.articles) +
						setTotalResults(result.data.totalResults)
				);
				setCall(config.TechEndpoint);
				setReloadState(false);
				setReloadCSS("active");
				break;
			case "TechCrunch":
				setData([]);
				NewsApi.get("top-headlines", {
					params: {
						sources: "techcrunch",
						pageSize: 40
					}
				}).then(
					result =>
						setData(result.data.articles) +
						setTotalResults(result.data.totalResults)
				);
				setCall(config.techcrunch);
				setReloadState(false);
				setReloadCSS("active");
				break;
			case "TechRadar":
				NewsApi.get("/top-headlines", {
					params: {
						pageSize: 40,
						sources: "techradar"
					}
				}).then(
					result =>
						setData(result.data.articles) +
						setTotalResults(result.data.totalResults)
				);
				setCall(config.techradar);
				setReloadState(false);
				setReloadCSS("active");
				break;
			case "NextWeb":
				NewsApi.get("/top-headlines", {
					params: {
						pageSize: 40,
						sources: "the-next-web"
					}
				}).then(
					result =>
						setData(result.data.articles) +
						setTotalResults(result.data.totalResults)
				);
				setCall(config.NextWeb);
				setReloadState(false);
				setReloadCSS("active");
				break;
			default:
				break;
		}
	};
	return (
		<Router>
			{!isFetching && (
				<Suspense
					fallback={
						<CircularProgress
							className={classes.progress}
							color="primary"
						/>
					}
				>
					<Switch>
						<Route
							render={() => (
								<div>
									<NavBar
										ArticleCount={data.length}
										NewSource={fetchSource}
										reload={reload}
										reloadState={reloadState}
										reloadCSS={reloadCSS}
										onSearchSubmit={onTermSubmit}
									/>
									{data.length > 0 && <Table news={data} />}
									<Footer />
									{totalResults === 0 && (
										<div className={classes.error}>
											Oops, this is awkward we can't find
											any articles!
										</div>
									)}
								</div>
							)}
						/>
					</Switch>
				</Suspense>
			)}
		</Router>
	);
};

export default App;
