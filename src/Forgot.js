import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
class Forgot extends Component {
	render() {
		return (
			<div className="back">
				<div className="container-fluid m-0 p-0">
					<Header />
					<div className="row back pt-5 pb-5">
						<div className="col-lg-8 offset-lg-2 col-12 text-center">
							<form method="post" className="m-5">
								<h2>Search Professor</h2>
								<div className="input-group">
									<input type="text" className="form-control" placeholder="Recipient's username" />
									<div className="input-group-append">
										<button
											style={{ padding: '10px 30px' }}
											className="btn btn-success"
											type="button"
										>
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
							<div className="col-lg-12 pt-5 text-left">
								<h2 className="text-center">
									<b>Forgot Password</b>
								</h2>
							</div>
							<div className="row">
								<div className="col-lg-12 mt-3">
									<div className="p-2">
										<form method="POST">
											<label for="email">
												<b>Email Id</b>
											</label>
											<input type="text" name="email" id="email" className="form-control" />
											<br />
											<Link to="/reset">
												<button type="submit" className="btn btn-success">
													Reset Password
												</button>
											</Link>
										</form>
									</div>
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
			</div>
		);
	}
}

export default Forgot;
