import React, { Component } from 'react';

var data = new FormData();
class Professor extends Component {
	constructor() {
		super();
		this.state = {
			
			role: 'professor',
			name: '',
			email: '',
			password: '',
			age: '',
			gender: '',
			contact: '',
			languages: '',
			address: '',
			qualification: '',
			specialization: '',
			subject: '',
			experience: '',
			keySkills: '',
			workingFor: '',
			privateInstituteType: '',
			collegeAffilation: '',
			collegeDepartment: '',
			univDepartment: '',
			nameOfFirm: '',
			position: '',
			description: '',
			selfEmpName: '',
			levelOfTeaching: '',
			selfDescription: '',
			achievementAvatar: '',
			employAvatar: '',
			selfAvatar: '',
		};
	}


	handleInput = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	checkConfirmPassword = (e) => {
		if (this.state.password !== e.target.value) {
			alert('password does not match');
		}
	};

	postData = () => {
		let data = {
			role: this.state.role,
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			age: this.state.age,
			gender: this.state.gender,
			contact: this.state.contact,
			languages: this.state.languages,
			address: this.state.address,
			qualification: this.state.qualification,
			specialization: this.state.specialization,
			subject: this.state.subject,
			experience: this.state.experience,
			employmentType: this.state.employmentType,
			keySkills: this.state.keySkills,
			workingFor: this.state.workingFor,
			privateInstituteType: this.state.privateInstituteType,
			collegeAffilation: this.state.collegeAffilation,
			collegeDepartment: this.state.collegeDepartment,
			univDepartment: this.state.univDepartment,
			nameOfFirm: this.state.nameOfFirm,
			position: this.state.position,
			description: this.state.description,
			selfEmpName: this.state.selfEmpName,
			levelOfTeaching: this.state.levelOfTeaching,
			selfDescription: this.state.selfDescription,
			achievementAvatar: this.state.achievementAvatar,
			employAvatar: this.state.employAvatar,
			selfAvatar: this.state.selfAvatar
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
				if (res.message === 'professor details created successfully') {
					alert('now login first to view profile');
					this.props.history.push('/');
				}
				// console.log( res.message , "result")
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
					<strong>Register As Professor</strong>
				</h2>
				<div className="steps-form-2">
					<div className="steps-row-2 setup-panel-2 d-flex justify-content-between">
						<div className="steps-step-2">
							<a
								href="#general"
								type="button"
								className="btn btn-amber btn-circle-2 waves-effect ml-0"
								data-toggle="tooltip"
								data-placement="top"
								title="General Details"
							>
								<i className="fa fa-info" />
							</a>
						</div>
						<div className="steps-step-2">
							<a
								href="#professional"
								type="button"
								className="btn btn-blue-grey btn-circle-2 waves-effect"
								data-toggle="tooltip"
								data-placement="top"
								title="Professional Details"
							>
								<i className="fa fa-file-alt" />
							</a>
						</div>
						<div className="steps-step-2">
							<a
								href="#employment"
								type="button"
								className="btn btn-blue-grey btn-circle-2 waves-effect"
								data-toggle="tooltip"
								data-placement="top"
								title="Emplyment Info"
							>
								<i className="fa fa-briefcase" />
							</a>
						</div>
					</div>
				</div>
				<div className="row setup-content-2" id="general">
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
										required="required"
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
									<select id="gender" className="form-control" onChange={(e) => this.handleInput(e)}>
										<option value="">--Select Option--</option>
										<option value="male">Male</option>
										<option value="female">Female</option>
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
										onChange={(e) => {
											this.handleInput(e);
										}}
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
										onChange={(e) => {
											this.handleInput(e);
										}}
									/>
								</div>
							</div>
						</div>
						<button className="btn btn-mdb-color btn-rounded nextBtn-2 float-right" type="button">
							Next
						</button>
					</div>
				</div>
				<div className="row setup-content-2" id="professional">
					<div className="col-md-12">
						<h3 className="font-weight-bold pl-0 my-4">
							<strong>Professional Details</strong>
						</h3>

						<div className="form-group md-form">
							<label htmlFor="qualification">Qualification</label>
							<select
								id="qualification"
								className="form-control"
								onChange={(e) => {
									this.handleInput(e);
								}}
							>
								{/* <option value="" disabled hidden>
									--- Select Qualification ---
								</option> */}
								<option value="graduation">Graduation</option>
								<option value="post-graduation">Post Graduation</option>
								<option value="Phd/researcher">P.hd/Researcher</option>
								<option value="diploma">Diploma</option>
							</select>
						</div>
						<div className="form-group md-form mt-3">
							<label htmlFor="specialization">Specialization</label>
							<input
								id="specialization"
								type="text"
								className="form-control"
								onChange={(e) => {
									this.handleInput(e);
								}}
							/>
						</div>
						<div className="form-group md-form">
							<label htmlFor="year" className="text-center">
								<b>Experience (In Years)</b>
							</label>
							<div className="row">
								<div className="col-xl-8">
									<label htmlFor="subject">Subject</label>
									<input
										id="subject"
										type="text"
										className="form-control"
										onChange={(e) => {
											this.handleInput(e);
										}}
									/>
								</div>
								<div className="col-xl-4">
									<label htmlFor="year">Experience (Years)</label>
									<div className="row">
										<div className="col-xl-8">
											<input
												id="experience"
												type="text"
												className="form-control"
												onChange={(e) => {
													this.handleInput(e);
												}}
											/>
										</div>
										<div className="col-xl-4">
											<i className="fa fa-plus plus-icon" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="form-group md-form mt-3">
							<div className="row">
								<div className="col-xl-6">
									<label htmlFor="achievement">Achievement</label>
									<input
										id="achievementAvatar"
										type="file"
										className="form-control"
										onChange={(e) => {
											this.handleInput(e);
										}}
									/>
								</div>
								<div className="col-xl-6">
									<label htmlFor="type">Employment Type</label>
									<select
										id="employmentType"
										className="form-control"
										onChange={(e) => {
											this.handleInput(e);
										}}
									>
										<option value="Employed">Employed</option>
										<option value="Self">Self Employed</option>
									</select>
								</div>
							</div>
						</div>
						<div className="form-group md-form mt-3">
							<label htmlFor="yourAddress-2">Key Skills</label>
							<textarea
								id="keySkills"
								type="text"
								rows="2"
								className="md-textarea form-control"
								onChange={(e) => {
									this.handleInput(e);
								}}
							/>
						</div>
						<button className="btn btn-mdb-color btn-rounded prevBtn-2 float-left" type="button">
							Previous
						</button>
						<button className="btn btn-mdb-color btn-rounded nextBtn-2 float-right" type="button">
							Next
						</button>
					</div>
				</div>
				<div className="row setup-content-2" id="employment">
					<div className="col-md-12">
						<h3 className="font-weight-bold pl-0 my-4">
							<strong>Employment Details</strong>
						</h3>
						<div className="form-group md-form">
							<label htmlFor="working">Working For</label>
							<select
								id="workingFor"
								className="form-control"
								onChange={(e) => {
									this.handleInput(e);
								}}
							>
								<option value="College">College</option>
								<option value="Private Institute">Private Institute</option>
								<option value="University">University</option>
							</select>
						</div>
						<div className="form-group md-form mt-3">
							<div className="row">
								<div className="col-xl-6">
									<label htmlFor="affilation">College Affilation</label>
									<input
										id="collegeAffilation"
										type="text"
										required="required"
										className="form-control"
										onChange={(e) => {
											this.handleInput(e);
										}}
									/>
								</div>
								<div className="col-xl-6">
									<label htmlFor="department">College Department</label>
									<input
										id="collegeDepartment"
										type="text"
										required="required"
										className="form-control"
										onChange={(e) => {
											this.handleInput(e);
										}}
									/>
								</div>
							</div>
						</div>
						<div className="form-group md-form mt-3">
							<div className="row">
								<div className="col-xl-12">
									<label htmlFor="type">Private Institute type</label>
									<input
										id="privateInstituteYype"
										type="text"
										required="required"
										className="form-control"
										onChange={(e) => {
											this.handleInput(e);
										}}
									/>
								</div>
							</div>
						</div>
						<div className="form-group md-form mt-3">
							<div className="row">
								<div className="col-xl-12">
									<label htmlFor="department">Universirty Department</label>
									<input
										id="univDepartment"
										type="text"
										required="required"
										className="form-control"
										onChange={(e) => {
											this.handleInput(e);
										}}
									/>
								</div>
							</div>
						</div>
						<div className="form-group md-form mt-3">
							<label htmlFor="firm">Name of Firm</label>
							<input
								id="nameOfFirm"
								type="text"
								required="required"
								className="form-control"
								onChange={(e) => {
									this.handleInput(e);
								}}
							/>
						</div>
						<div className="form-group md-form mt-3">
							<div className="row">
								<div className="col-xl-12">
									<label htmlFor="position">Position</label>
									<select
										id="position"
										className="form-control"
										onChange={(e) => {
											this.handleInput(e);
										}}
									>
										<option value="Employed">Employed</option>
										<option value="self">Self Employed</option>
									</select>
								</div>
							</div>
						</div>
						<div className="form-group md-form">
							<label htmlFor="experience" className="text-center">
								<b>Project / Research</b>
							</label>
							<div className="row">
								<div className="col-xl-8">
									<label htmlFor="description">Description</label>
									<input
										id="description"
										type="text"
										required="required"
										className="form-control"
										onChange={(e) => {
											this.handleInput(e);
										}}
									/>
								</div>
								<div className="col-xl-4">
									<label htmlFor="file">File</label>
									<input
										id="employAvatar"
										type="file"
										required="required"
										className="form-control"
										onChange={(e) => {
											this.handleInput(e);
										}}
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="p-5">
						<h3>self Employed</h3>
					</div>
					<div className="col-md-12">
						<div className="form-group md-form mt-3">
							<label htmlFor="name">Name</label>
							<input
								id="selfEmpName"
								type="text"
								required="required"
								className="form-control"
								onChange={(e) => {
									this.handleInput(e);
								}}
							/>
						</div>
						<div className="form-group md-form mt-3">
							<label htmlFor="lvl">Level Of Teaching</label>
							<input
								id="levelOfTeaching"
								type="text"
								required="required"
								className="form-control"
								onChange={(e) => {
									this.handleInput(e);
								}}
							/>
						</div>
						<div className="form-group md-form">
							<label htmlFor="experience" className="text-center">
								<b>Project / Research</b>
							</label>
							<div className="row">
								<div className="col-xl-8">
									<label htmlFor="description">Description</label>
									<input
										id="selfDescription"
										type="text"
										required="required"
										className="form-control"
										onChange={(e) => {
											this.handleInput(e);
										}}
									/>
								</div>
								<div className="col-xl-4">
									<label htmlFor="file">File</label>
									<input
										id="selfAvatar"
										type="file"
										required="required"
										className="form-control"
										onChange={(e) => {
											this.handleInput(e);
										}}
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-12">
						<button className="btn btn-mdb-color btn-rounded prevBtn-2 float-left" type="button">
							Previous
						</button>
						<button
							className="btn btn-success btn-rounded float-right"
							type="submit"
							onClick={this.postData}
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Professor;