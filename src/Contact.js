import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Header from './Header'

class Contact extends Component {
    render() {
        return (
            <div class="container-fluid m-0 p-0">
                <Header/>
               
                <div class="row p-4">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="col-lg-12 pt-5 text-center">
                        </div>
                        <div class="row">
                            <div class=" mt-3 col-lg-7 pb-3">
                                <h4>
                                    <b>
                                        Get In Touch
                                        <hr class="mb-0" />
                                    </b>
                                </h4>
                                <p class="m-0 text-muted">
                                    Please fill out the quick form and we will be in touch with you
                                </p>
                                <form method="POST" class="p-3 pt-2 ">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <label for="fname">First Name
                                            </label>
                                            <input type="text" name="fname" id="fname" class="form-control" />
                                        </div>
                                        <div class="col-lg-6">
                                            <label for="lname">
                                                Last Name
                                            </label>
                                            <input type="text" name="lname" id="lname" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <label for="mobile">
                                                Mobile Number
                                            </label>
                                            <input type="text" name="mobile" id="mobile" class="form-control" />
                                        </div>
                                        <div class="col-lg-6">
                                            <label for="email">
                                                Email Id
                                            </label>
                                            <input type="text" name="email" id="email" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <label for="msg">
                                                Message
                                            </label>
                                            <textarea name="msg" id="msg" class="form-control" rows="5" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <br />
                                            <div class="btn-group">
                                                <button type="reset" class="btn btn-success">
                                                    Reset
                                                </button>
                                                <button type="submit" class="btn btn-success">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="col-lg-5 mt-3">
                                <h4>
                                    <b> Connect With Us
                                        <hr class="mb-0" />
                                    </b>
                                </h4>
                                <div class="pl-4 pr-4 pb-4 pt-2">
                                    <p class="pb-3 pt-2"> For Support and any Query
                                        <br /> Email Us at:
                                        <Link to="#"> info@professorhub.com </Link>
                                    </p>
                                    <p class="pb-3 pt-2">
                                        <b> Location </b>
                                        <br />adreess,City,State - pincode
                                    </p>
                                    <p class="pb-3 pt-2">
                                        Call Us At:
                                        <br />
                                        <Link to="#">+91 9874562132 </Link>
                                        |
                                        <Link to="#"> +91 9874562132 </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="p-0 pt-3 pb-3 mt-5">
                    <div class="row m-0 p-0">
                        <div class="col-5 offset-1 p-0">
                            &copy; Professor's Hub 2018
                </div>
                        <div class="col-5 text-right p-0">
                            Terms and Condition
                </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Contact;