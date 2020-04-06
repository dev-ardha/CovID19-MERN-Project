import React, { Component } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {NavLink} from 'react-router-dom';

// Content
import TentangCorona from './content/TentangCorona'
import Gejala from './content/Gejala'
import Pencegahan from './content/Pencegahan'

class Panduan extends Component {
    render() {
        return (
            <Router>
            <div className="content">
                <div className="container">
                    <div className="content-nav">
                        <NavLink to="/panduan" exact className="navlink text-white" activeClassName="active-button">
                            Tentang COVID-19
                        </NavLink>
                        <NavLink to="/panduan/gejala" exact className="navlink text-white" activeClassName="active-button">
                            Gejala
                        </NavLink>
                        <NavLink to="/panduan/pencegahan" exact className="navlink text-white" activeClassName="active-button">
                            Pencegahan
                        </NavLink>
                    </div>
                        <div className="inner-content">
                            <Switch>
                                <Route path="/panduan/" exact component={TentangCorona} />
                                <Route path="/panduan/gejala" exact component={Gejala} />
                                <Route path="/panduan/pencegahan" exact component={Pencegahan} />
                            </Switch>
                        </div>
                    
                </div>
            </div>
            </Router>
        )
    }
}

export default Panduan;
