import React, { Component } from 'react'
import {Link } from 'react-router-dom';
import Header from './Header';

class Main extends Component {
    render() {
        return (
            <div className="container-fluid m-0 p-0">
                <Header history={this.props.history}/>
                <div className="row back pt-5 pb-5">
                    <div className="col-lg-8 offset-lg-2 col-12 text-center">
                        <form method="post" className="m-5">
                            <h2>
                                Search Professor
                    </h2>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Recipient's username" />
                                <div className="input-group-append">
                                    <button style={{padding: "10px 30px"}} className="btn btn-success" type="button">
                                        <i className="fa fa-search"></i>
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
                                <b>
                                    Search Result
                                        </b>
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 mt-3 pb-3 rounded">
                                <div className="p-3 left">
                                    <h4>
                                        <b>
                                            Filters:-
                                    <hr className="mt-1 p-0" />
                                        </b>
                                    </h4>
                                    <div id="filter">
                                        <div className="card">
                                            <Link data-toggle="collapse" data-target="#subject">
                                                <div className="card-header p-2">
                                                    <h6 className="mb-0">
                                                        Subject
                                            </h6>
                                                </div>
                                            </Link>
                                            <div id="subject" className="collapse show" data-parent="#filter">
                                                <div className="card-body">
                                                    <div className="form-check">
                                                        <input type="checkbox" id="english" className="form-check-input" />
                                                        <label for="english" className="form-check-label">English</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" id="hindi" className="form-check-input" />
                                                        <label for="hindi" className="form-check-label">Hindi</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" id="punjabi" className="form-check-input" />
                                                        <label for="punjabi" className="form-check-label">Punjabi</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <Link data-toggle="collapse" data-target="#firm">
                                                <div className="card-header p-2">
                                                    <h6 className="mb-0" >
                                                        Firm
                                            </h6>
                                                </div>
                                            </Link>
                                            <div id="firm" className="collapse" data-parent="#filter">
                                                <div className="card-body">
                                                    <div className="form-check">
                                                        <input type="checkbox" id="unknown" className="form-check-input" />
                                                        <label for="unknown" className="form-check-label">Unknown</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" id="undefined" className="form-check-input" />
                                                        <label for="undefined" className="form-check-label">Undefined</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <Link data-toggle="collapse" data-target="#location">
                                                <div className="card-header p-2">
                                                    <h6 className="mb-0" >
                                                        Location
                                            </h6>
                                                </div>
                                            </Link>
                                            <div id="location" className="collapse" data-parent="#filter">
                                                <div className="card-body">
                                                    <div className="form-check">
                                                        <input type="checkbox" id="jal" className="form-check-input" />
                                                        <label for="jal" className="form-check-label">Jaladhar</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" id="delhi" className="form-check-input" />
                                                        <label for="delhi" className="form-check-label">Delhi</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <Link data-toggle="collapse" data-target="#department">
                                                <div className="card-header p-2">
                                                    <h6 className="mb-0">
                                                        Department
                                            </h6>
                                                </div>
                                            </Link>
                                            <div id="department" className="collapse" data-parent="#filter">
                                                <div className="card-body">
                                                    <div className="form-check">
                                                        <input type="checkbox" id="science" className="form-check-input" />
                                                        <label for="science" className="form-check-label">Science</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" id="arts" className="form-check-input" />
                                                        <label htmlFor="arts" className="form-check-label">Arts</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" id="commerce" className="form-check-input" />
                                                        <label for="commerce" className="form-check-label">Commerce</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <Link data-toggle="collapse" data-target="#firmtype">
                                                <div className="card-header p-2">
                                                    <h6 className="mb-0">
                                                        Firm Type
                                            </h6>
                                                </div>
                                            </Link>
                                            <div id="firmtype" className="collapse" data-parent="#filter">
                                                <div className="card-body">
                                                    <div className="form-check">
                                                        <input type="checkbox" id="college" className="form-check-input" />
                                                        <label for="college" className="form-check-label">College</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" id="institute" className="form-check-input" />
                                                        <label for="institute" className="form-check-label">Institute</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" id="university" className="form-check-input" />
                                                        <label for="university" className="form-check-label">University</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 mt-3 left">
                                <div className="row">
                                    <div className="col-12 mt-3">
                                        <div className="left p-3">
                                            <div className="row">
                                                <div className="col-4 text-center ">
                                                    <img src={require("./img/Team-Member-3.jpg")} className="rounded-circle img-fluid" alt="" />
                                                </div>
                                                <div className="col-8 text-right">
                                                    <span className="h4">
                                                        <b>
                                                            Professor Name
                                                    <hr style={{ margin: "0" }} />
                                                            <small className="h6">
                                                                <b>
                                                                    Rating:-
                                                        </b>
                                                                <i className="fa fa-sm fa-star"></i>
                                                                <i className="fa fa-sm fa-star"></i>
                                                                <i className="fa fa-sm fa-star"></i>
                                                                <i className="fa fa-sm fa-star"></i>
                                                                <i className="fa fa-sm fa-star-half"></i>
                                                            </small>
                                                        </b>
                                                    </span>
                                                    <br />
                                                    <span style={{ fontSize: ".95em" }}>
                                                        Working At / working As
                                                        <br /> Full Time Job
                                                    </span>
                                                    <br />
                                                    <span>
                                                        location
                                                                </span>
                                                    <div className="row pt-3">
                                                        <div className="col-12">
                                                            <button type="button" className="btn-sm btn btn-success">
                                                                Write a Review
                                                    </button>
                                                            <button type="button" className="btn btn-sm btn-success">
                                                                View Profile
                                                    </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <div className="left p-3">
                                            <div className="row">
                                                <div className="col-4 text-center ">
                                                    <img src={("./img/Team-Member-3.jpg")} className="rounded-circle img-fluid" alt="" />
                                                </div>
                                                <div className="col-8 text-right">
                                                    <span className="h4">
                                                        <b>
                                                            Professor Name
                                                    <hr style={{ margin: "0" }} />
                                                            <small className="h6">
                                                                <b>
                                                                    Rating:-
                                                        </b>
                                                                <i className="fa fa-sm fa-star"></i>
                                                                <i className="fa fa-sm fa-star"></i>
                                                                <i className="fa fa-sm fa-star"></i>
                                                                <i className="fa fa-sm fa-star"></i>
                                                                <i className="fa fa-sm fa-star-half"></i>
                                                            </small>
                                                        </b>
                                                    </span>
                                                    <br />
                                                    <span style={{ fontSize: ".95em" }}>
                                                        Working At / working As
                                                <br /> Full Time Job
                                            </span>
                                                    <br />
                                                    <span>
                                                        location
                                            </span>
                                                    <div className="row pt-3">
                                                        <div className="col-12">
                                                            <button type="button" className="btn-sm btn btn-success">
                                                                Write a Review
                                                    </button>
                                                            <button type="button" className="btn btn-sm btn-success">
                                                                View Profile
                                                    </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <div className="left p-3">
                                            <div className="row">
                                                <div className="col-4 text-center ">
                                                    <img src={require("./img/Team-Member-3.jpg")} className="rounded-circle img-fluid" alt="" />
                                                </div>
                                                <div className="col-8 text-right">
                                                    <span className="h4">
                                                        <b>
                                                            Professor Name
                                                    <hr style={{ margin: "0" }} />
                                                            <small className="h6">
                                                                <b>
                                                                    Rating:-
                                                        </b>
                                                                <i className="fa fa-sm fa-star"></i>
                                                                <i className="fa fa-sm fa-star"></i>
                                                                <i className="fa fa-sm fa-star"></i>
                                                                <i className="fa fa-sm fa-star"></i>
                                                                <i className="fa fa-sm fa-star-half"></i>
                                                            </small>
                                                        </b>
                                                    </span>
                                                    <br />
                                                    <span style={{ fontSize: ".95em" }}>
                                                        Working At / working As
                                                <br /> Full Time Job
                                            </span>
                                                    <br />
                                                    <span>
                                                        location
                                            </span>
                                                    <div className="row pt-3">
                                                        <div className="col-12">
                                                            <button type="button" className="btn-sm btn btn-success">
                                                                Write a Review
                                                    </button>
                                                            <button type="button" className="btn btn-sm btn-success">
                                                                View Profile
                                                    </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 mt-3 text-center">
                                <div className="left p-2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae natus harum voluptatum quae ullam expedita architecto perspiciatis
                                    quia. Adipisci laboriosam quia, quo inventore consectetur suscipit voluptate iusto debitis nobis
                                    sequi.
                        </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="p-0 pt-3 pb-3 mt-5">
                    <div className="row m-0 p-0">
                        <div className="col-5 offset-1 p-0">
                            &copy; Professor's Hub 2018
                </div>
                        <div className="col-5 text-right p-0">
                            Terms and Condition
                </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Main;