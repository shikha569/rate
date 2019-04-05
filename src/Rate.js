import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Rate extends Component {
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
                                    <button style={{ padding: "10px 30px" }} className="btn btn-success" type="button">
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
                        <div className="col-lg-12 pt-5 text-center">
                            <h2>
                                <b>
                                    Rate Professor
                        </b>
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 mt-3 pb-3 pt-4 left rounded">
                                <div className="row">
                                    <div className="col-lg-10 col-4 offset-4 offset-lg-1">
                                        <img src={require("./img/Team-Member-3.jpg")} className="rounded-top img-fluid" alt="" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="pt-3 col-lg-12">
                                        <span className="h4">
                                            <b>
                                                Professor Name
                                        <hr style={{ margin: "0" }} />
                                            </b>
                                        </span>
                                        <span style={{ fontSize: ".85em" }}>
                                            Working At / working As
                                    <br /> Full Time Job
                                </span>
                                        <br />
                                        <span>
                                            <ul className="social pb-3 pt-3">
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab p-1 fa-facebook-square"></i> /FaceBook
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab p-1 fa-google-plus-square"></i> /plusId
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab p-1 fa-instagram"></i> @instagram
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab p-1 fa-linkedin"></i> @linkedin
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="fab p-1 fa-twitter-square"></i> @twitter
                                                    </Link>
                                                </li>
                                            </ul>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9 mt-3 pt-4 pb-3 right rounded">
                                <div className="row question">
                                    <div className="col-xl-12">
                                        <div className="row">
                                            <div className="col-6">
                                                <h5>
                                                    <b>
                                                        Practical Knowledge
                                            </b>
                                                </h5>
                                            </div>
                                            <div className="col-6 text-right">
                                                <p className="m-0" id="practicalValue"></p>
                                            </div>
                                        </div>
                                        <input id="practical" type="range" min="1" max="100" onchange="showValue(practical,practicalValue,practicalArray)" value="0" className="slider" />
                                    </div>
                                </div>
                                <div className="row question">
                                    <div className="col-xl-12">
                                        <div className="row">
                                            <div className="col-6">
                                                <h5>
                                                    <b>
                                                        Way of Teaching
                                            </b>
                                                </h5>
                                            </div>
                                            <div className="col-6 text-right">
                                                <p className="m-0" id="teachingValue"></p>
                                            </div>
                                        </div>
                                        <input type="range" min="1" max="100" id="teaching" onchange="showValue(teaching,teachingValue,wayOfArray)" value="0" className="slider" />
                                    </div>
                                </div>
                                <div className="row question">
                                    <div className="col-xl-12">
                                        <div className="row">
                                            <div className="col-6">
                                                <h5>
                                                    <b>
                                                        Behaviour
                                            </b>
                                                </h5>
                                            </div>
                                            <div className="col-6 text-right">
                                                <p className="m-0" id="behaviourValue"></p>
                                            </div>
                                        </div>
                                        <input type="range" id="behaviour" onchange="showValue(behaviour,behaviourValue,behaviourArray)" min="1" max="100" value="0" className="slider" />
                                    </div>
                                </div>
                                <div className="row question">
                                    <div className="col-xl-12">
                                        <div className="row">
                                            <div className="col-6">
                                                <h5>
                                                    <b>
                                                        Regularity
                                            </b>
                                                </h5>
                                            </div>
                                            <div className="col-6 text-right">
                                                <p className="m-0" id="regularityValue"></p>
                                            </div>
                                        </div>
                                        <input type="range" id="regularity" onchange="showValue(regularity,regularityValue,regularityArray)" min="1" max="100" value="0" className="slider" />
                                    </div>
                                </div>
                                <div className="row question">
                                    <div className="col-xl-12">
                                        <div className="row">
                                            <div className="col-6">
                                                <h5>
                                                    <b>
                                                        Theoratical Knowledge
                                            </b>
                                                </h5>
                                            </div>
                                            <div className="col-6 text-right">
                                                <p className="m-0" id="theoraticalValue"></p>
                                            </div>
                                        </div>
                                        <input type="range" id="theoratical" onchange="showValue(theoratical,theoraticalValue,theoraticalArray)" min="1" max="100" value="0" className="slider" />
                                    </div>
                                </div>
                                <div className="row question">
                                    <div className="col-xl-12">
                                        <div className="row">
                                            <div className="col-6">
                                                <h5>
                                                    <b>
                                                        Punctuality
                                            </b>
                                                </h5>
                                            </div>
                                            <div className="col-6 text-right">
                                                <p className="m-0" id="punctualityValue"></p>
                                            </div>
                                        </div>
                                        <input id="punctuality" onchange="showValue(punctuality,punctualityValue,punctualityArray)" type="range" min="1" max="100" value="0" className="slider" />
                                    </div>
                                </div>
                                <div className="row question">
                                    <div className="col-xl-12">
                                        <div className="row">
                                            <div className="col-6">
                                                <h5>
                                                    <b>
                                                        Recommendation
                                            </b>
                                                </h5>
                                            </div>
                                            <div className="col-6 text-right">
                                                <p className="m-0" id="recommendationValue"></p>
                                            </div>
                                        </div>
                                        <input type="range" id="recommendation" onchange="showValue(recommendation,recommendationValue,recommendationArray)" min="1" max="100" value="0" className="slider" />
                                    </div>
                                </div>
                                <div className="row question">
                                    <div className="col-xl-12">
                                        <div className="row">
                                            <div className="col-6">
                                                <h5>
                                                    <b>
                                                        Communication Skills
                                            </b>
                                                </h5>
                                            </div>
                                            <div className="col-6 text-right">
                                                <p className="m-0" id="communicationValue"></p>
                                            </div>
                                        </div>
                                        <input type="range" min="1" max="100" value="0" id="communication" onchange="showValue(communication,communicationValue,communicationArray)" className="slider" />
                                    </div>
                                </div>
                                <div className="row question">
                                    <div className="col-xl-12">
                                        <h5>
                                            <b>
                                                Hashtags
                                    </b>
                                        </h5>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="row question">
                                    <div className="col-xl-12">
                                        <h5>
                                            <b>
                                                Share your Review about Professor
                                    </b>
                                        </h5>
                                        <textarea className="form-control" rows="3"></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-12 text-right">
                                        <div className="btn-group">
                                            <button type="reset" className="btn btn-success">Reset</button>
                                            <button type="submit" className="btn btn-success">Submit</button>
                                        </div>
                                    </div>
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





export default Rate;