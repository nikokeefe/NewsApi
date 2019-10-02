import React from 'react';

const SingleSideNews = ({ item }) => (
	<div>
		<div className='divider'></div>
		<a href={item.url}>
			<div className='section'>
				<h5>{item.source.name}</h5>
				<p>{item.title}</p>
			</div>
		</a>
	</div>
);

export default SingleSideNews;
