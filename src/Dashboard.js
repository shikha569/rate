import React, { Component } from 'react';
import Header from './Header';

class Dashboard extends Component {
	render() {
		return (
			<div className="back">
				<div className="container-fluid">
					<Header history={this.props.history}/>
					<div className="row">
						<div
							style={{ height: 'calc(100vh - 96px)', position: 'relative' }}
							className="col-xl-10 offset-xl-1 align-items-center text-center"
						>
							<div className="center-align">
								<span className="h1">
									Lorem ipsum dolor sit amet consectetur adipisicing eli
									<br />
									<div className="textslider">
										<div className="slides">One</div>
										<div className="slides">Two</div>
										<div className="slides">Three</div>
									</div>
									<br />
								</span>
								<div className="row">
									<div className="col-xl-10 offset-xl-1">
										<div className="input-group">
											<input
												type="text"
												className="form-control"
												placeholder="Recipient's username"
											/>
											<div className="input-group-append">
												<button
													style={{ padding: '15px 30px' }}
													className="btn btn-success"
													type="button"
												>
													<i className="fa fa-search" /> Search
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
