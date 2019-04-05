import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cookies from 'react-cookies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Professorprofile extends Component {
	notify = (msg) => {
		toast.success(msg);
	};

	notifyError = (msg) => {
		toast.error(msg);
	};

	constructor() {
		super();
		this.state = {
			users: [],

			email: '',
			age: '',
			address: '',
			languages: '',
			contact: ''
		};
		console.log(this.state.age)
	}
	handleInput = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
		console.log(e.target.id)
	};

	edit =()=>{
		document.getElementById("personal").style.display="none";
		document.getElementById("input").style.display="block";
		console.log("hello");
	}

	save =()=>{
		document.getElementById("personal").style.display="block";
		document.getElementById("input").style.display="none";		
		let update={
			email:this.state.email,
			age:this.state.age,
			contact:this.state.contact,
			address:this.state.address,
			languages:this.state.languages
		}

		console.log(update)

		fetch(`http://192.168.1.31:3009/v1/professors/${this.props.match.params.professor_id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(update)
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				
				alert('Done');
				console.log( res.message , "result")
			})
			.catch((err) => {
				console.log(`Error while logging into the app ${err}`);
			});
	};
	
	
	componentWillMount() {
		// console.log(this.props.match.params.professor_id)
		fetch(`http://192.168.1.31:3009/v1/professorById/${this.props.match.params.professor_id}`, {
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				this.setState({
					users: res[0]
				});
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
				this.notifyError('Error while logging');
			});
	}

	logout = () => {
		cookies.remove('access_token');
		this.props.history.push('/');
	};

	render() {
		return (
			<div className="container-fluid m-0 p-0">
				<ToastContainer />
				<div className="row header">
					<div className="col-lg-10 offset-lg-1">
						<div className="row">
							<div className="col-lg-2 col-4 col-sm-4">
								<img src={require('./img/logo.png')} alt="Logo" className="img-fluid" />
							</div>
							<div className="col-lg-3 col-8 col-sm-4 offset-sm-4 offset-lg-7 align-self-center">
								<nav className="nav float-right">
									<div className="dropdown-note">
										<button
											className="btn blank white"
											type="button"
											id="userPanel"
											data-toggle="dropdown"
											aria-haspopup="true"
												aria-expanded="false"
										>
											<b>Hello! {this.state.users.name}</b>
										</button>
										<div className="dropdown-menu" aria-labelledby="userPanel">
											<button type="button" className="dropdown-item" onClick={this.logout}>
												Logout
											</button>
										</div>
									</div>
									<div className="dropdown-note">
										<button
											className="btn blank"
											type="button"
											id="notePanel"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										>
											<i className="fa fa-bell white" />
										</button>
										<div className="dropdown-menu" aria-labelledby="notePanel">
											<Link className="dropdown-item" to="#">
												<div className="row align-items-center">
													<div className="col-1">
														<i className="fa fa-bell" />
													</div>
													<div className="col-10">
														<h6>Lorem ipsum</h6>
														<p
															className="fa-sm"
															style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
														>
															dolor sit amet consectetur adipisicing elit.
														</p>
													</div>
												</div>
											</Link>
										</div>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
				<div className="row back pt-5 pb-5">
					<div className="col-lg-8 offset-lg-2 col-12 text-center">
						<form method="post" className="m-5">
							<h2>Search Professor</h2>
							<div className="input-group">
								<input type="text" className="form-control" placeholder="Recipient's username" />
								<div className="input-group-append">
									<button style={{ padding: '10px 30px' }} className="btn btn-success" type="button">
										<i className="fa fa-search" />
										Search
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-10 offset-lg-1">
						<div className="col-lg-12 pt-5 text-center">
							<h2>
								<b>Profile</b>
								:- {this.state.users.name}
							</h2>
						</div>
						<div className="row">
							<div className="col-lg-3 mt-3 pb-3 pt-4 left rounded">
								<div className="row">
									<div className="col-lg-10 col-4 offset-4 offset-lg-1">
										<img
											src={require('./img/Team-Member-3.jpg')}
											className="rounded-top img-fluid"
											alt=""
										/>
									</div>
								</div>
								<div className="row">
									<div className="pt-3 col-lg-12">
										<span className="h4">
											<b>
												Professor Name
												<hr style={{ margin: 0 }} />
											</b>
										</span>
										<span style={{ fontSize: '.85em' }}>
											Working At / working As
											<br /> Full Time Job
										</span>
										<br />
										<span>
											<ul className="social pb-3 pt-3">
												<li>
													<Link to="#">
														<i className="fab p-1 fa-facebook-square" /> /FaceBook
													</Link>
												</li>
												<li>
													<Link to="#">
														<i className="fab p-1 fa-google-plus-square" /> /plusId
													</Link>
												</li>
												<li>
													<Link to="#">
														<i className="fab p-1 fa-instagram" /> @instagram
													</Link>
												</li>
												<li>
													<Link to="#">
														<i className="fab p-1 fa-linkedin" /> @linkedin
													</Link>
												</li>
												<li>
													<Link to="#">
														<i className="fab p-1 fa-twitter-square" /> @twitter
													</Link>
												</li>
											</ul>
										</span>
										<span className="h4">
											<b>
												Navigation
												<hr style={{ margin: '0' }} />
											</b>
										</span>
										<span>
											<ul className="navigation">
												<li>
													<Link to="#personal">>> Presonal Details</Link>
												</li>
												<li>
													<Link to="#pro">>> Professional Details</Link>
												</li>
												<li>
													<Link to="#qualification">>> Qualification Details</Link>
												</li>
											</ul>
										</span>
									</div>
								</div>
							</div>
							<div className="col-lg-9 mt-3 pt-4 pb-3 right rounded">
								<div className="row">
									<div className="col-lg-6 pt-2">
										<button className="btn btn-success w-100" type="button">
											<i className="fa fa-star white" />&nbsp; Rate This Proffessor
										</button>
									</div>
									<div className="col-lg-6 pt-2">
										<button className="btn btn-success w-100" type="button">
											<i className="fa fa-thumbs-up" />&nbsp; Recommend This Professor
										</button>
									</div>
								</div>
								<div className="row pt-3">
									<div className="col-lg-7">
										<section id="personal" className="pt-3 pr-2 pl-2 pb-3 mt-3 mb-3 rounded">
											<h5>
												<b>Personal Details :-</b>
											</h5>
											<div className="row">
												<div className="col-lg-12 table-responsive">
													<table className="table table-hover">
														<tbody>
															<tr>
																<th>Email</th>
																<td>{this.state.users.email}</td>
													
															</tr>
															<tr>
																<th>Age</th>
																<td>{this.state.users.age}</td>
													
															</tr>
															<tr>
																<th>Contact</th>
																<td>{this.state.users.contact}</td>
													
															</tr>
															<tr>
																<th>Address</th>
																<td>{this.state.users.address}</td>
													
															</tr>
															<tr>
																<th>Languages</th>
																<td>{this.state.users.languages}</td>
													
															</tr>
														</tbody>
													</table>
														<button onClick={()=>this.edit()}>edit</button>
												</div>
											</div>
										</section>
									
										<section id="input" className="pt-3 pr-2 pl-2 pb-3 mt-3 mb-3 rounded" style={{display:"none"}}>
											<h5>
												<b>Personal Details :-</b>
											</h5>
											<div className="row">
												<div className="col-lg-12 table-responsive">
													<table className="table table-hover">
														<tbody>
															<tr>
																<th>Email</th>
															
																<input type="text" id="email" value={this.state.users.email}  onChange={(e)=>this.handleInput(e)}/>
															</tr>
															<tr>
																<th>Age</th>
																
																<input type="text" id="age" placeholder={this.state.users.age}  onChange={(e)=>this.handleInput(e)} />
															</tr>
															<tr>
																<th>Contact</th>
																
																<input type="text" id="contact" placeholder={this.state.users.contact}  onChange={(e)=>this.handleInput(e)}/>
															</tr>
															<tr>
																<th>Address</th>
																
																<input type="text" id="address" placeholder={this.state.users.address}  onChange={(e)=>this.handleInput(e)} />
															</tr>
															<tr>
																<th>Languages</th>
																
																<input type="text" id="languages" placeholder={this.state.users.languages}  onChange={(e)=>this.handleInput(e)}/> 
															</tr>
														</tbody>
													</table>
														<button onClick={()=>this.save()}>save</button>
												</div>
											</div>
										</section>
										
										<section id="pro" className="pt-3 pr-2 pl-2 pb-3 mt-3 mb-3 rounded">
											<h5>
												<b>Professional Details:-</b>
											</h5>
											<div className="row">
												<div className="col-lg-12 table-responsive">
													<table className="table table-hover">
														<tbody>
														<tr>
															<th>Specialization</th>
															<td>{this.state.users.specialization}</td>
														</tr>
														<tr>
															<th>Expereince</th>
															<td>{this.state.users.experience}</td>
														</tr>
														<tr>
															<th>Key Skills</th>
															<td>{this.state.users.keySkills}</td>
														</tr>
														<tr>
															<th>Project / Research</th>
															<td>
																<button type="button" className="btn btn-success">
																	<i className="fa fa-arrow-down" /> File Name
																</button>
															</td>
														</tr>
														<tr>
															<th>Achievements</th>
															<td>{this.state.users.achievementAvatar}</td>
														</tr>
														</tbody>
													</table>
												</div>
											</div>
										</section>
									</div>
									<div className="col-lg-5">
										<section id="rating" className="pt-3 mt-3 rounded">
											<h5 className="p-2">
												<b>Overall Rating :-</b>
												<i className="fa fa-sm fa-star" />
												<i className="fa fa-sm fa-star" />
												<i className="fa fa-sm fa-star" />
												<i className="fa fa-sm fa-star" />
												<i className="fa fa-sm fa-star-half" />
											</h5>
											<div className="cl-lg-12 table-responsive-md pb-2">
												<table className="table table-hover">
													<tbody>
														<tr>
															<td>
																<div className="row">
																	<div className="col-lg-6 text-left">
																		<b>Paractical</b>
																	</div>
																	<div className="col-lg-6 text-right">4/5</div>
																</div>
																<div className="row">
																	<div className="col-lg-12">
																		<div className="progress">
																			<div
																				className="progress-bar bg-success"
																				style={{ width: '80%' }}
																			/>
																		</div>
																	</div>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div className="row">
																	<div className="col-lg-6">
																		<b>Teaching</b>
																	</div>
																	<div className="col-lg-6 text-right">3/5</div>
																</div>
																<div className="row">
																	<div className="col-lg-12">
																		<div className="progress">
																			<div
																				className="progress-bar bg-success"
																				style={{ width: '80%' }}
																			/>
																		</div>
																	</div>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div className="row">
																	<div className="col-lg-6">
																		<b>Behaviour</b>
																	</div>
																	<div className="col-lg-6 text-right">3/5</div>
																</div>
																<div className="row">
																	<div className="col-lg-12">
																		<div className="progress">
																			<div
																				className="progress-bar bg-success"
																				style={{ width: '80%' }}
																			/>
																		</div>
																	</div>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div className="row">
																	<div className="col-lg-6">
																		<b>Regularity</b>
																	</div>
																	<div className="col-lg-6 text-right">3/5</div>
																</div>
																<div className="row">
																	<div className="col-lg-12">
																		<div className="progress">
																			<div
																				className="progress-bar bg-success"
																				style={{ width: '80%' }}
																			/>
																		</div>
																	</div>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div className="row">
																	<div className="col-lg-6">
																		<b>Theoratical</b>
																	</div>
																	<div className="col-lg-6 text-right">3/5</div>
																</div>
																<div className="row">
																	<div className="col-lg-12">
																		<div className="progress">
																			<div
																				className="progress-bar bg-success"
																				style={{ width: '80%' }}
																			/>
																		</div>
																	</div>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div className="row">
																	<div className="col-lg-6">
																		<b>Punctuality</b>
																	</div>
																	<div className="col-lg-6 text-right">3/5</div>
																</div>
																<div className="row">
																	<div className="col-lg-12">
																		<div className="progress">
																			<div
																				className="progress-bar bg-success"
																				style={{ width: '80%' }}
																			/>
																		</div>
																	</div>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div className="row">
																	<div className="col-lg-6">
																		<b>Recommendation</b>
																	</div>
																	<div className="col-lg-6 text-right">3/5</div>
																</div>
																<div className="row">
																	<div className="col-lg-12">
																		<div className="progress">
																			<div
																				className="progress-bar bg-success"
																				style={{ width: '80%' }}
																			/>
																		</div>
																	</div>
																</div>
															</td>
														</tr>
														<tr>
															<td>
																<div className="row">
																	<div className="col-lg-6">
																		<b>Communication</b>
																	</div>
																	<div className="col-lg-6 text-right">3/5</div>
																</div>
																<div className="row">
																	<div className="col-lg-12">
																		<div className="progress">
																			<div
																				className="progress-bar bg-success"
																				style={{ width: '80%' }}
																			/>
																		</div>
																	</div>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
												<div className="col-lg-12">
													<a href="#reviews">
														<button className="btn w-100 btn-success">Read Reviews</button>
													</a>
												</div>
											</div>
										</section>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12">
										<section id="qualification" className="pt-3 pr-2 pl-2 pb-3 mt-3 mb-3 rounded">
											<h5>
												<b>Qualification Details :-</b>
											</h5>
											<div className="row">
												<div className="col-lg-12 table-responsive">
													<table className="table table-hover">
														<thead>
															<tr>
																<th>Qualification Level</th>
																<th>College / University</th>
																<th>Affilation</th>
																<th>Subject</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>{this.state.users.qualification}</td>
																<td>{this.state.users.workingFor}</td>
																<td>{this.state.users.collegeAffilation}</td>
																<td>{this.state.users.subject}</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</section>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<section className="col-xl-12 mt-4 pt-4" id={'reviews'}>
								<h4>
									<b>User Reviews:-</b>
									<hr />
								</h4>
								<div className="media comment p-2 m-2 rounded">
									<img
										className="mr-3 rounded-circle"
										src={require('./img/Team-Member-3.jpg')}
										alt="Username"
									/>
									<div className="media-body">
										<h5 className="mt-0">
											User Name
											<small className="text-muted">Date</small>
										</h5>
										Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
										sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
										turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
										felis in faucibus.
									</div>
								</div>
								<div className="media comment p-2 m-2 rounded">
									<img
										className="mr-3 rounded-circle"
										src="./img//Team-Member-3.jpg"
										alt="Username"
									/>
									<div className="media-body">
										<h5 className="mt-0">
											User Name
											<small className="text-muted">Date</small>
										</h5>
										Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
										sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
										turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
										felis in faucibus.
									</div>
								</div>
								<div className="media comment p-2 m-2 rounded">
									<img
										className="mr-3 rounded-circle"
										src="./img//Team-Member-3.jpg"
										alt="Username"
									/>
									<div className="media-body">
										<h5 className="mt-0">
											User Name
											<small className="text-muted">Date</small>
										</h5>
										Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
										sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
										turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue
										felis in faucibus.
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
				<div className="main-section">
					<div className="row border-chat">
						<div className="col-md-12 col-sm-12 col-xs-12 first-section">
							<div className="row">
								<div className="col-6 left-first-section">
									<p>Chat</p>
								</div>
								<div className="col-6 right-first-section">
									<Link to="#">
										<i className="fa fa-clone" aria-hidden="true" />
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="row border-chat">
						<div className="col-md-12 col-sm-12 col-xs-12 second-section">
							<div className="chat-section">
								<ul>
									<li>
										<div className="right-chat">
											<p>
												Lorem ipsum dolor sit ameeserunt.
												<span>2 min</span>
											</p>
										</div>
									</li>
									<li>
										<div className="left-chat">
											<p>
												Lorem ipsum dolor sit ameeserunt.
												<span>2 min</span>
											</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="row border-chat">
						<div className="col-md-12 col-sm-12 col-xs-12 third-section">
							<div className="text-bar">
								<input type="text" placeholder="Write messege" />
								<Link to="#">
									<i className="fa fa-arrow-right" aria-hidden="true" />
								</Link>
							</div>
						</div>
					</div>
				</div>
				<footer className="p-0 pt-3 pb-3 mt-5">
					<div className="row m-0 p-0">
						<div className="col-5 offset-1 p-0">&copy; Professor's Hub 2018</div>
						<div className="col-5 text-right p-0">Terms and Condition</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Professorprofile;
