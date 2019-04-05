import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cookies from 'react-cookies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Header extends Component {
	notifyError = (msg) => {
		toast.error(msg);
	};

	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		};
	}

	handleInput = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	loginUser = () => {
		let login = {
			email: this.state.email,
			password: this.state.password
		};

		fetch('http://192.168.1.31:3009/v1/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(login)
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				if (res.access_token !== undefined) {
					cookies.save('access_token', res.access_token);

					{
						this.openComponent(res);

						document.querySelector('body').classList.remove('modal-open');
						var elements = document.getElementsByClassName('modal-backdrop show');
						while (elements.length > 0) {
							for (let index = 0; index < elements.length; index++) {
								elements[index].parentNode.removeChild(elements[index]);
							}
						}
					}
				}
			})
			.catch((err) => {
				console.log(`Error while logging ${err}`);
				this.notifyError(`Error while logging ${err}`);
			});
	};

	openComponent = (res) => {
		if (res.role === 'student') {
			console.log('role is =' + res.role);
			this.props.history.push(`/studentprofile/${res.id}`);
		} else if (res.role === 'professor') {
			console.log('role is =' + res.role);
			this.props.history.push(`/professorprofile/${res.id}`);
		}
	};

	render() {
		return (
			<div className="row header">
				<div className="col-xl-10 offset-xl-1">
					<div className="row">
						<div className="col-lg-2 col-4 col-sm-4">
							<img src={require('./img/logo.png')} alt="Logo" className="img-fluid" />
						</div>
						<div className="col-lg-3 col-4 col-sm-4 offset-sm-4 offset-2 offset-lg-7 align-self-center text-right">
							<div className="btn-group" role="group" aria-label="Basic example">
								<button
									type="button"
									className="btn btn-success"
									data-toggle="modal"
									data-target="#SignUp"
								>
									<i className="fa fa-user-plus fa-sm"> </i> SignUp
								</button>
								<button
									type="button"
									className="btn btn-success"
									data-toggle="modal"
									data-target="#Login"
								>
									<i className="fa fa-sign-in-alt fa-sm"> </i> Login
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="modal" id="SignUp" style={{ color: 'black' }}>
					<div className="modal-dialog modal-lg">
						{/* <ToastContainer /> */}
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">SignUp</h4>
								<button type="button" className="close" data-dismiss="modal">
									&times;
								</button>
							</div>
							<div className="modal-body text-center">
								<div className="row">
									<div className="col-6" style={{ padding: '50px 0px' }}>
										<Link to="/professor">
											<h4>
												As a
												<br /> Professor
											</h4>
											<div className="col-md-4 col-sm-6 offset-md-4 offset-sm-3 col-8 offset-2">
												<img
													src={require('./img/student.svg')}
													className="img-responsive"
													alt="Professor"
												/>
											</div>
										</Link>
									</div>
									<div className="col-6" style={{ padding: '50px 0px' }}>
										<Link to="/student">
											<h4>
												As a
												<br />Studetnt/User
											</h4>

											<div className="col-md-4 col-sm-6 offset-md-4 offset-sm-3 col-8 offset-2">
												<img
													src={require('./img/student.svg')}
													className="img-responsive"
													alt="Student/User"
												/>
											</div>
										</Link>
									</div>
								</div>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-danger" data-dismiss="modal">
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="modal" id="Login" style={{ color: 'black' }}>
					<div className="modal-dialog modal-lg">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">Login</h4>
								<button type="button" className="close" data-dismiss="modal">
									&times;
								</button>
							</div>
							<div className="modal-body">
								<form action="post">
									<div className="row">
										<div className="col-12">
											<label htmlFor="email">E-mail ID</label>
											<input
												type="text"
												name="email"
												className="form-control"
												id="email"
												onChange={(e) => this.handleInput(e)}
											/>
										</div>
									</div>
									<div className="row">
										<div className="col-12">
											<label htmlFor="password">Password</label>
											<input
												type="password"
												name="password"
												className="form-control"
												id="password"
												onChange={(e) => this.handleInput(e)}
											/>
										</div>
									</div>
									<div className="row">
										<div className="col-12 text-right">
											<p style={{ paddingTop: '10px' }}>
												<Link to="/forgot"> forgot password </Link>
											</p>
										</div>
									</div>
									<div className="row">
										<div className="col-12">
											<div className="btn-group" role="group">
												<Link to="">
													<input
														type="submit"
														value="Submit"
														className="btn btn-success"
														onClick={this.loginUser}
													/>
												</Link>
												<input type="reset" value="Reset" className="btn btn-success" />
											</div>
										</div>
									</div>
								</form>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-danger" data-dismiss="modal">
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
