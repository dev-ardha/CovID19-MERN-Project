import React, { Component } from 'react'

import Accordion from './Accordion'
import AddQuestion from './AddQuestion'

class Bantuan extends Component {
    render() {
        return (
            <div className="content">
                <div className="container bantuan-wrapper">
                <AddQuestion/>
                    <div className="bantuan-left">
                        <Accordion/>
                    </div>
                    <div className="bantuan-right">
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Bantuan;
