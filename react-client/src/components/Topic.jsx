import React from 'react';

class Topic extends React.Component {
	constructor(props) {
		super(props);
		this.getAnswer = this.getAnswer.bind(this);
	}

	getAnswer() {
		$.ajax({
			url: props.url,
			method: 'GET',
			contentType: 'application/json',
			success: (data) => {
				this.setState({
					answer: data
				});
				console.log('successful GET request');
			},
			error: (err) => {
				console.log('failed GET request', err);
			}
		});
	}

	render() {
		return (
      <button type="button" onClick="this.getAnswer">Help!</button>
      <div>
        {props.children}
      </div>
		)
	}
}

export default Topic;