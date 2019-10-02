import React, { Component } from 'react';
import axios from 'axios';
import SingleSideNews from './SingleSideNews';
import Error from './Error';

class SideNews extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sideNews: [],
			error: false
		};
	}

	componentDidMount() {
		const url = `https://newsapi.org/v2/${this.props.newsSource.type}?${this.props.newsSource.query}&apiKey=1fe435ba8d804ae996cd613dc2264f71`;

		axios
			.get(url)
			.then(response => {
				this.setState({
					sideNews: response.data.articles
				});
			})
			.catch(error => {
				this.setState({
					error: true
				});
			});
	}

	renderItems() {
		if (!this.state.error) {
			return this.state.sideNews.map(item => (
				<SingleSideNews key={item.url} item={item} />
			));
		} else {
			return <Error />;
		}
	}

	render() {
		return <div>{this.renderItems()}</div>;
	}
}

export default SideNews;
