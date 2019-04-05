import React, { Component } from 'react';
var data = new FormData();
class Upload extends Component {
	inputHandle = (e) => {
		if ((e.target.type === 'file')) {
			data.append(e.target.name, e.target.files[0]);
			console.log(e.target.files[0]);
		} else {
			data.append(e.target.name, e.target.value);
			console.log(e.target.value);
		}
		console.log(e.target.value);
	};

	onSubmit = (e) => {
		e.preventDefault();
		console.log('Save Form');
	};

	render() {
		return (
			<div className="App">
				<form onSubmit={(e) => this.onSubmit(e)}>
					<input type="text" name="email" onChange={(e) => this.inputHandle(e)} />
					<br />
					<input type="file" name="file" onChange={(e) => this.inputHandle(e)} />
					<br />
					<button>Submit</button>
				</form>
			</div>
		);
	}
}

export default Upload;