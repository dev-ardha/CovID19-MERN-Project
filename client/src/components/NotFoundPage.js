import React, { Component } from 'react'

import {NavLink} from 'react-router-dom';

class  NotFoundPage extends Component {

    componentWillMount(){
        let root = document.getElementById("root")

        root.style.background = "#111";
        document.body.style.overflow = "hidden";
    }
    
    componentWillUnmount(){
        let root = document.getElementById("root")

        root.style.background = null;
        document.body.style.overflow = null;
        document.body.style.backgroundColor = null;
    }

    render(){
        return (
            <div className="not-found-page">
                <h1 className="not-found-message">404</h1>
                <p className="text-white">The page you are looking for might have been removed had its name changed or is temporally unavaliable</p>
                <button className=" btn btn-primary">
                    <NavLink to="/" exact>
                        Back to Home Page
                    </NavLink>
                </button>
            </div>
        )
    }
}

export default NotFoundPage