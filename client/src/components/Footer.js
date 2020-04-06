import React, { Component } from 'react'

// eslint-disable-next-line
import GitHubIcon from '@material-ui/icons/GitHub';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-credit-wrapper">
                    <div className="container">
                        <p className="footer-credit">Made with <span role="img" aria-label={Image}>❤️</span> by <a className="bold" href="instagram.com/dev.ardha">dev.ardha</a> | Graphic design by <a className="bold" href="https://www.freepik.com/stories">Stories</a></p>    
                    </div>    
                </div>
            </div>
        )
    }
}
export default  Footer;
