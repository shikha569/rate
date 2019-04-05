import React, { Component } from 'react';
import Header from './Header';

class Reset extends Component {
	render() {
		return (
			<div class="container-fluid m-0 p-0">
				 <Header history={this.props.history}/>
				<div class="row back pt-5 pb-5">
					<div class="col-lg-8 offset-lg-2 col-12 text-center">
						<form method="post" class="m-5">
							<h2>Search Professor</h2>
							<div class="input-group">
								<input type="text" class="form-control" placeholder="Recipient's username" />
								<div class="input-group-append">
									<button style={{ padding: '10px 30px' }} class="btn btn-success" type="button">
										<i class="fa fa-search" />
										Search
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-10 offset-lg-1">
						<div class="col-lg-12 pt-5 text-left">
							<h2 class="text-center">
								<b>Reset Password</b>
							</h2>
						</div>
						<div class="row">
							<div class="col-lg-12 mt-3">
								<div class="p-2">
									<form method="POST">
										<label for="password">
											<b>New Password</b>
										</label>
										<input type="password" name="password" id="password" class="form-control" />
										<br />
										<label for="cpassword">
											<b>Confirm New Password</b>
										</label>
										<input type="password" name="password" id="cpassword" class="form-control" />
										<br />
										<button type="submit" class="btn btn-success">
											Reset Password
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<footer class="p-0 pt-3 pb-3 mt-5">
					<div class="row m-0 p-0">
						<div class="col-5 offset-1 p-0">&copy; Professor's Hub 2018</div>
						<div class="col-5 text-right p-0">Terms and Condition</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Reset;
