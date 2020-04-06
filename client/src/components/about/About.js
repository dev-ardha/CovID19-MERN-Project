import React, { Component } from 'react'

import profile from '../../images/profile.png'

class About extends Component {
    render() {
        return (
            <div className="content">
                <div className="container about-wrapper">
                    <div className="inner-content">
                        <h2 className="subheadline">About This Page</h2>
                        <p>
                            Website ini menyajikan data perkembangan pandemi virus corona di Indonesia dan dunia. Data yang kami ambil akurat dengan sumber yang terpercaya. Selain itu kami juga memberikan berbagai informasi terkait dengan virus corona. Apabila anda memiliki pertanyaan mengenai sesuatu yang berkaitan mengenai virus corona, anda bisa menanyakannya di halaman <a href="/bantuan">Bantuan</a>.
                        </p>
                        <h2 className="subheadline">About Developer</h2>
                        <p>
                            Website ini dikembangan dan dikelola seorang developer bernama Ardha Yudhatama. Ardha Yudhatama merupakan seorangn Full-Stack Web Developer asal Semarang, yang sekarang sedang melanjutkan kuliah ke jenjang S-1 jurusan Teknik Informatika di Universitas Semarang. Proses pembuatan website ini bisa anda lihat di akun Instagramnya, <a href="http://www.instagram.com/dev.ardha">@dev.ardha</a>. Apabila anda ingin memberika kritik atau saran, bisa kunjungi halaman <a href="https://www.ardhayudhatama.com/p/kontak.html">kontak</a>.
                        </p>
                        <div className="justify-center flex">
                        <img src={profile} alt=""/>
                        </div>
                        <div className="justify-center flex">
                            <a className="btn-md btn-secondary text-white" href="https://instagram.com/dev.ardha">Instagram</a>
                            <a className="btn-md btn-secondary text-white" href="http://www.ardhayudhatama.com">Blog</a>
                            <a className="btn-md btn-secondary text-white" href="https://github.com/dev-ardha">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
