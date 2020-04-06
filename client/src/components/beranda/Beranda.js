import React, { Component } from 'react'

import Update from './Update'
import home from '../../images/familytime.jpg'
import conversation from '../../images/conversation.jpg'
import WorldUpdate from './WorldUpdate'

class Beranda extends Component {

    render() {
        return (
            <div className="content">
                <Update/>
                <div className="container">
                    <div className="home-content image-left">
                        <div className="image">
                            <img src={home} alt=""/>
                        </div>
                        <div className="home-headline">
                            <h1 className="mainheadline">#DiRumahAja</h1>
                            <p>Bantu tenaga medis yang sedang berjuang di garis terdepan dengan menerapkan phisical distancing. Apabila tidak memiliki keperluan yang mendesak, lebih baik #DiRumahAja</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="home-content image-right">
                        <div className="image">
                            <img src={conversation} alt=""/>
                        </div>
                        <div className="home-headline">
                            <h1 className="mainheadline text-right">Tanya Jawab</h1>
                            <p>Tanyakan hal-hal yang membuat anda bingun tentang virus corona! Kami akan berusaha untuk menjawab setiap pertanyaan yang anda ajukan dengan jawaban-jawaban yang terpercaya. Kunjungin halaman Bantuan untuk melihat seluruh tanya jawab.</p>
                            <a href="/tanyakan" className="ml-auto"><button className="btn btn-primary">Tanya Sekarang</button></a>
                        </div>
                    </div>
                </div>
                <div className="container banner text-center">
                    <WorldUpdate/>
                    <a className="text-white flex justify-center" href="/global-data"><button className="btn btn-primary">Lihat Data Global</button></a>
                </div>
                {/* <div className="container hero">

                </div> */}
            </div>
        )
    }
}

export default Beranda;