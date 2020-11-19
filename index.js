import React from "react";
import ReactDom from "react-dom";

if (module.hot) {
	module.hot.accept(() => {/* Error Handling Code*/});
}

function MainComponent(){
	return (
		<React.Fragment>
			<h1>Hello World!</h1>
		</React.Fragment>
	);
}

ReactDom.render(<MainComponent/>, document.getElementById("root"));
