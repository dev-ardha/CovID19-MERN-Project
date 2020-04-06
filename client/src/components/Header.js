import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className="header flex">
                <div className="container text-white">
                    <div className="header-item justify-center">
                        <h1 className="title">Pusat Informasi dan Bantuan Pandemi COVID-19</h1>
                        <p className="subtitle">Pusat informasi terkini dan teraktual tentang update penyebaran Virus Corona dan pusat bantuan pencegahan Coronavirus Disease 2019 (COVID-19)</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header