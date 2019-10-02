import React, { Component } from 'react';
import NewSingle from './NewSingle';
import Error from './Error';

class News extends Component {
	constructor(props) {
		super(props);
		this.state = {
			news: [],
			error: false
		};
	}

	componentDidMount() {
		const url = `https://newsapi.org/v2/${this.props.newsSource.type}?${this.props.newsSource.query}&apiKey=1fe435ba8d804ae996cd613dc2264f71`;
		fetch(url)
			.then(response => {
				return response.json();
			})
			.then(data => {
				this.setState({
					news: data.articles
				});
			})
			.catch(error => {
				this.setState({
					error: true
				});
			});
	}

	renderItems() {
		return this.state.news.map(item => (
			<NewSingle key={item.url} item={item} />
		));
	}

	render() {
		if (!this.state.error) {
			return <div className='row'>{this.renderItems()}</div>;
		} else {
			return <Error />;
		}
	}
}

export default News;
