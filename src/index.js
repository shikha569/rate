import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import Dashboard from './Dashboard';
import Forgot from './Forgot';
import Contact from './Contact';
import Message from './Message';
import Reset from './Reset';
import Student from './Student';
import Compare from './Compare';
import Professor from './Professor';
import Studentprofile from './Studentprofile';
import Professorprofile from './Professorprofile';
import Rate from './Rate';
import Search from './Search';
import Upload from './Upload';

ReactDOM.render(
    <BrowserRouter>
        <>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/message" component={Message}/>
            <Route exact path="/forgot" component={Forgot}/>
            <Route exact path="/reset" component={Reset}/>
            <Route exact path="/student" component={Student}/>
            <Route exact path="/compare" component={Compare}/>
            <Route exact path="/professor" component={Professor}/>
            <Route exact path="/studentprofile/:student_id" component={Studentprofile}/>
            <Route exact path="/professorprofile/:professor_id" component={Professorprofile}/>
            <Route exact path="/rate" component={Rate}/>
            <Route exact path="/search" component={Search}/>
            <Route exact path="/upload" component={Upload}/>


        </>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
