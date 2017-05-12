var React = require('react');
var ReactDOM = require('react-dom');
var ReactStateViewer = require('react-state-viewer');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactStateViewer />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
