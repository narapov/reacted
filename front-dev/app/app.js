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


var news = [{
	author: 'author1',
	news: 'news1'
}, {
	author: 'author2',
	news: 'news2'
}, {
	author: 'author3',
	news: 'news3'
}];


class App extends React.Component {
	render() {
		return (
			<div>
				<h2>
					app component				
				</h2>
				{/*пример <MyComponent data={value1} eshe_odno_svoistvo={[1,2,3,4,5]} /> */}
				<News data={news}/>
			</div>
		);
	}
};

class News extends React.Component {
	getDataTempate(){
		
		return this.props.data.map((n, index)=>(
			<div key={index}>
				<div>author: {n.author}</div>
				<div>news: {n.news}</div>
			</div>
		));

	}

	render() {
		return (
			<div>
				News component
				{this.getDataTempate()}
			</div>
		);
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('root-component')
);
