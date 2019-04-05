import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cookies from 'react-cookies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Studentprofile extends Component {


	notify = (msg) => {
      toast.success(msg);
    }

    notifyError = (msg) => {
      toast.error(msg);
    }

	constructor() {
		super();
		this.state = {
			users: []
		};

		console.log(this.props)
	
	}

	// componentWillMount() {
	// 	if (cookies.load('access_token') === undefined) {
	// 		this.props.history.push('/');
	// 	}
	// }

		componentWillMount() {
		fetch(`http://192.168.1.31:3009/v1/studentById/${this.props.match.params.student_id}`, {
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				this.setState({
					users: res[0]
				});
			})
			.catch((err) => {
				console.log(err);
				this.notifyError('Error while logging');
			});
	}

	logout=()=>{
		cookies.remove('access_token');
		this.props.history.push('/')
	}
editPost =()=>{

	console.log("hello");
}
	render() {
		return (
			<div className="container-fluid m-0 p-0">
				<ToastContainer/>
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
											<b>Hi! {this.props.name}</b>
										</button>
										<div className="dropdown-menu" aria-labelledby="userPanel">
											
											<Link className="dropdown-item" to="#" onClick={this.logout}>
												Logout
											</Link>
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
								{this.state.users.name}
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
												student Name
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
																<th>Language</th>
																<td>{this.state.users.languages}</td>
															</tr>
														</tbody>
													</table>
															<button onClick={()=>this.editPost()}>Edit</button>
												</div>
											</div>
										</section>
										<section id="qualification" className="pt-3 pr-2 pl-2 pb-3 mt-3 mb-3 rounded">
											<h5>
												<b>Qualification Details :-</b>
											</h5>
											<div className="row">
												<div className="col-lg-12 table-responsive">
													<table className="table table-hover">
														<tbody>
																<tr>
																<th>Level of Qualification</th>
																<td><input type="text" />{this.state.users.qualification}</td>
																</tr>
																<tr>
																<th>School/college</th>
																<td>{this.state.users.schoolcollege}</td>
																</tr>
																<tr>
																<th>Board</th>
																<td>{this.state.users.board}</td>
																</tr>
																<tr>
																<th>Subject</th>
																<td>{this.state.users.subject}</td>
																</tr>
																<tr>
																<th>Duration</th>
																<td>{this.state.users.duration}</td>	
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
						<div className="col-5 offset-1 p-0">&copy; student's Hub 2018</div>
						<div className="col-5 text-right p-0">Terms and Condition</div>
					</div>
				</footer>
			</div>
		
		);
	}
}

export default Studentprofile;
