/// <reference path="../../bower_components/react/react.js" />
/// <reference path="../../bower_components/react/react-dom.js" />

console.log(React);
console.log(ReactDOM);

ReactDOM.render(
	React.createElement('h1', null, 'hello'),
	document.getElementById('root')
);


ReactDOM.render(
	<h1>hello from jsx</h1>,
	document.getElementById('root-jsx')
);


class App extends React.Component {
	render() {
		return (
			<div>
				first custom component
			</div>
		);
	}
};

ReactDOM.render(
	<App/>,
	document.getElementById('root-component')
);
