import React, { Component } from 'react';
import Header from './Header';

class Compare extends Component {
	render() {
		return (
			<div className="container-fluid m-0 p-0">
				<Header history={this.props.history}/>
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
						<div className="col-lg-12 pt-5 text-left">
							<h2>
								<b>Compare Professors:-</b>
							</h2>
						</div>
						<div className="row">
							<div className="text-center col-lg-3 offset-lg-3 mt-3 pb-3 pt-4 left">
								<div className="row">
									<div className="col-lg-10 col-4  offset-4 text-center offset-lg-1">
										<img
											src={require('./img/Team-Member-3.jpg')}
											className="rounded-circle img-fluid"
											alt=""
										/>
									</div>
								</div>
								<div className="row">
									<div className="pt-3 col-lg-12">
										<span className="h4">
											<b>
												Professor Name
												<hr style={{ margin: '0' }} />
											</b>
										</span>
										<span style={{ fontSize: '.85em' }}>
											Working At / working As
											<br /> Full Time Job
										</span>
									</div>
								</div>
							</div>
							<div className="text-center col-lg-3 mt-3 pb-3 pt-4 left">
								<div className="row">
									<div className="col-lg-10 col-4  offset-4 text-center offset-lg-1">
										<img
											src={require('./img/Team-Member-3.jpg')}
											className="rounded-circle img-fluid"
											alt=""
										/>
									</div>
								</div>
								<div className="row">
									<div className="pt-3 col-lg-12">
										<span className="h4">
											<b>
												Professor Name
												<hr style={{ margin: '0' }} />
											</b>
										</span>
										<span style={{ fontSize: '.85em' }}>
											Working At / working As
											<br /> Full Time Job
										</span>
									</div>
								</div>
							</div>
							<div className="text-center col-lg-3 mt-3 pb-3 pt-4 left">
								<div className="row">
									<div className="col-lg-10 col-4 offset-4 text-center offset-lg-1">
										<img
											src={require('./img/Team-Member-3.jpg')}
											className="rounded-circle img-fluid"
											alt=""
										/>
									</div>
								</div>
								<div className="row">
									<div className="pt-3 col-lg-12">
										<span className="h4">
											<b>
												Professor Name
												<hr style={{ margin: '0' }} />
											</b>
										</span>
										<span style={{ fontSize: '.85em' }}>
											Working At / working As
											<br /> Full Time Job
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-3 mt-3 pb-3 pt-4 left">
								<b>Rating:-</b>
							</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
						</div>
						<div className="row">
							<div className="col-lg-3 mt-3 pb-3 pt-4 left">
								<b>Recommendation:-</b>
							</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
						</div>
						<div className="row">
							<div className="col-lg-3 mt-3 pb-3 pt-4 left">
								<b>Working As:-</b>
							</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
						</div>
						<div className="row">
							<div className="col-lg-3 mt-3 pb-3 pt-4 left">
								<b>Working For:-</b>
							</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
						</div>
						<div className="row">
							<div className="col-lg-3 mt-3 pb-3 pt-4 left">
								<b>Employement Type:-</b>
							</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
						</div>
						<div className="row">
							<div className="col-lg-3 mt-3 pb-3 pt-4 left">
								<b>Designation:-</b>
							</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
						</div>
						<div className="row">
							<div className="col-lg-3 mt-3 pb-3 pt-4 left">
								<b>Experience:-</b>
							</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
						</div>
						<div className="row">
							<div className="col-lg-3 mt-3 pb-3 pt-4 left">
								<b>Specialization:-</b>
							</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
						</div>
						<div className="row">
							<div className="col-lg-3 mt-3 pb-3 pt-4 left">
								<b>Key Skills:-</b>
							</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
						</div>
						<div className="row">
							<div className="col-lg-3 mt-3 pb-3 pt-4 left">
								<b>Qualification:-</b>
							</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
						</div>
						<div className="row">
							<div className="col-lg-3 mt-3 pb-3 pt-4 left">
								<b>Project / Research:-</b>
							</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">---</div>
						</div>
						<div className="row">
							<div className="col-lg-3 mt-3 pb-3 pt-4 left">
								<b>Other Options:-</b>
							</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">
								<button className="btn btn-success w-100">View Profile</button>
								<button className="mt-1 w-50 btn btn-success float-left">Read Review</button>
								<button className="mt-1 w-50 btn btn-success float-right">Write Review</button>
								<button className="mt-1 btn btn-success w-100">Contact Professor</button>
							</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">
								<button className="btn btn-success w-100">View Profile</button>
								<button className="mt-1 w-50 btn btn-success float-left">Read Review</button>
								<button className="mt-1 w-50 btn btn-success float-right">Write Review</button>
								<button className="mt-1 btn btn-success w-100">Contact Professor</button>
							</div>
							<div className="col-lg-3 mt-3 text-center pb-3 pt-4 left">
								<button className="btn btn-success w-100">View Profile</button>
								<button className="mt-1 w-50 btn btn-success float-left">Read Review</button>
								<button className="mt-1 w-50 btn btn-success float-right">Write Review</button>
								<button className="mt-1 btn btn-success w-100">Contact Professor</button>
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

export default Compare;
