import React, { Component } from 'react';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			role: 'student',
			name: '',
			password: '',
			contact: '',
			email: '',
			languages: '',
			gender: '',
			age: '',
			stuUser: '',
			qualification: '',
			schoolCollege: '',
			board: '',
			subject: '',
			duration: '',
			semester: '',
			address: ''
		};
	}
	
	handleInput = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
		console.log(this.state);
	};

	checkConfirmPassword = (e) => {
		if (this.state.password !== e.target.value) {
			alert('password does not match');
			console.log("hello");
		}
	};

	postData = (e) => {
		e.preventDefault();
		let data = {
			role: this.state.role,
			name: this.state.name,
			password: this.state.password,
			contact: this.state.contact,
			email: this.state.email,
			languages: this.state.languages,
			gender: this.state.gender,
			age: this.state.age,
			stuUser: this.state.stuUser,
			qualification: this.state.qualification,
			schoolCollege: this.state.schoolCollege,
			board: this.state.board,
			subject: this.state.subject,
			duration: this.state.duration,
			semester: this.state.semester,
			address: this.state.address
		};
		console.log(data);

		fetch('http://192.168.1.31:3009/v1/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				if (res.message === 'student created successfully') {
					alert('now login first to view profile');
					this.props.history.push('/');
				}
				console.log( res.message)
			})
			.catch((err) => {
				console.log(`Error while logging into the app ${err}`);
			});
	};

	render() {
		return (
			<div className="container pb-5 mb-5">
				<div className="row">
					<div className="col-sm-2 col-4 pt-5 offset-4 offset-sm-5">
						<img src={require('./img/logo.png')} className="img-fluid" alt="" />
					</div>
				</div>
				<h2 className="text-center font-bold pt-4 pb-2 mb-5">
					<strong>Register As Student</strong>
				</h2>
				<form action="">
					<div className="row setup-content-2">
						<div className="col-md-12">
							<h3 className="font-weight-bold pl-0 my-4">
								<strong>General Detials</strong>
							</h3>
							<div className="row">
								<div className="col-xl-12">
									<div className="form-group md-form">
										<label htmlFor="name">Name</label>
										<input
											id="name"
											type="text"
											className="form-control"
											onChange={(e) => this.handleInput(e)}
										/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-xl-6">
									<div className="form-group md-form">
										<label htmlFor="age">Age</label>
										<input
											id="age"
											type="number"
											className="form-control"
											onChange={(e) => this.handleInput(e)}
										/>
									</div>
								</div>
								<div className="col-xl-6">
									<div className="form-group md-form">
										<label htmlFor="gender">Gender</label>
										<select
											id="gender"
											className="form-control"
											onChange={(e) => this.handleInput(e)}
										>
											<option value="">--Select Option--</option>
											<option value="1">Male</option>
											<option value="0">Female</option>
										</select>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-xl-6">
									<div className="form-group md-form mt-3">
										<label htmlFor="contact">Contact Number</label>
										<input
											id="contact"
											type="number"
											className="form-control"
											onChange={(e) => this.handleInput(e)}
										/>
									</div>
								</div>
								<div className="col-xl-6">
									<div className="form-group md-form mt-3">
										<label htmlFor="address">Address</label>
										<input
											id="address"
											type="text"
											className="form-control"
											onChange={(e) => this.handleInput(e)}
										/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-xl-12">
									<div className="form-group md-form mt-3">
										<label htmlFor="email">Email ID</label>
										<input
											id="email"
											type="email"
											className="form-control"
											onChange={(e) => this.handleInput(e)}
										/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-xl-6">
									<div className="form-group md-form mt-3">
										<label htmlFor="password">Password</label>
										<input
											id="password"
											type="password"
											className="form-control"
											onChange={(e) => this.handleInput(e)}
										/>
									</div>
								</div>
								<div className="col-xl-6">
									<div className="form-group md-form mt-3">
										<label htmlFor="confirmPassword">Confirm Password</label>
										<input
											id="confirmPassword"
											type="password"
											className="form-control"
											onBlur={(e) => this.checkConfirmPassword(e)}
										/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-xl-12">
									<div className="form-group md-form">
										<label htmlFor="lang">Languages</label>
										<input
											id="languages"
											type="text"
											className="form-control"
											onChange={(e) => this.handleInput(e)}
										/>
									</div>
								</div>
							</div>
							<div className="form-group md-form">
								<label htmlFor="usertype">Are you a Student / User</label>
								<select id="stuUser" className="form-control" onChange={(e) => this.handleInput(e)}>
									<option value="">--Select Option--</option>
									<option value="Student">Student</option>
									<option value="User">User</option>
								</select>
							</div>
							<div className="form-group md-form">
								<label htmlFor="experience" className="text-center">
									<b>Qualification Detials:-</b>
								</label>
								<div className="row">
									<div className="col-xl-2">
										<label htmlFor="level">Qualification Level</label>
										<input
											id="qualification"
											type="text"
											className="form-control"
											onChange={(e) => this.handleInput(e)}
										/>
									</div>
									<div className="col-xl-3">
										<label htmlFor="firm">School / College</label>
										<input
											id="schoolCollege"
											type="text"
											className="form-control"
											onChange={(e) => this.handleInput(e)}
										/>
									</div>
									<div className="col-xl-2">
										<label htmlFor="board">Board</label>
										<input
											id="board"
											type="text"
											className="form-control"
											onChange={(e) => this.handleInput(e)}
										/>
									</div>
									<div className="col-xl-2">
										<label htmlFor="sub">Subject</label>
										<input
											id="subject"
											type="text"
											className="form-control"
											onChange={(e) => this.handleInput(e)}
										/>
									</div>
									<div className="col-xl-2">
										<label htmlFor="duration">Duration</label>
										<input
											id="duration"
											type="text"
											className="form-control"
											onChange={(e) => this.handleInput(e)}
										/>
									</div>
									<div className="col-xl-1">
										<label htmlFor="add">Add</label>
										<i className="fa fa-plus plus-icon" />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-xl-12">
									<div className="form-group md-form">
										<label htmlFor="standard">Standard / Semester</label>
										<input
											id="semester"
											type="text"
											className="form-control"
											onChange={(e) => this.handleInput(e)}
										/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-xl-12">
									<div className="form-group md-form">
										<label htmlFor="school">Name of College / School / University</label>
										<input
											id="school"
											type="text"
											className="form-control"
											onChange={(e) => this.handleInput(e)}
										/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-xl-12 text-right">
									<div className="btn-group" role="group" aria-label="Basic example">
										<button type="reset" className="btn btn-success">
											Reset
										</button>
										<button type="submit" className="btn btn-success" onClick={(e)=>{this.postData(e)}}>
											Submit
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Main;
