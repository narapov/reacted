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
				<h2>
					app component				
				</h2>
				<News />
			</div>
		);
	}
};

class News extends React.Component {
	render() {
		return (
			<div>
				News component
			</div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('root-component')
);
