import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';

class Message extends Component {
    render() {
        return (
            <div className="container-fluid m-0 p-0">
               <Header history={this.props.history}/>
                <div className="main-section">
                    <div className="row border-chat">
                        <div className="col-md-12 col-sm-12 col-xs-12 first-section">
                            <div className="row">
                                <div className="col-md-8 col-sm-6 col-xs-6 left-first-section">
                                    <p>Chat</p>
                                </div>
                                <div className="col-md-4 col-sm-6 col-xs-6 right-first-section">
                                    <Link to="#">
                                        <i className="fa fa-clone" aria-hidden="true"></i>
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
                                    <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Message;