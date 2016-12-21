import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<div style={divStyle}>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				If you're reading this, you're here early! Faster than I can even roll out my latest update. <br/>
				Hopefully the next time you check in, this will be completed. <br/>
				<br/>

				My name is Daniel Lau and here is my <a target="_blank" href="https://drive.google.com/file/d/0B6Bj3XDLYFAQaE9ubDVsN0hpLUU/view?usp=sharing">resume</a>.
			</div>
		)
	}
}

var divStyle = {
	margin: '15px',
	background: '#FF9f60'
}
export default About;